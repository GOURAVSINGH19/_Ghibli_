import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cn } from '../../utils/cn';

export interface AnimatedCardProps {
  children: React.ReactNode;
  intensity?: number;
  perspective?: number;
  glowColor?: string;
  className?: string;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  intensity = 15,
  perspective = 1000,
  glowColor = '#3b82f6',
  className,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [intensity, -intensity]), {
    stiffness: 300,
    damping: 30
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-intensity, intensity]), {
    stiffness: 300,
    damping: 30
  });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = (event.clientX - centerX) / (rect.width / 2);
    const mouseY = (event.clientY - centerY) / (rect.height / 2);
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const glowOpacity = useTransform(
    [x, y], 
    ([xVal, yVal]: number[]) => 
      Math.abs(xVal) > 0.3 || Math.abs(yVal) > 0.3 ? 0.3 : 0
  );

  return (
    <motion.div
      ref={cardRef}
      className={cn("relative", className)}
      style={{ perspective }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative w-full h-full bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${glowColor}20, transparent 70%)`,
            opacity: glowOpacity,
          }}
        />
        
        <div className="relative z-10 p-6 h-full">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};

export { AnimatedCard };

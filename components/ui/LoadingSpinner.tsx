import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  className?: string;
  variant?: 'spinner' | 'dots' | 'pulse' | 'wave';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  color = 'currentColor',
  className,
  variant = 'spinner'
}) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  if (variant === 'spinner') {
    return (
      <motion.div
        className={cn(sizes[size], className)}
        style={{ color }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </motion.div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className={cn("flex space-x-1", className)}>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className={cn("rounded-full", sizes[size])}
            style={{ backgroundColor: color }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === 'pulse') {
    return (
      <motion.div
        className={cn("rounded-full", sizes[size], className)}
        style={{ backgroundColor: color }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.7, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
      />
    );
  }

  if (variant === 'wave') {
    return (
      <div className={cn("flex space-x-1", className)}>
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className={cn("rounded-sm", sizes[size])}
            style={{ backgroundColor: color }}
            animate={{
              height: ['100%', '60%', '100%'],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>
    );
  }

  return null;
};

export { LoadingSpinner };

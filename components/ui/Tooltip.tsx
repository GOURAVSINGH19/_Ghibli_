import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { cn } from '../../utils/cn';

export interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  className?: string;
  tooltipClassName?: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  position = 'top',
  delay = 300,
  className,
  tooltipClassName
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const showTooltip = () => {
    if (timeoutId) clearTimeout(timeoutId);
    const id = setTimeout(() => setIsVisible(true), delay);
    setTimeoutId(id);
  };

  const hideTooltip = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsVisible(false);
  };

  const getTooltipPosition = () => {
    if (!triggerRef.current || !tooltipRef.current) return {};

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const gap = 8;

    switch (position) {
      case 'top':
        return {
          bottom: window.innerHeight - triggerRect.top + gap,
          left: triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2,
        };
      case 'bottom':
        return {
          top: triggerRect.bottom + gap,
          left: triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2,
        };
      case 'left':
        return {
          top: triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2,
          right: window.innerWidth - triggerRect.left + gap,
        };
      case 'right':
        return {
          top: triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2,
          left: triggerRect.right + gap,
        };
      default:
        return {};
    }
  };

  if (typeof window === 'undefined') return <>{children}</>;

  return (
    <>
      <div
        ref={triggerRef}
        className={cn("inline-block", className)}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
      >
        {children}
      </div>

      {createPortal(
        <AnimatePresence>
          {isVisible && (
            <motion.div
              ref={tooltipRef}
              className={cn(
                "fixed z-50 px-2 py-1 text-sm text-white bg-gray-900 rounded shadow-lg pointer-events-none",
                tooltipClassName
              )}
              style={getTooltipPosition()}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
            >
              {content}
              {/* Arrow */}
              <div
                className={cn(
                  "absolute w-2 h-2 bg-gray-900 transform rotate-45",
                  {
                    'top-full left-1/2 -translate-x-1/2 -translate-y-1/2': position === 'top',
                    'bottom-full left-1/2 -translate-x-1/2 translate-y-1/2': position === 'bottom',
                    'left-full top-1/2 -translate-y-1/2 -translate-x-1/2': position === 'left',
                    'right-full top-1/2 -translate-y-1/2 translate-x-1/2': position === 'right',
                  }
                )}
              />
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export { Tooltip };

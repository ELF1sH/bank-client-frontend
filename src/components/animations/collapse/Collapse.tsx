import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface CollapseProps {
  isVisible: boolean;
  children: React.ReactNode,
  collapseDuration?: number;
  opacityDuration?: number;
  opacityDelay?: number,
}

const Collapse: React.FC<CollapseProps> = ({
  isVisible,
  children,
  collapseDuration = 0.3,
  opacityDuration = 0.25,
  opacityDelay = 0.05,
}) => {
  const initial = {
    height: 0,
    opacity: 0,
  };

  const animate = {
    height: 'auto',
    opacity: 1,
    transition: {
      height: {
        duration: collapseDuration,
      },
      opacity: {
        duration: opacityDuration,
        delay: opacityDelay,
      },
    },
  };

  const exit = {
    height: 0,
    opacity: 0,
    transition: {
      height: {
        duration: collapseDuration,
      },
      opacity: {
        duration: opacityDuration,
        delay: collapseDuration - opacityDuration,
      },
    },
  };

  return (
    <AnimatePresence initial={false}>
      {
        isVisible && (
          <motion.div
            key="collapse"
            initial={initial}
            animate={animate}
            exit={exit}
          >
            { children }
          </motion.div>
        )
      }
    </AnimatePresence>
  );
};

export default Collapse;

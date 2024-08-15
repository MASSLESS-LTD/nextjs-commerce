'use client';
import clsx from 'clsx';
import { motion } from 'framer-motion';
function Grid(props: React.ComponentProps<'ul'>) {
  return (
    <ul {...props} className={clsx('grid grid-flow-row gap-4', props.className)}>
      {props.children}
    </ul>
  );
}

export function GridItem({ index, ...props }: any) {
  const variants = {
    gridItemIn: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.12 }
    })
  };
  return (
    <motion.li
      {...props}
      className={clsx('aspect-square transition-opacity', props.className)}
      initial={{ y: 20, opacity: 0 }}
      animate={'gridItemIn'}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
      custom={index}
      variants={variants}
    >
      {props.children}
    </motion.li>
  );
}

export default Grid;

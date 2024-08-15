'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

function MotionButton({
  Component = 'button',
  children,
  ...props
}: {
  Component: string;
  children: any;
}) {
  const tapScale = 0.98;
  const hoverScale = 1.02;
  if (Component === 'button') {
    return (
      <motion.button whileHover={{ scale: hoverScale }} whileTap={{ scale: tapScale }} {...props}>
        {children}
      </motion.button>
    );
  } else if (Component === 'link') {
    return (
      <motion.button whileHover={{ scale: hoverScale }} whileTap={{ scale: tapScale }}>
        {/* @ts-ignore */}
        <Link {...props}>{children}</Link>
      </motion.button>
    );
  } else {
    return <motion.div {...props}>{children}</motion.div>;
  }
}

export default MotionButton;

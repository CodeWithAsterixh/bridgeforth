import React from 'react';
import { motion } from 'motion/react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'link';
type Size = 'sm' | 'md' | 'lg';

type Props<T extends React.ElementType> = {
  as?: T;
  variant?: Variant;
  size?: Size;
  className?: string;
  children?: React.ReactNode;
} & Omit<React.ComponentProps<T>, 'as' | 'children'>;

function variantClass(v: Variant) {
  switch (v) {
    case 'primary':
      return 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-md';
    case 'secondary':
      return 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 border border-gray-300';
    case 'ghost':
      return 'bg-transparent text-gray-800 hover:bg-gray-100';
    case 'link':
      return 'bg-transparent text-blue-600 underline';
    default:
      return 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-md';
  }
}

function sizeClass(s: Size) {
  switch (s) {
    case 'sm':
      return 'px-3 py-1.5 text-sm';
    case 'lg':
      return 'px-6 py-3 text-lg';
    case 'md':
    default:
      return 'px-4 py-2 text-base';
  }
}

export function Button<T extends React.ElementType = 'button'>(props: Props<T>) {
  const { as, variant = 'primary', size = 'md', className = '', children, ...rest } = props;
  const Component: any = as || 'button';
  const base = `${variantClass(variant)} ${sizeClass(size)} cursor-pointer rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 transition-colors duration-200 ${className}`;

  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 250, damping: 15 }}
      className="inline-block"
    >
      <Component className={base} {...rest}>
        {children}
      </Component>
    </motion.div>
  );
}

export default Button;

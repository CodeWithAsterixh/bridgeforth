import React from 'react';

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
      return 'bg-blue-600 text-white hover:bg-blue-700';
    case 'secondary':
      return 'bg-white border text-gray-800 hover:bg-gray-50';
    case 'ghost':
      return 'bg-transparent text-gray-800 hover:bg-gray-100';
    case 'link':
      return 'bg-transparent text-blue-600 underline hover:text-blue-700';
    default:
      return 'bg-blue-600 text-white';
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
  const classes = `${variantClass(variant)} ${sizeClass(size)} rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 ${className}`;

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
}

export default Button;

import { XXLHeading, XLHeading, LargeHeading, MediumHeading, SmallHeading } from '../styles/headingStyle';
import type { ReactNode } from 'react';

interface TextProps extends React.HTMLAttributes<HTMLHeadingElement> {
  size?: 'xxl' | 'xl' | 'large' | 'medium' | 'small';
  color?: `#${string}`;
  children?: ReactNode;
}

const createHeadingStyle = (size: 'xxl' | 'xl' | 'large' | 'medium' | 'small') => {
  switch (size) {
    case 'xxl':
      return XXLHeading;
    case 'xl':
      return XLHeading;
    case 'large':
      return LargeHeading;
    case 'small':
      return SmallHeading;
    default:
      return MediumHeading;
  }
};

export const Heading = ({ size = 'medium', children = '', color = '#2f3542', ...restProps }: TextProps) => {
  const HeadingComponent = createHeadingStyle(size);
  return (
    <HeadingComponent style={{ color }} {...restProps}>
      {children}
    </HeadingComponent>
  );
};

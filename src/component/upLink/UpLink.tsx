import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { ReactNode } from 'react';
import { StyledLink } from './UpLink.styled';

interface CustomLinkProps extends NextLinkProps {
  children: ReactNode;
  className?: string;
}


const UpLink: React.FC<CustomLinkProps> = ({ children, className, ...props }) => {
  return (
    <NextLink {...props}>
      <StyledLink className={className}>{children}</StyledLink>
    </NextLink>
  );
};

export default UpLink;

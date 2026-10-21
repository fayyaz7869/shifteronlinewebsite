import { Link, useLocation } from 'react-router-dom';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

interface SmartLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string;
  children: ReactNode;
}

/**
 * SmartLink seamlessly handles:
 * 1. SPA client-side routes (including extension-less paths and mapped .html routes like /privacy-policy.html)
 * 2. In-page hash anchors (e.g. #services, #tracking) with smooth scrolling
 * 3. External URLs, mailto:, tel:, and static binary assets
 */
export function SmartLink({ href, children, ...props }: SmartLinkProps) {
  const { pathname } = useLocation();

  const isStaticAsset = href.match(/\.(png|jpg|jpeg|gif|webp|svg|pdf|zip|ico)$/i);
  const isSpaRoute = href.startsWith('/') && !isStaticAsset;

  if (isSpaRoute) {
    return (
      <Link to={href} {...props}>
        {children}
      </Link>
    );
  }

  if (href.startsWith('#') && pathname !== '/') {
    return (
      <Link to={`/${href}`} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}

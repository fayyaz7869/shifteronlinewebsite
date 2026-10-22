import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'outline' | 'outline-light' | 'ghost-light';
type Size = 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 font-bold rounded-2xl transition-all duration-200 ease-out ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]';

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-orange via-orange to-orange-light text-white shadow-glow-orange hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0',
  secondary:
    'bg-white text-navy border border-line hover:border-royal/50 hover:bg-royal/5 hover:text-royal hover:-translate-y-0.5 active:translate-y-0 shadow-2xs',
  outline:
    'bg-transparent text-navy border border-slate-300 hover:border-orange hover:text-orange hover:bg-orange/5 hover:-translate-y-0.5 active:translate-y-0 shadow-2xs',
  'outline-light':
    'bg-transparent text-white border border-white/30 hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0',
  'ghost-light': 'bg-white text-navy hover:bg-white/95 hover:-translate-y-0.5 active:translate-y-0 shadow-soft',
};

const sizes: Record<Size, string> = {
  md: 'h-12 px-5 text-[15px]',
  lg: 'h-14 px-7 text-base',
};

interface ButtonOwnProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = ButtonOwnProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined; to?: undefined };
type ButtonAsAnchor = ButtonOwnProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; to?: undefined };
type ButtonAsLink = ButtonOwnProps & Omit<LinkProps, 'className' | 'children'> & { href?: undefined; to: string };
type ButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsLink;

export function Button({ variant = 'primary', size = 'md', className = '', children, ...props }: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (props.to !== undefined) {
    const { to, ...linkProps } = props as ButtonAsLink;
    return (
      <Link to={to} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  if (props.href !== undefined) {
    const { href, ...anchorProps } = props as ButtonAsAnchor;
    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}

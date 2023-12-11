import cn from 'classnames';
import { HTMLProps } from 'react';

import './PageLink.css';

export type Props = HTMLProps<HTMLAnchorElement> & { active?: boolean };

export default function PageLink({
  className,
  active,
  disabled,
  children,
  ...otherProps
}: Props) {
  const customClassName = cn('page-link', className, {
    active,
    disabled,
  });

  if (disabled) {
    return <span className='hidden'>{children}</span>;
  }

  return (
    <a
      className={customClassName}
      aria-current={active ? 'page' : undefined}
      {...otherProps}
    >
      {children}
    </a>
  );
}

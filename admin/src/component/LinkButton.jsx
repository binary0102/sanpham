import React from 'react';

export const LinkButton = ({ className, to, as, children, ...props}) => {
 
  return (
    as === 'a' 
  ? <a {...props}  href={to} className={className} > {children} </a>
  : <button {...props} href={to} className={className} > {children} </button>
  )

}

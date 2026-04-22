import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

/**
 * Universal Button component
 * @param { 'primary' | 'outline' | 'outlineDark' } variant - visual style
 * @param { 'sm' | 'md' | 'lg' } size - button size
 * @param { string } href - if provided, renders as <a>
 * @param { string } to - if provided, renders as react-router <Link>
 */
const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  uppercase = false,
  href, 
  to, 
  className = '', 
  ...props 
}) => {
  const buttonClasses = `
    ${styles.btn} 
    ${styles[variant]} 
    ${styles[size]} 
    ${uppercase ? styles.uppercase : ''} 
    ${className}
  `.trim();

  if (to) {
    return (
      <Link to={to} className={buttonClasses} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={buttonClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;

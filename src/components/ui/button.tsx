import React from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = 'default', size = 'md', disabled, iconLeft, iconRight, loading, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      default: "bg-slate-100 text-slate-900 hover:bg-slate-200",
      primary: "bg-primary text-primary-foreground hover:bg-primary/90",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
      accent: "bg-accent text-accent-foreground hover:bg-accent/90",
      outline: "border border-input bg-background hover:bg-muted hover:text-foreground",
      ghost: "hover:bg-muted hover:text-foreground",
    };
    
    const sizes = {
      sm: "h-9 px-3 text-sm rounded-md",
      md: "h-10 px-4 py-2 rounded-md",
      lg: "h-11 px-8 rounded-md",
    };
    
    return (
      <button
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        
        {!loading && iconLeft && <span className="mr-2">{iconLeft}</span>}
        {children}
        {!loading && iconRight && <span className="ml-2">{iconRight}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
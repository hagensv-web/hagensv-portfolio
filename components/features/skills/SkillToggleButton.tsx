import { ButtonHTMLAttributes, forwardRef } from "react";

type SkillToggleButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
  };

const SkillToggleButton = forwardRef<HTMLButtonElement, SkillToggleButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={`cursor-pointer rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 my-5 m-auto px-4 py-2 ${className}`}
      />
    );
  }
);

SkillToggleButton.displayName = "SkillToggleButton";

export default SkillToggleButton;
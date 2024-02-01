interface ButtonProps {
  label: string;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  onClick: () => void;
  disabled?: boolean;
  outline?: boolean;
}

const Button = ({
  label,
  secondary,
  fullWidth,
  large,
  onClick,
  disabled,
  outline,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
            disabled:opacity-70
            disabled:cursor-not-allowed
            rounded-full
            font-semibold
            hover:opacity-100
            transition
            border-2
            ${fullWidth ? "w-full" : "w-fit"}
            ${secondary ? "bg-white" : "bg-sky-500"}
            ${secondary ? "text-black" : "text-white"}
            ${secondary ? "border-black" : "border-sky-500"}
            ${outline ? "bg-transparent" : ""}
            ${outline ? "border-white" : ""}
            ${outline ? "text-white" : ""}
            ${large ? "text-xl" : "text-md"}
            ${large ? "px-5" : "px-4"}
            ${large ? "py-3" : "py-2"}
        `}
    >
      {label}
    </button>
  );
};

export default Button;

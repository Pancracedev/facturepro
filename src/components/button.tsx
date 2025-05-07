import clsx from "clsx"

interface AuthButtonProps {
  children: React.ReactNode
  onClick?: () => void
  type?: "button" | "submit"
  className?: string
  disabled?: boolean
}

const AuthButton: React.FC<AuthButtonProps> = ({
  children,
  onClick,
  type,
  className = "",
  disabled = false,
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={clsx(
      "w-full flex justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2",
      className,
      disabled && "opacity-50 cursor-not-allowed"
    )}
  >
    {children}
  </button>
)
export default AuthButton
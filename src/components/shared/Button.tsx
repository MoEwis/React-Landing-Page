interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}
const Button = ({ children, onClick, className = "" }: ButtonProps) => {
  return (
    <button
      className={`px-6 py-3 rounded-full outline-none cursor-pointer relative overflow-hidden border boredr-transparent bg-violet-600 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

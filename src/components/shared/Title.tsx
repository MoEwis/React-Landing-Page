interface TitleProps {
  children: React.ReactNode;
  className?: string;
}
const Title = ({ children, className = "" }: TitleProps) => {
  return (
    <p
      className={`text-heading-1 font-semibold text-2xl sm:text-3xl md:text-4xl ${className}`}
    >
      {children}
    </p>
  );
};

export default Title;

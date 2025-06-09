import Paragraph from "../shared/Paragraph";

interface AboutCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}
const AboutCard = ({ title, description, icon }: AboutCardProps) => {
  return (
    <div className="p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-bg shadow-lg shadow-box-shadow relative overflow-hidden mt-1">
      <div className="rounded-xl bg-gray-300  text-white dark:bg-gray-950  w-max p-3 mb-2 md:mb-4 relative">
        {icon}
      </div>
      <h2 className="text-lg md:text-xl font-semibold text-heading-2">
        {title}
      </h2>
      <Paragraph>{description}</Paragraph>
    </div>
  );
};

export default AboutCard;

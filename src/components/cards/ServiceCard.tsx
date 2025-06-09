import Paragraph from "../shared/Paragraph";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}
const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-bg shadow-lg shadow-box-shadow relative overflow-hidden">
      <div className="rounded-xl bg-gray-300  text-white dark:bg-gray-950  w-max p-3 relative ">
        {icon}
      </div>
      <div className="mt6 space-y-4 relative">
        <h2 className="text-lg md:text-xl font-semibold text-heading-2">
          {title}
        </h2>
      </div>
      <Paragraph>{description}</Paragraph>
    </div>
  );
};

export default ServiceCard;

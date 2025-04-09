
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  onClick?: () => void;
}

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  className}: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        "glass-card hover-card p-6 flex flex-col h-full border-border/50",
        className
      )}
      // onClick={onClick}
    >
      <div className="mb-4 text-primary w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm flex-grow">{description}</p>
      {/* <div className="mt-6 text-primary text-sm font-medium">
        Learn more
      </div> */}
    </div>
  );
};

export default ServiceCard;

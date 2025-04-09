
import { cn } from '@/lib/utils';

interface WorkCardProps {
  imgSrc: string;
  title: string;
  category: string;
  description: string;
  className?: string;
}

const WorkCard = ({ imgSrc, title, category, description, className }: WorkCardProps) => {
  return (
    <div 
      className={cn(
        "group overflow-hidden rounded-2xl bg-white shadow-sm hover-card",
        className
      )}
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <img 
          src={imgSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="text-xs font-medium text-primary mb-2">{category}</div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
};

export default WorkCard;

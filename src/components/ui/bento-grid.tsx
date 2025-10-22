import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  link,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  link?: string;
}) => {
  return (
    <div
      className={cn(
        "group/bento row-span-1 relative flex flex-col justify-between space-y-4 rounded-xl border border-gray-200 bg-white p-0 transition duration-300 hover:shadow-lg hover:border-gray-300 overflow-hidden",
        className,
      )}
    >
      {header}
      <div className="absolute inset-0 bg-black/0 group-hover/bento:bg-black/80 transition-all duration-300 flex items-center justify-center z-10">
        <div className="opacity-0 group-hover/bento:opacity-100 transition-opacity duration-300 text-center text-white p-6">
          <div className="mb-3">
            {icon}
          </div>
          <div className="text-lg font-bold mb-2">
            {title}
          </div>
          <div className="text-sm mb-4">
            {description}
          </div>
          {link && (
            <a 
              href={link} 
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors group"
            >
              View Project
              <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

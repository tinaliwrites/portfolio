const StoryCard = ({ story, featured, index, className }: { story: any, featured?: boolean, index?: number, className?: string }) => (
  <div className={`group relative ${featured ? "md:col-span-2" : "md:col-span-1"} ${className || ""}`}>
    {/* Hand-drawn border effect */}
    <div className={`absolute inset-0 border-2 border-primary/20 transition-colors duration-300 group-hover:border-primary/40 pointer-events-none
      ${(index || 0) % 2 === 0
        ? "rounded-[255px_15px_225px_15px/15px_225px_15px_255px]"
        : "rounded-[15px_225px_15px_255px/255px_15px_225px_15px]"
      }
    `}></div>

    <a href={story.link || "#"} target="_blank" rel="noopener noreferrer" className="block p-2 h-full no-underline">
      <div className={`flex flex-col h-full ${featured ? "lg:flex-row lg:gap-0 lg:items-center" : "gap-0 justify-start"}`}>
        {story.image && (
          <div className={`shrink-0 overflow-hidden rounded-sm ${featured ? "w-full lg:w-1/2 aspect-video lg:aspect-auto lg:h-64" : "w-full aspect-video"}`}>
            <div className="h-full w-full p-2">
              <img
                src={`${import.meta.env.BASE_URL}${story.image.startsWith('/') ? story.image.slice(1) : story.image}`}
                alt={story.headline}
                className="h-full w-full object-cover rounded-md brightness-75 group-hover:brightness-100 group-hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        )}
        <div className={`flex flex-col justify-center p-2 ${featured && story.image ? "lg:w-1/2 lg:mt-0" : "w-full"}`}>
          <div className="text-[10px] font-medium text-primary/80 uppercase tracking-wider mb-2">
            {story.publication} • {story.date}
          </div>
          <h4 className={`font-serif font-medium text-foreground group-hover:text-primary transition-colors mb-2 ${featured ? "text-2xl" : "text-lg"}`}>
            {story.headline}
          </h4>
          <p className="text-muted-foreground mb-4 leading-tight">
            {story.subhead}
          </p>
        </div>
      </div>
    </a>
  </div>
);

export default StoryCard;

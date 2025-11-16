
interface ProjectDetailHeroProps {
  title: string;
  category: string;
}

export default function ProjectDetailHero({ title, category }: ProjectDetailHeroProps) {
  return (
    <div className="space-y-2">
      <div className="inline-block">
        <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium border border-accent/50">
          {category}
        </span>
      </div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
        {title}
      </h1>
    </div>
  );
}

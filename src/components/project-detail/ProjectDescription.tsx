
interface ProjectDescriptionProps {
  longDescription: string;
  highlights?: string[];
}

export default function ProjectDescription({ longDescription, highlights }: ProjectDescriptionProps) {
  return (
    <div className="space-y-6">
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Project Overview
        </h2>
        
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          {longDescription.split('\n').map((paragraph, index) => (
            paragraph.trim() && (
              <p key={index} className="text-base md:text-lg">
                {paragraph.trim()}
              </p>
            )
          ))}
        </div>
      </div>

{/* Key Highlights */}
       {highlights && highlights.length > 0 && (
         <div className="mt-8 p-6 rounded-lg bg-card border border-border">
           <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-accent"></span>
             Key Highlights
           </h3>
           <ul className="space-y-3">
             {highlights.map((highlight, index) => (
               <li key={index} className="flex gap-3 text-muted-foreground">
                 <span className="text-accent mt-1">✓</span>
                 <span>{highlight}</span>
               </li>
             ))}
           </ul>
         </div>
       )}
    </div>
  );
}

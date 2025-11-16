
import { HalaProfile } from '@/data/profile';

export default function ProfileSection() {
  const { profilePictureUrl, shortBio, longBio } = HalaProfile;

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Picture */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              {/* Decorative frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-secondary/30 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              
              {/* Image container */}
              <div className="absolute inset-0 rounded-lg overflow-hidden border-4 border-accent/50 shadow-card magical-glow">
                <img 
                  src={profilePictureUrl}
                  alt="Hala Daoudi"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative corner elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-accent rounded-tl-lg opacity-60"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-secondary rounded-br-lg opacity-60"></div>
            </div>
          </div>

          {/* Bio Content */}
          <div className="flex flex-col gap-6">
            {/* Short Bio */}
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Welcome to My World
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {shortBio}
              </p>
            </div>

            {/* Long Bio */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-semibold text-accent mb-3">My Story</h3>
              <p className="text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                {longBio}
              </p>
            </div>

            {/* Decorative accent line */}
            <div className="h-1 w-16 bg-gradient-to-r from-accent to-secondary rounded-full mt-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

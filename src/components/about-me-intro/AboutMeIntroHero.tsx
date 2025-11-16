
import { HalaProfile } from '@/data/profile';
import SafeIcon from '@/components/common/SafeIcon';

export default function AboutMeIntroHero() {
  const { profilePictureUrl, shortBio } = HalaProfile;

  return (
    <section className="relative py-12 md:py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-4">
<div id="i5u13" className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Profile Picture */}
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 animate-fade-in">
              {/* Decorative frame */}
              <div className="absolute inset-0 rounded-lg border-4 border-accent/30 transform rotate-3 opacity-50"></div>
              <div className="absolute inset-0 rounded-lg border-2 border-secondary/40 transform -rotate-2"></div>
              
              {/* Image container */}
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-card magical-glow">
<img
                   src="https://spark-builder.s3.us-east-1.amazonaws.com/user-image/2025/11/13/c8fa99f1-7fe7-469a-ad00-79e80a8a48f6.png"
                   alt="Hala Daoudi"
                   className="w-full h-full object-cover"
                 />
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent/20 rounded-full blur-xl animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Bio Section */}
          <div className="flex flex-col gap-6 order-1 md:order-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Greeting */}
            <div className="space-y-2">
              <p className="text-accent font-semibold text-lg flex items-center gap-2">
                <SafeIcon name="Sparkles" size={20} />
                Welcome to My World
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                Hala Daoudi
              </h1>
              <p className="text-xl text-secondary font-semibold">
                Teacher • Administrator • Author
              </p>
            </div>

            {/* Bio Text */}
            <div className="space-y-4">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {shortBio}
              </p>
              
              {/* Decorative divider */}
              <div className="flex items-center gap-3 py-4">
                <div className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent"></div>
                <SafeIcon name="BookOpen" size={20} className="text-accent" />
                <div className="h-px flex-1 bg-gradient-to-l from-accent/30 to-transparent"></div>
              </div>

              {/* Key highlights */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-3 rounded-lg bg-card/50 border border-border/50 hover:border-accent/50 transition-all duration-300">
                  <p className="text-2xl font-bold text-accent">7</p>
                  <p className="text-xs text-muted-foreground mt-1">Projects</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-card/50 border border-border/50 hover:border-accent/50 transition-all duration-300">
                  <p className="text-2xl font-bold text-secondary">6</p>
                  <p className="text-xs text-muted-foreground mt-1">Favorite Books</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-card/50 border border-border/50 hover:border-accent/50 transition-all duration-300">
                  <p className="text-2xl font-bold text-accent">3</p>
                  <p className="text-xs text-muted-foreground mt-1">Expertise Areas</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="./about-me.html"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-accent to-secondary text-background font-semibold rounded-lg hover:shadow-card transition-all duration-300 group"
              >
                Explore My Story
                <SafeIcon 
                  name="ArrowRight" 
                  size={20} 
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


import SafeIcon from '@/components/common/SafeIcon';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: 'Mail',
      title: 'Email',
      description: 'Preferred contact method',
      value: 'hala.daoudi@example.com',
      href: 'mailto:hala.daoudi@example.com',
      type: 'email',
    },
{
      icon: 'MapPin',
      title: 'Location',
      description: 'Based in',
      value: 'Dammam, Saudi Arabia',
      type: 'text',
    },
    {
      icon: 'Clock',
      title: 'Response Time',
      description: 'Typically responds within',
      value: '24-48 hours',
      type: 'text',
    },
  ];

  const expertise = [
    'Teaching & Education',
    'Administrative Work',
    'Writing & Authorship',
    'Curriculum Development',
    'Content Creation',
    'Professional Consulting',
  ];

  return (
    <div className="space-y-6">
      {/* Contact Methods */}
      <div className="space-y-4">
        {contactMethods.map((method, index) => (
          <Card
            key={index}
            className="bg-background border-border hover:border-accent/50 transition-all duration-300 group"
          >
            <CardHeader className="pb-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-secondary/20 border border-border flex items-center justify-center group-hover:from-accent/30 group-hover:to-secondary/30 transition-all duration-300">
                  <SafeIcon
                    name={method.icon}
                    size={20}
                    className="text-accent"
                  />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-base text-foreground">
                    {method.title}
                  </CardTitle>
                  <CardDescription className="text-xs">
                    {method.description}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {method.type === 'email' ? (
                <a
                  href={method.href}
                  className="text-sm text-accent hover:text-accent/80 transition-colors break-all"
                >
                  {method.value}
                </a>
              ) : (
                <p className="text-sm text-foreground">{method.value}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Expertise Areas */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-lg text-foreground">
            Areas of Expertise
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                {item}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="bg-gradient-to-br from-accent/10 to-secondary/10 border-accent/30">
        <CardHeader>
          <CardTitle className="text-base text-foreground flex items-center gap-2">
            <SafeIcon name="Sparkles" size={18} className="text-accent" />
            Let's Connect
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Whether you're interested in collaboration, have questions about my work, or just want to chat about books and education, I'm here to help!
          </p>
          <p className="text-xs text-accent italic">
            "The best way to predict the future is to create it."
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

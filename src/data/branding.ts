
        
export interface NavigationItemModel {
  name: string;
  url: string;
  iconName: string;
}

export interface PortfolioBrandingModel {
  name: string; 
  logoLetter: string;
  headline: string;
  subHeadline: string; 
  themedInspiration: string; 
  themeColors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  navigation: NavigationItemModel[];
  contactEmail: string;
}

export const PortfolioBranding: PortfolioBrandingModel = {
  name: "Hala",
  logoLetter: "H",
  headline: "Teacher, Administrator, Author",
  subHeadline: "Crafting narratives and shaping minds in education and literature.",
  themedInspiration: "Harry Potter Trilogy",
  themeColors: {
    primary: "Dark Shades of Olive", // Deep, rich olive green
    secondary: "Silver", // Metallic accent
    accent: "Light Gold", // Bright, magical accent
  },
  navigation: [
    { name: "About Me", url: "/about", iconName: "user" },
    { name: "My Projects", url: "/projects", iconName: "folder-open" },
    { name: "Favorite Books", url: "/books", iconName: "book-open" },
    { name: "Testimonials", url: "/testimonials", iconName: "star" },
    { name: "Get In Touch", url: "/contact", iconName: "mail" },
  ],
  contactEmail: "hala.daoudi@example.com",
};
        
      
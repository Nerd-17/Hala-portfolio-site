
        
export interface ProfessionalRoleModel {
  role: string;
  iconName: string;
  focusArea: string;
  description: string;
}

export interface ProfileInfoModel {
  profilePictureUrl: string;
  shortBio: string;
  longBio: string;
  roles: ProfessionalRoleModel[];
}

export const HalaProfile: ProfileInfoModel = {
  profilePictureUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/user-image/2025/11/13/2b5f1095-5985-45fe-8ebd-452daa4484a3.png",
  shortBio: "Hala Daoudi is a multifaceted professional excelling in education, administration, and creative writing. With a background dedicated to fostering critical thinking and efficient organizational structures, she blends pedagogical expertise with administrative acumen and narrative creativity.",
  longBio: "My career trajectory is defined by a commitment to structured excellence and the power of story. As an educator, I specialize in designing curricula that challenge and inspire gifted students. My administrative experience allows me to transform complex, inefficient systems into streamlined, productive environments, often leading significant institutional restructuring. Finally, as an author, I translate complex human experiences into compelling narratives, demonstrating a profound command of language and structure. I bring a unique, integrated skill set to any challenge, capable of managing large-scale operations while maintaining a focus on human development and literary depth.",
  roles: [
    {
      role: "Teacher (Educator)",
      iconName: "graduation-cap",
      focusArea: "Curriculum Design & Advanced Pedagogy",
      description: "Specializing in secondary education, designing advanced, interdisciplinary curricula and utilizing digital tools to enhance learning outcomes.",
    },
    {
      role: "Administrative Work",
      iconName: "briefcase",
      focusArea: "Operational Efficiency & Conflict Resolution",
      description: "Leading complex administrative restructures, improving internal communication, and designing staff mediation and induction programs.",
    },
    {
      role: "Author (Writer)",
      iconName: "feather",
      focusArea: "Literary Fiction & Poetry",
      description: "Creating engaging literary manuscripts, demonstrating mastery of narrative structure, compelling character development, and evocative language.",
    },
  ],
};
        
      
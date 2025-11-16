
        
export interface ProjectImageModel {
  url: string;
  alt: string;
}

export interface ProjectGalleryItemModel {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  category: string;
  images: ProjectImageModel[];
  highlights?: string[];
}

export const PortfolioProjects: ProjectGalleryItemModel[] = [
  {
    id: "p1",
title: "A Guide to Writing",
    shortDescription: "A definitive, structured guide to mastering persuasive and clear professional writing. It transforms raw ideas into authoritative, polished narratives.",
    longDescription: "This two-year project involved developing a full suite of materials, assessments, and teacher training modules for an accelerated learning track. The curriculum integrated literary analysis, historical context, and STEM principles, drawing heavily on project-based learning methodologies popularized by advanced educational models. The material was implemented successfully across three districts, showing measurable improvements in student engagement and achievement.",
    category: "Education (Teaching)",
    highlights: [
      "Comprehensive curriculum design across multiple learning modalities",
      "Successfully implemented across three districts with measurable student engagement improvements",
      "Integration of literary analysis, historical context, and STEM principles",
      "Teacher training modules and assessments included for full implementation support"
    ],
    images: [
      { url: "/images/writing-cover.png", alt: "Curriculum design overview" },
      { url: "/images/writing-1.png", alt: "Students engaged in project-based learning" },
      { url: "/images/writing-2.png", alt: "LMS Analytics Dashboard" },
    ],
  },
{
    id: "p2",
title: "Fiction's Blueprint",
    shortDescription: "A deep dive into the architecture of world-building, character development, and plot mechanics for compelling fiction. Provides the essential framework for crafting epic stories.",
    longDescription: "Tasked with modernizing outdated procedures, I implemented a new digital record-keeping system and streamlined inter-departmental communication protocols. This involved training staff on new software, documenting all reorganized workflows, and ensuring compliance with updated regulatory standards. The project was critical in reducing bureaucratic friction and improving staff morale through clearer responsibilities and faster processing times.",
    category: "Administrative Work",
    highlights: [
      "Modernized administrative procedures with digital record-keeping system",
      "Streamlined inter-departmental communication protocols",
      "Comprehensive staff training and workflow documentation",
      "Reduced bureaucratic friction and measurably improved staff morale"
    ],
    images: [
      { url: "/images/fiction-cover.png", alt: "Administrative efficiency setup" },
      { url: "/images/fiction-1.png", alt: "Streamlining workflow visualization" },
      { url: "/images/fiction-2.png", alt: "Digital record keeping" },
    ],
  },
{
    id: "p3",
title: "The Poetic Canon",
    shortDescription: "A curated exploration of poetic forms and lyrical structure, focused on evocative language and emotional resonance. Demonstrates expertise in profound, concise expression.",
    longDescription: "This novel is a deep dive into themes of memory, legacy, and self-discovery set in a richly imagined European city. Writing included extensive historical research, character development, and rigorous self-editing. The project showcases mastery of narrative structure, evocative language, and thematic complexity, aligning with celebrated works in modern literary fiction.",
    category: "Author",
    highlights: [
      "Extensive historical research with rich setting development",
      "Masterful character development and narrative structure",
      "Exploration of themes: memory, legacy, and self-discovery",
      "Published work showcasing evocative language and thematic complexity"
    ],
    images: [
      { url: "/images/poetry-cover.png", alt: "Novel cover art mockup" },
      { url: "/images/poetry-1.png", alt: "Writing process setup" },
      { url: "/images/poetry-2.png", alt: "Inspirational setting for the novel" },
    ],
  },
{
    id: "p4",
title: "Digital Journal",
    shortDescription: "A fully interactive, digital workspace designed for readers to capture, analyze, and reflect on literary works. Features specialized indexing for theme tracking and annotation.",
    longDescription: "Faced with the challenge of engaging digital-native students in traditional humanities subjects, I researched, selected, and integrated interactive digital platforms. I led workshops instructing peers on using these tools for collaborative annotation, virtual gallery tours, and digital storytelling, significantly modernizing the pedagogy of the department.",
    category: "Education (Teaching)",
    highlights: [
      "Integration of interactive digital platforms for humanities education",
      "Peer-led workshops on collaborative annotation and digital storytelling tools",
      "Successfully engaged digital-native students with traditional humanities",
      "Modernized departmental pedagogy through technology adoption"
    ],
    images: [
      { url: "/images/digital-cover.png", alt: "Digital tools in humanities classroom" },
      { url: "/images/digital-1.png", alt: "Examples of used educational software" },
      { url: "/images/digital-2.png", alt: "Faculty training workshop evidence" },
    ],
  },
{
    id: "p5",
title: "Grammar's Full Code",
    shortDescription: "Comprehensive instructional modules that demystify complex grammatical rules and syntactic structures. This ensures impeccable clarity and professional credibility in all communications.",
    longDescription: "Recognizing high internal friction, I designed a formal, confidential system for early conflict resolution. This program included training select staff members as mediators and established clear protocols for handling grievances, prioritizing fair and prompt resolution. This administrative intervention resulted in a documented decrease in formal HR complaints over one academic year.",
    category: "Administrative Work",
    highlights: [
      "Designed formal confidential conflict resolution system",
      "Trained staff mediators with clear grievance protocols",
      "Documented decrease in formal HR complaints within one year",
      "Prioritized fair and prompt resolution processes"
    ],
    images: [
      { url: "/images/grammar-cover.png", alt: "Successful mediation instance" },
      { url: "/images/grammar-2.png", alt: "Conflict resolution metrics" },
      { url: "/images/grammar-3.png", alt: "Symbol of fairness and resolution" },
    ],
  },
{
    id: "p6",
title: "Practical Grammar Drills",
     shortDescription: "A collection of meticulously crafted, targeted worksheets designed for immediate practical application. Sharpens skills through intensive, real-world scenario practice.",
    longDescription: "This collection was successfully published by an independent press and received regional recognition. The project involved iterative drafting, peer review, securing publishing rights, and participating in promotional readings. The work demonstrates sophisticated poetic technique and profound emotional resonance, connecting the reader to universal human experiences through sharp observation and lyrical language.",
    category: "Author",
    highlights: [
      "Published by independent press with regional recognition",
      "Iterative drafting process with peer review and refinement",
      "Sophisticated poetic technique and emotional resonance",
      "Promotional readings demonstrating reader connection to universal themes"
    ],
    images: [
      { url: "/images/practical-sheet-cover.png", alt: "Poetry book cover art" },
      { url: "/images/practical-1.png", alt: "Inspiration scene for poetry" },
      { url: "/images/practical-2.png", alt: "Drafting of poetry manuscript" },
    ],
  },
{
    id: "p7",
title: "Agenda Templates",
     shortDescription: "A set of elegant, professionally designed templates for structuring and executing highly productive meeting agendas. Ensures organizational efficiency and clear communication of objectives.",
    longDescription: "The challenge was high turnover among new teachers. I developed a detailed handbook (digital and print) covering everything from grading standards to cultural norms, paired with a mandatory, structured induction program. This standardized approach to onboarding reduced new teacher stress and improved retention rates by providing clear expectations and continuous mentorship support.",
    category: "Administrative Work",
    highlights: [
      "Comprehensive handbook covering grading standards to cultural norms",
      "Mandatory structured induction program for new teachers",
      "Reduced new teacher stress and increased retention rates",
      "Continuous mentorship support and clear onboarding expectations"
    ],
    images: [
      { url: "/images/agenda-cover.png", alt: "Teacher Handbook physical mockups" },
      { url: "/images/agenda-1.png", alt: "Induction program presentation slide" },
      { url: "/images/agenda-2.png", alt: "Positive faculty mentorship scene" },
    ],
  },
];
        
      

        
export interface TestimonialModel {
  id: string;
  quote: string;
  clientName: string;
  clientTitle: string;
  avatarUrl: string;
}

export const ClientTestimonials: TestimonialModel[] = [
  {
    id: "t1",
    quote: "Hala’s curriculum redesign was transformative. She didn't just update materials; she instilled a sense of intellectual curiosity across the department. Her projects are rigorous yet deeply engaging—a rare quality.",
    clientName: "Dr. Eleanor V",
    clientTitle: "Head of English Department, Regional High School",
    avatarUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/11/13/0f3f9936-438c-45b5-afad-0f88b9a24857.png",
  },
  {
    id: "t2",
    quote: "The administrative overhaul achieved by Hala's team was unparalleled. We went from chaotic paperwork to a seamless, digital workflow in under six months. Her leadership in efficiency is outstanding.",
    clientName: "Mark S",
    clientTitle: "Chief Operations Officer, Educational Services",
    avatarUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/11/13/7a2f6e83-0813-4205-8bc0-e61e176a9619.png",
  },
  {
    id: "t3",
    quote: "Her writing, particularly 'The Silver Quill,' is hauntingly beautiful. Hala manages to capture profound emotional truths within a framework of elegant, disciplined craft. A truly magnificent talent.",
    clientName: "Lillian W",
    clientTitle: "Literary Agent (Fictional)",
    avatarUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/11/13/e90b9458-0756-431a-9dd2-bc596f28d254.png",
  },
  {
    id: "t4",
    quote: "The new teacher induction program she developed changed our institutional culture. New hires feel supported and integrated much faster, thanks to the clarity and detail of the resources she provided.",
    clientName: "Robert H",
    clientTitle: "School Principal (Retired)",
    avatarUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/11/13/247e1c46-66f3-4aba-a4f8-86fa0195feaa.png",
  },
];
        
      
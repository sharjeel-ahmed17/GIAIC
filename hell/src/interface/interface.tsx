// interfaces/ContactFormData.ts
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
// interfaces/CourseData.ts
export interface Course {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface CategoryCourses {
  [category: string]: Course[];
}
// interfaces/CategorySelection.ts
export interface CategorySelectionProps {
  categories: string[];
  onSelectCategory: (category: string) => void;
}
// interfaces/SidebarData.ts
export interface SidebarCategory {
  id: string;
  name: string;
}

export interface SidebarProps {
  categories: SidebarCategory[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}
// interfaces/CardProps.ts
export interface CardProps {
  course: Course;
}
// interfaces/ContactInfo.ts
export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

export interface ContactInfoProps {
  info: ContactInfo;
}
// interfaces/FAQ.ts
export interface FAQ {
  question: string;
  answer: string;
}

export interface FAQProps {
  faqs: FAQ[];
}

// Component Props Types
export interface NavigationItem {
  path: string;
  label: string;
}

// Service Types
export interface Service {
  id: string;
  name: string;
  duration: string;
  description: string;
}

export interface ServiceCategory {
  category: string;
  categoryId: string;
  services: Service[];
}

// Gallery Types
export interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
  description: string;
}

export interface GalleryCategory {
  id: string;
  label: string;
  count: number;
}

// Appointment Types
export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

// Navigation Types
export interface NavbarProps {
  className?: string;
}

export interface FooterProps {
  className?: string;
}

// Page Props Types
export interface PageProps {
  params?: { [key: string]: string | string[] | undefined };
  searchParams?: { [key: string]: string | string[] | undefined };
}
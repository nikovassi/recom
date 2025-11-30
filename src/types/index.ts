export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface InquiryForm {
  name: string;
  phone: string;
  email: string;
  message: string;
}

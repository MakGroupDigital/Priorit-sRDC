
export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  progress: number;
  location: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  image: string;
}

export interface ProvinceData {
  id: string;
  name: string;
  priority: string;
  investment: string;
  projects: number;
}

export enum Language {
  FR = 'FR',
  EN = 'EN',
  LN = 'LN',
  SW = 'SW'
}

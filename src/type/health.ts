export interface Exercise {
  id: string;
  name: string;
  description: string;
  duration: number;
  calories: number;
}
export interface HealthData {
  date: string;
  bodyFat: number;
  weight: number;
}

export interface Meal {
  id: string;
  imageUrl: string;
  date: string;
  label: string;
}

export interface DiaryEntry {
  id: string;
  date: string;
  time: string;
  content: string;
}

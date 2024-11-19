import { DiaryEntry, Exercise, Meal } from "../type/health";
import d01Image from "../assets/d01 (image).png";
import m01Image from "../assets/m01 (image).png";
import { HealthData } from "../type/health";

export interface MealResponse {
  meals: Meal[];
  hasMore: boolean;
}

const healthServices = {
  getDiaries: async (
    page: number = 0,
    limit: number = 8
  ): Promise<{
    entries: DiaryEntry[];
    hasMore: boolean;
  }> => {
    const mockEntries: DiaryEntry[] = [
      {
        id: "1",
        date: "2021.05.21",
        time: "23:25",
        content:
          "私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...",
      },
      {
        id: "2",
        date: "2021.05.21",
        time: "23:25",
        content:
          "私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...",
      },
      {
        id: "3",
        date: "2021.05.21",
        time: "23:25",
        content:
          "私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...",
      },
      {
        id: "4",
        date: "2021.05.21",
        time: "23:25",
        content:
          "私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...",
      },
      {
        id: "5",
        date: "2021.05.21",
        time: "23:25",
        content:
          "私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...",
      },
      {
        id: "6",
        date: "2021.05.21",
        time: "23:25",
        content:
          "私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...",
      },
      {
        id: "7",
        date: "2021.05.21",
        time: "23:25",
        content:
          "私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...",
      },
      {
        id: "8",
        date: "2021.05.21",
        time: "23:25",
        content:
          "私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...",
      },
    ];

    return {
      entries: mockEntries,
      hasMore: true,
    };
  },
  getExercises: async (): Promise<Exercise[]> => {
    return [
      {
        id: "1",
        name: "家事全般",
        description: "立位・軽い",
        duration: 10,
        calories: 26,
      },
      {
        id: "2",
        name: "家事全般",
        description: "立位・軽い",
        duration: 10,
        calories: 26,
      },
      {
        id: "3",
        name: "家事全般",
        description: "立位・軽い",
        duration: 10,
        calories: 26,
      },
      {
        id: "4",
        name: "家事全般",
        description: "立位・軽い",
        duration: 10,
        calories: 26,
      },
      {
        id: "5",
        name: "家事全般",
        description: "立位・軽い",
        duration: 10,
        calories: 26,
      },
      {
        id: "6",
        name: "家事全般",
        description: "立位・軽い",
        duration: 10,
        calories: 26,
      },
      {
        id: "7",
        name: "家事全般",
        description: "立位・軽い",
        duration: 10,
        calories: 26,
      },
      {
        id: "8",
        name: "家事全般",
        description: "立位・軽い",
        duration: 10,
        calories: 26,
      },
      {
        id: "9",
        name: "家事全般",
        description: "立位・軽い",
        duration: 10,
        calories: 26,
      },
      {
        id: "10",
        name: "家事全般",
        description: "立位・軽い",
        duration: 10,
        calories: 26,
      },
      {
        id: "11",
        name: "家事全般",
        description: "立位・軽い",
        duration: 10,
        calories: 26,
      },
      {
        id: "12",
        name: "家事全般",
        description: "立位・軽い",
        duration: 10,
        calories: 26,
      },
    ];
  },
  getHealthHistory: async (): Promise<HealthData[]> => {
    return [
      { date: "2024-06", bodyFat: 25, weight: 68.5 },
      { date: "2024-07", bodyFat: 24.9, weight: 68.1 },
      { date: "2024-08", bodyFat: 23.1, weight: 66.3 },
      { date: "2024-09", bodyFat: 23.3, weight: 67.2 },
      { date: "2024-10", bodyFat: 22.3, weight: 66.1 },
      { date: "2024-11", bodyFat: 21.2, weight: 65.8 },
      { date: "2024-12", bodyFat: 20.9, weight: 65.3 },
      { date: "2025-01", bodyFat: 20.6, weight: 64.9 },
      { date: "2025-02", bodyFat: 20.1, weight: 64.2 },
      { date: "2025-03", bodyFat: 19.5, weight: 63.8 },
      { date: "2025-04", bodyFat: 19.1, weight: 63.5 },
      { date: "2025-05", bodyFat: 18.8, weight: 63.2 },
    ].reverse();
  },

  getMeals: async (
    page: number = 0,
    limit: number = 8,
    category?: string
  ): Promise<MealResponse> => {
    const mockMeals: Meal[] = [
      {
        id: "1",
        imageUrl: m01Image,
        date: "05.21",
        label: "05.21.Morning",
      },
      {
        id: "2",
        imageUrl: d01Image,
        date: "05.21",
        label: "05.21.Lunch",
      },
      {
        id: "3",
        imageUrl: d01Image,
        date: "05.21",
        label: "05.21.Dinner",
      },
      {
        id: "4",
        imageUrl: m01Image,
        date: "05.21",
        label: "05.21.Snack",
      },
      {
        id: "5",
        imageUrl: m01Image,
        date: "05.20",
        label: "05.20.Morning",
      },
      {
        id: "6",
        imageUrl: d01Image,
        date: "05.20",
        label: "05.20.Lunch",
      },
      {
        id: "7",
        imageUrl: d01Image,
        date: "05.20",
        label: "05.20.Dinner",
      },
      {
        id: "8",
        imageUrl: m01Image,
        date: "05.20",
        label: "05.20.Snack",
      },
    ];

    return {
      meals: mockMeals,
      hasMore: true,
    };
  },
};

export default healthServices;

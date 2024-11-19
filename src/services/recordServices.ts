import { DailyRecord } from "../type/record";

const recordServices = {
  getDailyRecord: async (): Promise<DailyRecord> => {
    return {
      id: "1",
      date: "05/21",
      achievement: 75,
    };
  },
};

export default recordServices;

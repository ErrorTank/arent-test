import { Notification } from "../type/notification";

const notificationServices = {
  getNotifications: async (): Promise<Notification[]> => {
    return [
      {
        id: "1",
        message: "新しいチャレンジが追加されました",
        isRead: false,
      },
      {
        id: "2",
        message: "記録を確認しましょう",
        isRead: true,
      },
    ];
  },
};

export default notificationServices;

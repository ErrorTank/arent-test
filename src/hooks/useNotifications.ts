import notificationServices from "../services/notificationServices";
import { Notification } from "../type/notification";
import { useApi } from "./useApi";

const useNotifications = () => {
  const { data: notifications = [] } = useApi<Notification[]>(
    ["notifications"],
    notificationServices.getNotifications
  );

  return notifications.filter((n) => !n.isRead).length;
};

export default useNotifications;

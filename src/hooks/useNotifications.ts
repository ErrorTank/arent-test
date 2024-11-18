import notificationServices, {
  Notification,
} from "../services/notificationServices";
import { useApi } from "./useApi";

const useNotifications = () => {
  const { data: notifications = [] } = useApi<Notification[]>(
    ["notifications"],
    notificationServices.getNotifications
  );

  return notifications.filter((n) => !n.isRead).length;
};

export default useNotifications;

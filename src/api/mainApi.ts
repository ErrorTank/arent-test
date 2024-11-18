import { createApiClient, withAuth } from "./api";

const BASE_URL = import.meta.env.VITE_API_URL;

const api = createApiClient(BASE_URL);
const mainApi = withAuth(api);

export default mainApi;

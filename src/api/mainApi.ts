import { createApiClient } from "./api";

const API_URL = import.meta.env.VITE_API_HOST_URL;

const mainApi = createApiClient(API_URL);

export default mainApi;

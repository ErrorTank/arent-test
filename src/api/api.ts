type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface RequestOptions {
  method: HttpMethod;
  headers: HeadersInit;
  body?: string;
}

export interface ApiClient {
  setHeader: (key: string, value: string) => void;
  removeHeader: (key: string) => void;
  clearHeaders: () => void;
  get: <TResponse>(endpoint: string) => Promise<TResponse>;
  post: <TResponse, TBody>(endpoint: string, data: TBody) => Promise<TResponse>;
  put: <TResponse, TBody>(endpoint: string, data: TBody) => Promise<TResponse>;
  delete: <TResponse>(endpoint: string) => Promise<TResponse>;
}

export const createApiClient = (
  baseUrl: string,
  defaultHeaders: HeadersInit = {}
): ApiClient => {
  let customHeaders: Record<string, string> = {};

  const getHeaders = (): HeadersInit => ({
    "Content-Type": "application/json",
    ...defaultHeaders,
    ...customHeaders,
  });

  const request = async <TResponse>(
    endpoint: string,
    options: Partial<RequestOptions> = {}
  ): Promise<TResponse> => {
    const url = `${baseUrl}${endpoint}`;

    const response = await fetch(url, {
      method: options.method || "GET",
      headers: { ...getHeaders(), ...options.headers },
      body: options.body,
    });

    if (!response.ok) {
      throw new Error(`API call failed: ${response.statusText}`);
    }

    return response.json();
  };

  return {
    setHeader: (key: string, value: string) => {
      customHeaders[key] = value;
    },

    removeHeader: (key: string) => {
      delete customHeaders[key];
    },

    clearHeaders: () => {
      customHeaders = {};
    },

    get: <TResponse>(endpoint: string) => request<TResponse>(endpoint),

    post: <TResponse, TBody>(endpoint: string, data: TBody) =>
      request<TResponse>(endpoint, {
        method: "POST",
        body: JSON.stringify(data),
      }),

    put: <TResponse, TBody>(endpoint: string, data: TBody) =>
      request<TResponse>(endpoint, {
        method: "PUT",
        body: JSON.stringify(data),
      }),

    delete: <TResponse>(endpoint: string) =>
      request<TResponse>(endpoint, {
        method: "DELETE",
      }),
  };
};

export const withAuth = (api: ApiClient) => ({
  ...api,
  setAuthToken: (token: string) => {
    api.setHeader("Authorization", `Bearer ${token}`);
    return api;
  },
  clearAuthToken: () => {
    api.removeHeader("Authorization");
    return api;
  },
});

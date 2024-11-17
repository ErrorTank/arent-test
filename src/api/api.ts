type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface RequestOptions {
  method: HttpMethod;
  headers: HeadersInit;
  body?: string;
}

export const createApiClient = (
  baseUrl: string,
  customHeaders: HeadersInit = {}
) => {
  let authToken: string | null = null;

  const DEFAULT_HEADERS = {
    "Content-Type": "application/json",
    ...customHeaders,
  };

  const getHeaders = (): HeadersInit => {
    const headers = new Headers(DEFAULT_HEADERS);
    if (authToken) {
      headers.set("Authorization", `Bearer ${authToken}`);
    }
    return headers;
  };

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
    setAuthToken: (token: string) => {
      authToken = token;
    },

    clearAuthToken: () => {
      authToken = null;
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

import { useEffect, useState, useCallback } from "react";

interface UseApiOptions {
  enabled?: boolean;
  manual?: boolean;
}

export const useApi = <TData>(
  queryKey: unknown[],
  queryFn: (...params: any[]) => Promise<TData>,
  options: UseApiOptions = {}
) => {
  const { enabled = true, manual = false } = options;

  const [data, setData] = useState<TData>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(
    async (...params: any[]) => {
      setIsLoading(true);
      setError(null);

      try {
        const result = await queryFn(...params);
        setData(result);
        return { success: true, data: result };
      } catch (err) {
        const error =
          err instanceof Error ? err : new Error("An error occurred");
        setError(error);
        return { success: false, error };
      } finally {
        setIsLoading(false);
      }
    },
    [queryFn]
  );

  useEffect(() => {
    if (manual) return;
    if (!enabled) {
      setIsLoading(false);
      return;
    }

    execute();
  }, [queryKey, execute, enabled, manual]);

  return { data, isLoading, error, execute };
};

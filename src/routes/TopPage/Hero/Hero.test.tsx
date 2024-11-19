import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "./Hero";
import { useApi } from "../../../hooks/useApi";

vi.mock("../../../components/Container/Container", () => ({
  Container: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="mock-container">{children}</div>
  ),
}));

vi.mock("../../../components/Graph/Graph", () => ({
  Graph: () => <div data-testid="mock-graph">Graph Component</div>,
}));

vi.mock("../../../components/ProgressCircle/ProgressCircle", () => ({
  ProgressCircle: ({ value }: { value: number; label?: string }) => (
    <div data-testid="mock-progress-circle">Progress: {value}%</div>
  ),
}));

// Mock the hooks and services
vi.mock("../../../hooks/useApi", () => ({
  useApi: vi.fn(),
}));

describe("Hero", () => {
  beforeEach(() => {
    vi.mocked(useApi).mockImplementation((key) => {
      const baseResponse = {
        isLoading: false,
        error: null,
        execute: vi.fn().mockResolvedValue({ success: true, data: null }),
      };

      if (key[0] === "dailyRecord") {
        return {
          ...baseResponse,
          data: {
            achievement: 75,
            date: "2024-03-15",
          },
        };
      }
      if (key[0] === "healthHistory") {
        return {
          ...baseResponse,
          data: [
            { date: "2024-03-15", bodyFat: 20, weight: 70 },
            { date: "2024-03-14", bodyFat: 21, weight: 71 },
          ],
        };
      }
      return { ...baseResponse, data: null };
    });
  });

  it("renders main components", () => {
    render(<Hero />);

    expect(screen.getByTestId("mock-graph")).toBeInTheDocument();
    expect(screen.getByTestId("mock-progress-circle")).toBeInTheDocument();
    expect(screen.getByAltText("")).toBeInTheDocument(); // meal image
  });

  it("displays progress circle with correct value", () => {
    render(<Hero />);
    expect(screen.getByText("Progress: 75%")).toBeInTheDocument();
  });

  it("handles null data gracefully", () => {
    vi.mocked(useApi).mockImplementation(() => ({
      data: null,
      isLoading: false,
      error: null,
      execute: vi.fn().mockResolvedValue({ success: true, data: null }),
    }));

    render(<Hero />);
    expect(screen.getByText("Progress: 0%")).toBeInTheDocument();
  });

  it("transforms health history data correctly for graph", () => {
    const mockHealthData = [
      { date: "2024-03-15", bodyFat: 20, weight: 70 },
      { date: "2024-02-14", bodyFat: 21, weight: 71 },
    ];

    vi.mocked(useApi).mockImplementation((key) => {
      const baseResponse = {
        data: null,
        isLoading: false,
        error: null,
        execute: vi.fn().mockResolvedValue({ success: true, data: null }),
      };

      if (key[0] === "healthHistory") {
        return {
          ...baseResponse,
          data: [
            { date: "2024-03-15", bodyFat: 20, weight: 70 },
            { date: "2024-02-14", bodyFat: 21, weight: 71 },
          ],
        };
      }
      return baseResponse;
    });

    render(<Hero />);
    expect(screen.getByTestId("mock-graph")).toBeInTheDocument();
  });
});

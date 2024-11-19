import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import TopPage from "./TopPage";

vi.mock("./Hero/Hero", () => ({
  Hero: () => <div data-testid="mock-hero">Hero Component</div>,
}));

vi.mock("./MealsHistory/MealsHistory", () => ({
  MealsHistory: () => (
    <div data-testid="mock-meals-history">Meals History Component</div>
  ),
}));

describe("TopPage", () => {
  it("renders Hero and MealsHistory components", () => {
    render(<TopPage />);

    expect(screen.getByTestId("mock-hero")).toBeInTheDocument();
    expect(screen.getByTestId("mock-meals-history")).toBeInTheDocument();
  });
});

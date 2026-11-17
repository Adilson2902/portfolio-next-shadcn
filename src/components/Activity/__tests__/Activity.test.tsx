import { render, screen } from "@testing-library/react";
import Activity from "../index";
import { activity } from "@/lib/portfolio";

describe("Activity", () => {
  it("renders every activity entry with period, title and description", () => {
    render(<Activity />);
    expect(
      screen.getByRole("heading", { level: 2, name: /movimento/i }),
    ).toBeInTheDocument();
    activity.forEach((item) => {
      expect(screen.getAllByText(item.period).length).toBeGreaterThan(0);
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.description)).toBeInTheDocument();
    });
  });
});

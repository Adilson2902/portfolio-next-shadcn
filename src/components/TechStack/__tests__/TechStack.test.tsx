import { render, screen } from "@testing-library/react";
import TechStack from "../index";
import { techGroups } from "@/lib/portfolio";

describe("TechStack", () => {
  it("renders every technology group with its items", () => {
    render(<TechStack />);
    expect(
      screen.getByRole("heading", { level: 2, name: /stack/i }),
    ).toBeInTheDocument();
    techGroups.forEach((group) => {
      expect(screen.getByText(group.title)).toBeInTheDocument();
      group.items.forEach((item) => {
        expect(screen.getByText(item)).toBeInTheDocument();
      });
    });
  });
});

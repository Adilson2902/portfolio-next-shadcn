import { render, screen } from "@testing-library/react";
import Footer from "../index";
import { profile } from "@/lib/portfolio";
describe("Footer", () => {
  it("provides a working home anchor and the public professional profile", () => {
    render(<Footer />);
    expect(
      screen.getByRole("link", { name: /Voltar ao início/ }),
    ).toHaveAttribute("href", "#home");
    expect(screen.getByRole("link", { name: /LinkedIn/ })).toHaveAttribute(
      "href",
      profile.linkedin,
    );
    expect(screen.getByText(/©/)).toHaveTextContent(
      String(new Date().getFullYear()),
    );
  });
});

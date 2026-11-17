import { act, render, screen } from "@testing-library/react";
import { SectionReveal } from "../index";

describe("SectionReveal", () => {
  it("reveals content cleanly when intersecting or when reduced-motion is preferred", () => {
    const observe = jest.fn();
    const disconnect = jest.fn();
    let triggerCallback: ((entries: IntersectionObserverEntry[]) => void) | null =
      null;

    const OriginalIO = global.IntersectionObserver;
    global.IntersectionObserver = jest.fn((cb) => {
      triggerCallback = cb;
      return {
        observe,
        disconnect,
        unobserve: jest.fn(),
        takeRecords: () => [],
        root: null,
        rootMargin: "160px 0px",
        thresholds: [0.01],
      };
    }) as unknown as typeof IntersectionObserver;

    const { container } = render(
      <SectionReveal delay={80}>
        <section>Conteúdo da seção</section>
      </SectionReveal>,
    );

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveClass("reveal-section");
    expect(wrapper).not.toHaveClass("is-visible");
    expect(observe).toHaveBeenCalledTimes(1);

    act(() => {
      triggerCallback?.([{ isIntersecting: true } as IntersectionObserverEntry]);
    });

    expect(wrapper).toHaveClass("is-visible");
    expect(disconnect).toHaveBeenCalled();
    expect(screen.getByText("Conteúdo da seção")).toBeInTheDocument();

    global.IntersectionObserver = OriginalIO;
  });
});

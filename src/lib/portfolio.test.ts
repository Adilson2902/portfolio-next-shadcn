import { projects, liveSites, techGroups, activity, profile } from "./portfolio";

describe("portfolio data", () => {
  it("points the canonical site to the live custom domain", () => {
    expect(profile.site).toBe("https://adilson.toolspace.com.br");
  });

  it("keeps unique project names, numbers and valid statuses", () => {
    const names = projects.map((p) => p.name);
    const numbers = projects.map((p) => p.number);
    expect(new Set(names).size).toBe(names.length);
    expect(new Set(numbers).size).toBe(numbers.length);
    projects.forEach((p) => {
      expect(["live", "paused"]).toContain(p.status);
      expect(p.stack.length).toBeGreaterThan(0);
      expect(p.url).toMatch(/^https:\/\//);
    });
  });

  it("marks only the Toolspace ecosystem projects as live", () => {
    const live = projects.filter((p) => p.status === "live").map((p) => p.name);
    expect(live).toEqual(["Toolspace", "Aura UI", "Sintonia"]);
  });

  it("lists unique https live sites", () => {
    const urls = liveSites.map((s) => s.url);
    expect(new Set(urls).size).toBe(urls.length);
    liveSites.forEach((s) => {
      expect(s.url).toMatch(/^https:\/\//);
      expect(s.description.length).toBeGreaterThan(0);
    });
  });

  it("keeps every technology group non-empty", () => {
    techGroups.forEach((g) => {
      expect(g.title.length).toBeGreaterThan(0);
      expect(g.items.length).toBeGreaterThan(0);
    });
  });

  it("keeps activity entries dated, titled and described", () => {
    expect(activity.length).toBeGreaterThan(0);
    activity.forEach((a) => {
      expect(a.period).toBeTruthy();
      expect(a.title).toBeTruthy();
      expect(a.description).toBeTruthy();
    });
  });
});

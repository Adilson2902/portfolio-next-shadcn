import {
  projects,
  liveSites,
  techGroups,
  activity,
  profile,
  type ProjectPreviewType,
} from "./portfolio";

const EXPECTED_PREVIEW_TYPES: Record<string, ProjectPreviewType> = {
  Toolspace: "hub",
  "Aura UI": "design-system",
  Sintonia: "realtime",
  "Auto Escola Manager": "dashboard",
  "Veículos Maceió": "marketplace",
  "Estetico Masso": "booking",
  "Sites para Casamento": "event",
};

describe("portfolio data", () => {
  it("points the canonical site to the live custom domain", () => {
    expect(profile.site).toBe("https://adilson.toolspace.com.br");
  });

  it("keeps unique project names, numbers, valid statuses and 3D commercial metadata", () => {
    const names = projects.map((p) => p.name);
    const numbers = projects.map((p) => p.number);
    expect(new Set(names).size).toBe(names.length);
    expect(new Set(numbers).size).toBe(numbers.length);
    projects.forEach((p) => {
      expect(["live", "paused"]).toContain(p.status);
      expect(["product", "business"]).toContain(p.audience);
      expect(p.previewType).toBe(EXPECTED_PREVIEW_TYPES[p.name]);
      expect(p.accent).toMatch(/^#[0-9a-f]{6}$/i);
      expect(p.nicheLabel.trim().length).toBeGreaterThan(0);
      expect(p.commercialPitch.trim().length).toBeGreaterThan(0);
      expect(p.commercialPitch).not.toMatch(/200%|500\+|35%|60%/);
      expect(p.stack.length).toBeGreaterThan(0);
      expect(p.url).toMatch(/^https:\/\//);
    });
  });

  it("marks only the Toolspace ecosystem projects as live and separates product vs business audiences", () => {
    const live = projects.filter((p) => p.status === "live").map((p) => p.name);
    const paused = projects
      .filter((p) => p.status === "paused")
      .map((p) => p.name);
    expect(live).toEqual(["Toolspace", "Aura UI", "Sintonia"]);
    expect(paused).toEqual([
      "Auto Escola Manager",
      "Veículos Maceió",
      "Estetico Masso",
      "Sites para Casamento",
    ]);
    expect(
      projects.filter((p) => p.audience === "product").map((p) => p.name),
    ).toEqual(live);
    expect(
      projects.filter((p) => p.audience === "business").map((p) => p.name),
    ).toEqual(paused);
  });

  it("lists unique https live sites", () => {
    const urls = liveSites.map((s) => s.url);
    expect(new Set(urls).size).toBe(urls.length);
    liveSites.forEach((s) => {
      expect(s.url).toMatch(/^https:\/\//);
      expect(s.description.length).toBeGreaterThan(0);
    });
  });

  it("keeps every technology group non-empty with globally unique items", () => {
    const allItems: string[] = [];
    techGroups.forEach((g) => {
      expect(g.title.length).toBeGreaterThan(0);
      expect(g.items.length).toBeGreaterThan(0);
      allItems.push(...g.items);
    });
    expect(new Set(allItems).size).toBe(allItems.length);
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

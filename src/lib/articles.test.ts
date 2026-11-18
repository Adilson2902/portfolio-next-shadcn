import { articles, getArticleBySlug } from "./articles";

describe("SEO & GEO articles library", () => {
  it("provides unique slugs, complete SEO fields and non-fabricated copy", () => {
    expect(articles.length).toBe(4);
    const slugs = articles.map((article) => article.slug);
    expect(new Set(slugs).size).toBe(articles.length);

    articles.forEach((article) => {
      expect(article.title.length).toBeGreaterThan(20);
      expect(article.seoTitle.length).toBeGreaterThan(20);
      expect(article.description.length).toBeGreaterThan(40);
      expect(article.keywords.length).toBeGreaterThanOrEqual(3);
      expect(article.stack.length).toBeGreaterThanOrEqual(3);
      expect(article.sections.length).toBeGreaterThanOrEqual(2);
      expect(article.takeaway.length).toBeGreaterThan(20);
      expect(article.whatsappPrompt).toContain("Adilson");
      expect(article.description).not.toMatch(/200%|500\+|35%|60%/);
    });
  });

  it("looks up articles by slug and returns undefined for unknown slugs", () => {
    expect(getArticleBySlug(articles[0].slug)?.title).toBe(articles[0].title);
    expect(getArticleBySlug("slug-inexistente")).toBeUndefined();
  });
});

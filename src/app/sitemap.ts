import type { MetadataRoute } from "next";

export const revalidate = 3 * 60 * 60; // 3 hours

const TARGET_BASE = "https://scandiweb.com";

type SitemapSource = {
  sitemapUrl: string;
  sourceOrigin: string;
};

const SOURCES: SitemapSource[] = [
  {
    sitemapUrl: "https://scandiweb-webflow.scandiweb.com/sitemap.xml",
    sourceOrigin: "https://scandiweb-webflow.scandiweb.com",
  },
  {
    sitemapUrl: "https://scandiweb-integrations-webflow.scandiweb.com/sitemap.xml",
    sourceOrigin: "https://scandiweb-integrations-webflow.scandiweb.com",
  },
  {
    sitemapUrl: "https://scandiweb-services-webflow.scandiweb.com/sitemap.xml",
    sourceOrigin: "https://scandiweb-services-webflow.scandiweb.com",
  },
];

type ChangeFreq = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

const VALID_CHANGE_FREQS = new Set<string>([
  "always",
  "hourly",
  "daily",
  "weekly",
  "monthly",
  "yearly",
  "never",
]);

async function fetchSitemapEntries(
  source: SitemapSource,
): Promise<MetadataRoute.Sitemap> {
  let xml: string;

  try {
    const res = await fetch(source.sitemapUrl, {
      next: { revalidate },
    });
    if (!res.ok) return [];
    xml = await res.text();
  } catch {
    return [];
  }

  const entries: MetadataRoute.Sitemap = [];
  const urlBlocks = xml.match(/<url>[\s\S]*?<\/url>/g) ?? [];

  for (const block of urlBlocks) {
    const locMatch = block.match(/<loc>\s*(.*?)\s*<\/loc>/);
    if (!locMatch) continue;

    const path = locMatch[1].replace(source.sourceOrigin, "");
    const url = `${TARGET_BASE}${path}`;

    const lastmodMatch = block.match(/<lastmod>\s*(.*?)\s*<\/lastmod>/);
    const changefreqMatch = block.match(/<changefreq>\s*(.*?)\s*<\/changefreq>/);
    const priorityMatch = block.match(/<priority>\s*(.*?)\s*<\/priority>/);

    const rawFreq = changefreqMatch?.[1];
    const changeFrequency =
      rawFreq && VALID_CHANGE_FREQS.has(rawFreq)
        ? (rawFreq as ChangeFreq)
        : undefined;

    const priority = priorityMatch ? parseFloat(priorityMatch[1]) : undefined;
    const lastModified = lastmodMatch ? new Date(lastmodMatch[1]) : undefined;

    entries.push({
      url,
      ...(lastModified ? { lastModified } : {}),
      ...(changeFrequency ? { changeFrequency } : {}),
      ...(priority !== undefined && !isNaN(priority) ? { priority } : {}),
    });
  }

  return entries;
}

const LOCAL_ROUTES: MetadataRoute.Sitemap = [
  {
    url: `${TARGET_BASE}/pages/school-lp`,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${TARGET_BASE}/pages/school-uniform`,
    changeFrequency: "monthly",
    priority: 0.8,
  },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const results = await Promise.all(SOURCES.map(fetchSitemapEntries));

  const seen = new Set<string>();
  return [...LOCAL_ROUTES, ...results.flat()].filter(({ url }) => {
    if (seen.has(url)) return false;
    seen.add(url);
    return true;
  });
}

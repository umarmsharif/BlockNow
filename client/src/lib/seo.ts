export type SeoMeta = {
  title: string;
  description: string;
  url?: string;
};

export function applySeo(meta: SeoMeta) {
  document.title = meta.title;

  const setMeta = (selector: string, attrs: Record<string, string>) => {
    let el = document.head.querySelector(selector) as HTMLMetaElement | null;
    if (!el) {
      el = document.createElement("meta");
      Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
      document.head.appendChild(el);
      return;
    }
    Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
  };

  // Basic
  setMeta('meta[name="description"]', { name: "description", content: meta.description });

  // Open Graph
  setMeta('meta[property="og:title"]', { property: "og:title", content: meta.title });
  setMeta('meta[property="og:description"]', { property: "og:description", content: meta.description });
  setMeta('meta[property="og:type"]', { property: "og:type", content: "website" });

  const url = meta.url ?? window.location.href;
  setMeta('meta[property="og:url"]', { property: "og:url", content: url });

  // Twitter
  setMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
  setMeta('meta[name="twitter:title"]', { name: "twitter:title", content: meta.title });
  setMeta('meta[name="twitter:description"]', { name: "twitter:description", content: meta.description });
}

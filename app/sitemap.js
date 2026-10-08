import { siteConfig } from '@/data/site';

export default function sitemap() {
  return [
    {
      url: siteConfig.url,
      lastModified: '2026-10-08',
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
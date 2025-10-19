import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Bridgeforth Consulting Group' },
    { name: 'description', content: 'Bridgeforth Consulting Group helps families and agencies navigate Medicaid, transitions, and care coordination with clarity and compassion.' },
    { rel: 'canonical', href: 'https://bridgeforthcg.com' },
    { property: 'og:title', content: 'Bridgeforth Consulting Group' },
    { property: 'og:description', content: 'Bridgeforth Consulting Group helps families and agencies navigate Medicaid, transitions, and care coordination with clarity and compassion.' },
  { property: 'og:image', content: '/og/home-1200x630.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ];
}

export default function Home() {
  return <Welcome />;
}

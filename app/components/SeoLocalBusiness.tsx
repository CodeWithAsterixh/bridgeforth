export default function SeoLocalBusiness() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Bridgeforth Consulting Group',
    telephone: '(404) 730-9818',
    email: 'info@bridgeforthcg.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2086 Jodeco Rd #1015',
      addressLocality: 'McDonough',
      addressRegion: 'GA',
      postalCode: '30253',
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

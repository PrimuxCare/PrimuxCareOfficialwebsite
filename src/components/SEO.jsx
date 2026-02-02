import { Helmet } from "react-helmet-async";

export default function SEO({ title, description, url, image }) {
  return (
    <Helmet>
      {/* Page title & description */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* OpenGraph (for Facebook, LinkedIn, etc.) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
}

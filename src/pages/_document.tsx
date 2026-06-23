import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Primary Meta Tags */}
        <title>
          Uttam Singhal | UI/UX Designer | Product Designer | SaaS & Enterprise Design Expert
        </title>
        <meta
          name="description"
          content="UI/UX Designer with 3+ years of experience designing SaaS platforms, AI products, enterprise dashboards, and responsive web and mobile applications. Specialized in Figma, user research, wireframing, prototyping, design systems, and developer handoff."
        />
        <meta
          name="keywords"
          content="Uttam Singhal, UI UX Designer, Product Designer, SaaS Designer, Enterprise UI Designer, Dashboard Designer, Figma Expert, UX Research, Design Systems, Wireframing, Prototyping, User Flows, Information Architecture, AI Product Designer, Responsive Design, Developer Handoff, Figma Dev Mode, Rajasthan, India"
        />
        <meta name="author" content="Uttam Singhal" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags for Social Media */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Uttam Singhal | UI/UX Designer | Product Designer"
        />
        <meta
          property="og:description"
          content="Explore the portfolio of Uttam Singhal, a UI/UX Designer with expertise in SaaS products, AI platforms, enterprise dashboards, design systems, and responsive web & mobile experiences."
        />
        <meta
          property="og:url"
          content="https://my-portfolio-rust-six-10.vercel.app"
        />
        <meta property="og:site_name" content="Uttam Singhal Portfolio" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Uttam Singhal - UI/UX Designer"
        />
        <meta
          name="twitter:description"
          content="UI/UX Designer experienced in creating modern, user-centric web and mobile designs using Figma, Adobe XD, and modern frontend frameworks."
        />

        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#6366f1" />
        <meta name="msapplication-TileColor" content="#6366f1" />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://my-portfolio-rust-six-10.vercel.app"
        />
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/Favicon.jpg" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/Favicon.jpg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/Favicon.jpg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/Favicon.jpg"
        />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Uttam Singhal",
              jobTitle: "UI/UX Designer & Product Designer",
              description:
                "UI/UX Designer with 3+ years of experience designing SaaS products, AI platforms, enterprise dashboards, and responsive web & mobile applications.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Sri Ganganagar",
                addressRegion: "Rajasthan",
                addressCountry: "India",
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Surendra Group of Institutions",
              },
              knowsAbout: [
                "UI/UX Design",
                "Product Design",
                "Figma",
                "Design Systems",
                "User Research",
                "Wireframing",
                "Interactive Prototyping",
                "Dashboard Design",
                "Enterprise Applications",
                "SaaS Platforms",
                "AI Products",
                "Information Architecture",
                "Responsive Design",
                "Accessibility",
                "Usability Testing",
                "Developer Handoff",
                "Figma Dev Mode",
                "React.js",
                "Next.js",
                "Tailwind CSS"
              ],
              sameAs: [
                "https://github.com/Uttamg61001",
                "https://www.linkedin.com/in/uttam-singhal-489130244/",
                "https://my-portfolio-rust-six-10.vercel.app"
              ]
            }),
          }}
        />
      </Head>

      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

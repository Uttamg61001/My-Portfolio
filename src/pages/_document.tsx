import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Primary Meta Tags */}
        <title>
          Uttam Singhal - UI/UX Designer | Product & Interaction Design Specialist
        </title>
        <meta
          name="description"
          content="Uttam Singhal is an experienced UI/UX Designer skilled in creating intuitive, user-centered designs for web and mobile platforms. Expert in Figma, Adobe XD, and responsive interfaces that balance user needs with business goals."
        />
        <meta
          name="keywords"
          content="Uttam Singhal, UI/UX Designer, Product Designer, Figma Expert, Interaction Design, Wireframing, Prototyping, Frontend Designer, React UI, Next.js UI, Sri Ganganagar, Rajasthan, India"
        />
        <meta name="author" content="Uttam Singhal" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags for Social Media */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Uttam Singhal - UI/UX Designer | Product & Interaction Design Specialist"
        />
        <meta
          property="og:description"
          content="Experienced UI/UX Designer specializing in web and mobile design, wireframing, prototyping, and responsive interfaces. Passionate about creating visually appealing and functional user experiences."
        />
        <meta property="og:url" content="https://resume-fawn-ten.vercel.app/portfolio" />
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
        <link rel="canonical" href="https://resume-fawn-ten.vercel.app/portfolio" />

        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Uttam Singhal",
              jobTitle: "UI/UX Designer",
              description:
                "UI/UX Designer experienced in creating intuitive, user-friendly designs for web and mobile platforms. Skilled in Figma, Adobe XD, prototyping, and responsive design.",
              email: "uttamg61001@gmail.com",
              telephone: "+91-7062467187",
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
                "Figma",
                "Adobe XD",
                "Prototyping",
                "Wireframing",
                "User Research",
                "Interaction Design",
                "Typography",
                "Color Theory",
                "React.js",
                "Next.js",
                "Tailwind CSS",
                "Material-UI",
                "Chakra-UI"
              ],
              sameAs: [
                "https://github.com/Uttamg61001",
                "https://www.linkedin.com/in/uttam-singhal-489130244/",
                "https://resume-fawn-ten.vercel.app/portfolio"
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

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Primary Meta Tags */}
        <title>
          Uttam Singhal - Frontend Developer | React.js & Next.js Specialist
        </title>
        <meta
          name="description"
          content="Vikas Pandey is a skilled frontend developer with 2+ years of experience in React.js, Next.js, TypeScript, and modern web technologies. Specializing in responsive, user-friendly web applications with expertise in Socket.io, Firebase, and Redux."
        />
        <meta
          name="keywords"
          content="Vikas Pandey, Frontend Developer, React.js Developer, Next.js Developer, JavaScript, TypeScript, Web Developer, UI/UX, Yamunanagar, Haryana, India"
        />
        <meta name="author" content="Vikas Pandey" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags for Social Media */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Vikas Pandey - Frontend Developer | React.js & Next.js Specialist"
        />
        <meta
          property="og:description"
          content="Experienced frontend developer specializing in React.js, Next.js, and TypeScript. Creating responsive web applications with modern technologies like Socket.io, Firebase, and Redux."
        />
        <meta property="og:url" content="https://vikaspandey.dev" />
        <meta property="og:site_name" content="Vikas Pandey Portfolio" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Vikas Pandey - Frontend Developer"
        />
        <meta
          name="twitter:description"
          content="Frontend developer with expertise in React.js, Next.js, TypeScript. Building responsive web applications with modern technologies."
        />

        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://vikaspandey.dev" />

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
              name: "Vikas Pandey",
              jobTitle: "Frontend Developer",
              description:
                "Frontend developer with expertise in React.js, Next.js, TypeScript, and modern web technologies",
              email: "vikaspandey8635@gmail.com",
              telephone: "+91-8307225020",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Yamunanagar",
                addressRegion: "Haryana",
                addressCountry: "India",
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Kurukshetra University",
              },
              knowsAbout: [
                "React.js",
                "Next.js",
                "JavaScript",
                "TypeScript",
                "HTML/CSS",
                "Redux",
                "Socket.io",
                "Firebase",
                "Tailwind CSS",
              ],
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

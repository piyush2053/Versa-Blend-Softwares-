import Globe from "../../Chunks/Globe/Globe";
import ClientReviews from "../../Sections/ClientReview/Review";
import { Helmet } from "react-helmet";
import OurProducts from "../../Sections/OurProducts/OurProducts";
import NeonButton from "../../Chunks/Button/NeonButton";
import MapComponent from "../../Chunks/Globe/GlobeInteractive";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Versa Blend Softwares - Web & App Development</title>
        <meta
          name="description"
          content="VBS (Versa Blend Softwares) offers innovative web and app development services. Get cutting-edge digital solutions for your business."
        />
        <meta name="keywords" content="web development, app development, IT solutions, software company, digital transformation" />
        <meta name="author" content="Versa Blend Softwares" />

        <meta property="og:title" content="VBS - Web & App Development Experts" />
        <meta property="og:description" content="VBS provides top-tier web and app development services for businesses worldwide." />
        <meta property="og:image" content="URL_to_image_or_logo" />
        <meta property="og:url" content="https://www.versablendsoftwares.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="VBS - Software Solutions & Web Development" />
        <meta name="twitter:description" content="Get expert web and app development services with Versa Blend Softwares." />
        <meta name="twitter:image" content="URL_to_image_or_logo" />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="canonical" href="https://www.versablendsoftwares.com" />

        <meta name="robots" content="index, follow" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Versa Blend Softwares",
            "url": "https://www.versablendsoftwares.com",
            "logo": "URL_to_logo",
            "description": "VBS offers web and app development services for businesses worldwide.",
            "sameAs": [
              "https://www.facebook.com/profile.php?id=61568561412969",
              "https://www.linkedin.com/company/vbs-versa-blend-softwares/"
            ]
          })}
        </script>

        <link rel="icon" type="image/png" href="/favicon.png" />

        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Language" content="en" />
      </Helmet>

      <Globe />

      <div className="mt-5">
        <OurProducts />
      </div>
      <NeonButton text="+ Contact Us for Enquiry" />
      <div className="my-1 flex justify-center items-center">
        <p className="font-thin text-[33px]">Locate Us</p>
      </div>
      <MapComponent />
      <div className="mt-3">
        <ClientReviews />
      </div>
    </div>
  );
}

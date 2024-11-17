import ClientReviews from "../../Sections/ClientReview/Review";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Versa Blend Softwares</title>
        <meta
          name="description"
          content="VBS (Versa Blend Softwares) offers innovative web development, software solutions, and app development services to bring your ideas to life. Partner with us for cutting-edge digital solutions."
        />
        <meta name="keywords" content="VBS, Versa Blend Softwares, web development, app development, software solutions, IT services, digital transformation, custom software development, mobile app development, enterprise solutions" />
        <meta name="author" content="VBS - Versa Blend Softwares" />
        <meta property="og:title" content="VBS - Versa Blend Softwares: Web and App Development" />
        <meta property="og:description" content="VBS provides high-quality IT services including web development, app development, and software solutions to help businesses innovate and succeed in the digital world." />
        <meta property="og:image" content="URL_to_image_or_logo" />
        <meta property="og:url" content="https://www.versablendsoftwares.com" />
        <meta name="twitter:title" content="VBS - Versa Blend Softwares: Web & App Development Experts" />
        <meta name="twitter:description" content="VBS offers cutting-edge web and app development services, custom software solutions, and digital transformation strategies for modern businesses." />
        <meta name="twitter:image" content="URL_to_image_or_logo" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="mt-10">
        <ClientReviews />
      </div>
    </div>
  );
}

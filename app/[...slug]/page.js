import { BlockRenderer } from "components/BlockRenderer";
import { getPage } from "utils/getPage";
import { notFound } from "next/navigation";
import { getSeo } from "utils/getSeo";
import { Footer } from "components/Footer";
import { MainMenu } from "components/MainMenu";
import { getMenu } from "utils/getMenu";
import { Analytics } from "@vercel/analytics/react";

export default async function Page({ params }) {
  // ADD LOGGING TO SEE WHAT'S HAPPENING
  console.log("PARAMS:", params);
  console.log("SLUG:", params.slug);
  console.log("JOINED SLUG:", params.slug.join("/"));

  let data;
  try {
    data = await getPage(params.slug.join("/"));
    console.log("PAGE DATA:", data);
  } catch (error) {
    console.error("getPage ERROR:", error);
    return <div>Error loading page: {error.message}</div>;
  }

  const menu = {
    mainMenuItems: [
      { id: "1", destination: "/about", label: "About", target: "" },
      { id: "2", destination: "/contact", label: "Contact", target: "" },
      { id: "3", destination: "/services", label: "Services", target: "" },
      { id: "4", destination: "/portfolio", label: "Portfolio", target: "" },
      {
        id: "5",
        destination: "https://thekeepsakepress.co.uk/",
        label: "Shop",
        target: "_blank",
      },
    ],
  };

  if (!data) {
    notFound();
  }

  return (
    <>
      <header>
        <MainMenu items={menu.mainMenuItems} />
      </header>
      <main className="pt-[80px] md:pt-0">
        <BlockRenderer blocks={data} />
      </main>
      <Footer />
      <Analytics />
    </>
  );
}

export async function generateMetadata({ params }) {
  try {
    console.log("METADATA PARAMS:", params);
    const seo = await getSeo(params.slug.join("/"));
    return {
      title: seo?.title || "Thea Mallorie",
      description: seo?.description || "",
    };
  } catch (error) {
    console.error("getSeo ERROR:", error);
    return {
      title: "Thea Mallorie",
      description: "",
    };
  }
}

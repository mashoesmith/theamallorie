import { BlockRenderer } from "components/BlockRenderer";
import { getPage } from "utils/getPage";
import { notFound } from "next/navigation";
import { getSeo } from "utils/getSeo";
import { Footer } from "components/Footer";
import { MainMenu } from "components/MainMenu";
import { getMenu } from "utils/getMenu";
import { Analytics } from "@vercel/analytics/react";

export default async function Page({ params }) {
  const data = await getPage(params.slug.join("/"));

  // Add fallback menu with error handling
  let menu = { mainMenuItems: [] };
  try {
    menu = await getMenu();
  } catch (error) {
    console.error("Failed to load menu:", error);
    // Hardcoded fallback menu
    menu = {
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
  }

  if (!data) {
    notFound();
  }

  console.log("data", data);

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
  const seo = await getSeo(params.slug.join("/"));
  return {
    title: seo?.title || "",
    description: seo?.description || "",
  };
}

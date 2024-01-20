import { BlockRenderer } from "components/BlockRenderer";
import { getPage } from "utils/getPage";
import { notFound } from "next/navigation";
import { getSeo } from "utils/getSeo";
import { Footer } from "components/Footer";
import { MainMenu } from "components/MainMenu";
import { getMenu } from "utils/getMenu";

export default async function Page({ params }) {
  const data = await getPage(params.slug.join("/"));
  const menu = await getMenu();
  if (!data) {
    notFound();
  }

  console.log("data", data);

  return (
    <div className="pt-[80px] md:pt-0">
      <MainMenu items={menu.mainMenuItems} />
      <BlockRenderer blocks={data} />
      <Footer />
    </div>
  );
}

export async function generateMetadata({ params }) {
  const seo = await getSeo(params.slug.join("/"));
  return {
    title: seo?.title || "",
    description: seo?.description || "",
  };
}

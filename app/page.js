import { getPage } from "utils/getPage";
import { notFound } from "next/navigation";
import { getSeo } from "utils/getSeo";
import { HomePage } from "components/HomePage";

export default async function Home() {
  const data = await getPage("/");

  if (!data) {
    notFound();
  }
  return <HomePage />;
}

export async function generateMetadata() {
  const seo = await getSeo("/");
  return {
    title: seo?.title || "",
    description: seo?.description || "",
  };
}

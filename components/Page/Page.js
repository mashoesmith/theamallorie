import { MainMenu } from "components/MainMenu/MainMenu";
import { BlockRenderer } from "components/BlockRenderer";
import Head from "next/head";
import { HomePage } from "components/HomePage";
import { Footer } from "components/Footer";

export const Page = (props) => {
  console.log("PAGE PROPS :", props);
  if (props.mouseHouse.mouseHouse) {
    return (
      <div>
        {
          <Head>
            <title>{props.seo.title}</title>
            <meta name="description" content={props.seo.metaDesc} />
          </Head>
        }
        <HomePage />
      </div>
    );
  } else {
    return (
      <div>
        {
          <Head>
            <title>{props.seo.title}</title>
            <meta name="description" content={props.seo.metaDesc} />
          </Head>
        }
        <nav>
          <MainMenu
            items={props.mainMenuItems}
            callToActionDestination={props.callToActionDestination}
            callToActionLabel={props.callToActionLabel}
          />
        </nav>
        <main>
          <BlockRenderer blocks={props.blocks} />
        </main>
        <Footer />
      </div>
    );
  }
};

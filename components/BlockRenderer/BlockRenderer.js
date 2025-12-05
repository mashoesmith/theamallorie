import { CallToActionButton } from "components/CallToActionButton/CallToActionButton";
import { Column } from "components/Columns/Column";
import { Columns } from "components/Columns/Columns";
import { Cover } from "components/Cover";
import { FormspreeForm } from "components/FormspreeForm/FormspreeForm";
import { Gallery } from "components/Gallery/Gallery";
import { Heading } from "components/Heading";
import { Paragraph } from "components/Paragraph";
import { SearchProjects } from "components/SearchProjects";
import Image from "next/image";
import { theme } from "theme";
import { Separator } from "components/Separator";
import Link from "next/link";
import { Spacer } from "components/Spacer";

export const BlockRenderer = ({ blocks }) => {
  if (!Array.isArray(blocks)) {
    return null;
  }

  return blocks.map((block) => {
    switch (block.name) {
      case "core/gallery": {
        return (
          <Gallery
            key={block.id}
            columns={block.attributes?.columns || 3}
            cropImages={block.attributes?.imageCrop}
            items={block.innerBlocks}
            classNames={block.attributes?.className}
          />
        );
      }
      case "acf/formspreeform": {
        return (
          <FormspreeForm
            key={block.id}
            formId={block.attributes?.data.form_id}
          />
        );
      }
      case "acf/ctabutton": {
        return (
          <CallToActionButton
            key={block.id}
            buttonLabel={block.attributes?.data.label}
            destination={block.attributes?.data.destination.url || "/"}
            tab={block.attributes?.data.destination.target}
            align={block.attributes?.data.align}
            classNames={block.attributes?.className}
          />
        );
      }

      // case "core/buttons": {
      //   return (
      //     <div className={block.attributes?.className}>
      //       {block.innerBlocks?.map((inner) => {
      //         if (inner.name === "core/button") {
      //           return (
      //             <CallToActionButton
      //               key={inner.id}
      //               buttonLabel={inner.attributes?.content}
      //               destination={inner.attributes?.url || "/"}
      //               tab={inner.attributes?.linkTarget || "_blank"}
      //               align={inner.attributes?.align || "center"}
      //               classNames={inner.attributes?.className}
      //             />
      //           );
      //         }
      //         return null;
      //       })}
      //     </div>
      //   );
      // }

      case "core/paragraph": {
        console.log("PARAGRAPH: ", block.attributes);
        return (
          <Paragraph
            key={block.id}
            textAlign={block.attributes?.textAlign}
            content={block.attributes?.content}
            textColor={
              theme[block.attributes?.textColor] ||
              block.attributes?.style?.color?.text
            }
            dropCap={block.attributes?.dropCap || ""}
            classNames={block.attributes?.className}
          />
        );
      }
      case "core/post-title":
      case "core/heading": {
        return (
          <Heading
            key={block.id}
            level={block.attributes?.level}
            content={block.attributes?.content}
            textAlign={block.attributes?.textAlign}
            textColor={
              theme[block.attributes?.textColor] ||
              block.attributes?.style?.color?.text
            }
            classNames={block.attributes?.className}
          />
        );
      }
      case "core/cover": {
        console.log("BLOCK: ", block);
        return (
          <Cover
            key={block.id}
            background={block.attributes?.url}
            borderColor={
              theme[block.attributes?.borderColor] ||
              block.attributes?.style?.color?.border
            }
            borderWidth={block.attributes?.style?.border?.width}
          >
            <BlockRenderer
              blocks={block.innerBlocks}
              classNames={block.attributes?.className}
            />
          </Cover>
        );
      }
      case "acf/searchprojects": {
        return <SearchProjects key={block.id} />;
      }
      case "core/columns": {
        console.log("COLUMNS: ", block.attributes);
        return (
          <Columns
            key={block.id}
            isStackedOnMobile={block.attributes?.isStackedOnMobile}
            textColor={
              theme[block.attributes?.textColor] ||
              block.attributes?.style?.color?.text
            }
            backgroundColor={
              theme[block.attributes?.backgroundColor] ||
              block.attributes?.style?.color?.background
            }
            borderColor={
              theme[block.attributes?.borderColor] ||
              block.attributes?.style?.color?.border
            }
            borderWidth={block.attributes?.style?.border?.width}
            paddingTop={block.attributes?.style?.spacing?.padding?.top}
            paddingBottom={block.attributes?.style?.spacing?.padding?.bottom}
            paddingLeft={block.attributes?.style?.spacing?.padding?.left}
            paddingRight={block.attributes?.style?.spacing?.padding?.right}
            classNames={block.attributes?.className}
          >
            <BlockRenderer
              blocks={block.innerBlocks}
              classNames={block.attributes?.className}
            />
          </Columns>
        );
      }
      case "core/column": {
        return (
          <Column
            key={block.id}
            width={block.attributes?.width}
            textColor={
              theme[block.attributes?.textColor] ||
              block.attributes?.style?.color?.text
            }
            backgroundColor={
              theme[block.attributes?.backgroundColor] ||
              block.attributes?.style?.color?.background
            }
            borderColor={
              theme[block.attributes?.borderColor] ||
              block.attributes?.style?.color?.border
            }
            borderWidth={block.attributes?.style?.border?.width}
            paddingTop={block.attributes?.style?.spacing?.padding?.top}
            paddingBottom={block.attributes?.style?.spacing?.padding?.bottom}
            paddingLeft={block.attributes?.style?.spacing?.padding?.left}
            paddingRight={block.attributes?.style?.spacing?.padding?.right}
            classNames={block.attributes?.className}
          >
            <BlockRenderer
              blocks={block.innerBlocks}
              classNames={block.attributes?.className}
            />
          </Column>
        );
      }
      case "core/separator": {
        return (
          <Separator
            marginTop={block.attributes?.style?.spacing?.margin?.top}
            marginBottom={block.attributes?.style?.spacing?.margin?.bottom}
            classNames={block.attributes?.className}
          ></Separator>
        );
      }
      case "core/spacer": {
        return <Spacer classNames={block.attributes?.className}></Spacer>;
      }
      case "core/group":
      case "core/block": {
        return (
          <BlockRenderer
            key={block.id}
            blocks={block.innerBlocks}
            classNames={block.attributes?.className}
          />
        );
      }
      case "core/image": {
        return (
          <div
            style={{
              border: `${
                block.attributes?.style?.border?.width || "0px"
              } solid ${
                theme[block.attributes?.borderColor] ||
                block.attributes?.style?.border?.color ||
                ""
              }`,
              // width: `${block.attributes?.width || "auto"}`,
              // height: `${block.attributes?.height || "auto"}`,
            }}
            className="flex justify-center"
          >
            <a href={block.attributes?.href}>
              <Image
                priority
                key={block.id}
                src={block.attributes?.url}
                height={block.attributes?.height}
                width={block.attributes?.width}
                alt={block.attributes?.alt || ""}
                className={block.attributes?.className}
                // style={{
                //   width: `${block.attributes?.width || "auto"}`,
                //   height: `${block.attributes?.height || "auto"}`,
                // }}
              />
            </a>
          </div>
        );
      }
      default: {
        console.log("UNKNOWN: ", block);
        return null;
      }
    }
  });
};

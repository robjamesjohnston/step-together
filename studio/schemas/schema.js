// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Document types
import nav from "./documents/nav";
import homepage from "./documents/homepage";
import page from "./documents/page";
import person from "./documents/person";
import doc from "./documents/doc";
import footer from "./documents/footer";

// Object types
import navSection from "./objects/navSection";
import navLink from "./objects/navLink";
import blockContent from "./objects/blockContent";
import slider from "./objects/slider";
import sliderImage from "./objects/sliderImage";
import groupButton from "./objects/groupButton";
import infoBox from "./objects/infoBox";
import textBlock from "./objects/textBlock";
import articleImage from "./objects/articleImage";
import quoteBox from "./objects/quoteBox";
import singleButton from "./objects/singleButton";
import clientGroupHighlightCol from "./objects/clientGroupHighlightCol";
import link from "./objects/link";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    nav,
    homepage,
    page,
    person,
    doc,
    footer,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    navSection,
    navLink,
    slider,
    sliderImage,
    groupButton,
    infoBox,
    textBlock,
    articleImage,
    quoteBox,
    singleButton,
    clientGroupHighlightCol,
    link,
  ]),
});

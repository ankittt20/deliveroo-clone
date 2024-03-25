import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "txqusikw",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-08-31",
});

export const urlFor = (source) => imageUrlBuilder(client).image(source);

export default client;

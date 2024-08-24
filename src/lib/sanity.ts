import { apiVersion, dataset, projectId } from "@/sanity/env";
import imageUrlBuilder from "@sanity/image-url";
import { createClient, type ClientConfig } from "next-sanity";

const config: ClientConfig = {
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: false,
};

export const $sanity = createClient(config);

const builder = imageUrlBuilder($sanity);

export function urlFor(source: any) {
  return builder.image(source);
}

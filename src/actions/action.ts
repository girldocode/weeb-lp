import { client } from "@/sanity/lib/client";
import { FetchHeaderResponse } from "./@types";

export const getHeaderData = async (): Promise<FetchHeaderResponse | null> => {
  const query = `*[_type == "header"]{
      logo,
      navLinks,
      cta1,
      cta2
    }`;

  try {
    const data = await client.fetch<FetchHeaderResponse[]>(query);
    return data.length > 0 ? data[0] : null;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

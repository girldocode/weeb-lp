import { $Dev, $queries, $sanity } from "@/lib";
import { FetchUpperFooterResponse } from "./@types";

export async function FetchUpperFooter(): Promise<FetchUpperFooterResponse> {
  try {
    const data = await $sanity.fetch<FetchUpperFooterResponse[]>(
      $queries._upperFooter
    );
    return Promise.resolve(data[0]);
  } catch (error) {
    $Dev
      ? console.error("[FetchUpperFooter]: Error fetching data:", error)
      : null;

    return Promise.reject(error);
  }
}

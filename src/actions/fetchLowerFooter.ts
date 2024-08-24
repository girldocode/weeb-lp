import { $Dev, $queries, $sanity } from "@/lib";
import { FetchLowerFooterResponse } from "./@types";

export async function FetchLowerFooter(): Promise<FetchLowerFooterResponse> {
  try {
    const data = await $sanity.fetch<FetchLowerFooterResponse[]>(
      $queries._lowerFooter
    );
    return Promise.resolve(data[0]);
  } catch (error) {
    $Dev
      ? console.error("[FetchLowerFooter]: Error fetching data:", error)
      : null;

    return Promise.reject(error);
  }
}

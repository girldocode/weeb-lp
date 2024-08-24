import { $Dev, $queries, $sanity } from "@/lib";
import { FetchToolsSectionResponse } from "./@types";

export async function FetchToolsSection(): Promise<FetchToolsSectionResponse> {
  try {
    const data = await $sanity.fetch<FetchToolsSectionResponse[]>(
      $queries._toolsSection
    );
    return Promise.resolve(data[0]);
  } catch (error) {
    $Dev
      ? console.error("[FetchToolsSection]: Error fetching data:", error)
      : null;

    return Promise.reject(error);
  }
}

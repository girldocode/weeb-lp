import { $Dev, $queries, $sanity } from "@/lib";
import { FetchIdeasSectionResponse } from "./@types";

export async function FetchIdeasSection(): Promise<FetchIdeasSectionResponse> {
  try {
    const data = await $sanity.fetch<FetchIdeasSectionResponse[]>(
      $queries._ideasSection
    );
    return Promise.resolve(data[0]);
  } catch (error) {
    $Dev
      ? console.error("[FetchIdeasSection]: Error fetching data:", error)
      : null;

    return Promise.reject(error);
  }
}

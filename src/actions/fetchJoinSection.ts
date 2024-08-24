import { $Dev, $queries, $sanity } from "@/lib";
import { FetchJoinSectionResponse } from "./@types";

export async function FetchJoinSection(): Promise<FetchJoinSectionResponse> {
  try {
    const data = await $sanity.fetch<FetchJoinSectionResponse[]>(
      $queries._joinSection
    );
    return Promise.resolve(data[0]);
  } catch (error) {
    $Dev
      ? console.error("[FetchJoinSection]: Error fetching data:", error)
      : null;

    return Promise.reject(error);
  }
}

import { $Dev, $queries, $sanity } from "@/lib";
import { FetchTargetSectionResponse } from "./@types";

export async function FetchTargetSection(): Promise<FetchTargetSectionResponse> {
  try {
    const data = await $sanity.fetch<FetchTargetSectionResponse[]>(
      $queries._targetSection
    );
    return Promise.resolve(data[0]);
  } catch (error) {
    $Dev
      ? console.error("[FetchTargetSection]: Error fetching data:", error)
      : null;

    return Promise.reject(error);
  }
}

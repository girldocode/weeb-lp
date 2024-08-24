import { $Dev, $queries, $sanity } from "@/lib";
import { FetchlevelUpSectionResponse } from "./@types";

export async function FetchLevelUpSection(): Promise<FetchlevelUpSectionResponse> {
  try {
    const data = await $sanity.fetch<FetchlevelUpSectionResponse[]>(
      $queries._levelUpSection
    );
    return Promise.resolve(data[0]);
  } catch (error) {
    $Dev
      ? console.error("[FetchLevelUpSection]: Error fetching data:", error)
      : null;

    return Promise.reject(error);
  }
}

import { $Dev, $queries, $sanity } from "@/lib";
import { FetchWorkSectionResponse } from "./@types";

export async function FetchWorkSection(): Promise<FetchWorkSectionResponse> {
  try {
    const data = await $sanity.fetch<FetchWorkSectionResponse[]>(
      $queries._workSection
    );
    return Promise.resolve(data[0]);
  } catch (error) {
    $Dev
      ? console.error("[FetchWorkSection]: Error fetching data:", error)
      : null;

    return Promise.reject(error);
  }
}

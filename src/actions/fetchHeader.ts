import { $Dev, $queries, $sanity } from "@/lib";
import { FetchHeaderResponse } from "./@types";

export async function FetchHeader(): Promise<FetchHeaderResponse> {
  try {
    const data = await $sanity.fetch<FetchHeaderResponse[]>($queries._header);
    return Promise.resolve(data[0]);
  } catch (error) {
    $Dev ? console.error("[FetchHeader]: Error fetching data:", error) : null;

    return Promise.reject(error);
  }
}

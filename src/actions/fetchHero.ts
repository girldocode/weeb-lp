import { $Dev, $queries, $sanity } from "@/lib";
import { FetchHeroResponse } from "./@types";

export async function FetchHero(): Promise<FetchHeroResponse> {
  try {
    const data = await $sanity.fetch<FetchHeroResponse[]>($queries._hero);
    return Promise.resolve(data[0]);
  } catch (error) {
    $Dev ? console.error("[FetchHero]: Error fetching data:", error) : null;

    return Promise.reject(error);
  }
}

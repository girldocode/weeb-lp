import { $Dev, $queries, $sanity } from "@/lib";
import { FetchDesignEventsResponse } from "./@types";

export async function FetchDesignEvents(): Promise<FetchDesignEventsResponse> {
  try {
    const data = await $sanity.fetch<FetchDesignEventsResponse[]>(
      $queries._designEvents
    );
    return Promise.resolve(data[0]);
  } catch (error) {
    $Dev
      ? console.error("[FetchDesignEvents]: Error fetching data:", error)
      : null;

    return Promise.reject(error);
  }
}

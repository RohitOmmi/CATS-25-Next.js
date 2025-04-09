import { apis, apiHeaders } from "@/constants/api";

export async function getAllNews() {
  try {
    const response = await fetch(apis.allNews, {
      method: "GET",
      headers: apiHeaders,
    });

    // console.log(response)

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    // console.log(data, "ALL News DATA");
    return data?.data || [];
  } catch (error) {
    console.error("Error fetching home slider:", error);
    return [];
  }
}

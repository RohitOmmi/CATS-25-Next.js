import { apis, apiHeaders } from "@/constants/api";

export async function getEvents() {
  try {
    const response = await fetch(apis.allEvents, {
      method: "GET",
      headers: apiHeaders,
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    // console.log(data, "ALL EVENTS DATA");
    return data?.data || [];
  } catch (error) {
    console.error("Error fetching home slider:", error);
    return [];
  }
}

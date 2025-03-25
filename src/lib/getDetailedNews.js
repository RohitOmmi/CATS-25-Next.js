import { apis, apiHeaders } from "@/constants/api";

export async function getDetailedNews(slug) {
  try {
    const response = await fetch(`${apis.newsDetails}/${slug}`, {
      method: "GET",
      headers: apiHeaders,
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    // console.log(data);
    return data?.data;
  } catch (error) {
    console.error("Error fetching home slider:", error);
    return [];
  }
}

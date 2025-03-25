import { apis, apiHeaders } from "@/constants/api";

export async function getNewsByCategory(slug) {
  try {
    const response = await fetch(`${apis.newsByCategories}/${slug}`, {
      method: "GET",
      headers: apiHeaders,
      next: { revalidate: 86400 }, // Cache API for 24 hours
    });

    if (!response.ok) {
      throw new Error("Failed to fetch services");
    }

    const data = await response.json();
    return data?.data || [];
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
}

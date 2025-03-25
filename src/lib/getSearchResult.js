export const getSearchResult = async (
  searchTerm,
  searchApi,
  apiHeaders,
  setResults,
  setLoading
) => {
  if (!searchTerm) return setResults([]);

  setLoading(true);
  try {
    const response = await fetch(`${searchApi}/${searchTerm}`, {
      method: "GET",
      headers: apiHeaders,
    });
    const data = await response.json();
    setResults(data?.data || []);
  } catch (error) {
    console.error("Error fetching search results:", error);
    setResults([]);
  }
  setLoading(false);
};

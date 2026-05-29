import { useEffect, useMemo, useState } from "react";

function useSearch(
  data = [],
  options = {}
) {
  const {
    searchKeys = [
      "name",
      "category",
      "brand",
      "description",
    ],
    initialQuery = "",
  } = options;

  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState([]);

  const normalizedQuery = useMemo(
    () => query.trim().toLowerCase(),
    [query]
  );

  const filteredResults = useMemo(() => {
    if (!normalizedQuery) {
      return data;
    }

    return data.filter((item) =>
      searchKeys.some((key) => {
        const value = item?.[key];

        if (
          value === undefined ||
          value === null
        ) {
          return false;
        }

        return String(value)
          .toLowerCase()
          .includes(normalizedQuery);
      })
    );
  }, [
    data,
    normalizedQuery,
    searchKeys,
  ]);

  useEffect(() => {
    setResults(filteredResults);
  }, [filteredResults]);

  const clearSearch = () => {
    setQuery("");
  };

  return {
    query,
    setQuery,
    results,
    resultCount: results.length,
    hasResults: results.length > 0,
    isSearching:
      normalizedQuery.length > 0,
    clearSearch,
  };
}

export default useSearch;
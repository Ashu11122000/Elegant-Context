// src/hooks/usePagination.js

import { useEffect, useMemo, useState } from "react";

function usePagination(items = [], itemsPerPage = 12) {
  const [currentPage, setCurrentPage] = useState(1);

  const safeItems = Array.isArray(items) ? items : [];
  const safeItemsPerPage =
    Number.isInteger(itemsPerPage) && itemsPerPage > 0
      ? itemsPerPage
      : 12;

  const totalItems = safeItems.length;

  const totalPages = useMemo(() => {
    return Math.max(
      1,
      Math.ceil(totalItems / safeItemsPerPage)
    );
  }, [totalItems, safeItemsPerPage]);

  const paginatedItems = useMemo(() => {
    const startIndex =
      (currentPage - 1) * safeItemsPerPage;

    const endIndex = startIndex + safeItemsPerPage;

    return safeItems.slice(startIndex, endIndex);
  }, [safeItems, currentPage, safeItemsPerPage]);

  const goToPage = (pageNumber) => {
    if (!Number.isInteger(pageNumber)) {
      return;
    }

    const safePage = Math.min(
      Math.max(pageNumber, 1),
      totalPages
    );

    setCurrentPage(safePage);
  };

  const nextPage = () => {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, totalPages)
    );
  };

  const previousPage = () => {
    setCurrentPage((prevPage) =>
      Math.max(prevPage - 1, 1)
    );
  };

  const resetPagination = () => {
    setCurrentPage(1);
  };

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  return {
    currentPage,
    totalPages,
    totalItems,
    itemsPerPage: safeItemsPerPage,
    paginatedItems,
    goToPage,
    nextPage,
    previousPage,
    resetPagination,
    hasNextPage: currentPage < totalPages,
    hasPreviousPage: currentPage > 1,
  };
}

export default usePagination;
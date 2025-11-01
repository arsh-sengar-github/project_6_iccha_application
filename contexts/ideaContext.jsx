"use client";
import { createContext, useState, useEffect, useContext } from "react";

const QueryContext = createContext();

export const IdeaContext = ({ children }) => {
  const [query, setQuery] = useState();
  useEffect(() => {
    const sessionQuery = sessionStorage.getItem("query");
    if (sessionQuery) {
      return JSON.parse(sessionQuery);
    }
  }, []);
  const updateQuery = (newQueryData) => {
    setQuery((previousQueryData) => {
      const newQuery = { ...previousQueryData, ...newQueryData };
      sessionStorage.setItem("query", JSON.stringify(newQuery));
      return newQuery;
    });
  };
  return (
    <QueryContext.Provider value={{ query, updateQuery }}>
      {children}
    </QueryContext.Provider>
  );
};

export function useQueryContext() {
  return useContext(QueryContext);
}

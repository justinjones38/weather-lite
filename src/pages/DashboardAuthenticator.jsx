import { useEffect } from "react";
import { Outlet, Navigate, useOutletContext } from "react-router";

export default function DashboardAuthenticator() {
  const { data, loading, error, filteredResults, setFilteredResults } =
    useOutletContext();
  console.log(data);
  if ((!data && !loading) || error) {
    return (
      <Navigate
        to="/"
        state={{
          message: "Please enter a valid city before viewing dashboard",
        }}
      />
    );
  }
  return (
    <Outlet
      context={{ data, loading, error, filteredResults, setFilteredResults }}
    />
  );
}

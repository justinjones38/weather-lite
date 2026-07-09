import { Link, useNavigate, useOutletContext, Navigate } from "react-router";
import styles from "./Dashboard.module.css";
import { useEffect, useState } from "react";
import WeatherStats from "../components/WeatherStats"
import Input from "../components/Input";
import WeatherTable from "../components/tables/WeatherTable"

export default function Dashboard() {
  const {data, loading, error, filteredResults, setFilteredResults} = useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
  if(!data && !loading || error) {
    navigate("/", {state: {message: "Please enter a valid city before viewing dashboard"}});
  }
  }, [data, loading, error])

  const [filterText, setFilterText] = useState({
    timestamp: "",
    select: "",
  });
  const [tempRange, setTempRange] = useState({
    low: -Infinity,
    high: Infinity,
  });

  const handleFilterTextChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setFilterText((prev) => ({
      ...prev,
      [key]: value,
    }));

    setFilteredResults({
      ...data,
      hourly: data.hourly.filter(
        (hour) =>
          hour[key].toLowerCase().includes(value.toLowerCase()) &&
          hour.temperature > tempRange.low &&
          hour.temperature <= tempRange.high,
      ),
    });
  };

  const handleFilterSelectChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setFilterText((prev) => ({
      ...prev,
      [key]: value,
    }));

    const { lowTemp, highTemp } = getTempRange(value);
    setTempRange((prev) => ({
      ...prev,
      low: lowTemp,
      high: highTemp,
    }));

    setFilteredResults({
      ...data,
      hourly: data.hourly.filter(
        (hour) =>
          hour.temperature > lowTemp &&
          hour.temperature < highTemp &&
          hour.timestamp
            .toLowerCase()
            .includes(filterText.timestamp.toLowerCase()),
      ),
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Weather Data</h1>
      {!loading && !data ? (
        <div className={styles.home}>
          <h3>Please return home to select a city</h3>
          <Link to="/" className={styles.homeBtn}>Home</Link>
          </div>
      ) : null} 
      {loading ? <h2>Loading...</h2> : null}
      {error ? <h2>Error: Cannot fetch data</h2> : null}
      {!loading && !error && data ? (
        <>
          <WeatherStats data={data} />
          <Input
            filterText={filterText}
            handleFilterTextChange={handleFilterTextChange}
            handleFilterSelectChange={handleFilterSelectChange}
          />
          <WeatherTable data={filteredResults} />
        </>
      ) : null}
    </div>
  );
}

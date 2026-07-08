import { Navigate, Outlet, useNavigate } from "react-router";
import Navbar from "../Navbar";
import styles from "./Layout.module.css"
import { useState } from "react";
import { fetchWeatherArr } from "../../api/api";

export default function Layout() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [filteredResults, setFilteredResults] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
      e.preventDefault();
      setLoading(true);
      navigate("dashboard");
      try {
        const fetchedWeatherData = await fetchWeatherArr(city);
        const updatedWeatherData = {
          ...fetchedWeatherData,
          hourly: fetchedWeatherData.hourly.time.map((timestamp, index) => ({
            timestamp,
            temperature: fetchedWeatherData.hourly.temperature_2m[index],
            apparentTemperature:
              fetchedWeatherData.hourly.apparent_temperature[index],
            relativeHumidity:
              fetchedWeatherData.hourly.relative_humidity_2m[index],
            windSpeed: fetchedWeatherData.hourly.wind_speed_10m[index],
          })),
          hourly_units: {
            timestamp: fetchedWeatherData.hourly_units.time,
            temperature: fetchedWeatherData.hourly_units.temperature_2m,
            apparentTemperature:
              fetchedWeatherData.hourly_units.apparent_temperature,
            relativeHumidity:
              fetchedWeatherData.hourly_units.relative_humidity_2m,
            windSpeed: fetchedWeatherData.hourly_units.wind_speed_10m,
          },
        };

        setData(updatedWeatherData);
        setFilteredResults(updatedWeatherData);
        setCity("");
        setError(false);
      } catch (error) {
        console.log(error);
        
        setError(true);
      } finally {
        setLoading(false);
      }
    }
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.contentWrapper}>
        <Outlet context={{city, setCity, handleSubmit, data, filteredResults, loading, error}} />
      </div>
    </div>
  )
}
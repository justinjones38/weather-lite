import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { fetchWeatherArr } from "./api/api";
import WeatherStats from "./components/WeatherStats";
import WeatherTable from "./components/WeatherTable";
import Input from "./components/Input";
import { getTempRange } from "./utils/utils";

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [filterText, setFilterText] = useState({
    timestamp: "",
    select: "",
  });
  const [filteredResults, setFilteredResults] = useState([]);
  const [tempRange, setTempRange] = useState({
    low: null,
    high: null,
  });

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const fetchedWeatherData = await fetchWeatherArr();
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
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleFilterTextChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setFilterText((prev) => ({
      ...prev,
      [key]: value,
    }));

    if (!tempRange.low && !tempRange.high) {
      setFilteredResults({
        ...data,
        hourly: data.hourly.filter((hour) =>
          hour[key].toLowerCase().includes(value.toLowerCase()),
        ),
      });
      return;
    }

    if (tempRange.low && !tempRange.high) {
      setFilteredResults({
        ...data,
        hourly: data.hourly.filter(
          (hour) =>
            hour[key].toLowerCase().includes(value.toLowerCase()) &&
            hour.temperature <= tempRange.high,
        ),
      });
      return;
    }
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

    if (!lowTemp && !highTemp) {
      setFilteredResults({
        ...data,
        hourly: data.hourly.filter((hour) =>
          hour.timestamp
            .toLowerCase()
            .includes(filterText.timestamp.toLowerCase()),
        ),
      });
      return;
    }

    if (lowTemp && !highTemp) {
      setFilteredResults({
        ...data,
        hourly: data.hourly.filter(
          (hour) =>
            hour.timestamp
              .toLowerCase()
              .includes(filterText.timestamp.toLowerCase()) &&
            hour.temperature <= highTemp,
        ),
      });
      return;
    }

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
  console.log(filteredResults);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Weather Data</h1>
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

import { useOutletContext } from "react-router";
import styles from "./WeatherGraphSelect.module.css";

export default function WeatherGraphSelect({ graph, handleChange, name }) {
  const { data } = useOutletContext();
  console.log(data);
  return (
    <select
      value={graph[name]}
      onChange={handleChange}
      name={name}
      className={styles.select}
    >
      <option value="temperature">
        Temperature ({data.hourly_units.temperature})
      </option>
      <option value="apparentTemperature">
        Apparent Temperature ({data.hourly_units.apparentTemperature})
      </option>
      <option value="relativeHumidity">
        Relative Humidity ({data.hourly_units.relativeHumidity})
      </option>
      <option value="windSpeed">
        Wind Speed ({data.hourly_units.windSpeed})
      </option>
      <option value="windGust">Wind Gust ({data.hourly_units.windGust})</option>
      <option value="visibility">
        Visibility ({data.hourly_units.visibility})
      </option>
      <option value="precipitationProbability">
        Precipitation Probability ({data.hourly_units.precipitationProbability})
      </option>
    </select>
  );
}

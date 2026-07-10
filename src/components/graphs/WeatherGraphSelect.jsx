import styles from "./WeatherGraphSelect.module.css"

export default function WeatherGraphSelect({ graph, handleChange, name }) {
  return (
    <select value={graph[name]} onChange={handleChange} name={name} className={styles.select}>
      <option value="temperature">Temperature</option>
      <option value="apparentTemperature">Apparent Temperature</option>
      <option value="relativeHumidity">Relative Humidity</option>
      <option value="windSpeed">Wind Speed</option>
      <option value="windGust">Wind Gust</option>
      <option value="visbility">Visibility</option>
      <option value="precipitationProbability">Precipitation Probability</option>
    </select>
  );
}

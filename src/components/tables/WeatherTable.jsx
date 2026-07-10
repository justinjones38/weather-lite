import useWindowWidth from "../../hooks/useWindowWidth";
import styles from "./WeatherTable.module.css";
import { Link } from "react-router";

export default function WeatherTable({ data }) {
  const { windowWidth } = useWindowWidth();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{data.hourly.length} weather items found</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Time</th>
            <th>Temperature</th>
            <th>Apparent Temperature</th>
            {windowWidth > 600 ? (
              <>
                <th className={styles.col}>Wind Speed</th>
                <th className={styles.col}>Humidity</th>
              </>
            ) : null}
          </tr>
        </thead>
        <tbody>
          {data.hourly.map((hour) => (
            <tr key={hour.timestamp}>
              <td>
                <Link to={hour.timestamp} className={styles.timestamp}>
                  {hour.timestamp}
                </Link>
              </td>

              <td>
                {hour.temperature}
                {data.hourly_units.temperature}
              </td>
              <td>
                {hour.apparentTemperature}
                {data.hourly_units.apparentTemperature}
              </td>
              {windowWidth > 600 ? (
                <>
                  <td className={styles.col}>
                    {hour.windSpeed} {data.hourly_units.windSpeed}
                  </td>
                  <td className={styles.col}>
                    {hour.relativeHumidity}
                    {data.hourly_units.relativeHumidity}
                  </td>
                </>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

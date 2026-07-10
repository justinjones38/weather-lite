import styles from "./DashboardDetail.module.css"
import { useParams, useOutletContext, Navigate } from "react-router"


export default function DashboardDetail() {
  const {data} = useOutletContext();
  const {id} = useParams();
  const weatherData = data.hourly.filter(item => item.timestamp === id)[0];
  console.log(weatherData, data);

  if(!weatherData) {
    return <Navigate to="/" state={{message: "Please enter a valid city to view dashboard details"}} />
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{data.city}, {data.admin}</h2>
      <div className={styles.contentWrapper}>
          <p className={styles.item}>
            Timestamp: <span>{weatherData.timestamp}</span>
          </p>
          <p className={styles.item}>
            Temperature: <span>{weatherData.temperature}{data.hourly_units.temperature}</span>
          </p>
          <p className={styles.item}>
            Feels Like Temperature: <span>{weatherData.apparentTemperature}{data.hourly_units.apparentTemperature}</span>
          </p>
          <p className={styles.item}>
            Relative Humidity: <span>{weatherData.relativeHumidity}{data.hourly_units.relativeHumidity}</span>
          </p>
          <p className={styles.item}>
            Wind Speed: <span>{weatherData.windSpeed} {data.hourly_units.windSpeed}</span>
          </p>

          <p className={styles.item}>
            Wind Gust: <span>{weatherData.windGust}{data.hourly_units.windGust}</span>
          </p>

          <p className={styles.item}>
            Visbility: <span>{weatherData.visbility} {data.hourly_units.visbility}</span>
          </p>

          <p className={styles.item}>
            Precipitation Probability: <span>{weatherData.precipitationProbability}{data.hourly_units.precipitationProbability}</span>
          </p>
      </div>
    </div>
  )
}

// 
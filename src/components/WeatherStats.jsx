import styles from "./WeatherStats.module.css";

export default function WeatherStats({ data }) {
  console.log(data);
  let totalApparentTemp = 0;
  let totalTemp = 0;
  let totalWindSpeed = 0;
  let totalHourLength = data.hourly.length;
  data.hourly.forEach((hour) => {
    totalTemp += hour.temperature;
    totalApparentTemp += hour.apparentTemperature;
    totalWindSpeed += hour.windSpeed;
  });

  let avgApparentTemp =
    Math.round((100 * totalApparentTemp) / totalHourLength) / 100;

  let avgTemp = Math.round((100 * totalTemp) / totalHourLength) / 100;
  let avgWindSpeed = Math.round((100 * totalWindSpeed) / totalHourLength) / 100;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Average weather over the next 24 hours</h2>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <h3 className={styles.header}>City</h3>
          <p className={styles.value}>
            {data.city}, {data.admin}
          </p>
        </div>
        <div className={styles.card}>
          <h3 className={styles.header}>Average Temperature</h3>
          <p className={styles.value}>
            {avgTemp}
            {data.hourly_units.temperature}
          </p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.header}>Average Apparanent Temperature</h3>
          <p className={styles.value}>
            {avgApparentTemp}
            {data.hourly_units.apparentTemperature}
          </p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.header}>Average Wind Speed</h3>
          <p className={styles.value}>
            {avgWindSpeed} {data.hourly_units.windSpeed}
          </p>
        </div>
      </div>
    </div>
  );
}

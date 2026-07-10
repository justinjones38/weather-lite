import { useOutletContext } from "react-router";
import styles from "./WeatherGraphSummary.module.css";

export default function WeatherGraphSummary({ graph, name }) {
  const { data } = useOutletContext();

  const arr = data.hourly.map((item) => item[graph]);
  const maxValue = Math.max(...arr);
  const minValue = Math.min(...arr);
  const avgVal = (Math.sumPrecise(arr) / arr.length).toFixed(2);
  return (
    <div className={styles.container}>
      <h3 className={styles.subtitle}>{name} graph Summary</h3>
      <p className={styles.description}>
        The {name} graph produces a {graph} graph. This graph contains{" "}
        {data.hourly.length} items, which produced a max value of {maxValue}
        {data.hourly_units[graph]}, a min value of {minValue}
        {data.hourly_units[graph]}, and an average value of {avgVal}
        {data.hourly_units[graph]}.
      </p>
    </div>
  );
}

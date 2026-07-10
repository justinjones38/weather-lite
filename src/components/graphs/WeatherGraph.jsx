import { useState } from "react";
import styles from "./WeatherGraph.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from "recharts";
import WeatherGraphSelect from "./WeatherGraphSelect";
import { useOutletContext } from "react-router";

export default function WeatherGraph() {
  const {data} = useOutletContext();
  console.log(data);

  const [graph, setGraph] = useState({
    line: "temperature",
    bar: "apparentTemperature",
  });
  const handleChange = (e) =>
    setGraph((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  console.log(graph);
  console.log(data.hourly[0].windGust);

  return (
    <div className={styles.container}>
      <div className={styles.select}>
        <h2 className={styles.title}>Select data for the graphs</h2>
        <div className={styles.selectContainer}>
        <div className={styles.lineSelect}>
          <p className={styles.header}>Select line graph data</p>
          <WeatherGraphSelect
            graph={graph}
            handleChange={handleChange}
            name="line"
          />
        </div>
          <div className={styles.lineSelect}>
          <p className={styles.header}>Select bar graph data</p>
          <WeatherGraphSelect
            graph={graph}
            handleChange={handleChange}
            name="bar"
          />
        </div>
        </div>

      </div>
      <div className={styles.graphs}>
        <LineChart
          style={{ width: "100%", aspectRatio: 1.618, maxWidth: "600px" }}
          responsive
          data={data.hourly}
          margin={{
            top: 15,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <XAxis dataKey="timestamp" stroke="white" />
          <YAxis dataKey={graph.line} stroke="white" />
          <Line type="monotone" dataKey={graph.line} stroke="white" dot={false} />
        </LineChart>
        <BarChart
          style={{
            width: "100%",
            maxWidth: "600px",
            maxHeight: "70vh",
            aspectRatio: 1.618,
          }}
          responsive
          data={data.hourly}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <XAxis dataKey="timestamp" />
          <YAxis width="auto" />
          <Bar
            dataKey={graph.bar}
            fill="#8884d8"
            activeBar={{ fill: "pink", stroke: "blue" }}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </div>

    </div>
  );
}

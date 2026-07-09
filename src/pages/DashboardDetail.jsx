import styles from "./DashboardDetail.module.css"
import { useParams, useOutletContext, Navigate } from "react-router"


export default function DashboardDetail() {
  const {data} = useOutletContext();
  const {id} = useParams();
  const weatherData = data.hourly.filter(item => item.timestamp === id)[0];
  console.log(weatherData);

  if(!weatherData) {
    return <Navigate to="/" state={{message: "Please enter a valid city to view dashboard details"}} />
  }

  return 
}
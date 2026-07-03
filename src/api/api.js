export async function fetchWeatherArr(api_key) {
  const latitude = "34.0522";
  const longitude = "-118.2437";
  const data = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m,apparent_temperature&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch&`,
  );

  const response = await data.json();

  return response;
}

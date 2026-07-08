export async function fetchWeatherArr(city) {
  const latitude = "34.0522";
  const longitude = "-118.2437";
  const locationRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`);
  const locationData = await locationRes.json();
  const location = locationData.results[0];

  const data = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m,apparent_temperature&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch&`,
  );

  const response = await data.json();
  console.log(locationData)
  console.log(response);


  return {...response, city: locationData.results[0].name, admin: locationData.results[0].admin1}
}

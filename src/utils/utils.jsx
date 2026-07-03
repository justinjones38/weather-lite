export function getTempRange(feeling) {
  switch (feeling) {
    case "frosty":
      return { lowTemp: -Infinity, highTemp: 20 };
    case "cold":
      return { lowTemp: 20, highTemp: 40 };

    case "cool":
      return { lowTemp: 40, highTemp: 60 };

    case "comfortable":
      return { lowTemp: 60, highTemp: 80 };

    case "hot":
      return { lowTemp: 80, highTemp: 100 };

    case "unbearable":
      return { lowTemp: 100, highTemp: Infinity };

    default:
      return { lowTemp: -Infinity, highTemp: Infinity };
  }
}

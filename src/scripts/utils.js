export function getIconByCode(code) {
  const codes = {
    "01d": "../imgs/sun.svg",
    "01n": "../imgs/moon.svg",
    "02d": "../imgs/cloudy-day.svg",
    "02n": "./imgs/cloudy-night.svg",
    "03d": "../imgs/cloud.svg",
    "03n": "../imgs/cloud.svg",
    "04d": "../imgs/cloudy.svg",
    "04n": "../imgs/cloudy.svg",
    "09d": "../imgs/rainy.svg",
    "09n": "../imgs/rainy.svg",
    "10d": "../imgs/rainy.svg",
    "10n": "../imgs/rainy.svg",
    "11d": "../imgs/lightning.svg",
    "11n": "../imgs/lightning.svg",
    "13d": "../imgs/snow.svg",
    "13n": "../imgs/snow.svg",
    "50d": "../imgs/mist.svg",
    "50n": "../imgs/mist.svg",
  };

  const image = new Image(100);
  image.src = codes[code];
  return image;
}

export function capitalize(string) {
  return string[0].toUpperCase() + string.substring(1);
}

export function timestampToDate(timestamp, timezone) {
  const date = new Date();
  date.setTime(timestamp * 1000);
  return {
    date: date.toLocaleDateString("en-US", {
      timeZone: timezone,
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    time: date.toLocaleTimeString("en-US", {
      timeZone: timezone,
      hour12: false,
    }),
  };
}

export function timestampToShortDate(timestamp, timezone) {
  const date = new Date();
  date.setTime(timestamp * 1000);
  return date.toLocaleDateString("en-US", {
    timeZone: timezone,
    day: "numeric",
    month: "short",
  });
}

export function timestampToWeekday(timestamp, timezone) {
  const date = new Date();
  date.setTime(timestamp * 1000);
  return date.toLocaleDateString("en-US", {
    timeZone: timezone,
    weekday: "long",
  });
}

export function timestampToCurrentHour(timestamp, timezone) {
  const date = new Date();
  date.setTime(timestamp * 1000);
  const timeString = date.toLocaleDateString("en-US", {
    timeZone: timezone,
    hour12: true,
    hour: "numeric",
  });
  const [, hour, label] = timeString.split(" ");
  return `${hour} ${label.toLowerCase()}`;
}

// export function roundUp(value) {
//   return Math.round(value);
// }

// export function roundUpToOne(value) {
//   return Math.round(value * 10) / 10;
// }

// export function setTempUnits(units) {
//   return units === "metric" ? "°C" : "°F";
// }

// export function setSpeedUnits(units) {
//   return units === "metric" ? "km/h" : "mph";
// }

export function convertTemp(value, units) {
  return units === "metric"
    ? `${Math.round(value)} °C`
    : `${Math.round(value * 1.8 + 32)} °F`;
}

export function convertSpeed(value, units) {
  return units === "metric"
    ? `${Math.round(value * 10) / 10} km/h`
    : `${Math.round((value / 1.609344) * 10) / 10} mph`;
}

export function getCurrentWeather(forecast, units) {
  const { name, current, timezone } = forecast;
  const { date, time } = timestampToDate(current.dt, timezone);
  return {
    description: current.weather[0].description
      .split(" ")
      .map((item) => capitalize(item))
      .join(" "),
    city: name,
    date,
    time,
    temp: convertTemp(current.temp, units),
    icon: current.weather[0].icon,
  };
}

export function getAdditionalInfo(forecast, units) {
  const { current, daily } = forecast;
  return {
    feelsLike: convertTemp(current.feels_like, units),
    humidity: `${current.humidity} %`,
    rainChance: `${daily[0].pop * 100} %`,
    windSpeed: convertSpeed(current.wind_speed, units),
  };
}

export function getDailyForecast(forecast, units) {
  const { daily, timezone } = forecast;
  return daily
    .map((day, index) => {
      if (index === 0) return null;
      return {
        day: timestampToWeekday(day.dt, timezone),
        date: timestampToShortDate(day.dt, timezone),
        maxTemp: convertTemp(day.temp.max, units),
        minTemp: convertTemp(day.temp.min, units),
        icon: day.weather[0].icon,
      };
    })
    .filter((item) => item !== null);
}

export function getHourlyForecast(forecast, units) {
  const { hourly, timezone } = forecast;
  return hourly
    .map((hour, index) => {
      if (index > 23) return null;
      return {
        hour: timestampToCurrentHour(hour.dt, timezone),
        temp: convertTemp(hour.temp, units),
        icon: hour.weather[0].icon,
      };
    })
    .filter((item) => item !== null);
}
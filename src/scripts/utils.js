export function getIconByCode(code) {
  const codes = {
    "01d": "./imgs/sun.svg",
    "01n": "./imgs/moon.svg",
    "02d": "./imgs/cloudy-day.svg",
    "02n": "./imgs/cloudy-night.svg",
    "03d": "./imgs/cloud.svg",
    "03n": "./imgs/cloud.svg",
    "04d": "./imgs/cloudy.svg",
    "04n": "./imgs/cloudy.svg",
    "09d": "./imgs/rainy.svg",
    "09n": "./imgs/rainy.svg",
    "10d": "./imgs/rainy.svg",
    "10n": "./imgs/rainy.svg",
    "11d": "./imgs/lightning.svg",
    "11n": "./imgs/lightning.svg",
    "13d": "./imgs/snow.svg",
    "13n": "./imgs/snow.svg",
    "50d": "./imgs/mist.svg",
    "50n": "./imgs/mist.svg",
  };
  return codes[code];
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

export function getTemp(value, units) {
 // if (units === "METRIC") return `${Math.round(value)} °C`;
  if (units) return `${Math.round(value * 1.8 + 32)} °F`;
  return `${Math.round(value)} °C`;
}

export function getSpeed(value, units) {
  //if (units === "METRIC") return `${Math.round(value * 10) / 10} km/h`;
  if (units) return `${Math.round((value / 1.609344) * 10) / 10} mph`;
  return `${Math.round(value * 10) / 10} km/h`;
}

export function getCurrentWeather(forecast, units = null) {
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
    temp: getTemp(current.temp, units),
    icon: current.weather[0].icon,
  };
}

export function getAdditionalInfo(forecast, units = null) {
  const { current, hourly } = forecast;
  return {
    feelsLike: getTemp(current.feels_like, units),
    humidity: `${current.humidity} %`,
    rainChance: `${hourly[0].pop * 100} %`,
    windSpeed: getSpeed(current.wind_speed, units),
  };
}

export function getDailyForecast(forecast, units = null) {
  const { daily, timezone } = forecast;
  return daily
    .map((day, index) => {
      if (index === 0) return null;
      return {
        weekday: timestampToWeekday(day.dt, timezone),
        date: timestampToShortDate(day.dt, timezone),
        maxTemp: getTemp(day.temp.max, units),
        minTemp: getTemp(day.temp.min, units),
        icon: day.weather[0].icon,
      };
    })
    .filter((item) => item !== null);
}

export function getHourlyForecast(forecast, units = null) {
  const { hourly, timezone } = forecast;
  const arr = hourly
    .map((hour, index) => {
      if (index > 23) return null;
      return {
        time: timestampToCurrentHour(hour.dt, timezone),
        temp: getTemp(hour.temp, units),
        icon: hour.weather[0].icon,
      };
    })
    .filter((item) => item !== null);
  const result = [];
  while (arr.length) {
    result.push(arr.splice(0, 8));
  }
  return result;
}

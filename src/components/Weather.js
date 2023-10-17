import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureHalf,
  faUmbrella,
  faCloudRain,
  faWind,
  faSun,
  faMoon,
  faCloudSun,
  faCloudMoon,
  faCloud,
  faCloudShowersHeavy,
  faCloudBolt,
  faSmog,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";

export function Termometer({ size }) {
  return <FontAwesomeIcon icon={faTemperatureHalf} size={size} />;
}

export function Umbrella({ size }) {
  return <FontAwesomeIcon icon={faUmbrella} size={size} />;
}

export function CloudRain({ size }) {
  return <FontAwesomeIcon icon={faCloudRain} size={size} />;
}

export function Wind({ size }) {
  return <FontAwesomeIcon icon={faWind} size={size} />;
}

export function Sun({ size }) {
  return <FontAwesomeIcon icon={faSun} size={size} />;
}

export function Moon({ size }) {
  return <FontAwesomeIcon icon={faMoon} size={size} />;
}

export function CloudyDay({ size }) {
  return <FontAwesomeIcon icon={faCloudSun} size={size} />;
}

export function CloudyNight({ size }) {
  return <FontAwesomeIcon icon={faCloudMoon} size={size} />;
}

export function Cloud({ size }) {
  return <FontAwesomeIcon icon={faCloud} size={size} />;
}

export function Rainy({ size }) {
  return <FontAwesomeIcon icon={faCloudRain} size={size} />;
}

export function Lightning({size}){
  return <FontAwesomeIcon icon={faCloudBolt} size={size} />;
}

export function Snow({ size }) {
  return <FontAwesomeIcon icon={faSnowflake} size={size} />;
}

export function Mist({ size }) {
  return <FontAwesomeIcon icon={faSmog} size={size} />;
}

export function getWeather(code, size) {
  const codes = {
    "01d": <Sun size={size} />,
    "01n": <Moon size={size} />,
    "02d": <CloudyDay size={size} />,
    "02n": <CloudyNight size={size} />,
    "03d": <Cloud size={size} />,
    "03n": <Cloud size={size} />,
    "04d": <Cloud size={size} />,
    "04n": <Cloud size={size} />,
    "09d": <Rainy size={size} />,
    "09n": <Rainy size={size} />,
    "10d": <Rainy size={size} />,
    "10n": <Rainy size={size} />,
    "11d": <Lightning size={size} />,
    "11n": <Lightning size={size} />,
    "13d": <Snow size={size} />,
    "13n": <Snow size={size} />,
    "50d": <Mist size={size} />,
    "50n": <Mist size={size} />,
  };
  return codes[code];
}
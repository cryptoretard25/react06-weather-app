import React from "react";
import { requestForecast } from "../scripts/api";
import * as utils from "../scripts/utils";

const forecast = {
  name: "Ivanovo",
  current: {
    dt: 1696980224,
    sunrise: 1696995557,
    sunset: 1697034382,
    temp: 2.86,
    feels_like: -1.52,
    pressure: 998,
    humidity: 96,
    dew_point: 2.29,
    uvi: 0,
    clouds: 93,
    visibility: 10000,
    wind_speed: 5.36,
    wind_deg: 310,
    wind_gust: 11.18,
    weather: [
      {
        id: 804,
        main: "Clouds",
        description: "overcast clouds",
        icon: "04n",
      },
    ],
  },
  daily: [
    {
      dt: 1697014800,
      sunrise: 1696995557,
      sunset: 1697034382,
      moonrise: 1696979400,
      moonset: 1697032860,
      moon_phase: 0.9,
      temp: {
        day: 4.28,
        min: -1.07,
        max: 5.39,
        night: 4.51,
        eve: 4.29,
        morn: -0.12,
      },
      feels_like: {
        day: 0.89,
        night: -0.52,
        eve: -0.03,
        morn: -3.45,
      },
      pressure: 1020,
      humidity: 65,
      dew_point: -1.85,
      wind_speed: 8.18,
      wind_deg: 208,
      wind_gust: 17.34,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: 100,
      pop: 0.17,
      uvi: 1.29,
    },
    {
      dt: 1697101200,
      sunrise: 1697082084,
      sunset: 1697120623,
      moonrise: 1697070600,
      moonset: 1697119500,
      moon_phase: 0.93,
      temp: {
        day: 7.53,
        min: 3.87,
        max: 10.75,
        night: 7.79,
        eve: 9.78,
        morn: 4.44,
      },
      feels_like: {
        day: 3.48,
        night: 4.96,
        eve: 6.29,
        morn: -0.62,
      },
      pressure: 998,
      humidity: 83,
      dew_point: 4.79,
      wind_speed: 8.72,
      wind_deg: 209,
      wind_gust: 18.83,
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d",
        },
      ],
      clouds: 100,
      pop: 1,
      rain: 9.72,
      uvi: 0.23,
    },
    {
      dt: 1697187600,
      sunrise: 1697168612,
      sunset: 1697206865,
      moonrise: 1697161620,
      moonset: 1697206080,
      moon_phase: 0.96,
      temp: {
        day: 10.04,
        min: 7.25,
        max: 10.73,
        night: 8.25,
        eve: 8.37,
        morn: 8.14,
      },
      feels_like: {
        day: 8.82,
        night: 5.41,
        eve: 5.29,
        morn: 4.58,
      },
      pressure: 1005,
      humidity: 66,
      dew_point: 3.84,
      wind_speed: 7.77,
      wind_deg: 261,
      wind_gust: 14.31,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: 68,
      pop: 0.8,
      rain: 0.43,
      uvi: 1.11,
    },
    {
      dt: 1697274000,
      sunrise: 1697255140,
      sunset: 1697293108,
      moonrise: 1697252760,
      moonset: 1697292720,
      moon_phase: 0,
      temp: {
        day: 6.95,
        min: 4.8,
        max: 12.22,
        night: 12.22,
        eve: 10.63,
        morn: 4.8,
      },
      feels_like: {
        day: 3.23,
        night: 11.82,
        eve: 10.07,
        morn: 1.6,
      },
      pressure: 1003,
      humidity: 85,
      dew_point: 4.52,
      wind_speed: 6.53,
      wind_deg: 222,
      wind_gust: 16.77,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: 100,
      pop: 0.99,
      rain: 2.51,
      uvi: 0.25,
    },
    {
      dt: 1697360400,
      sunrise: 1697341668,
      sunset: 1697379351,
      moonrise: 1697344020,
      moonset: 1697379360,
      moon_phase: 0.02,
      temp: {
        day: 16.37,
        min: 8.96,
        max: 16.37,
        night: 8.96,
        eve: 10.56,
        morn: 14,
      },
      feels_like: {
        day: 15.94,
        night: 7.54,
        eve: 9.63,
        morn: 13.62,
      },
      pressure: 997,
      humidity: 72,
      dew_point: 11.16,
      wind_speed: 7.82,
      wind_deg: 218,
      wind_gust: 18.51,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: 20,
      pop: 0.47,
      rain: 1.28,
      uvi: 1.26,
    },
    {
      dt: 1697446800,
      sunrise: 1697428197,
      sunset: 1697465595,
      moonrise: 1697435520,
      moonset: 1697466120,
      moon_phase: 0.05,
      temp: {
        day: 7.36,
        min: 5.51,
        max: 8.02,
        night: 5.51,
        eve: 6.71,
        morn: 7.74,
      },
      feels_like: {
        day: 6.73,
        night: 3.82,
        eve: 5.43,
        morn: 6.5,
      },
      pressure: 1001,
      humidity: 86,
      dew_point: 5.16,
      wind_speed: 2.39,
      wind_deg: 221,
      wind_gust: 6.25,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: 100,
      pop: 1,
      rain: 5.94,
      uvi: 2,
    },
    {
      dt: 1697533200,
      sunrise: 1697514727,
      sunset: 1697551840,
      moonrise: 1697527320,
      moonset: 1697553120,
      moon_phase: 0.09,
      temp: {
        day: 3.95,
        min: 3.95,
        max: 6.18,
        night: 4.08,
        eve: 4.72,
        morn: 5.43,
      },
      feels_like: {
        day: 0.19,
        night: -0.17,
        eve: 0.47,
        morn: 3.02,
      },
      pressure: 997,
      humidity: 96,
      dew_point: 3.25,
      wind_speed: 6.18,
      wind_deg: 280,
      wind_gust: 12.42,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: 100,
      pop: 0.76,
      rain: 3.47,
      uvi: 2,
    },
    {
      dt: 1697619600,
      sunrise: 1697601257,
      sunset: 1697638086,
      moonrise: 1697619300,
      moonset: 1697640480,
      moon_phase: 0.12,
      temp: {
        day: 3,
        min: 0.91,
        max: 4.99,
        night: 0.91,
        eve: 2.03,
        morn: 1.51,
      },
      feels_like: {
        day: -0.84,
        night: -1.99,
        eve: -1.33,
        morn: -3.29,
      },
      pressure: 1011,
      humidity: 68,
      dew_point: -2.35,
      wind_speed: 5.99,
      wind_deg: 277,
      wind_gust: 11.92,
      weather: [
        {
          id: 616,
          main: "Snow",
          description: "rain and snow",
          icon: "13d",
        },
      ],
      clouds: 98,
      pop: 0.4,
      rain: 0.13,
      snow: 0.63,
      uvi: 2,
    },
  ],
  hourly: [
    {
      dt: 1696978800,
      temp: 2.86,
      feels_like: -0.14,
      pressure: 998,
      humidity: 96,
      dew_point: 2.29,
      uvi: 0,
      clouds: 93,
      visibility: 10000,
      wind_speed: 3.09,
      wind_deg: 299,
      wind_gust: 7.67,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1696982400,
      temp: 2.3,
      feels_like: -0.67,
      pressure: 1002,
      humidity: 95,
      dew_point: 1.58,
      uvi: 0,
      clouds: 92,
      visibility: 10000,
      wind_speed: 2.92,
      wind_deg: 294,
      wind_gust: 7.32,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1696986000,
      temp: 1.57,
      feels_like: -1.56,
      pressure: 1006,
      humidity: 95,
      dew_point: 0.86,
      uvi: 0,
      clouds: 62,
      visibility: 10000,
      wind_speed: 2.93,
      wind_deg: 291,
      wind_gust: 7.26,
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1696989600,
      temp: 0.7,
      feels_like: -2.48,
      pressure: 1011,
      humidity: 97,
      dew_point: 0.28,
      uvi: 0,
      clouds: 49,
      visibility: 10000,
      wind_speed: 2.8,
      wind_deg: 288,
      wind_gust: 7.43,
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1696993200,
      temp: -0.12,
      feels_like: -3.45,
      pressure: 1015,
      humidity: 96,
      dew_point: -0.61,
      uvi: 0,
      clouds: 37,
      visibility: 10000,
      wind_speed: 2.79,
      wind_deg: 286,
      wind_gust: 7.43,
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1696996800,
      temp: -1.07,
      feels_like: -4.41,
      pressure: 1019,
      humidity: 96,
      dew_point: -1.68,
      uvi: 0,
      clouds: 23,
      visibility: 10000,
      wind_speed: 2.61,
      wind_deg: 282,
      wind_gust: 6.92,
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1697000400,
      temp: 0.02,
      feels_like: -3.4,
      pressure: 1020,
      humidity: 90,
      dew_point: -1.42,
      uvi: 0.13,
      clouds: 24,
      visibility: 10000,
      wind_speed: 2.91,
      wind_deg: 280,
      wind_gust: 7.23,
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1697004000,
      temp: 1.58,
      feels_like: -1.74,
      pressure: 1020,
      humidity: 78,
      dew_point: -1.9,
      uvi: 0.41,
      clouds: 28,
      visibility: 10000,
      wind_speed: 3.17,
      wind_deg: 278,
      wind_gust: 5.39,
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1697007600,
      temp: 2.65,
      feels_like: -0.47,
      pressure: 1020,
      humidity: 71,
      dew_point: -2.11,
      uvi: 0.75,
      clouds: 100,
      visibility: 10000,
      wind_speed: 3.2,
      wind_deg: 268,
      wind_gust: 4.92,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1697011200,
      temp: 3.54,
      feels_like: 0.33,
      pressure: 1020,
      humidity: 67,
      dew_point: -2.01,
      uvi: 1.1,
      clouds: 100,
      visibility: 10000,
      wind_speed: 3.58,
      wind_deg: 256,
      wind_gust: 5.54,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1697014800,
      temp: 4.28,
      feels_like: 0.89,
      pressure: 1020,
      humidity: 65,
      dew_point: -1.85,
      uvi: 1.29,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.15,
      wind_deg: 241,
      wind_gust: 6.02,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1697018400,
      temp: 5.14,
      feels_like: 1.64,
      pressure: 1020,
      humidity: 59,
      dew_point: -2.21,
      uvi: 1.21,
      clouds: 95,
      visibility: 10000,
      wind_speed: 4.74,
      wind_deg: 240,
      wind_gust: 6.81,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1697022000,
      temp: 5.39,
      feels_like: 1.92,
      pressure: 1019,
      humidity: 59,
      dew_point: -2.13,
      uvi: 0.94,
      clouds: 96,
      visibility: 10000,
      wind_speed: 4.79,
      wind_deg: 233,
      wind_gust: 7.11,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1697025600,
      temp: 5.32,
      feels_like: 1.76,
      pressure: 1018,
      humidity: 62,
      dew_point: -1.52,
      uvi: 0.58,
      clouds: 97,
      visibility: 10000,
      wind_speed: 4.95,
      wind_deg: 222,
      wind_gust: 8.35,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1697029200,
      temp: 4.84,
      feels_like: 1.15,
      pressure: 1018,
      humidity: 66,
      dew_point: -1.18,
      uvi: 0.19,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.97,
      wind_deg: 216,
      wind_gust: 9.91,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1697032800,
      temp: 4.45,
      feels_like: 0.46,
      pressure: 1017,
      humidity: 67,
      dew_point: -1.19,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 5.4,
      wind_deg: 208,
      wind_gust: 11.5,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1697036400,
      temp: 4.29,
      feels_like: -0.03,
      pressure: 1017,
      humidity: 67,
      dew_point: -1.4,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 6.06,
      wind_deg: 202,
      wind_gust: 13.2,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1697040000,
      temp: 4.45,
      feels_like: -0.09,
      pressure: 1016,
      humidity: 65,
      dew_point: -1.77,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 6.72,
      wind_deg: 202,
      wind_gust: 14.4,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1697043600,
      temp: 4.44,
      feels_like: -0.36,
      pressure: 1015,
      humidity: 63,
      dew_point: -2.17,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 7.42,
      wind_deg: 202,
      wind_gust: 15.58,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1697047200,
      temp: 4.3,
      feels_like: -0.66,
      pressure: 1013,
      humidity: 62,
      dew_point: -2.33,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 7.77,
      wind_deg: 204,
      wind_gust: 16.87,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1697050800,
      temp: 4.27,
      feels_like: -0.76,
      pressure: 1012,
      humidity: 62,
      dew_point: -2.39,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 7.94,
      wind_deg: 206,
      wind_gust: 17.27,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      pop: 0.04,
    },
    {
      dt: 1697054400,
      temp: 4.51,
      feels_like: -0.52,
      pressure: 1011,
      humidity: 62,
      dew_point: -2.18,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 8.18,
      wind_deg: 208,
      wind_gust: 17.34,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      pop: 0.17,
    },
    {
      dt: 1697058000,
      temp: 4.66,
      feels_like: -0.5,
      pressure: 1009,
      humidity: 61,
      dew_point: -2.21,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 8.72,
      wind_deg: 209,
      wind_gust: 17.71,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      pop: 0.37,
    },
    {
      dt: 1697061600,
      temp: 4.29,
      feels_like: -0.92,
      pressure: 1008,
      humidity: 71,
      dew_point: -0.54,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 8.53,
      wind_deg: 212,
      wind_gust: 17.49,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      pop: 0.57,
      rain: {
        "1h": 0.59,
      },
    },
    {
      dt: 1697065200,
      temp: 4.21,
      feels_like: -1.02,
      pressure: 1007,
      humidity: 80,
      dew_point: 0.95,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 8.51,
      wind_deg: 214,
      wind_gust: 17.85,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      pop: 0.85,
      rain: {
        "1h": 0.83,
      },
    },
    {
      dt: 1697068800,
      temp: 3.88,
      feels_like: -1.5,
      pressure: 1006,
      humidity: 87,
      dew_point: 1.9,
      uvi: 0,
      clouds: 100,
      visibility: 9495,
      wind_speed: 8.68,
      wind_deg: 212,
      wind_gust: 18.14,
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10n",
        },
      ],
      pop: 1,
      rain: {
        "1h": 1.21,
      },
    },
    {
      dt: 1697072400,
      temp: 3.87,
      feels_like: -1.49,
      pressure: 1005,
      humidity: 88,
      dew_point: 2.01,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 8.59,
      wind_deg: 211,
      wind_gust: 18.02,
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10n",
        },
      ],
      pop: 0.91,
      rain: {
        "1h": 1.06,
      },
    },
    {
      dt: 1697076000,
      temp: 4.21,
      feels_like: -0.9,
      pressure: 1005,
      humidity: 86,
      dew_point: 1.98,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 8.14,
      wind_deg: 210,
      wind_gust: 17.67,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      pop: 0.87,
    },
    {
      dt: 1697079600,
      temp: 4.44,
      feels_like: -0.62,
      pressure: 1003,
      humidity: 85,
      dew_point: 1.99,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 8.19,
      wind_deg: 208,
      wind_gust: 17.75,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      pop: 0.79,
    },
    {
      dt: 1697083200,
      temp: 4.77,
      feels_like: -0.23,
      pressure: 1002,
      humidity: 84,
      dew_point: 2.19,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 8.32,
      wind_deg: 209,
      wind_gust: 18.17,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      pop: 0.75,
    },
    {
      dt: 1697086800,
      temp: 5.46,
      feels_like: 0.67,
      pressure: 1001,
      humidity: 82,
      dew_point: 2.7,
      uvi: 0.03,
      clouds: 100,
      visibility: 10000,
      wind_speed: 8.33,
      wind_deg: 208,
      wind_gust: 18.28,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      pop: 0.71,
    },
    {
      dt: 1697090400,
      temp: 6.11,
      feels_like: 1.48,
      pressure: 1000,
      humidity: 81,
      dew_point: 2.98,
      uvi: 0.11,
      clouds: 100,
      visibility: 10000,
      wind_speed: 8.46,
      wind_deg: 211,
      wind_gust: 18.83,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      pop: 0.92,
      rain: {
        "1h": 0.12,
      },
    },
    {
      dt: 1697094000,
      temp: 6.06,
      feels_like: 1.52,
      pressure: 1000,
      humidity: 83,
      dew_point: 3.3,
      uvi: 0.06,
      clouds: 100,
      visibility: 10000,
      wind_speed: 8.1,
      wind_deg: 213,
      wind_gust: 18.52,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      pop: 0.8,
      rain: {
        "1h": 0.93,
      },
    },
    {
      dt: 1697097600,
      temp: 7.26,
      feels_like: 3.1,
      pressure: 999,
      humidity: 76,
      dew_point: 3.27,
      uvi: 0.1,
      clouds: 100,
      visibility: 10000,
      wind_speed: 8.05,
      wind_deg: 217,
      wind_gust: 17.34,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      pop: 0.8,
      rain: {
        "1h": 0.31,
      },
    },
    {
      dt: 1697101200,
      temp: 7.53,
      feels_like: 3.48,
      pressure: 998,
      humidity: 83,
      dew_point: 4.79,
      uvi: 0.11,
      clouds: 100,
      visibility: 10000,
      wind_speed: 7.93,
      wind_deg: 217,
      wind_gust: 16.65,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      pop: 0.92,
      rain: {
        "1h": 0.88,
      },
    },
    {
      dt: 1697104800,
      temp: 7.9,
      feels_like: 4.03,
      pressure: 998,
      humidity: 87,
      dew_point: 5.75,
      uvi: 0.23,
      clouds: 100,
      visibility: 10000,
      wind_speed: 7.69,
      wind_deg: 222,
      wind_gust: 16.71,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      pop: 1,
      rain: {
        "1h": 0.3,
      },
    },
    {
      dt: 1697108400,
      temp: 8.48,
      feels_like: 4.87,
      pressure: 998,
      humidity: 85,
      dew_point: 6.11,
      uvi: 0.18,
      clouds: 100,
      visibility: 10000,
      wind_speed: 7.39,
      wind_deg: 218,
      wind_gust: 15.94,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      pop: 0.8,
    },
    {
      dt: 1697112000,
      temp: 9.07,
      feels_like: 5.61,
      pressure: 997,
      humidity: 87,
      dew_point: 6.92,
      uvi: 0.11,
      clouds: 100,
      visibility: 10000,
      wind_speed: 7.45,
      wind_deg: 217,
      wind_gust: 15.88,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      pop: 1,
      rain: {
        "1h": 0.18,
      },
    },
    {
      dt: 1697115600,
      temp: 9.2,
      feels_like: 5.75,
      pressure: 997,
      humidity: 88,
      dew_point: 7.33,
      uvi: 0.08,
      clouds: 100,
      visibility: 10000,
      wind_speed: 7.58,
      wind_deg: 221,
      wind_gust: 16.54,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      pop: 0.57,
      rain: {
        "1h": 0.12,
      },
    },
    {
      dt: 1697119200,
      temp: 9.21,
      feels_like: 5.86,
      pressure: 996,
      humidity: 90,
      dew_point: 7.54,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 7.23,
      wind_deg: 219,
      wind_gust: 16.21,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      pop: 0.88,
      rain: {
        "1h": 0.49,
      },
    },
    {
      dt: 1697122800,
      temp: 9.78,
      feels_like: 6.29,
      pressure: 996,
      humidity: 90,
      dew_point: 8.23,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 8.39,
      wind_deg: 221,
      wind_gust: 18.02,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      pop: 1,
      rain: {
        "1h": 0.6,
      },
    },
    {
      dt: 1697126400,
      temp: 10.63,
      feels_like: 10.07,
      pressure: 996,
      humidity: 89,
      dew_point: 8.92,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 7.52,
      wind_deg: 238,
      wind_gust: 14.86,
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10n",
        },
      ],
      pop: 1,
      rain: {
        "1h": 1.11,
      },
    },
    {
      dt: 1697130000,
      temp: 10.75,
      feels_like: 10.15,
      pressure: 997,
      humidity: 87,
      dew_point: 8.57,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 7.07,
      wind_deg: 240,
      wind_gust: 13.14,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      pop: 1,
      rain: {
        "1h": 0.82,
      },
    },
    {
      dt: 1697133600,
      temp: 10.15,
      feels_like: 9.41,
      pressure: 997,
      humidity: 84,
      dew_point: 7.49,
      uvi: 0,
      clouds: 99,
      visibility: 10000,
      wind_speed: 6.31,
      wind_deg: 252,
      wind_gust: 13.47,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      pop: 1,
      rain: {
        "1h": 0.17,
      },
    },
    {
      dt: 1697137200,
      temp: 8.96,
      feels_like: 5.92,
      pressure: 998,
      humidity: 78,
      dew_point: 5.34,
      uvi: 0,
      clouds: 0,
      visibility: 10000,
      wind_speed: 6,
      wind_deg: 256,
      wind_gust: 13.58,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      pop: 0.07,
    },
    {
      dt: 1697140800,
      temp: 7.79,
      feels_like: 4.96,
      pressure: 998,
      humidity: 88,
      dew_point: 5.82,
      uvi: 0,
      clouds: 5,
      visibility: 10000,
      wind_speed: 4.68,
      wind_deg: 240,
      wind_gust: 11.91,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1697144400,
      temp: 7.95,
      feels_like: 4.47,
      pressure: 999,
      humidity: 83,
      dew_point: 5.37,
      uvi: 0,
      clouds: 8,
      visibility: 10000,
      wind_speed: 6.48,
      wind_deg: 252,
      wind_gust: 13.93,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1697148000,
      temp: 7.43,
      feels_like: 3.87,
      pressure: 1000,
      humidity: 85,
      dew_point: 4.98,
      uvi: 0,
      clouds: 17,
      visibility: 10000,
      wind_speed: 6.31,
      wind_deg: 244,
      wind_gust: 13.97,
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n",
        },
      ],
      pop: 0,
    },
  ],
  timezone: "Europe/Moscow",
};

const weather = {};

function RightBar() {
  return (
    <div className="right-bar">
      <button
        onClick={async () => {
          console.log(await requestForecast('Moscoww'))
          // console.log(utils.getCurrentWeather(forecast, "metric"));
          // console.log(utils.getAdditionalInfo(forecast, "metric"));
        }}
      >
        GET
      </button>
    </div>
  );
}

export default RightBar;
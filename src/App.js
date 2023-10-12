import React from "react";
import "./App.css";
import useWeather from "./hooks/useWeather";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import FooterInterface from "./components/FooterInterface";
import { FooterContextProvider } from "./context/FooterContextProvider";
import FooterForecast from "./components/FooterForecast";

function App() {
  const [forecast, setCurrentLocation] = useWeather()

  return (
    <div className="App">
      <Header>
        <LeftBar
          precipitation={"Few Clouds"}
          city={"Stockholm"}
          date={"Thu, October 12, 2023"}
          time={"05:15:28"}
          temp={"10 °C"}
          icon={"./imgs/cloudy-day.svg"}
        />
        <div className="center-bar" />
        <RightBar />
      </Header>

      <FooterContextProvider forecast={forecast}>
        <Footer>
          <FooterInterface />
          <FooterForecast />
        </Footer>
      </FooterContextProvider>
    </div>
  );
}

export default App;

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
import { HeaderContextProvider } from "./context/HeaderContextProvider";

function App() {
  const [forecast, setForecast, setCurrentLocation] = useWeather();

  return (
    <div className="App">
      {forecast && (
        <>
          <HeaderContextProvider
            forecast={forecast}
            setForecast={setForecast}
            setCurrentLocation={setCurrentLocation}
          >
            <Header>
              <LeftBar />
              <div className="center-bar" />
              <RightBar />
            </Header>
          </HeaderContextProvider>
          <FooterContextProvider forecast={forecast}>
            <Footer>
              <FooterInterface />
              <FooterForecast />
            </Footer>
          </FooterContextProvider>
        </>
      )}
      {!forecast && (
        <div style={{display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
          <h2>Loading data...</h2>
        </div>
      )}
    </div>
  );
}

export default App;

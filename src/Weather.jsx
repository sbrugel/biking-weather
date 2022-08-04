import React from "react";
import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";

import Info from './Info.jsx';
import config from "./config.json";

const callAPI = async (area) => {
  const time = new Date();

  let res;
  await axios
    .get(
      `http://api.weatherapi.com/v1/forecast.json?key=${config.KEY}&q=${area}&days=1&aqi=no&alerts=yes`
    )
    .then((response) => {
      let { location, current } = response.data;
      let { hour } = response.data.forecast.forecastday[0];

      res =
        {
          city: location.name,
          region: location.region,
          tempActual: current.temp_f,
          tempFeels: current.feelslike_f,
          precip: hour[time.getHours()].chance_of_rain,
          precipNext: hour[time.getHours() + 1].chance_of_rain,
          humidity: current.humidity,
        };
    })
    .catch((error) => {
      res = error;
    });
console.log(res);
  return res;
};

const Weather = () => {
  const [area, setArea] = useState("");

  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [tempActual, setTempActual] = useState("");
  const [tempFeels, setTempFeels] = useState("");
  const [precip, setPrecip] = useState("");
  const [precipNext, setPrecipNext] = useState("");
  const [humidity, setHumidity] = useState("");

  const [error, setError] = useState("");

  useEffect(() => {
    console.log(area)
    setError('');

    setCity('');
    setRegion('');
    setTempActual('');
    setTempFeels('');
    setPrecip('');
    setPrecipNext('');
    setHumidity('');
    async function call() {
      await callAPI(area).then((res) => { // res returns an array
        if (res['message']) {
            if (res['request']['status'] === 400) {
                setError("An invalid location was provided.");
            } else {
                setError("An unknown error occured: " + res['message']);
            }
        } else {
            setCity(res['city']);
            setRegion(res['region']);
            setTempActual(res['tempActual']);
            setTempFeels(res['tempFeels']);
            setPrecip(res['precip']);
            setPrecipNext(res['precipNext']);
            setHumidity(res['humidity']);
            setError('');
        }
      });
    }
    call();
  }, [area]);

  return (
    <React.Fragment>
        <Form>
        <Form.Control
                type="text"
                style={{ cursor: 'text' }}
                placeholder="Enter location name or area code"
                onChange={(e) => {
                    setArea(e.target.value)
                }}
            />
        </Form>
        <Info
            error={error}
            city={city}
            region={region}
            tempActual={tempActual}
            tempFeels={tempFeels}
            precip={precip}
            precipNext={precipNext}
            humidity={humidity}
        />
    </React.Fragment>
  )
};

export default Weather;

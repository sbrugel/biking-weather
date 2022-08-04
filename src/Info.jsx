import React from "react";

const Info = (props) => {
  const highestAcceptableTemp = 85,
    lowestAcceptableTemp = 50,
    highestAcceptablePrecip = 30,
    highestAcceptableHumidity = 70;

  const isPrecipGood =
    props.precip < highestAcceptablePrecip &&
    props.precipNext < highestAcceptablePrecip;

  const isHumidityGood = props.humidity < highestAcceptableHumidity;

  const isTempGood =
    props.tempFeels > lowestAcceptableTemp &&
    props.tempFeels < highestAcceptableTemp
      ? "good"
      : props.tempFeels > highestAcceptableTemp
      ? "too hot"
      : "too cold";

  if (props.error)
    return (
      <p>
        <em>An error occured: {props.error}</em>
      </p>
    );
  return (
    <React.Fragment>
      <p>
        <strong>
          Are the weather conditions in {props.city}, {props.region} good for biking?
        </strong>
      </p>
      <p
        style={{
            color: isTempGood === "good" ? "green" : "red",
        }}
      >
          The temperature here is {props.tempActual}°F; currently it feels like {props.tempFeels}°F. These conditions are {isTempGood} for biking.
      </p>
      <p
        style={{
            color: isPrecipGood ? "green" : "red",
        }}
      >
          There is currently a {props.precip}% chance of rain. In the
            next hour, this chance will be {props.precipNext}%.
      </p>
      <p
        style={{
            color: isHumidityGood ? "green" : "red",
        }}
        >
        Humidity here is at {props.humidity}%.
        </p>
    </React.Fragment>
  );
};

export default Info;

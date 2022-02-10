import React from 'react';
import {
  Card,
  CloseBtn,
  Container,
  TemperatureBlock,
  TemperatureBtn,
  WeatherList,
} from './WeatherItem.styled';

function WeatherItem() {
  const date = new Date();
  var options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  };

  const dateNow = date.toLocaleString('en-US', options);

  return (
    <Card>
      <CloseBtn>x</CloseBtn>
      <Container>
        <h2>City, Country</h2>
        <p>
          <span>icon</span>
          <span>Weather</span>
        </p>
      </Container>
      <h3>{dateNow}</h3>

      <div>Canvas</div>

      <Container>
        <div>
          <TemperatureBlock>
            <h3>+1</h3>
            <div>
              <TemperatureBtn>C</TemperatureBtn>
              <TemperatureBtn>F</TemperatureBtn>
            </div>
          </TemperatureBlock>
          <p>Feels like</p>
        </div>
        <WeatherList>
          <li>
            <span>Wind:</span>
            <span>0</span>
          </li>
          <li>
            <span>Humidity:</span>
            <span>0</span>
          </li>
          <li>
            <span>Pressure:</span>
            <span>0</span>
          </li>
        </WeatherList>
      </Container>
    </Card>
  );
}

export default WeatherItem;

import React from 'react';
import WeatherItem from '../WeaherItem/WeatherItem';
import { List } from './WeaherList.styled';

function WeaherList() {
  const testArray = [1, 2];

  return (
    <List>
      {testArray.map(el => (
        <WeatherItem key={el} />
      ))}
    </List>
  );
}

export default WeaherList;

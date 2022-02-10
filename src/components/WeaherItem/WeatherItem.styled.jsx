import styled from 'styled-components';

export const Card = styled.li`
  padding: 10px 15px;

  display: flex;
  flex-direction: column;

  position: relative;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 4px;
  right: 4px;

  background-color: transparent;
  border: none;

  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const TemperatureBlock = styled.div`
  display: flex;
`;

export const TemperatureBtn = styled.button`
  background-color: transparent;
  border: none;

  cursor: pointer;

  :not(:last-child) {
    border-right: 1px solid #707070;
  }
`;

export const WeatherList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: auto;
`;

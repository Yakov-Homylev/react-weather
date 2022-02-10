import WeaherList from '../WeatherList/WeaherList';
import SearchForm from '../SearchForm/SearchForm';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

import { Wrapper } from './App.styled';

export const App = () => {
  return (
    <Wrapper>
      <LanguageSelector />
      <SearchForm />
      <WeaherList />
    </Wrapper>
  );
};

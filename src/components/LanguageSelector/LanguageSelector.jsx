import React from 'react';
import { SelectorWrapper, Select } from './LanguageSelector.styled';
import { MdLanguage } from 'react-icons/md';

function LanguageSelector() {
  const selectLanguage = e => {
    console.log(e.target.value);
  };

  return (
    <SelectorWrapper>
      <MdLanguage
        style={{
          position: 'absolute',
          left: '0',
          top: '50%',
          transform: 'translatey(-50%)',
          marginRight: '6px',
        }}
      />
      <Select onChange={selectLanguage}>
        <option value="EN">EN</option>
        <option value="UA">UA</option>
        <option value="HE">HE</option>
      </Select>
    </SelectorWrapper>
  );
}
export default LanguageSelector;

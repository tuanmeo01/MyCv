import * as React from 'react';
import { useState } from 'react';
import './index.css';
import i18n from 'i18next';
import logoVn from '../../assets/Icon_Vn.svg';
import logoVnSmall from '../../assets/IconVnSmall.svg';
import logoEng from '../../assets/IconEng.svg';
import logoEngSmall from '../../assets/Icon_english.svg';
import Icon_down from '../../assets/Icon_down.svg';
const ChangLanguage = () => {
  const changeLanguage = e => {
    i18n.changeLanguage(e);
    setE('Vie');
    setLanguage(logoVn);
  };
  const changeLanguageEn = e => {
    i18n.changeLanguage(e);
    setE('Eng');
    setLanguage(logoEng);
  };
  const [imgLanguage, setLanguage] = useState(logoVn);
  const getLocalLanguage = localStorage.getItem('i18nextLng');

  const [e, setE] = useState('');
  const renderIcon = () => {
    if (getLocalLanguage === 'vi') {
      setE('Vie');
      setLanguage(logoVn);
    } else {
      setLanguage(logoEng);
      setE('Eng');
    }
  };
  const [selectLanguage, setSelectLanguage] = useState(renderIcon);
  const [name, setName] = useState('');
  return (
    <>
      <div className="dropdown">
        <div className="dropdown__select">
          <img src={imgLanguage} alt="logo viet nam" />
          <span
            className="dropdown__selected"
            style={{
              marginRight: '2.56px',
              marginLeft: '2.56px ',
              marginBottom: '0',
            }}
          >
            {e}
          </span>
          <img src={Icon_down} alt="icon down" />
        </div>
        <ul className="dropdown__list">
          <li
            className="dropdown__item"
            onClick={() => changeLanguage('vi')}
            value="vi"
          >
            <img src={logoVnSmall} alt="logo viet nam" />
            <span className="dropdown__text" style={{ margin: 0 }}>
              Việt Nam
            </span>
          </li>
          <li
            className="dropdown__item"
            onClick={() => changeLanguageEn('en')}
            value="en"
          >
            <img src={logoEngSmall} alt="logo viet nam" />
            <span className="dropdown__text" style={{ margin: 0 }}>
              English
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};
export default ChangLanguage;

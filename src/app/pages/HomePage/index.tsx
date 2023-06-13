import ChangLanguage from 'app/components/ChangeBtnLanguage';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import logoAVT from '../../assets/avt.jpg';
import { useTranslation } from 'react-i18next';

export function HomePage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>CV</title>
        <meta name="description" content="My CV" />
      </Helmet>
      <Contain>
        <ContainContent>
          <div style={{ display: 'flex', justifyContent: 'end' }}>
            <ChangLanguage />
          </div>
          <Child1>
            <Avatar>
              <IMG src={logoAVT} alt="avavtar"></IMG>
            </Avatar>
            <ContentTitle>
              <h2 style={{ color: 'darkblue' }}> {t('name')}</h2>
              <span
                style={{
                  fontSize: '20px',
                  color: 'darkblue',
                  marginBottom: '20px',
                }}
              >
                {t('title')}
              </span>
              <Child11>
                <Child111
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginRight: '100px',
                  }}
                >
                  <b>{t('borndate')}</b>
                  <b>{t('sex')}</b>
                  <b>{t('phoneNumber')}</b>
                  <b>{t('email')}</b>
                  <b>{t('website')}</b>
                </Child111>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span>28/05/2001</span>
                  <span>{t('sexx')}</span>
                  <a
                    style={{ textDecoration: 'none', marginBottom: '10px' }}
                    href="tel:0915914037"
                  >
                    <span>0915914037</span>
                  </a>
                  <a
                    style={{ textDecoration: 'none', marginBottom: '10px' }}
                    href="mailto:someone@example.com"
                  >
                    <span>vantuan.vt01@gmail.com</span>
                  </a>
                  <span>github.com/tuanmeo01</span>
                </div>
              </Child11>
            </ContentTitle>
          </Child1>
          <Child2>
            <h1>{t('target')}</h1>
            <span>{t('childTarget')}</span>
          </Child2>
          <Child3>
            <h1>{t('hocvan')}</h1>
            <Flex>
              <X>
                <span style={{ marginRight: '140px' }}>Tháng 8/2019 - nay</span>
              </X>
              <span>
                <b>{t('titleHocvan')}</b> <br></br>
                <span>{t('title2Hocvan')}</span>
              </span>
            </Flex>
          </Child3>
          <h1>{t('skill')}</h1>
          <Child4>
            <ChildChild>
              <b style={{ marginRight: '82px' }}>AngularJs</b>
              <span>{t('titleSkill0')}</span>
            </ChildChild>
            <ChildChild>
              <b style={{ marginRight: '96px' }}>ReactJS</b>
              <span>{t('titleSkill1')}</span>
            </ChildChild>
            <ChildChild>
              <b style={{ marginRight: '135px' }}>Git</b>
              <span>{t('titleSkill6')}</span>
            </ChildChild>
            <ChildChild>
              <b style={{ marginRight: '120px' }}> Java</b>
              <span>{t('titleSkill2')}</span>
            </ChildChild>{' '}
            <ChildChild>
              <b style={{ marginRight: '100px' }}>Python</b>
              <span>{t('titleSkill3')}</span>
            </ChildChild>{' '}
            <ChildChild>
              <b style={{ marginRight: '98px' }}>MySQL</b>
              <span>{t('titleSkill4')}</span>
            </ChildChild>
            <ChildChild>
              <b style={{ marginRight: '95px' }}>English</b>
              <span> {t('titleSkill5')}</span>
            </ChildChild>
          </Child4>
          <h1>Project</h1>
          <Child4>
            <b>{t('titlePj1')}</b> <br />
            Intern Frontend <br />
            {t('titlePj2')}{' '}
            <a style={{ textDecoration: 'none' }} href="https://vietdefi.work">
              vietdefi.work
            </a>
            <br />
            <br />
            <b>{t('titlePj3')}</b> <br /> Intern Frontend
            <br /> {t('titlePj4')}
            <br /> {t('titlePj5')}
            <br />
            <br />
            <b>CV online</b>
            <br />
            {t('titlePj6')}
            <a
              style={{ textDecoration: 'none' }}
              href="https://github.com/tuanmeo01/MyCv"
            >
              links
            </a>
            <br />
            <br />
            <b>Landing page OCR (Đơn thành viên): 1/5/2023-10/6/2023 </b>
            <br /> {t('titlePj7')}
            <br />
            <a
              style={{ textDecoration: 'none' }}
              href="https://docio.cmcati.vn/"
            >
              https://docio.cmcati.vn/
            </a>
            <br />
            <br />
            <b>API Gateway (user): 1/12/2022-10/2/2023 </b>
            <br /> {t('titlePj8')}
            <br />
            <a
              style={{ textDecoration: 'none' }}
              href="https://console.cmcati.vn/"
            >
              https://docio.cmcati.vn/
            </a>
            <br />
            <br />
            <b>SCA (ký số từ xa): 10/2/2022-10/6/2023 </b>
            <br /> {t('titlePj9')}
            <br />
            <a
              style={{ textDecoration: 'none' }}
              href="https://sec.cmcati.vn/sca/"
            >
              https://sec.cmcati.vn/sca
            </a>
          </Child4>
          <h1>{t('active')}</h1>
          <Child1>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginRight: '150px',
              }}
            >
              <b>{t('active1')}</b>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span>
                <b>{t('active2')}</b> <br />
                {t('active3')} <br />
                {t('active4')} <br />
                {t('active5')}
              </span>
            </div>
          </Child1>
          <h1>{t('favor')}</h1>
          <b>{t('favor1')}</b>
        </ContainContent>
      </Contain>
      <Footer>@Build with React boiler plate</Footer>
    </>
  );
}
const Contain = styled.div`
  background-color: #ffff;
  display: flex;
  justify-content: center;
  h2 {
    font-size: 48px;
    margin: 0;
    @media (max-width: 768px) {
      font-size: 24px;
    }
  }
  p {
    font-size: 28px;
    margin: 0;
  }
  b {
    margin-bottom: 10px;
    @media (max-width: 560px) {
      width: 106px;
    }
  }
  span {
    margin-bottom: 10px;
  }
  h1 {
    border-bottom: 2px solid black;
    width: 100%;
  }
`;
const IMG = styled.img`
  height: 200px;
  width: 200px;
  @media (max-width: 768px) {
    height: 100px;
    width: 100px;
  }
`;
const ContainContent = styled.div`
  padding: 100px;
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 1440px;
  background-color: aliceblue;
  @media (max-width: 768px) {
    padding: 40px;
  }
`;
const Avatar = styled.div`
  margin-right: 50px;
  @media (max-width: 768px) {
    margin-right: 20px;
    width: 25%;
  }
`;
const ContentTitle = styled.div``;
const Child1 = styled.div`
  margin-top: 20px;
  display: flex;
  @media (max-width: 560px) {
    display: unset;
  }
`;
const Child11 = styled.div`
  margin-top: 20px;
  display: flex;
  @media (max-width: 560px) {
    display: flex;
  }
`;
const Child111 = styled.div`
  @media (max-width: 560px) {
    margin-right: 30px !important;
  }
`;
const Child2 = styled.div`
  display: flex;
  flex-direction: column;
`;
const Child3 = styled.div`
  display: flex;
  flex-direction: column;
`;
const Flex = styled.div`
  display: flex;
`;
const Child4 = styled.div``;
const ChildChild = styled.div`
  width: 100%;
  border-bottom: 2px solid #eaeaea;
  margin-bottom: 50px;
  display: flex;
`;
const Footer = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const X = styled.div``;

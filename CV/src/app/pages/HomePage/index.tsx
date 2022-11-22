import ChangLanguage from 'app/components/ChangeBtnLanguage';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import logoAVT from '../../assets/avt.jpg';

export function HomePage() {
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
              <img
                style={{ height: '200px', width: '200px' }}
                src={logoAVT}
                alt="avavtar"
              />
            </Avatar>
            <ContentTitle>
              <h2 style={{ color: 'darkblue' }}>Nguyễn Văn Tuấn</h2>
              <span
                style={{
                  fontSize: '20px',
                  color: 'darkblue',
                  marginBottom: '20px',
                }}
              >
                Hiện đang là sinh viên ngành Công nghệ thông tin, chuyên ngành
                Hệ thống thông tin tại Học viện Công nghệ Bưu chính Viễn thông
              </span>
              <Child1>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginRight: '100px',
                  }}
                >
                  <b>Ngày sinh:</b>
                  <b>Giới tính:</b>
                  <b>Điện thoại:</b>
                  <b>Email:</b>
                  <b>Website:</b>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span>28/05/2001</span>
                  <span>Nam</span>
                  <span>0915914037</span>
                  <span>vantuan.vt01@gmail.com</span>
                  <span>github.com/tuanmeo01</span>
                </div>
              </Child1>
            </ContentTitle>
          </Child1>
          <Child2>
            <h1>Mục tiêu nghề nghiệp</h1>
            <span>
              Với những kiến thực học được tại trường và học được từ doanh
              nghiệp, tôi muốn áp dụng vào thực tế nhiều hơn, thuần thục các
              kiến thức đã được học và học hỏi thêm những kiến thức mới để trau
              dồi thêm cho bản thân và cống hiến cho công ty.
            </span>
          </Child2>
          <Child3>
            <h1>Học vấn</h1>
            <Flex>
              <span style={{ marginRight: '140px' }}>Tháng 8/2019 - nay</span>
              <span>
                <b>Học viện Công nghệ Bưu chính Viễn thông</b> <br></br>
                <span>Sinh viên công nghệ thông tin</span>
              </span>
            </Flex>
          </Child3>
          <h1>Kỹ năng</h1>
          <Child4>
            <ChildChild>
              <b style={{ marginRight: '96px' }}>ReactJS</b>
              <span>
                Hiểu biết về thư viện ReactJS, áp dụng các kiến thức về Hook,
                state, props vào dự án. Biết sử dụng các thư viện hỗ trợ xây
                dựng UI như MUI, Ant desgin, Maintine... HTML, CSS, SCSS, Styled
                components, JS, Redux
              </span>
            </ChildChild>
            <ChildChild>
              <b style={{ marginRight: '120px' }}> Java</b>
              <span>
                Có kiến thức về Java core, lập trình hướng đối tượng, giải các
                bài toán bằng ngôn ngữ java.
              </span>
            </ChildChild>{' '}
            <ChildChild>
              <b style={{ marginRight: '100px' }}>Python</b>
              <span>
                Có kiến thức nền tảng về Python, giải các bài toán bằng ngôn ngữ
                python, làm game bằng thư viện pygame, phân tích dữ liệu
              </span>
            </ChildChild>{' '}
            <ChildChild>
              <b style={{ marginRight: '98px' }}>MySQL</b>
              <span>
                Có kiến thức nền tảng về Database, DDL, DML, Trigger,
                Transition, phân tán cơ sở dữ liệu
              </span>
            </ChildChild>
            <ChildChild>
              <b style={{ marginRight: '95px' }}>English</b>
              <span>615 Toeic Đọc hiểu các tài liệu bằng tiếng anh</span>
            </ChildChild>
          </Child4>
          <h1>Project</h1>
          <Child4>
            <b>Tham gia làm website công ty Vietdefi</b> <br />
            Intern Frontend <br />
            Sử dụng ngôn ngữ ReactJS, boiler plate, styled components để tạo nên
            trang web{' '}
            <a style={{ textDecoration: 'none' }} href="https://vietdefi.work">
              vietdefi.work
            </a>
            <br />
            <br />
            <b>Tham gia dự án Gochie của công ty</b> <br /> Intern Frontend
            <br /> Dự án chơi game để đổi lấy voucher của cửa hàng, người chơi
            có thể trao đổi mua bán voucher với nhau.
            <br /> Sử dụng ReactJs là chính, thư viện hỗ trợ Ant Design để tạo
            UI người dùng, styled components, React Hook, Redux , kết nối với
            backend bằng axios....
            <br />
            <br />
            <b>CV online</b>
            <br />
            Sử dụng ReactJS, Boiler plate và styled-components để tạo nên CV của
            bản thân{' '}
            <a
              style={{ textDecoration: 'none' }}
              href="https://github.com/tuanmeo01/MyCv"
            >
              links
            </a>
          </Child4>
          <h1>Hoạt động</h1>
          <Child1>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginRight: '150px',
              }}
            >
              <b>Tháng 11/2020 - nay</b>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span>
                <b>Sinh viên tình nguyện</b> <br />
                Câu lạc bộ Sinh viên tình nguyện Học viện Công nghệ Bưu chính
                Viễn thông <br />
                Tham gia và tổ chức các hoạt động đoàn trường, các hoạt động
                thiện nguyện tại địa phương <br />
                Tham gia hỗ trợ đội ngũ tiêm phòng covid-19 đợt đầu tiên tại
                Đoàn phường Mỗ Lao
              </span>
            </div>
          </Child1>
          <h1>Sở thích</h1>
          <b>Cầu lông, chụp ảnh, chăm sóc thú cưng....</b>
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
  }
  p {
    font-size: 28px;
    margin: 0;
  }
  b {
    margin-bottom: 10px;
  }
  span {
    margin-bottom: 10px;
  }
  h1 {
    border-bottom: 2px solid black;
    width: 100%;
  }
`;
const ContainContent = styled.div`
  padding: 100px;
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 1440px;
  background-color: aliceblue;
`;
const Avatar = styled.div`
  margin-right: 50px;
`;
const ContentTitle = styled.div``;
const Child1 = styled.div`
  display: flex;
  margin-top: 20px;
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

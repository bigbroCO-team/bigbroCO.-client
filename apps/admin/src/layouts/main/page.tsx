'use client';

import { PCHeader } from 'shared';

import * as S from './style';
import { Chart } from 'admin/components';

const getLast7Days = () => {
  const dates = [];
  const today = new Date();

  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    dates.push(date.getDate());
  }

  return dates;
};

const SubscriberBox = ({
  title,
  number,
}: {
  title: string;
  number: string;
}) => (
  <S.SubscriberBox>
    <S.SubscriberTitle>{title}</S.SubscriberTitle>
    <S.SubscriberNumber>{number}</S.SubscriberNumber>
  </S.SubscriberBox>
);

const MainLayout = () => {
  const last7Days = getLast7Days();

  const userStats = [
    { title: '오늘 가입자 수', number: '100,000' },
    { title: '어제 가입자 수', number: '100,000' },
    { title: '누적 가입자 수', number: '1,000,000' },
  ];

  const amountStats = [
    { title: '오늘 판매액', number: '100,000' },
    { title: '어제 판매액', number: '100,000' },
    { title: '누적 판매액', number: '1,000,000' },
  ];

  return (
    <>
      <PCHeader type={'client_black'} />
      <S.Wrapper>
        <S.Container>
          <S.GraphBox>
            {userStats.map((stat, index) => (
              <SubscriberBox
                key={index}
                title={stat.title}
                number={stat.number}
              />
            ))}
          </S.GraphBox>
          <S.Graph>
            <Chart
              subScriberNumber={['10', '0', '90', '30', '40', '25', '30']}
              todaySubScriber={['11', '1', '91', '31', '41', '21', '31']}
              date={last7Days}
            />
          </S.Graph>
        </S.Container>
        <S.Container>
          <S.GraphBox>
            {amountStats.map((stat, index) => (
              <SubscriberBox
                key={index}
                title={stat.title}
                number={stat.number}
              />
            ))}
          </S.GraphBox>
          <S.Graph>
            <Chart
              subScriberNumber={['10', '0', '90', '30', '40', '25', '30']}
              todaySubScriber={['11', '1', '91', '31', '41', '21', '31']}
              date={[10, 11, 12, 13, 14, 15, 16]}
            />
          </S.Graph>
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default MainLayout;

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import CardSection from './components/CardSection';
import carBanner from './assets/7c662762-271d-475f-8382-93164468364d.png';

function App() {
  const guideBlocks = [
    {
      subtitle: '중고차 구매 전 꼭 할아야할 핵심 포인트',
      cards: [
        {
          emoji: '👶',
          title: '구매 전 체크리스트 5가지',
          description: '이것만 확인해도 중고차 제대로 산다.',
          link: 'https://www.goseecloud.com/중고차-구매-시-꼭-확인해야-할-5가지-체크리스트/',
          bgColor: '#74b9ff',
        },
        {
          emoji: '📋',
          title: '중고차 매매사이트 BEST4',
          description: '사이트별 장단점 비교 한번에',
          link: 'https://allthatreview.com/1513',
          bgColor: '#e17055',
        },
        {
          emoji: '🛠️',
          title: '중고차 사기 안당하는법',
          description: '딜러도 말 안해주는 3가지 비밀',
          link: 'https://allthatreview.com/2033',
          bgColor: '#fd79a8',
        },
        {
          emoji: '🛠️',
          title: '중고차 시세와 매물 찾는 팁',
          description: 'KB차차차를 이용한 구매',
          link: 'https://allthatreview.com/1810',
          bgColor: '#fd79a8',
        },
      ],
    },
    {
      ads: true,
      cards: [],
    },
    {
      subtitle: '내차 팔 때 비싸게 파는 방법',
      cards: [
        {
          emoji: '📋',
          title: '무료 차량가액 조회',
          description: '정확한 내 차가격 알고 팔자',
          link: 'https://www.goseecloud.com/무료-차량가액-조회-방법-및-최적가-매도-전략/',
          bgColor: '#e17055',
        },
        {
          emoji: '🚨',
          title: '내차 시세 쉽게 조회',
          description: '한번에 시세 조회하기',
          link: 'https://allthatreview.com/1647',
          bgColor: '#74b9ff',
        },
        {
          emoji: '🆕',
          title: '차 비싸게 파는 법',
          description: '차를 팔아야 한다면..',
          link: 'https://allthatreview.com/1477',
          bgColor: '#00cec9',
        },
        {
          emoji: '🆕',
          title: '중고차 개인거래 이전팁',
          description: '명의이전, 서류부터 세금까지 한방에',
          link: 'https://www.goseecloud.com/중고차-명의-이전-서류부터-세금까지-한-번에-끝내는/',
          bgColor: '#a29bfe',
        },
      ],
    },
    {
      ads: true,
      cards: [],
    },
    {
      subtitle: '자동차 보험 팁팁팁',
      cards: [
        {
          emoji: '🆕',
          title: '보험사별 다이렉트보험 혜택',
          description: '다이렉트 보험 혜택 총정리',
          link: 'https://allthatreview.com/1992',
          bgColor: '#a29bfe',
        },
        {
          emoji: '⭐',
          title: 'T맵 점수 높이는 법',
          description: 'T맵 점수 높이기 꿀팁',
          link: 'https://allthatreview.com/1696',
          bgColor: '#fab1a0',
        },
        {
          emoji: '🔍',
          title: '자동차 보험료 계산방법',
          description: '돈아끼는 꿀팁 5가지',
          link: 'https://allthatreview.com/1837',
          bgColor: '#e17055',
        },
        {
          emoji: '⭐',
          title: '메리츠화재 다이렉트 ',
          description: '최대 38%할인',
          link: 'https://allthatreview.com/1905',
          bgColor: '#e17055',
        },
      ],
    },
  ];

  const recommendBlocks = [
    {
      subtitle: '상황별 추천',
      cards: [
        {
          emoji: '🛠️',
          title: '가성비 중고차',
          description: '연비좋은 중고차 7대 리스트',
          link: 'https://allthatreview.com/2034',
          bgColor: '#e17055',
        },
        {
          emoji: '🛠️',
          title: '사회초년생을 위한',
          description: '생에 첫 중고차 구매 차량은?',
          link: 'https://allthatreview.com/2036',
          bgColor: '#a29bfe',
        },
        {
          emoji: '🚨',
          title: '잔고장 없는 외제차',
          description: '중고외제차 뭐살까?',
          link: 'https://allthatreview.com/1974',
          bgColor: '#74b9ff',
        },
        {
          emoji: '🚨',
          title: '친환경 중고차 고민?',
          description: '하이브리드 중고차 보는 법',
          link: 'https://allthatreview.com/1968',
          bgColor: '#ffeaa7',
        },
        {
          emoji: '🔍',
          title: '연봉 3천만원 중고차 구매',
          description: '오래 살펴볼 필요도 없다',
          link: 'https://allthatreview.com/1475',
          bgColor: '#2d3436',
        },
        {
          emoji: '⭐',
          title: '500만원 미만 중고차',
          description: '싸다고 다가 아닙니다',
          link: 'https://allthatreview.com/1574',
          bgColor: '#2d3436',
        },
      ],
    },
    {
      subtitle: '',
      image: carBanner,
      cards: [], // 빈 배열이어도 됨
    },
    {
      subtitle: '차량별 추천',
      cards: [
        {
          emoji: '🆕',
          title: '더 올 뉴 G80 중고차',
          description: '중고차의 끝판왕 격! 가격 제원',
          link: 'https://allthatreview.com/2026',
          bgColor: '#6C63FF',
        },
        {
          emoji: '🚗',
          title: 'K5 중고차 살까 말까',
          description: '중고차계의 스탠다드 가격 제원',
          link: 'https://allthatreview.com/2016',
          bgColor: '#fd79a8',
        },
        {
          emoji: '🔍',
          title: 'BMW5 시리즈 중고가',
          description: '외제 중고차 이차만 보면 됨',
          link: 'https://allthatreview.com/1973',
          bgColor: '#74b9ff',
        },
        {
          emoji: '👶',
          title: '현대 더 뉴 그랜저 IG',
          description: '중고차 판매율 1위',
          link: 'https://allthatreview.com/1971',
          bgColor: '#e17055',
        },
        {
          emoji: '🔥',
          title: '쏘나타 DN8',
          description: '아무나 타는 차는 아닙니다',
          link: 'https://allthatreview.com/1925',
          bgColor: '#a29bfe',
        },
        {
          emoji: '🔥',
          title: '카니발 9인승',
          description: '패밀리카의 정석 중고가는?',
          link: 'https://allthatreview.com/1910',
          bgColor: '#2d3436',
        },
        {
          emoji: '📋',
          title: '첫차는 아반떼',
          description: '첫차의 정석 아반떼 이유',
          link: 'https://allthatreview.com/1899',
          bgColor: '#fab1a0',
        },
        {
          emoji: '🚗',
          title: '쏘렌토 4세대',
          description: '중형 SUV의 절대강자',
          link: 'https://allthatreview.com/1972',
          bgColor: '#00cec9',
        },
      ],
    },
  ];

  const evBlocks = [
    {
      subtitle: '전기차 구매 가이드',
      cards: [
        {
          emoji: '🔍',
          title: '전기차 구매 고민 끝',
          description: '전기차를 사야하는 10가지 이유',
          link: 'https://allthatreview.com/1380',
          bgColor: '#fab1a0',
        },
        {
          emoji: '📋',
          title: '25년 출시 전기차 분석',
          description: '전기차 알고 사자',
          link: 'https://allthatreview.com/1824',
          bgColor: '#6C63FF',
        },
        {
          emoji: '🛠️',
          title: '테슬라 주니퍼',
          description: '출시일 가격 제원',
          link: 'https://allthatreview.com/1981',
          bgColor: '#81ecec',
        },
        {
          emoji: '🚨',
          title: '3천만원대 전기차',
          description: '보조금 받고 저렴하게!',
          link: 'https://allthatreview.com/1936',
          bgColor: '#00cec9',
        },
      ],
    },
    {
      ads: true,
      cards: [],
    },
    {
      subtitle: '각종 전기차 정보',
      cards: [
        {
          emoji: '⭐',
          title: '전기차도 중고로?',
          description: '전기차 중고거래 가이드',
          link: 'https://allthatreview.com/1957',
          bgColor: '#74b9ff',
        },
        {
          emoji: '📋',
          title: '아이오닉 6 중고가',
          description: '전기 중고차의 진실',
          link: 'https://allthatreview.com/2000',
          bgColor: '#fd79a8',
        },
        {
          emoji: '🆕',
          title: 'EV4 전기차',
          description: '판을 뒤집은 기아 전기차',
          link: 'https://allthatreview.com/1916',
          bgColor: '#e17055',
        },
        {
          emoji: '🛠️',
          title: '아이오닉 9',
          description: '전기차 끝판왕',
          link: 'https://allthatreview.com/1902',
          bgColor: '#e17055',
        },
        {
          emoji: '🆕',
          title: '폭스바겐 전기차',
          description: '전기차 모델별 종류',
          link: 'https://allthatreview.com/1884',
          bgColor: '#fab1a0',
        },
        {
          emoji: '🔍',
          title: '기아 전기차',
          description: '기아 전기차 모델별 종류',
          link: 'https://allthatreview.com/1871',
          bgColor: '#ffeaa7',
        },
      ],
    },
  ];

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Navigate to='/guide' replace />} />

        <Route
          path='/guide'
          element={
            <CardSection
              title='중고차 구매 시 주의사항'
              description={[
                '대부분의 중고차 구매자들이 모르고 당하는 사실!',
                '중고차 구매, 이것만 알면 호구 안 당합니다.',
              ]}
              blocks={guideBlocks}
            />
          }
        />
        <Route
          path='/recommend'
          element={
            <CardSection
              title='중고차 추천 리스트'
              description={[
                '첫차부터 실속까지, 상황별 추천 리스트!',
                '국산차 위주로 보험료, 유지비, 연비까지 고려했어요.',
              ]}
              blocks={recommendBlocks}
            />
          }
        />
        <Route
          path='/ev'
          element={
            <CardSection
              title='전기차 구매정보'
              description={[
                '다가오는 신차 정보, 미리 알면 선택이 쉬워집니다.',
                '전기차, 수입차 라인업까지 한 눈에 확인하세요.',
              ]}
              blocks={evBlocks}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

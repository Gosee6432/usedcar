import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const location = useLocation();

  const navItems = [
    { path: '/guide', label: '중고차 거래 가이드' },
    { path: '/recommend', label: '추전 중고차 리스트' },
    { path: '/ev', label: '전기차 정보' },
  ];

  return (
    <nav className='sticky top-0 z-50 bg-white shadow-sm border-b'>
      <div className='max-w-4xl mx-auto px-4 py-4 text-center flex flex-col items-center gap-3'>
        <h1 className='text-xl font-bold text-blue-700'>🚘 중고차 모음</h1>
        <div className='flex flex-wrap justify-center gap-3 text-sm font-medium'>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-1.5 rounded-full transition ${
                location.pathname === item.path
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-blue-100'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

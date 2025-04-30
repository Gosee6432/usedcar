import React, { useEffect } from 'react';

function CardBlock({ subtitle, cards, image, ads }) {
  // 광고 스크립트 삽입 및 광고 초기화
  useEffect(() => {
    if (ads) {
      // 스크립트가 이미 삽입되었는지 확인
      const existingScript = document.querySelector(
        'script[src*="pagead2.googlesyndication.com"]'
      );

      if (!existingScript) {
        const script = document.createElement('script');
        script.src =
          'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1217533439838380';
        script.async = true;
        script.crossOrigin = 'anonymous';
        document.body.appendChild(script);
      }

      // 광고 표시
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error('Adsense error:', e);
      }
    }
  }, [ads]);

  if (ads && (!cards || cards.length === 0)) {
    return (
      <div className='my-8 max-w-3xl mx-auto'>
        <ins
          className='adsbygoogle'
          style={{ display: 'block', textAlign: 'center' }}
          data-ad-layout='in-article'
          data-ad-format='fluid'
          data-ad-client='ca-pub-1217533439838380'
          data-ad-slot='3994484357'
        />
      </div>
    );
  }

  // 일반 카드 블록
  return (
    <div className='mb-12 max-w-3xl mx-auto'>
      {image && (
        <div className='mb-4 rounded-2xl overflow-hidden shadow'>
          <img
            src={image}
            alt={subtitle || '이미지'}
            className='w-full h-40 object-cover'
          />
        </div>
      )}
      {subtitle && <h2 className='text-lg font-semibold mb-4'>{subtitle}</h2>}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
        {cards?.map((card, idx) => (
          <a
            key={idx}
            href={card.link}
            target='_blank'
            rel='noopener noreferrer'
            className='rounded-3xl p-5 text-white shadow transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg'
            style={{ backgroundColor: card.bgColor || '#3b82f6' }}
          >
            <div className='flex flex-col justify-between h-full text-left'>
              <div>
                <h3 className='text-base font-bold mb-1'>{card.title}</h3>
                <p className='text-sm opacity-90'>{card.description}</p>
              </div>
              <div className='text-right text-2xl mt-4'>{card.emoji}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default CardBlock;

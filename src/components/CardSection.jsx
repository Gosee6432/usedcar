import React from 'react';
import CardBlock from './CardBlock';

function CardSection({ title, description, blocks }) {
  return (
    <section className='px-4 py-10'>
      <div className='max-w-3xl mx-auto'>
        {/* 소개 박스 */}
        <div className='bg-blue-50 p-6 rounded-2xl mb-10 shadow-sm'>
          <h1 className='text-xl font-bold text-gray-900 mb-2'>🚘 {title}</h1>
          {description.map((line, idx) => (
            <p
              key={idx}
              className={`text-sm text-gray-700 ${
                idx > 0 ? 'mt-1 font-medium' : ''
              }`}
            >
              {line}
            </p>
          ))}
        </div>

        {/* 카드 블록 */}
        {blocks.map((block, idx) => (
          <CardBlock
            key={idx}
            subtitle={block.subtitle}
            cards={block.cards}
            image={block.image}
          />
        ))}
      </div>
    </section>
  );
}

export default CardSection;

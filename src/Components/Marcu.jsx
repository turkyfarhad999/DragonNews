import React from 'react';
import Marquee from 'react-fast-marquee';
const worldCupNews = [
  {
    id: 1,
    title: "Argentina Advances to the FIFA World Cup Quarterfinals"
  },
  {
    id: 2,
    title: "Brazil Stuns Norway with Late Winner in Round of 16"
  },
  {
    id: 3,
    title: "England Defeats Mexico to Reach the Quarterfinals"
  },
  {
    id: 4,
    title: "Spain and Portugal Set for Blockbuster Clash"
  },
  {
    id: 5,
    title: "France Eyes Another World Cup Trophy After Strong Start"
  },
  {
    id: 6,
    title: "Canada Continues Historic FIFA World Cup Run"
  },
  {
    id: 7,
    title: "Belgium Faces Tough Test Against the United States"
  },
  {
    id: 8,
    title: "World Cup 2026: Top Scorers Race Heats Up"
  },
  {
    id: 9,
    title: "Biggest Upsets of the FIFA World Cup So Far"
  },
  {
    id: 10,
    title: "Fans Around the World Celebrate World Cup Fever"
  }
];
const Marcu = () => {
    return (
        <div className='flex justify-between items-center gap-3.5 container mx-auto my-3 bg-gray-200 px-3 py-5 rounded-3xl'>
            <button className='btn bg-red-500 text-white'>latest</button>
        <Marquee>
            
  {worldCupNews.map(news=><span className='px-5'>{news.title}</span>)}
</Marquee>
</div>
    );
};

export default Marcu;
import React from 'react';

const ScrollHandler: React.FC = () => {
  let time: any;
  const handler = (e: any) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 50) {
      console.log('scroll');
      if (time !== undefined) clearTimeout(time);
      time = setTimeout(() => {
        console.log(`'log:'${time}`);
    }, 1000);
    }
  };
  React.useEffect(() => {
    document.addEventListener('scroll', handler);
    return function () {
      document.removeEventListener('scroll', handler);
    };
  }, []);
  return time;
};

export default ScrollHandler;

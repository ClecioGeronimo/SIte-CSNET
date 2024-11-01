import React from 'react';
import Hero from './components/Hero';
import Plans from '../../components/Plans';
import SpeedTest from './components/SpeedTest';

function Home() {
  return (
    <div>
      <Hero />
      <Plans />
      <SpeedTest />
    </div>
  );
}

export default Home;
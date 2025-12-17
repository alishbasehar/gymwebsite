import React from 'react'
import Herosection from '../Components/Herosection'
import Training from '../components/Training';
import About from '../components/About';
import Counter from '../components/Counter';
import Servicecard from '../components/Servicecard';
import Vedio from '../components/Vedio';
import Whychoose from '../components/Whychoose';
import Bmicalculculator from '../components/Bmicalculculator';
import Trainers from '../components/Trainers';
import Newslatter from '../components/Newslatter';

const Home = () => {
  return (
    <div >
      <Herosection/>
      <Training/>
      <About  />
      <Counter/>
      <Servicecard />
      <Vedio/>
      <Whychoose/>
      <Bmicalculculator/>
      <Trainers/>
      <Newslatter/>
      
        
    </div>
  )
}

export default Home;
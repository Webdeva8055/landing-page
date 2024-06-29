"use client"
import React from 'react';
import Nav from '@/Components/Nav';
import Landingpage from '@/Components/Landingpage';
import Marquee from '@/Components/Marquee';
import About from '@/Components/About';
import Eyes from '@/Components/Eyes';
import Featured from '@/Components/Featured';
import Card from '@/Components/Card';
import Footer from '@/Components/Footer';
import LocomotiveScroll from 'locomotive-scroll';
import Eye from '@/Components/Eye';
import Invalid from '@/Components/Invalid';


const page = () => {
  const locomotiveScroll = new LocomotiveScroll();
  // const card_data= [
  //   {logo:'https://ochi.design/wp-content/uploads/2022/04/logo001.svg',button_text:'202687641',Height:'75',Width:'1/2'},
  //   {logo:'https://ochi.design/wp-content/uploads/2022/04/logo002.svg',button_text:'2024-30',Height:'75',Width:'1/4'},
  //   {logo:'https://ochi.design/wp-content/uploads/2022/04/logo003.png',button_text:'1999-09',Height:'75',Width:'1/4'},
  // ];
  return (
<>

    <div className='main-page  bg-black min-h-screen w-full'>
      <Invalid/>
    <div className='inner-page bg-black min-h-screen w-full '>
    <Nav/>
    <Landingpage/>
    <Marquee/>
    <About/>
    <Eyes/>
    <Featured/>
    <Card/>
    <Footer/>
    </div>
    </div>
</>
  )
}

export default page
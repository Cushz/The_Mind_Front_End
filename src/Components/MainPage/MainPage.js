import React from 'react'
import './MainPageStyles.css'
import { Button } from '@chakra-ui/react'


const MainPage = () => {
  return (
    <>
    <div className='mainpage-container'>
      <Button  width="11.688rem" height='4.25rem' color='#16163D' fontSize='2.063rem' fontFamily='Montserrat' borderRadius='0.75rem' right='36.5rem' top='8.438rem' background='rgba(255, 255, 255, 0.87)' boxShadow='6px 4px 15px rgba(11, 11, 52, 0.25);'>Play</Button>
      <Button  width="11.688rem" height='4.25rem' color='#16163D' fontSize='2.063rem' fontFamily='Montserrat' borderRadius='0.75rem' right='20.5rem' top='4.25rem' background='rgba(255, 255, 255, 0.87)' boxShadow='6px 4px 15px rgba(11, 11, 52, 0.25);'>Rules</Button>
    </div>
    
    
    </>
  )
}

export default MainPage;
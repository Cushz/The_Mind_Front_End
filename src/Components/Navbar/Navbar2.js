import {
    Box,
    Flex,
    Link,
    Image
  } from "@chakra-ui/react";
import React, { useState, useEffect} from 'react'
import profileicon from '../../images/profileicon.svg'
import { useLocation } from "react-router";
import register from '../../images/register.png'
import login from '../../images/login.png'



const Navbar2 = () => {
    const [selected, setSelected] = useState("")
    const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setSelected("home");
    } else if (path === "/about") {
      setSelected("about");
    } else if (path === "/rules") {
      setSelected("rules");
    }
  }, [location]);

  return (
    <>
   <Flex
      as="nav"
      align="baseline"
      justify="flex-start"
      wrap="wrap"
      padding="1rem"
      marginLeft='40px'
      marginBottom='30px'
      bg="transparent"
      position={'fixed'}
      
    >
      <Box align="center" mr={5} >
        <Link href="#" fontWeight="600" color="#50C9E9" fontFamily='Montserrat' lineHeight='1.905rem' fontSize='25px' >
          THE MIND
        </Link>
      </Box>


      <Flex 
        align="center"
        justify="space-around"
        textAlign="center"  
        w={"25em"}
        ml={"8%"}
        
      >
        <Box>
        <Link href="#" fontWeight="400" color={selected === 'play' ? '#50C9E9' : 'white'} onClick={()=>setSelected("play")}  fontSize='18px' >
          Play
        </Link>
        </Box>
        <Box>
        <Link href="#" fontWeight="400" color={selected === 'rules' ? '#50C9E9' : 'white'} onClick={()=>setSelected("rules")} fontSize='18px' >
          Rules
        </Link>
        </Box>
        <Box>
        <Link href="/about" fontWeight="400" color={selected === 'about' ? '#50C9E9' : 'white'} onClick={()=>setSelected("about")} fontSize='18px'>
          About
        </Link>
        </Box>

        
      </Flex>
      <Box>
        <Image src={login} width='133px' height='41px' marginLeft='70rem'  marginTop='-3.1rem' cursor='pointer' />
      </Box>
      <Box>
        <Image src={register} width='133px' height='41px' marginLeft='80rem'  marginTop='-4.1rem' cursor='pointer'   />
      </Box>

        

    </Flex>
  
    </>
  )
}

export default Navbar2;
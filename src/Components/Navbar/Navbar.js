import {
    Box,
    Flex,
    Link,
    Image
  } from "@chakra-ui/react";
import React, { useState, useEffect} from 'react'
import profileicon from '../../images/profileicon.svg'
import { useLocation } from "react-router";
import DropdownProfile from "./DropdownProfile";
import LogOut from "./LogOut";



const Navbar = () => {
    const [selected, setSelected] = useState("")
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const [isOpenModal, setOpenModal] = useState(false);




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

  console.log(isOpenModal);

  return (
    <>
   <Flex
      as="nav"
      align="baseline"
      justify="flex-start"
      wrap="wrap"
      padding="1.5rem"
      marginLeft='40px'
      marginBottom='30px'
      bg="transparent"
      position={'fixed'}
      
    >
      <Box align="center" mr={5} >
        <Link href="/mainpage" fontWeight="600" color="#50C9E9" fontFamily='Montserrat' lineHeight='1.905rem' fontSize='25px' >
          THE MIND
        </Link>
      </Box>


      <Flex 
        align="center"
        justify="space-around"
        textAlign="center"  
        w={"35em"}
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
        <Image onClick={() => {setOpen(!open)}} marginLeft='84rem'  marginTop='-2.6rem' cursor='pointer' src={profileicon}/>
        <DropdownProfile setOpenModal = {setOpenModal} open = {open} classname='dropdownProfile' />
      </Box>

        

    </Flex>
    
    {isOpenModal && <LogOut setOpenModal = {setOpenModal} isOpenModal= {isOpenModal} />}

    </>
  )
}

export default Navbar
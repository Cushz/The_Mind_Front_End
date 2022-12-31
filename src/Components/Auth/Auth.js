import { Box, Input, useDisclosure, Flex, Text, Button,Select,Heading,FormControl,AlertDialog,
  AlertDialogBody,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import React from 'react'
import { useState,useRef } from "react";
import "./AuthStyles.css";
import { CiMail } from "react-icons/ci";
import signIn from "../../api/login";
import { useNavigate } from "react-router";

export default function Auth() {
  //shout out to my nigga Turan
  const [clicked, setClicked] = useState(false)
  const { isOpen, onOpen } = useDisclosure()
  const cancelRef = useRef();
  const navigate = useNavigate();

  const [signInEmail, setsignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState();

  const signInClick = async (e) => {
    e.preventDefault();
    const resultToken = await signIn(signInEmail, signInPassword);

    if (!resultToken){
      setErrorMessage('Invalid credentials');
      return;
    } 
    localStorage.setItem('access_token', resultToken)
    navigate('/me/profile')
  }

  if (!clicked) {
    return (
  <Flex className="main-wrapper"  >
    <Flex className={clicked ? "left  left-on-click" : "left"}>
          <Box  w={"80%"} >
      <Heading fontSize={"5xl"}>Sign in to The Mind</Heading>
      <form>
      <FormControl lineHeight={"3.5em"}  >
        {errorMessage && <Text color="red">{errorMessage}</Text>}
        <Input mb={"1em"} mt={"1em"} fontSize={"1.3em"} height={"2.5em"}  onChange={(e) => setsignInEmail(e.target.value)} bg={"#F4F8F7"} borderRadius={10} border={"none"} type='email' placeholder="email" required w={"55%"} />
        <Input  fontSize={"1.3em"} height={"2.5em"} onChange={(e) => setSignInPassword(e.target.value)} bg={"#F4F8F7"} borderRadius={10} border={"none"} type='password' placeholder="password" required w={"55%"} />
        <Text p={0} color={"gray"}><a href="src/Components/Auth/auth#Auth.js">Forgot your password?</a></Text>
        <Button onClick={(e) => signInClick(e)} type="submit"  transitionDuration={"0.7s"} _hover={{bg:"white", color:"#010E1F" }} border={"1px solid #010E1F"} w={"45%"} p={5} borderRadius={10} bg={"#010E1F"} color={"white"} >Sign In</Button>
      </FormControl>
      </form>
      
      </Box>
    </Flex>
    <Flex className={clicked ? "right right-on-click" : "right"} >
            <Box  w={"80%"} m={"auto"}>
            <Heading >Hello Friend!</Heading>
            <Text   mt={5} mb={10} fontSize={12} >Enter your personal details and start journey with us</Text>
            <Button onClick={() => setClicked(!clicked)} transitionDuration={"0.7s"} _hover={{bg:"white", color:"black" }} border={"1px solid white"} w={"45%"} p={5} borderRadius={10} bg={"transparent"} color={"white"} >Sign Up</Button>
            </Box>  
    </Flex>
        
  </Flex>
    )
  }
    else 
    {
      return (
        <Flex className={isOpen ? "main-wrapper blurred-background" : "main-wrapper"}  >
         <Flex className={clicked ? "left  left-on-click" : "left"} color={"black"} bg={"white"} w={"70%"} textAlign={"center"} justifyContent={"center"} alignItems={"center"}  >
          <Box w={"50%"} gap={2} >
          <Heading color={"#010E1F"} ml={"2em"} >Create Account</Heading>
          <form method="POST" action='/Users/nicat/Desktop/themindfront/The_Mind_Front_End/public'>
          <FormControl lineHeight={"3em"} paddingTop={"0.5em"} className="create-account">
            <Box>
                <Input fontSize={"1.3em"} h={"2.2em"}  mb={"1.2em"} mr={"0.5em"} w={"48%"} bg={"#F4F8F7"} borderRadius={10} border={"none"} type="text" placeholder="name" />
                <Input fontSize={"1.3em"} h={"2.2em"}  w={"48%"} bg={"#F4F8F7"} borderRadius={10} border={"none"} type="text" placeholder="surname"  />
                <Input fontSize={"1.3em"} h={"2.2em"} mb={"1.2em"} bg={"#F4F8F7"} borderRadius={10} border={"none"} type="date" required />
                <Input fontSize={"1.3em"} h={"2.2em"} mb={"1.2em"} bg={"#F4F8F7"} borderRadius={10} border={"none"} type="email" placeholder="email" />
            <Input fontSize={"1.3em"} h={"2.2em"} mb={"1.2em"} bg={"#F4F8F7"} borderRadius={10} border={"none"} type='password' placeholder="password"  />
            <Input fontSize={"1.3em"} h={"2.2em"} mb={"1.2em"} bg={"#F4F8F7"} borderRadius={10} border={"none"} type='password' placeholder=" confirm password" />
            <Select fontSize={"1.3em"} h={"2.2em"} mb={"1.2em"} placeholder='Select gender' bg={"#F4F8F7"} borderRadius={10} border={"none"}  >
                <option value='male'>Male</option>
                <option value='female'>Female</option>
            </Select>
            </Box>
            <Button type="submit" onClick={onOpen} transitionDuration={"0.7s"} _hover={{bg:"white", color:"#010E1F" }} border={"1px solid #010E1F"} w={"45%"} p={5} borderRadius={10} bg={"#010E1F"} color={"white"} >Sign Up</Button>
            <AlertDialog motionPreset='slideInBottom' leastDestructiveRef={cancelRef}  isOpen={isOpen} isCentered>
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader textAlign={"center"} >Just one more step...</AlertDialogHeader>
          <AlertDialogBody textAlign={"center"} >
          We've sent a verification email to <a href="src/Components/Auth/auth#Auth.js" className="mail-link" >murad.isayev@ufaz.az.</a><br />
          Please verify your email address to log into TheMind<br />
          <CiMail className="CiMail" />
          </AlertDialogBody>

          <footer className="footer-for-link" >
          <a href='src/Components/Auth/auth#Auth.js'>Didn't get the mail? Click here to send it again.</a>
          </footer>
        </AlertDialogContent>
      </AlertDialog>
          </FormControl>
          </form>
          
          </Box>
          
        </Flex>
        <Flex className={clicked ? "right right-on-click" : "right"} >
            <Box  w={"80%"} m={"auto"}>
            <Heading >Welcome Back!</Heading>
            <Text   mt={5} mb={10} fontSize={12} >To keep connected with us please
login with your personal info </Text>
            <Button onClick={()=> setClicked(!clicked)} transitionDuration={"0.7s"} _hover={{bg:"white", color:"#010E1F" }} border={"1px solid white"} w={"45%"} p={5} borderRadius={10} bg={"transparent"} color={"white"} >Sign In</Button>
            </Box>  
        </Flex>
        
      </Flex>
      )
    }


      

   
}
  

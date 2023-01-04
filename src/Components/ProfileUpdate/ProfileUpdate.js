import React, { useEffect } from 'react'
import {useState} from "react"
import "./ProfileUpdateStyles.css"
import { InputGroup, InputRightElement, Box,SimpleGrid,Avatar, FormLabel,Input, Flex, Text, Button, Heading,FormControl, Modal, useDisclosure, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton} from "@chakra-ui/react";
import { getUserInfo } from '../../api/getUserInfo';
import { updateUserInfo } from '../../api/updateUserInfo';
import { CheckCircleIcon, WarningIcon } from '@chakra-ui/icons'
import validateUsername from '../../api/validateUsername';
import updateUsername from '../../api/updateUsername';

export default function ProfileUpdate() {
    const database = ["https://bit.ly/dan-abramov","https://bit.ly/prosper-baba","https://bit.ly/kent-c-dodds","https://bit.ly/ryan-florence"];
    const [profile, setProfile] = useState("https://bit.ly/dan-abramov")
    const [index, setIndex] = useState(0)
    const [errorMessage, setErrorMessage] = useState(null);

    const [originalUser, setOriginalUser] = useState({firstname: '', lastname: '', date_of_birth: ''});
    const [user, setUser] = useState({firstname: '', lastname: '', date_of_birth: '', username: '', email: ''});
    const [isUsernameValid, setIsUsernameValid] = useState(false);
    const [newUserName, setNewUserName] = useState('');


    const {isOpen: isResetOpen, onOpen: onResetOpen, onClose: onResetClose} = useDisclosure();
    const {isOpen: isUsernameChangeOpen, onOpen: onUsernameChangeOpen, onClose: onUsernameChangeClose} = useDisclosure();

    useEffect(() => {
      async function getUser() {
        const data = await getUserInfo();
        if (!data) {
            setErrorMessage("Something went wrong");
            return; 
        }
        setUser(data);
        setOriginalUser(data);
      }
      getUser(); 
    }, []);

    function onPhotoChange () 
    {  
       setProfile(database[index])
       setIndex(index + 1)
       if (index === database.length-1)
       {
        setIndex(0)
       }
       
    }

    const onSave = async () => {

      const updateUserDto = {
        firstname: user.firstname,
        lastname: user.lastname,
        date_of_birth: user.date_of_birth,
      }
      
      const data = await updateUserInfo(updateUserDto);
      if (!data) {
          setErrorMessage("Something went wrong");
          return; 
      }
      window.location.reload(false);
    }

    const handleUsernameChange = async (e) => {

      setNewUserName(e.target.value);
      const data = await validateUsername(e.target.value);
      setIsUsernameValid(data);
    }

    const saveUsername = async (username) => {

      const data = await updateUsername(username);
      if (!data) {
        return;
      }

      window.location.reload(false);
    }

    if (errorMessage) {
        return <div>{errorMessage}</div>;
    }

    return (
    
   <Flex className='main-profile-wrapper'  >
    <Box  className="box-header" h={"30%"} >
        <Box>
        <Heading>Hello {originalUser.firstname}!</Heading>
    <Text>Update your photos and personal details here.</Text>
        </Box>
    <Box justifySelf={"flex-end"}>
        <Avatar className="avatar" w={"7em"} h={"7em"} src={profile}>
        <img className='buttonImage' src="../images/change.png" alt='change' onClick={onPhotoChange} />

        </Avatar>
    </Box>
    
    </Box>

    <Box className="box-body" h={"60%"} >
    
      <FormControl>
        <SimpleGrid columns={2}>

        <Box className="Binput">
        <FormLabel fontWeight={"bolder"} htmlFor="Name">Firstname</FormLabel>
        <Input placeholder='Name' id="Name" bg={"white"} value={user.firstname} onChange={(e) => setUser({...user, firstname: e.target.value})} />
        </Box>
        
        <Box className="Binput">
        <FormLabel fontWeight={"bolder"} htmlFor="Surname" >Lastname</FormLabel>
        <Input placeholder='Surname' bg={"white"} id="Surname" value={user.lastname} onChange={(e) => setUser({...user, lastname: e.target.value})} />
        </Box>

        <Box className="Binput">
        <FormLabel fontWeight={"bolder"} htmlFor="email" >E-mail</FormLabel>
        <Input placeholder='Surname' bg={"white"} id="email" value={user.email} isReadOnly={true} />
        </Box>

        <Box className="Binput">
        <FormLabel fontWeight={"bolder"} htmlFor="username" >Username</FormLabel>
        <InputGroup>
        <Input placeholder='Surname' bg={"white"} id="username" value={user.username} isReadOnly={true} />
        <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='xs' colorScheme={'gray'} onClick={onUsernameChangeOpen}>
                 Change
              </Button>
        </InputRightElement>
        </InputGroup>
        
        </Box>

        <Box className="Binput">
        <FormLabel fontWeight={"bolder"} htmlFor="Date" >Date</FormLabel>
        <Input  type="date" bg={"white"} placeholder='Date' id="Date" value={user.date_of_birth} onChange={(e) => setUser({...user, date_of_birth: e.target.value})}/>
        </Box>

        <Box className="Binput">
        <FormLabel fontWeight={"bolder"} htmlFor="email" >Password</FormLabel>
            <InputGroup >
              <Input 
                bg={"white"}
                pr='4.5rem'
                type={'password'}
                value='asdasldblasdblasd'
                isReadOnly={true}
              />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='xs' colorScheme={'red'} >
                 Reset
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>

        </SimpleGrid>
      </FormControl>

      <Box className='box-footer' h={"20%"} mb="3em" >
            <Button  bg={"white"} variant='outline' width={"8em"} mr="1em" color="#09264A" onClick={onResetOpen}>Cancel</Button>
            <Button type="Submit" className="saveB" bg={"#09264A"} color={"white"}  width={"8em"} onClick={onSave}>Save</Button>
        </Box>
        
     
    </Box>

    <Modal isOpen={isResetOpen} onClose={onResetClose}>
        <ModalOverlay />
        <ModalContent>
        <ModalHeader>Reset Changes</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
            <p>Are you sure you want to reset your changes?</p>
        </ModalBody>

        <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onResetClose}>
            Close
            </Button>
            <Button colorScheme="red" onClick={()=> {setUser(originalUser); onResetClose();}}>Reset</Button>
        </ModalFooter>
        </ModalContent>
    </Modal>

    <Modal isOpen={isUsernameChangeOpen} onClose={onUsernameChangeClose}>
        <ModalOverlay />
        <ModalContent>
        <ModalHeader>Change Username</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          
        <InputGroup >
              <Input 
                bg={"white"}
                pr='4.5rem'
                placeholder='New Username'
                value={newUserName}
                onChange={(e) => handleUsernameChange(e)}
              />
            <InputRightElement>
              { isUsernameValid === true? <CheckCircleIcon color={'green'} height={'1em'}/> : ( newUserName ? <WarningIcon color='red'/> : <></>)}
            </InputRightElement>
              
          </InputGroup>
          { isUsernameValid === true ? <Text marginLeft={'0.5vw'} fontSize={'xs'} color={'green'}>Username is available</Text> : ( newUserName ? <Text marginLeft={'0.5vw'} fontSize={'xs'} color={'red'}>Username is taken</Text> : <></>)}
            
        </ModalBody>

        <ModalFooter>
            <Button bg={"white"} variant='outline' mr="1em" color="#09264A" onClick={onUsernameChangeClose}>Cancel</Button>
            <Button type="Submit" className="saveB" bg={"#09264A"} color={"white"} onClick={()=> saveUsername(newUserName)}>Save</Button>
        </ModalFooter>
        </ModalContent>
    </Modal>

   </Flex>  
  )
}

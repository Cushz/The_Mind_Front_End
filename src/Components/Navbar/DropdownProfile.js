import React, { useState } from 'react'
import './DropdownStyles.css'
import { Avatar, Box, Flex, Text, Image } from '@chakra-ui/react'
import settings from '../../images/settings.png'
import profileicon2 from '../../images/profileicon2.png'
import logout from '../../images/logout.png'
import LogOut from './LogOut'
import { Link } from 'react-router-dom'

const DropdownProfile = (props) => {
    const [isOpenModal, setOpenModal] = useState(false);

  return (
    
    <div className={`dropdownProfile ${props.open ? 'active' : 'inactive'}`}>
        <Flex justifyContent={'center'}>
        <Box>
            <Avatar></Avatar>
        </Box>
        <Box>
            <Text width={'8rem'} fontSize={'16px'} textAlign='center' justifyContent={'center'} marginTop='0.1rem' marginRight={'5rem'}>Murad Isayev</Text>
            <Text width={'7.9rem'} fontSize={'14px'} textAlign='center' justifyContent={'center'}>@muradisayev</Text>
        </Box>
        </Flex>
        <Box>
        <div style={{height: '2px', background: '#012757', color: '#012757', borderColor:'#012757', width: '12.98rem', marginTop: '0.2rem', marginLeft: '-15px', marginRight:'-15px'}}/>
        </Box>
        <div>
            <ul>
             
                <Link to={'profile'}>
                <DropdownItem img={profileicon2} text={'Profile'} />
                </Link>
                <Link to={'settings'}>
                <DropdownItem img={settings} text={'Settings'} />
                </Link>

                <div onClick={() => props.setOpenModal(!isOpenModal)}>
                <DropdownItem className={'logout'} img={logout} text={'Log Out'}/>
                </div>
            </ul>
            </div>

    </div>


    
  )
}

export default DropdownProfile;


function DropdownItem(props){
    return(
      <li className = 'dropdownItem'>
        <img src={props.img}></img>
        <a> {props.text} </a>
      </li>
    );
  }
  
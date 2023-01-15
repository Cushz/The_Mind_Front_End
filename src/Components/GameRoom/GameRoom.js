import './GameRoomStyles.css';
import { Box, Text } from '@chakra-ui/react'




import React from 'react'
import CardDeck from './CardDeck';

const GameRoom = () => {
  return (
   <div className='gameroom-background'>
    <div className='gameroom-content'>
    <Box className='level-indicator'>
        <Text> Level 12 </Text>
    </Box>
    <CardDeck/>
    </div>
   </div>
  )
}

export default GameRoom
import React from 'react'
import "./StatisticsStyles.css";
import { Avatar,Text,Flex,Box,CircularProgress, CircularProgressLabel} from "@chakra-ui/react";
export default function Statistics() {
  return (
    <div className="statisticsBody">
      <Flex className="statisticsCard" p={"4em"} >
        
        <Flex className='card1 leftc' bg={"white"} height={"100%"} >
            <Flex height={"40%"} justifyContent={"center"} alignItems={"center"} >
                <Box width={"40%"}>
                <Avatar w={"5em"} h={"5em"} ></Avatar>
                </Box>
                <Box w={"60%"}>
                <Text fontSize={"1.3em"} ><b>@username</b></Text>
                </Box>
            
            </Flex>
            <Flex height={"60%"} >
                <Flex flexDirection={"column"} width={"40%"}>
                    <Text>Name</Text>
                    <Text>Surname</Text>
                    <Text>Birthday</Text>
                    <Text>E-mail</Text>
                </Flex>
                <Flex flexDirection={"column"} width={"60%"}>
                    <Text>Murad</Text>
                    <Text>Isayev</Text>
                    <Text>28/09/2003</Text>
                    <Text>muradisayev@gmail.com</Text>
                </Flex>
            
            </Flex>
        </Flex>
        <Flex className='rightc' flexDirection={"column"} height={"100%"}>
        <Flex className='card2' flex="2" bg={"white"} flexDirection={"column"} >
            <Flex justifyContent={"center"} width={"100%"}>
            <Text><b>Max level</b></Text>
            </Flex>
            <Flex>
            <CircularProgress size={"2em"} value={50} color='blue.900' >
            <CircularProgressLabel fontSize={"0.5em"}><b>6</b></CircularProgressLabel>
            </CircularProgress>
            </Flex>
            
        </Flex>
        <Flex className='card3' flex="1" bg={"white"} flexDirection={"column"}>
            <Flex justifyContent={"center"} width={"100%"}>
            <Text>Games played</Text>
            </Flex>
            <Flex>
            <Text fontWeight={"bold"} fontSize={"24px"} >100</Text>
            </Flex>
            
        </Flex>
        <Flex className='card4' flex="1" bg={"white"} flexDirection={"column"}>
            <Flex  justifyContent={"center"} width={"100%"}>
            <Text>Rating</Text>
            </Flex>
            
            <Text fontSize={"24px"} fontWeight={"bold"}>270</Text>
        </Flex>
        </Flex>
        

      </Flex>
    </div>
  )
}

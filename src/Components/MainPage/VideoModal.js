import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";


function VideoModal(props) {
  const {isOpen, onClose, onOpen} = useDisclosure();


  return (
    <>
      <Button onClick={onOpen} _hover={'none'}  position={'relative'} variant='outline' width="11.688rem" height='4.25rem' color='white' fontSize='2.063rem' fontFamily='Montserrat' borderRadius='0.75rem' right='20.5rem' top='6.25rem'  boxShadow='6px 4px 15px rgba(11, 11, 52, 0.25);'>Rules</Button>
    <Modal
  
     isOpen={isOpen}
     onClose={onClose}
     isCentered
     motionPreset="slideInBottom"
     closeOnOverlayClick
     
     >
        <ModalOverlay/>
        <ModalContent size={''} minHeight='500px' maxWidth={'800px'} maxHeight='1000px'>
            <ModalHeader fontSize={'20px'} fontWeight='400' textAlign={'center'}>To learn the game, please check the How to Play video.</ModalHeader>
            <ModalCloseButton/>
            <ModalBody> 
                <Box
                as="iframe"
                src="https://www.youtube.com/embed/HGCYwaZUFvQ"
                width={'750px'}
                height='400px'
                allowFullScreen
                controls
                />
            </ModalBody>
        </ModalContent>
    </Modal>
    </>
  );
}

export default VideoModal;
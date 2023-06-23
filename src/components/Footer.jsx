import { Box, Button, Heading, Input, Text, Stack, VStack, HStack } from '@chakra-ui/react';
import React from 'react';
import {AiOutlineSend} from "react-icons/ai"

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      minH={'40'}
      p="16"
      color={"white"}
      >

        <Stack direction={["column", "row"]}>
            <VStack alignItems={'stretch'} w={'full'} px={'4'}>

                <Heading size='md' textTransform={"uppercase"} textAlign={'center'}>
                    Subscribe to get updates
                </Heading>
                <HStack
                    borderBottom={'2px solid white'}
                    py={'2'}
                >
                    <Input 
                        placeholder='Enter Email Here...' 
                        border={'none'} 
                        borderRadius={'none'}
                        outline={'none'}    
                        focusBorderColor='none' 
                    />
                    <Button
                        p={'0'}
                        colorScheme={'purple'}
                        variant={'ghost'}
                        borderRadius={'0 20px 20px 0'}
                    >
                        <AiOutlineSend size={20}/>
                    </Button>
                </HStack>
            </VStack>

            <VStack 
                w={'full'}
                borderLeft={['none', '1px solid white']}    
                borderRight={['none', '1px solid white']}    
            >

                <Heading textTransform={'uppercase'} textAlign={'center'}>
                    VIDTUBE
                </Heading>
                <Text>
                    All right received
                </Text>
            </VStack>
            
            <VStack 
                w={'full'}   
            >
                <Heading size={'md'} textTransform={'uppercase'}>
                    Social Media
                </Heading>
                <Button variant={'link'} colorScheme={'white'}>
                    <a href="https://www.linkedin.com/in/abhishek-pandey-34319b242/" target={"blank"}>
                        LinkedIn
                    </a>
                </Button>
                <Button variant={'link'} colorScheme={'white'}>
                    <a href="https://twitter.com/abhi_pandey_twt" target={"blank"}>
                        Twitter
                    </a>
                </Button>
                <Button variant={'link'} colorScheme={'white'}>
                    <a href="https://github.com/abhishek06-github" target={"blank"}>
                        Github
                    </a>
                </Button>
            </VStack>
        </Stack>


    </Box>
  )
}

export default Footer
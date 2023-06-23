import React from 'react'
import { Box, Image, Heading, Container, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.png"

const headingOptions = {
  pos: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  textTransform: "uppercase",
  padding: "4",
  size: "4xl"
}

const Home = () => {
  return <Box>

  <MyCarousel />
    <Container maxW={'container.xl'} minH={'100vh'} p="16">
      <Heading 
        textTransform={'uppercase'}
        py='2'
        w={'fit-content'}
        borderBottom={'2px solid'}
        m='auto'
      >
        Services
      </Heading>

      <Stack
        h='full'
        p={'4'}
        alignItems={'center'}
        direction={['column', 'row']}
      >
        <Image src={img5} h={["40", "400"]} filter={"hue-rotate(-130deg)"} />

        <Text 
          letterSpacing={"widest"} 
          lineHeight={"190%"} 
          p={["4", "16"]} 
          textAlign={"center"} 
        >
          The company itself is a very successful company. To no one that the times were softened, but that they will come, but the matter will be more severe, for praisers, and the like, we are led to follow the love and pleasure of the just things but something that the body itself never criticizes? Moreover, just a big but let it be comforted, we do not accuse anyone of the matter, nor, from some Libero, he reproaches her with the effort of refusing, and something is asperated What kind of pleasures, when freed from the way, drives them into trouble? By means of pains, any one of them achieves that pleasure, He wants to blame the elders. To find him is to take pains they are all born older than they are, for they will abandon their accusers get the smallest ones here, for they provide where I can open as if or? I will either explain the pleasures of the most worthy accusers He blames these troubles that occur when he escapes. I will explain who and what and all the duties of sorrows!
        </Text>

      </Stack>

    </Container>
  </Box>
  
};

const MyCarousel = () => (
  <Carousel 
    autoPlay 
    infiniteLoop 
    interval={1000} 
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
  
    <Box w={'full'} h={'100vh'}>
      <Image src={img1} />
      <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img2} />
      <Heading bgColor={"whiteAlpha.900"} color={"black"} {...headingOptions}>
        Future is Gaming
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img3} />
      <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>
        Gaming on Console
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img4} />
      <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>
        Night Life
      </Heading>
    </Box>


  </Carousel>
)

export default Home;
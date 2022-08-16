import { Box, Divider, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import { Banner } from '../components/Banner'
import { Slide } from '../components/Slide'
import { TravelTypes } from '../components/TravelTypes'

import "swiper/css/bundle";

export default function Home() {
  return (
    <VStack>
      <Banner />
      <VStack
        w="80%"
        maxW="1440px"
        mx="auto"
      >
        <TravelTypes />
        <Divider my="6" borderColor="gray.700" fontSize="3xl" w="300px" />

        <Text
          py="8"
          fontWeight="medium"
          color="gray.700"
          fontSize="3xl"
          textAlign="center"
        >
          Vamos nessa? <br />
          Então escolha seu continente
        </Text>

        {/* <Slide /> */}
      </VStack>
    </VStack >
  )
}

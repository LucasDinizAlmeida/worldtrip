import { Box, Divider, VStack, Text, Flex, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import { Banner } from '../components/Banner'
import { Slide } from '../components/Slide'
import { TravelTypes } from '../components/TravelTypes'

import 'swiper/css';

export default function Home() {

  // const isShortVersion = useBreakpointValue({
  //   base: true,
  //   lg: false
  // })

  return (
    <VStack
      overflowX="hidden"
      pb="5"
    >
      <Banner />
      <Flex
        w="100%"
      >
        <VStack
          flex={1}
          maxW="1440px"
          px={["5", "20"]}
        >
          <TravelTypes />
          <Divider my="6" borderColor="gray.700" fontSize="3xl" w={["100%", "300px"]} />

          <Text
            py="8"
            fontWeight="medium"
            color="gray.700"
            fontSize={["2xl", "3xl"]}
            textAlign="center"
          >
            Vamos nessa? <br />
            Então escolha seu continente
          </Text>

        </VStack>
      </Flex>

      <Box
        w={["100%", "85%"]}
      >
        <Slide />
      </Box>



    </VStack >
  )
}

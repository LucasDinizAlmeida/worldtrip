import { Flex, Heading, HStack, VStack, Text, Img } from "@chakra-ui/react";


export function Banner() {

  return (
    <Flex
      w="100%"
      bg="url(/assets/Background.png) no-repeat"
    >
      <HStack
        w="80%"
        maxW="1440px"
        mx="auto"
        py="10"
        alignItems="center"
        justifyContent="space-between"
      >
        <VStack spacing={5}
          maxW="500px"
        >
          <Heading
            mr="auto"
            fontWeight="medium"
            color="#f5f8fa"
            textAlign="start"
          >
            5 Continentes, <br />
            infinitas possibilidades
          </Heading>

          <Text
            textAlign="start"
            color="#dadada"
            fontSize="xl"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </VStack>

        <Img src="/assets/airplane.png" />

      </HStack>
    </Flex>
  )
}
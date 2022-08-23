import { Flex, Heading, HStack, VStack, Text, Img, useBreakpointValue } from "@chakra-ui/react";


export function Banner() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      w="100%"
      background="url(/assets/Background.png) repeat-x"
    >
      <HStack
        flex={1}
        maxW="1440px"
        mx="auto"
        p={["8", "20"]}
        alignItems="center"
        justifyContent="space-between"
        position="relative"
        mb="20"
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

        {isWideVersion && <Img src="/assets/airplane.png" position="absolute" bottom={-9} right={20} />}

      </HStack>
    </Flex>
  )
}
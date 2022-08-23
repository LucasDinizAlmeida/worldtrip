import { Box, HStack, Img, SimpleGrid, Text, useBreakpointValue } from "@chakra-ui/react";


export function TravelTypes() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  if (isWideVersion) {
    return (
      <HStack

        w="100%"
        alignItems="center"
        justifyContent="space-between"
        pt="10"
        pb="12"
      >
        <Box>
          {isWideVersion && <Img src="/assets/travel/cocktail.png" />}
          <Text>vida noturna</Text>
        </Box>
        <Box>
          {isWideVersion && <Img src="/assets/travel/surf.png" />}
          <Text>praia</Text>
        </Box>
        <Box>
          {isWideVersion && <Img src="/assets/travel/building.png" />}
          <Text>moderno</Text>
        </Box>
        <Box>
          {isWideVersion && <Img src="/assets/travel/museum.png" />}
          <Text>clássico</Text>
        </Box>
        <Box>
          {isWideVersion && <Img src="/assets/travel/earth.png" />}
          <Text>e mais...</Text>
        </Box>

      </HStack>
    )
  }

  return (
    <SimpleGrid flex="1" gap="4" alignItems="center" my="3">
      <HStack>
        <Box bg="#FFBA08" rounded="full" h="2" w="2" mr="2"></Box>
        <Text>vida noturna</Text>
      </HStack>
      <HStack>
        <Box bg="#FFBA08" rounded="full" h="2" w="2" mr="2"></Box>
        <Text>praia</Text>
      </HStack>
      <HStack>
        <Box bg="#FFBA08" rounded="full" h="2" w="2" mr="2"></Box>
        <Text>moderno</Text>
      </HStack>
      <HStack>
        <Box bg="#FFBA08" rounded="full" h="2" w="2" mr="2"></Box>
        <Text>clássico</Text>
      </HStack>
      <HStack>
        <Box bg="#FFBA08" rounded="full" h="2" w="2" mr="2"></Box>
        <Text>e mais...</Text>
      </HStack>
    </SimpleGrid>
  )
}
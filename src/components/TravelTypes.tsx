import { Box, HStack, Img, Text } from "@chakra-ui/react";


export function TravelTypes() {

  return (
    <HStack
      w="100%"
      alignItems="center"
      justifyContent="space-between"
      pt="10"
      pb="12"
    >
      <Box>
        <Img src="/assets/travel/cocktail.png" />
        <Text>vida noturna</Text>
      </Box>
      <Box>
        <Img src="/assets/travel/surf.png" />
        <Text>praia</Text>
      </Box>
      <Box>
        <Img src="/assets/travel/building.png" />
        <Text>moderno</Text>
      </Box>
      <Box>
        <Img src="/assets/travel/museum.png" />
        <Text>clássico</Text>
      </Box>
      <Box>
        <Img src="/assets/travel/earth.png" />
        <Text>e mais...</Text>
      </Box>

    </HStack>
  )
}
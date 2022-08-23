import { Box, HStack, SimpleGrid, Text, useBreakpointValue } from "@chakra-ui/react";


export function NumberCitys() {

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true
  })


  if (isWideVersion) {
    return (
      <SimpleGrid
        alignItems="center"
        flex="1"
        minChildWidth={20}
        gap="1"
        mt="6"
        ml="auto"
        flexDirection="row"
      >
        <Box alignItems="center" display="flex" flexDirection="column">
          <Text fontWeight="medium" fontSize={["2xl", "5xl"]} color="#FFBA08">50</Text>
          <Text fontWeight="medium">países</Text>
        </Box>
        <Box alignItems="center" display="flex" flexDirection="column">
          <Text fontWeight="medium" fontSize={["2xl", "5xl"]} color="#FFBA08">60</Text>
          <Text fontWeight="medium">línguas</Text>
        </Box>
        <Box alignItems="center" display="flex" flexDirection="column">
          <Text fontWeight="medium" fontSize={["2xl", "5xl"]} color="#FFBA08">27</Text>
          <Text fontWeight="medium">cidades + 100</Text>
        </Box>
      </SimpleGrid>
    )
  }

  return (
    <HStack alignItems="center" spacing={["50", "100"]} mt="6">
      <Box alignItems="center" display="flex" flexDirection="column">
        <Text fontWeight="medium" fontSize={["2xl", "5xl"]} color="#FFBA08">50</Text>
        <Text fontWeight="medium">países</Text>
      </Box>
      <Box alignItems="center" display="flex" flexDirection="column">
        <Text fontWeight="medium" fontSize={["2xl", "5xl"]} color="#FFBA08">60</Text>
        <Text fontWeight="medium">línguas</Text>
      </Box>
      <Box alignItems="center" display="flex" flexDirection="column">
        <Text fontWeight="medium" fontSize={["2xl", "5xl"]} color="#FFBA08">27</Text>
        <Text fontWeight="medium">cidades + 100</Text>
      </Box>
    </HStack>
  )


}
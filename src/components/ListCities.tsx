import { Box, Flex, Img, SimpleGrid, Text } from "@chakra-ui/react"
import { Cities } from "../types/ContinentData"



interface ListCitiesProps {
  citys: Cities
}

export function ListCities({ citys }: ListCitiesProps) {

  return (
    <Flex w={["80%", "100%"]} py={19}>
      <SimpleGrid flex="1" gap="4" minChildWidth={[150, 240]} alignItems="center" flexDirection="row">
        <Box>
          <Img src={citys?.city_1.image} />
          <Box p="5" alignItems="center">
            <Text color="gray.900" fontWeight="medium">{citys?.city_1.name}</Text>
            <Text color="gray.500" fontSize="xs">{citys?.city_1.country}</Text>
          </Box>
        </Box>
        <Box>
          <Img src={citys?.city_2.image} />
          <Box p="5">
            <Text color="gray.900" fontWeight="medium">{citys?.city_2.name}</Text>
            <Text color="gray.500" fontSize="xs">{citys?.city_2.country}</Text>
          </Box>
        </Box>
        <Box>
          <Img src={citys?.city_3.image} />
          <Box p="5">
            <Text color="gray.900" fontWeight="medium">{citys?.city_3.name}</Text>
            <Text color="gray.500" fontSize="xs">{citys?.city_3.country}</Text>
          </Box>
        </Box>
        <Box>
          <Img src={citys?.city_4.image} />
          <Box p="5">
            <Text color="gray.900" fontWeight="medium">{citys?.city_4.name}</Text>
            <Text color="gray.500" fontSize="xs">{citys?.city_4.country}</Text>
          </Box>
        </Box>
        <Box>
          <Img src={citys?.city_5.image} />
          <Box p="5">
            <Text color="gray.900" fontWeight="medium">{citys?.city_5.name}</Text>
            <Text color="gray.500" fontSize="xs">{citys?.city_5.country}</Text>
          </Box>
        </Box>
      </SimpleGrid>
    </Flex>
  )
}
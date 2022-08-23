import { Box, Flex, Heading, HStack, VStack, Text, Img, SimpleGrid } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ListCities } from "../../components/ListCities";
import { NumberCitys } from "../../components/NumberCitys";
import { ContinentData } from "../../types/ContinentData";

// interface ContinentProps {
//   title: string
// }


export default function Continent() {

  const { asPath } = useRouter()
  // console.log(asPath)
  const slug = asPath.substring(11)


  const [content, setContent] = useState<ContinentData>({} as ContinentData)



  useEffect(() => {

    async function getData() {
      const response = await fetch(`http://localhost:3000/api/continent/${slug}`)
      const data: ContinentData = await response.json()

      setContent(data)
    }

    getData()

  }, [])

  return (
    <VStack>
      <Flex
        p="10"
        alignItems={["center", "flex-end"]}
        justifyContent={["center", "flex-start"]}
        bg={`url(${content.image})`}
        backgroundPosition="center"
        w="100%"
        h="250"
        boxShadow="inset 0 0 0 2000px rgba(34, 30, 32, 0.425)"  //coloca olerlay
      >
        <Heading
          color="gray.50"
          fontWeight="medium"
          fontSize={["3xl", "5xl"]}
        >
          {content.title}
        </Heading>

      </Flex>

      <Flex
        w="100%"
      >
        <VStack
          maxW="1440px"
          flex="1"
          mx="auto"
          px={["5", "20"]}
          alignItems={["center", "flex-start"]}
        >

          <Flex
            direction={['column', 'row']}
            my="20"
            alignItems="center"
            justifyContent="space-between"
            w="100%"
          >
            <Box w="100%" maxW="500px">
              <Text fontSize={["lg", "xl"]} textAlign="justify">{content.description}</Text>
            </Box>

            <NumberCitys />
          </Flex>

          <Text
            color="gray.600"
            fontWeight="medium"
            fontSize={["3xl", "4xl"]}
          >
            Cidades +100
          </Text>

          <ListCities citys={content.citys} />

        </VStack>
      </Flex>
    </VStack>
  )
}

export const getStaticPaths: GetStaticPaths = () => {

  return {
    paths: [],
    fallback: "blocking"
  }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { slug } = params


  return {
    props: {
      title: String(slug)
    },
    revalidate: 60 * 60 * 24 //24hours
  }
}
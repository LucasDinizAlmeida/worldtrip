import { Flex, Img } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";


export function Header() {

  const { asPath } = useRouter()

  return (
    <Flex
      maxW="1440px"
      mx="auto"
      py="7"
      as="header"
      alignItems="center"
      justifyContent="center"
      bg="gray.50"
    >
      {
        asPath === '/' ?
          <Img src='/assets/logo.png' />
          :
          <Flex w="50%" alignItems="center" justifyContent="space-between" mr="auto" ml="20">
            <Link href="/">
              <Flex mr="auto">
                <Img src="/assets/vector.png" />
              </Flex>
            </Link>

            <Img src='/assets/logo.png' />
          </Flex>
      }

    </Flex>
  )
}
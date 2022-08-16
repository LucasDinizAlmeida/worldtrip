import { Flex, Img } from "@chakra-ui/react";


export function Header() {

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
      <Img src='/assets/logo.png' />
    </Flex>
  )
}
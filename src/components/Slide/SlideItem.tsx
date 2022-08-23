import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Link, { LinkProps } from "next/link";

interface SlideItemProps extends LinkProps {
  src: string
}


export function SlideItem({ src, ...rest }: SlideItemProps) {

  return (
    <Link {...rest}>
      <Flex
        as="a"
        alignItems="center"
        maxH="400px"
        boxShadow="inset 0 0 0 2000px rgba(34, 30, 32, 0.425)"
      >

        <Image src={src} />

      </Flex>
    </Link>

  )
}
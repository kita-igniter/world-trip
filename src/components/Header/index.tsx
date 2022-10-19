import { Box, Flex, Img } from "@chakra-ui/react";
import Link from "next/link";

interface HeaderProps {
  backLink?: boolean;
}

export function Header({ backLink }: HeaderProps) {
  return (
    <Box
      width="100%"
      maxW="1160px"
      position="relative"
      margin="0 auto"
    >
      {!backLink && (
        <Link href="/">
          <Img 
            src="/images/continents/back.svg"
            alt="Back to Home"
            position="absolute"
            left="20px"
            top="40px"
            cursor="pointer"
          />
        </Link>
      )}
      
      <Flex
        justifyContent="center"
        alignItems="center"
        height="100px"
      >
        <Img
          src="/logo.svg"
          alt="Logo"
          width="185"
          height="46"
        />
      </Flex>
    </Box>
  );
}
import { Box, Img, Text, Flex } from "@chakra-ui/react"; 

interface ItemIconsProps {
  src: string;
  alt: string;
  children: string;
}

export function ItemIcons({ src, alt, children }: ItemIconsProps) {
  return (
    <Box w={["100%","calc(100%/5)"]}>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Img src={src} alt={alt} w="85px" h="85px" mb="24px"/>
        <Text fontWeight="600" fontSize="18px">{children}</Text>
      </Flex>
    </Box>
  );
}

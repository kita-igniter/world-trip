import {Container, Heading, HStack, Box, Img, Text, Flex} from "@chakra-ui/react";

interface Cities {
  name: string;
  thumb: string;
  country: string;
  flag: string;
}

interface CitiesProps {
  cities: Array<Cities>;
}

export function Cities({ cities }: CitiesProps) {
  return (
    <Container  maxW="1160" margin="0 auto" p={["40px 0 20px 0", "80px 0 100px 0"]}>
        <Heading paddingBottom="40px" fontWeight="500" textAlign={["center", "left"]} fontSize={["22px","36px"]} padding={["10px 0", "15px 0"]} lineHeight="54px" color="dark.800">Cities +100</Heading>
        <Flex flexWrap="wrap" justifyContent={["center", "flex-start"]} gap="45px">
          {cities.map(city => {
            return (
              <Box background="light.100" key={city.name} marginLeft="0 !important">
                <Img src={city.thumb} alt={city.name}/>
                <HStack justifyContent="space-around" p="30px 0">
                  <Box>
                    <Heading color="dark.800" fontSize="20px" lineHeight="25px">{city.name}</Heading>
                    <Text color="dark.700" fontSize="16px" lineHeight="26px">{city.country}</Text>
                  </Box>
                  <Box>
                    <Img src={city.flag} alt={city.name}/>
                  </Box>
                </HStack>
              </Box>
            );
          })}
        </Flex>
    </Container>
  );
}
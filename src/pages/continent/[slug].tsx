import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import {
  Box,
  Heading,
  Img,
  Container,
  Text,
  HStack,
  VStack,
  Tooltip,
  Flex,
} from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Cities } from "../../components/Cities";

interface ContinentProps {
  continent: {
    id: string;
    name: string;
    content: {
      text: string;
      thumb: string;
      countries: string;
      languages: string;
      citiesNumber: string;
      cities: [
        {
          name: string;
          thumb: string;
          country: string;
          flag: string;
        }
      ];
    };
  };
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <>
      <Head>
        <title>{continent.name}</title>
      </Head>
      <Header />
      <Box>
        <HStack
          maxW="1440px"
          margin="0 auto"
          backgroundImage={continent.content.thumb}
          width="100%"
          height={["auto", "500px"]}
          alignItems="flex-end"
          backgroundSize="cover"
        >
          <Box maxW="1160px" width="100%" margin="30px auto" zIndex="1" padding={["10px", "0px"]}>
            <Heading
              color="light.500"
              fontSize={["22px", "36px"]}
              lineHeight={["32px", "54px"]}
            >
              {continent.name}
            </Heading>
          </Box>
        </HStack>
      </Box>
      <Container maxW="1160px" margin="0 auto" p={["30px 0 0 0", "80px 0 0 0"]}>
        <Flex flexDirection={["column", "row"]} gap={["30px", "70px"]}>
          <Text
            color="dark.800"
            fontSize={["18px", "24px"]}
            lineHeight={["27px", "36px"]}
            textAlign="justify"
            maxW="600px"
            padding={["10px", "0px"]}
          >
            {continent.content.text}
          </Text>
          <Flex
            flexDirection={["column", "row"]}
            align-items="center"
            gap="30px"
          >
            <VStack>
              <Heading color="highlight.400" fontSize="42px" lineHeight="72px">
                {continent.content.countries}
              </Heading>
              <Text
                fontSize="24px"
                lineHeight="32px"
                color="dark.800"
                fontWeight="600"
              >
                countries
              </Text>
            </VStack>
            <VStack>
              <Heading color="highlight.400" fontSize="42px" lineHeight="72px">
                {continent.content.languages}
              </Heading>
              <Text
                fontSize="24px"
                lineHeight="32px"
                color="dark.800"
                fontWeight="600"
              >
                languages
              </Text>
            </VStack>
            <VStack>
              <Heading color="highlight.400" fontSize="42px" lineHeight="72px">
                {continent.content.citiesNumber}
              </Heading>
              <Text
                fontSize="24px"
                lineHeight="32px"
                color="dark.800"
                fontWeight="600"
              >
                cities +100
                <Tooltip label="Cities among the 100 most visited">
                  <Img
                    paddingLeft="5px"
                    display="inline"
                    src="/images/continents/Info.svg"
                    alt="Icon"
                  />
                </Tooltip>
              </Text>
            </VStack>
          </Flex>
        </Flex>
      </Container>
      <Cities cities={continent.content.cities} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const continent = await fetch(
    `http://localhost:3000/api/continents?continent=${slug}`
  )
    .then((res) => res.json())
    .then((res) => res);

  if (continent.error) {
    //Se o fetch retornar error ele renderiza o 404
    return {
      notFound: true,
    };
  }

  return {
    props: {
      continent,
    },
    revalidate: 5,
  };
};

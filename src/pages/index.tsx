import { useState } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { Box, Img, Heading, Text, Flex, useMediaQuery } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { ItemIcons } from "../components/ItemIcons";
import { Slider } from "../components/Slider";

export default function Home({ slidesData }) {
  return (
    <>
      <Head>
        <title>World Trip</title>
      </Head>
      <Box maxW="1440px" width="100%" m="0 auto">
        <Header backLink />
        <Flex
          backgroundImage="./images/Background.jpg"
          justifyContent="space-around"
          alignItems="center"
          h={["200px","335px"]}
        >
          <Box>
            <Heading
              color="light.500"
              pb="20px"
              fontSize={["22px","36px"]}
              lineHeight={["32px","54px"]}
            >
              6 Continents,
              <br /> endless possibilities
            </Heading>
            <Text color="light.300">
              The time is now to trip you
              <br />
              have always dreamed of.
            </Text>
          </Box>
          <Img
            src="./images/Airplane.svg"
            alt="Airplane"
            w={["120px","417px"]}
            h={["270px", "368px"]}
            transform="rotate(3deg)"
            mb="-155px"
          />
        </Flex>

        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection={["column", "row"]}
          gap={["50px", "130px"]}
          maxWidth="1160px"
          height={["auto", "332px"]}
          m={["50px auto", "0 auto"]}
          position="relative"
          _after={{
            content: '""',
            position: "absolute",
            w: "90px",
            h: "2px",
            bottom: ["-30px", "0px"],
            background: "dark.800",
          }}
        >
          <ItemIcons src="./images/night-life.svg" alt="Vida Noturna">
            Nightlife
          </ItemIcons>
          <ItemIcons src="./images/beach.svg" alt="Praia">
            Beach
          </ItemIcons>
          <ItemIcons src="./images/modern.svg" alt="Moderno">
            Modern
          </ItemIcons>
          <ItemIcons src="./images/classic.svg" alt="Clássico">
            Classic
          </ItemIcons>
          <ItemIcons src="./images/more.svg" alt="E mais...">
            And more...
          </ItemIcons>
        </Flex>
        <Box mt={["100px","52px"]}>
          <Heading
            color="highlight.400"
            textAlign="center"
            fontSize={["22px","36px"]}
            lineHeight={["32px","54px"]}
            fontWeight="500"
          >
            Let's go!!
            <br />
            Chose your continent
          </Heading>
        </Box>
        <Slider slides={slidesData} />
      </Box>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const slidesRes = await fetch("http://localhost:3000/api/slides");
  const slidesData = await slidesRes.json();

  return {
    props: {
      slidesData,
    },
  };
};

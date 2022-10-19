import NextLink from "next/link";
import { Img, Text, Heading, Box, Flex, Link, background } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface SlidesProps {
  slides: Array<{
    name: string;
    text: string;
    thumb: string;
    link: string;
  }>;
};

export function Slider({ slides }: SlidesProps) {
  const SwiperCss = `
    .swiper-pagination-bullet-active {
      background: #FFBA08;
    }
    .swiper-button-next, .swiper-button-prev {
      color: #FFBA08;
    }
    @media (max-width: 768px) {
      .swiper-button-next, .swiper-button-prev {
        display: none;
      }
    }
  `;
  return (
    <>
    <style>{SwiperCss}</style>
      <Box maxWidth="1240px" m="52px auto">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={true}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          {slides.map(slide => (
            <SwiperSlide key={slide.name}>
              <NextLink href={slide.link} passHref>
                <Link>
                  <Flex position="relative" justifyContent="center" alignItems="center">
                    <Box position="absolute" zIndex="1" textAlign="center">
                      <Heading color="light.500" fontSize={["22px","36px"]} lineHeight={["32px","54px"]}>
                        {slide.name}
                      </Heading>
                      <Text color="light.300" fontSize={["18px","24px"]} lineHeight={["27px","36px"]} mt={["10px", "16px"]}>
                        {slide.text}
                      </Text>
                    </Box>
                    <Img
                      src={slide.thumb}
                      alt={slide.name}
                      filter="brightness(0.5)"
                    />
                  </Flex>
                </Link>
              </NextLink>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
}



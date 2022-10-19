import { NextApiRequest, NextApiResponse } from "next";

export default function GetSlides(req: NextApiRequest, res: NextApiResponse) {
  return res.json([
    {
      name: "Europe",
      text: "The oldest continent",
      thumb: "/images/europe.jpg",
      link: "/continent/europe"
    },
    {
      name: "Africa",
      text: "The cradle of the world",
      thumb: "/images/africa.jpg",
      link: "/continent/africa"
    },
    {
      name: "North America",
      text: "The largest countries",
      thumb: "/images/north-america.jpg",
      link: "/continent/north-america"
    },
    {
      name: "South America",
      text: "The best story",
      thumb: "/images/south-america.jpg",
      link: "/continent/south-america"
    },
    {
      name: "Asia",
      text: "The most fascinating culture",
      thumb: "/images/asia.jpg",
      link: "/continent/asia"
    },
    {
      name: "Oceania",
      text: "The best beaches",
      thumb: "/images/oceania.jpg",
      link: "/continent/oceania"
    },
  ]);
}


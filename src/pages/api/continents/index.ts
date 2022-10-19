import { NextApiRequest, NextApiResponse } from "next";

export default function GetContinents(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (String(req.query.continent)) {
    case "europe":
      return res.json({
        id: "europe",
        name: "Europe",
        content: {
          text: "Europe is a landmass, which is either considered a continent in its own right or a subcontinent of Eurasia, located entirely in the Northern Hemisphere and mostly in the Eastern Hemisphere. Comprising the westernmost peninsulas of Eurasia, it shares the continental landmass of Afro-Eurasia with both Africa and Asia.",
          thumb: "/images/continents/europe/europe.jpg",
          countries: "50",
          languages: "60",
          citiesNumber: "34",
          cities: [
            {
              name: "London",
              thumb: "/images/continents/europe/london.jpg",
              country: "United kingdom",
              flag: "/images/continents/europe/flags/london.svg",
            },
            {
              name: "Paris",
              thumb: "/images/continents/europe/paris.jpg",
              country: "France",
              flag: "/images/continents/europe/flags/paris.svg",
            },
            {
              name: "Roma",
              thumb: "/images/continents/europe/roma.jpg",
              country: "Italy",
              flag: "/images/continents/europe/flags/roma.svg",
            },
            {
              name: "Praga",
              thumb: "/images/continents/europe/praga.jpg",
              country: "Czech republic",
              flag: "/images/continents/europe/flags/praga.svg",
            },
            {
              name: "Amsterdam",
              thumb: "/images/continents/europe/amsterda.jpg",
              country: "netherlands",
              flag: "/images/continents/europe/flags/amsterda.svg",
            },
          ],
        },
      });
    case "asia":
      return res.json({
        id: "asia",
        name: "Asia",
        content: {
          text: "Asia is the largest continent in the world and takes up 30% of the total area of the earth – that’s pretty huge! It’s also home to diverse cultures, delicious foods, some of the largest countries in the world and so much more.",
          thumb: "/images/continents/asia/asia.jpg",
          countries: "48",
          languages: "2300",
          citiesNumber: "20",
          cities: [
            {
              name: "Hong Kong",
              thumb: "/images/continents/asia/hongkong.jpg",
              country: "China",
              flag: "/images/continents/asia/flags/china.svg",
            },
            {
              name: "Bang Kok",
              thumb: "/images/continents/asia/bangkok.jpg",
              country: "Thailand",
              flag: "/images/continents/asia/flags/thailand.svg",
            },
            {
              name: "Tokyo",
              thumb: "/images/continents/asia/tokyo.jpg",
              country: "Japan",
              flag: "/images/continents/asia/flags/japan.svg",
            },
            {
              name: "Dubai",
              thumb: "/images/continents/asia/dubai.jpg",
              country: "United Arab Emirates",
              flag: "/images/continents/asia/flags/united_arab_emirates.svg",
            },
            {
              name: "Delhi",
              thumb: "/images/continents/asia/delhi.jpg",
              country: "India",
              flag: "/images/continents/asia/flags/india.svg",
            },
          ],
        },
      });
    case "north-america":
      return res.json({
        id: "north-america",
        name: "North America",
        content: {
          text: "North America is a continent in the Northern Hemisphere and almost entirely within the Western Hemisphere. It is bordered to the north by the Arctic Ocean, to the east by the Atlantic Ocean, to the southeast by South America and the Caribbean Sea, and to the west and south by the Pacific Ocean. Because it is on the North American Tectonic Plate, Greenland is included as a part of North America geographically.",
          thumb: "/images/continents/north-america/north-america.jpg",
          countries: "23",
          languages: "430",
          citiesNumber: "10",
          cities: [
            {
              name: "New York",
              thumb: "/images/continents/north-america/new-york.jpg",
              country: "USA",
              flag: "/images/continents/north-america/flags/usa.svg",
            },
            {
              name: "Miami",
              thumb: "/images/continents/north-america/miami.jpg",
              country: "USA",
              flag: "/images/continents/north-america/flags/usa.svg",
            },
            {
              name: "Toronto",
              thumb: "/images/continents/north-america/toronto.jpg",
              country: "Canada",
              flag: "/images/continents/north-america/flags/canada.svg",
            },
            {
              name: "Punta Cana",
              thumb: "/images/continents/north-america/punta-cana.jpg",
              country: "Dominican Republic",
              flag: "/images/continents/north-america/flags/dominican-republic.svg",
            },
            {
              name: "Vancouver",
              thumb: "/images/continents/north-america/vancouver.jpg",
              country: "Canada",
              flag: "/images/continents/north-america/flags/canada.svg",
            },
          ],
        },
      });
    case "south-america":
      return res.json({
        id: "south-america",
        name: "South America",
        content: {
          text: "South America is a continent entirely in the Western Hemisphere and mostly in the Southern Hemisphere, with a relatively small portion in the Northern Hemisphere at the northern tip of the continent. It can also be described as the southern subregion of a single continent called America.",
          thumb: "/images/continents/south-america/south-america.jpg",
          countries: "12",
          languages: "448",
          citiesNumber: "21",
          cities: [
            {
              name: "Machu Picchu",
              thumb: "/images/continents/south-america/machu-pichu.jpg",
              country: "Peru",
              flag: "/images/continents/south-america/flags/peru.svg",
            },
            {
              name: "Rio de Janeiro",
              thumb: "/images/continents/south-america/rio-de-janeiro.jpg",
              country: "Brazil",
              flag: "/images/continents/south-america/flags/brazil.svg",
            },
            {
              name: "Galapagos Islands",
              thumb: "/images/continents/south-america/galapagos-islands.jpg",
              country: "Ecuador",
              flag: "/images/continents/south-america/flags/ecuador.svg",
            },
            {
              name: "Angel Falls",
              thumb: "/images/continents/south-america/angel-falls.jpg",
              country: "Venezuela",
              flag: "/images/continents/south-america/flags/venezuela.svg",
            },
            {
              name: "Tayrona Park",
              thumb: "/images/continents/south-america/tayrona.jpg",
              country: "Colombia",
              flag: "/images/continents/south-america/flags/colombia.svg",
            },
          ],
        },
      });
    case "oceania":
      return res.json({
        id: "oceania",
        name: "Oceania",
        content: {
          text: "This marine realm has the greatest diversity of tropical coral in the world and includes the world's two largest coral formations: Australia's Great Barrier Reef and the New Caledonia Barrier Reef.",
          thumb: "/images/continents/oceania/oceania.jpg",
          countries: "14",
          languages: "450",
          citiesNumber: "16",
          cities: [
            {
              name: "Auckland",
              thumb: "/images/continents/oceania/auckland.jpg",
              country: "New Zealand",
              flag: "/images/continents/oceania/flags/new-zealand.svg",
            },
            {
              name: "Brisbane",
              thumb: "/images/continents/oceania/brisbane.jpg",
              country: "Australia",
              flag: "/images/continents/oceania/flags/australia.svg",
            },
            {
              name: "Jayapura",
              thumb: "/images/continents/oceania/jayapura.jpg",
              country: "Indonesia",
              flag: "/images/continents/oceania/flags/indonesia.svg",
            },
            {
              name: "Honolulu",
              thumb: "/images/continents/oceania/honolulu.jpg",
              country: "United States",
              flag: "/images/continents/oceania/flags/usa.svg",
            },
            {
              name: "Sydney",
              thumb: "/images/continents/oceania/sydney.jpg",
              country: "Australia",
              flag: "/images/continents/oceania/flags/australia.svg",
            },
          ],
        },
      });
    case "africa": 
    return res.json({
      id: "africa",
      name: "Africa",
      content: {
        text: "Africa is the world's second-largest and second-most populous continent, after Asia in both cases. At about 30.3 million km2 (11.7 million square miles) including adjacent islands, it covers 6% of Earth's total surface area and 20% of its land area. With 1.4 billion people as of 2021, it accounts for about 18% of the world's human population. Africa's population is the youngest amongst all the continents.",
        thumb: "/images/continents/africa/africa.jpg",
        countries: "54",
        languages: "2000",
        citiesNumber: "8",
        cities: [
          {
            name: "Johannesburg",
            thumb: "/images/continents/africa/johannesburg.jpg",
            country: "South Africa",
            flag: "/images/continents/africa/flags/south-africa.svg",
          },
          {
            name: "Cairo",
            thumb: "/images/continents/africa/cairo.jpg",
            country: "Egypt",
            flag: "/images/continents/africa/flags/egypt.svg",
          },
          {
            name: "Stone Town",
            thumb: "/images/continents/africa/stone-town.jpg",
            country: "Zanzibar",
            flag: "/images/continents/africa/flags/zanzibar.svg",
          },
          {
            name: "Marrakesh",
            thumb: "/images/continents/africa/marrakesh.jpg",
            country: "Marocco",
            flag: "/images/continents/africa/flags/marocco.svg",
          },
          {
            name: "Lagos",
            thumb: "/images/continents/africa/lagos.jpg",
            country: "Nigeria",
            flag: "/images/continents/africa/flags/nigeria.svg",
          },
        ],
      },
    });
    default:
      return res.json({ error: true, message: "Data not found" });
  }
}

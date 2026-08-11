export type RecordItem = {
  id: string;
  slug: string;
  title: string;
  artist: string;
  genre: string;
  year: number;
  price: number;
  accent: string;
  image: string;
  description: string;
};

export const records: RecordItem[] = [
  {
    id: "1",
    slug: "abbey-road",
    title: "Abbey Road",
    artist: "The Beatles",
    genre: "Rock and Pop",
    year: 1969,
    price: 29.99,
    accent: "#DCD8CC",
    image: "/images/records/abbey_road.jpg",
    description:
      "A fictional late-night electronic record built for neon streets, empty highways, and headphones after midnight.",
  },
  {
    id: "2",
    slug: "nevermind",
    title: "Nevermind",
    artist: "Nirvana",
    genre: "Grunge",
    year: 1991,
    price: 34.99,
    accent: "#4A90A4",
    image: "/images/records/nevermind.jpeg",
    description:
      "Warm analogue soul with dusty drums, intimate vocals, and the kind of grooves that reward repeated listens.",
  },
  {
    id: "3",
    slug: "thriller",
    title: "Thriller",
    artist: "Michael Jackson",
    genre: "Pop",
    year: 1982,
    price: 27.99,
    accent: "#F2C879",
    image: "/images/records/thriller.jpg",
    description:
      "A hazy modern jazz session pressed for slow Sunday mornings and rainy windows.",
  },
  {
    id: "4",
    slug: "blonde",
    title: "Blonde",
    artist: "Frank Ocean",
    genre: "R&B",
    year: 2016,
    price: 31.99,
    accent: "#7A93A8",
    image: "/images/records/blonde.jpg",
    description:
      "Angular guitars, restless bass, and sharp melodies from a fictional Toronto post-punk outfit.",
  },
  {
    id: "5",
    slug: "rumors",
    title: "Rumors",
    artist: "Fleetwood Mac",
    genre: "Indie",
    year: 1977,
    price: 26.99,
    accent: "#7A93A8",
    image: "/images/records/rumors.jpg",
    description:
      "Sun-faded indie pop with jangly guitars and a little bit of tape hiss.",
  },
  {
    id: "6",
    slug: "love-deluxe",
    title: "Love Deluxe",
    artist: "Sade",
    genre: "Soul",
    year: 1992,
    price: 32.99,
    accent: "#C9A896",
    image: "/images/records/sade_love_deluxe.jpg",
    description:
      "A fictional crate-digger's house selection designed for late nights and packed dance floors.",
  },
];

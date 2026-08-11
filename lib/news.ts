export type NewsItem = {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  author: string;
  genre?: string;
  accent: string;
  image: string;
  description: string;
};

export const news: NewsItem[] = [
  {
    id: "1",
    slug: "2023-dec-23",
    title: "Last minute gift ideas!!",
    subtitle: "Telegram AD",
    date: "December 23rd, 2023",
    author: "John Doe",
    accent: "#DCD8CC",
    image: "/images/news/2023/dec23.jpg",
    description: "",
  },
  {
    id: "2",
    slug: "2023-dec-16",
    title: "Do you hear what I hear?",
    subtitle: "Telegram AD",
    date: "December 16th, 2023",
    author: "Jane Doe",
    accent: "#4A90A4",
    image: "/images/news/2023/dec16.jpg",
    description: "",
  },
  {
    id: "3",
    slug: "2023-dec-9",
    title: "Christmas is coming.",
    subtitle: "Telegram AD",
    date: "December 9th, 2023",
    author: "John Doe",
    accent: "#F2C879",
    image: "/images/news/2023/dec9.jpg",
    description: "",
  },
  {
    id: "4",
    slug: "2023-nov-25",
    title: "Music from home, something for everyone",
    subtitle: "Telegram AD",
    date: "November 25th, 2023",
    author: "Jane Doe",
    accent: "#7A93A8",
    image: "/images/news/2023/nov25.jpg",
    description: "",
  },
  {
    id: "5",
    slug: "2022-dec-17",
    title: "Do you hear what I hear?",
    subtitle: "Telegram AD",
    date: "December 17th, 2022",
    author: "John Doe",
    accent: "#7A93A8",
    image: "/images/news/2022/dec17.jpg",
    description: "",
  },
];

export interface PortfolioItem {
  id: string;
  title: string;
  service: "repair" | "ceramic" | "ppf";
  vehicle: string;
  description: string;
  image: string;
  beforeImage?: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: "repair-sedan-01",
    title: "Sedan Collision Repair",
    service: "repair",
    vehicle: "2021 Honda Accord",
    description: "Complete front-end collision repair with color matching and refinishing.",
    image: "/images/portfolio/repair-sedan-01.jpg",
  },
  {
    id: "ceramic-bmw-01",
    title: "BMW Ceramic Coating",
    service: "ceramic",
    vehicle: "2022 BMW X5",
    description: "Premium 9H ceramic coating application with 5-year protection guarantee.",
    image: "/images/portfolio/ceramic-bmw-01.jpg",
  },
  {
    id: "ppf-porsche-01", 
    title: "Porsche Paint Protection",
    service: "ppf",
    vehicle: "2023 Porsche 911",
    description: "Full front-end PPF installation with custom cut patterns.",
    image: "/images/portfolio/ppf-porsche-01.jpg",
  },
];

export const serviceCategories = {
  repair: "Collision Repair",
  ceramic: "Ceramic Coating", 
  ppf: "Paint Protection Film"
} as const;
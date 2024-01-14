import Card from "../custom-components/Card";
import { getCurrentUser } from "../services/auth.service";

interface CardData {
  status: string;
  dateStart: string;
  dateEnd: string | null;
  consumption: {
    totalConsumption: number;
  } | null;
  flag: string;
  country: string;
  plan: string;
}

const cards: CardData[] = [
  {
    status: "Expired",
    dateStart: "01/01/2023",
    dateEnd: "04/01/2023",
    consumption: null,
    flag: "CO", // URL de la imagen del country
    country: "Colombia",
    plan: "4 dias, 3GB",
  },
  {
    status: "Expired",
    dateStart: "02/01/2023",
    dateEnd: "02/01/2023",
    consumption: null,
    flag: "CO",
    country: "Colombia",
    plan: "30 dias, 25GB",
  },
  {
    status: "Pending",
    dateStart: "01/01/2024",
    dateEnd: null,
    consumption: {
      totalConsumption: 1468006.4,
    },
    flag: "PE", // URL de la imagen del country
    country: "Peru",
    plan: "1 dia, 1.4GB",
  },
  {
    status: "Active",
    dateStart: "06/10/2023",
    dateEnd: "16/10/2023",
    consumption: {
      totalConsumption: 12582912,
    },
    flag: "ES", // URL de la imagen del country
    country: "España",
    plan: "10 dias, 12GB",
  },
  {
    status: "Pending",
    dateStart: "01/01/2024",
    dateEnd: null,
    consumption: {
      totalConsumption: 1468006.4,
    },
    flag: "PE", // URL de la imagen del country
    country: "Peru",
    plan: "1 dia, 1.4GB",
  },
  {
    status: "Active",
    dateStart: "06/10/2023",
    dateEnd: "16/10/2023",
    consumption: {
      totalConsumption: 12582912,
    },
    flag: "ES", // URL de la imagen del country
    country: "España",
    plan: "10 dias, 12GB",
  },
];

const Home = () => {
  const currentUser = getCurrentUser();
  return (
    <body className="bg-primary flex flex-col">
      <article className="flex overflow-x-auto gap-8 p-10">
        {cards.map((card) => (
          <Card card={card} />
        ))}
      </article>
    </body>
  );
};

export default Home;

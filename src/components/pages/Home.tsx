import { useEffect, useState } from "react";
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

const cardsAux: CardData[] = [
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
      totalConsumption: 1252912,
    },
    flag: "ES", // URL de la imagen del country
    country: "España",
    plan: "10 dias, 12GB",
  },
];

const Home = () => {
  const cards = cardsAux;
  const currentUser = getCurrentUser();
  const [tab, setTab] = useState("all");
  const [listCards, setListCards] = useState<CardData[]>([]);

  useEffect(() => {
    if (tab === "all") {
      setListCards(cards);
    } else if (tab === "available") {
      setListCards(
        cards.filter(
          (card) => card.status === "Active" || card.status === "Pending"
        )
      );
    } else {
      setListCards(cards.filter((card) => card.status === "Expired"));
    }
  }, [tab]);

  return (
    <article className="bg-primary flex h-full flex-col gap-4">
      <header className="w-full p-4 gap-2 flex flex-col md:flex-row bg-white text-4xl font-bold text-primary rounded-b-lg">
        Welcome{" "}
        <h1 className="text-black">
          {currentUser?.name ? currentUser?.name : "User"}
        </h1>
      </header>
      <div className="flex flex-col gap-2">
        <h2
          className={`bg-white rounded-r-full transition-all duration-200 ${
            tab === "all"
              ? "w-4/5 text-3xl py-4 px-8 text-end max-w-xl font-bold text-primary"
              : "w-1/2 text-xl p-2 max-w-xs"
          }`}
          onClick={() => setTab("all")}
        >
          All your products
        </h2>
        <h2
          className={`bg-white rounded-r-full transition-all duration-200 ${
            tab === "available"
              ? "w-4/5 text-3xl py-4 px-8 text-end max-w-xl font-bold text-primary"
              : "w-1/2 text-xl p-2 max-w-xs"
          }`}
          onClick={() => setTab("available")}
        >
          Available products
        </h2>
        <h2
          className={`bg-white rounded-r-full transition-all duration-200 ${
            tab === "expired"
              ? "w-4/5 text-3xl py-4 px-8 text-end max-w-xl font-bold text-primary"
              : "w-1/2 text-xl p-2 max-w-xs"
          }`}
          onClick={() => setTab("expired")}
        >
          Expired products
        </h2>
      </div>
      <article className="flex overflow-x-auto gap-8 py-2 px-10">
        {listCards.map((card, i) => (
          <Card card={card} key={i} />
        ))}
      </article>
    </article>
  );
};

export default Home;

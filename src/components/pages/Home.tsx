import { useEffect, useState } from "react";
import Card from "../custom-components/Card";
import { getCardsByUsername } from "../../utils/UserSlice";

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

const Home = () => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [currentUser, setCurrentUser] = useState("User");
  const [tab, setTab] = useState("all");
  const [listCards, setListCards] = useState<CardData[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let c = await getCardsByUsername(
          window.location.href.split("?")[1].split("=")[1]
        );
        setCurrentUser(window.location.href.split("?")[1].split("=")[1]);
        if (c) {
          setCards(c);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

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
  }, [tab, cards]);

  return (
    <article className="bg-primary flex h-full flex-col gap-4">
      <header className="w-full p-4 gap-2 flex flex-col md:flex-row bg-white text-4xl font-bold text-primary rounded-b-lg">
        Welcome <h1 className="text-black">{currentUser}</h1>
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

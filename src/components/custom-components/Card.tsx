import Status from "./Status";

interface CardProps {
  card: {
    status: string;
    dateStart: string;
    dateEnd: string | null;
    consumption: {
      totalConsumption: number;
    } | null;
    flag: string;
    country: string;
    plan: string;
  };
}

const Card = ({ card }: CardProps) => {
  return (
    <p className="rounded-md p-10 shadow-lg flex flex-col gap-8 min-w-96 h-288 bg-white">
      <span>
        <Status status={card.status} />
      </span>
      <span className="flex gap-4 items-center rounded-full w-fit pr-4 text-2xl font-bold">
        <img
          src={`https://flagsapi.com/${card.flag}/flat/64.png`}
          alt=""
          className="rounded-full w-10 h-10 object-none"
        />
        {card.country}
      </span>
      <span></span>
    </p>
  );
};

export default Card;

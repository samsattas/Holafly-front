import { Box, CircularProgress, Divider } from "@mui/material";
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
  const kbToGb = (kb: number) => {
    return (kb / 1024 / 1024).toFixed(2);
  };
  return (
    <div className="rounded-md px-10 py-6 shadow-lg flex flex-col gap-4 min-w-[355px] h-256 bg-white">
      <div>
        <Status status={card.status} />
      </div>
      <div className="flex gap-4 items-center rounded-full w-fit pr-4 text-2xl font-bold">
        <img
          src={`https://flagsapi.com/${card.flag}/flat/64.png`}
          alt=""
          className="rounded-full w-10 h-10 object-none"
        />
        {card.country}
      </div>
      <div className="flex gap-2">
        <p className="flex flex-col gap-2 w-3/5">
          <span className="text-lg font-bold">Your plan includes</span>
          <span>{card.plan.split(",")[0]}</span>
          <span>{card.plan.split(",")[1]} of data</span>
          <span>Valid from {card.dateStart}</span>
        </p>
        {card.consumption && (
          <p
            className={`w-2/5 justify-center items-center ${
              card.consumption?.totalConsumption ? "flex" : "hidden"
            }`}
          >
            <Box sx={{ position: "relative", display: "inline-flex" }}>
              <CircularProgress
                size={90}
                variant="determinate"
                value={
                  parseFloat(kbToGb(card.consumption?.totalConsumption)) <
                  parseFloat(card.plan.split(",")[1].split("GB")[0])
                    ? (parseFloat(kbToGb(card.consumption?.totalConsumption)) /
                        parseFloat(card.plan.split(",")[1].split("GB")[0])) *
                      100
                    : 100
                }
                style={{ color: "#e6485c" }}
                className="w-96"
              />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {card.consumption?.totalConsumption &&
                  kbToGb(card.consumption?.totalConsumption)}{" "}
                GB
                <br />
                of {card.plan.split(",")[1]}
              </Box>
            </Box>
          </p>
        )}
      </div>
      <Divider />
      <button className="border border-black rounded-md w-full py-2">
        View details
      </button>
      <button
        className={`rounded-md w-full py-2 text-white ${
          card.status === "Pending" && "bg-primary"
        } ${card.status === "Active" && "bg-green-500"} ${
          card.status === "Expired" && "bg-blue-500"
        }`}
      >
        {card.status === "Pending" && "Install"}
        {card.status === "Active" && "⚡ Buy more data"}
        {card.status === "Expired" && "🔋 Reactivate your plan"}
      </button>
    </div>
  );
};

export default Card;

const Status = ({ status }: { status: string }) => {
  return (
    <div
      className={`rounded-full px-4 py-1 w-fit
      ${status === "Pending" && "bg-yellow-100 text-yellow-600"} 
      ${status === "Active" && "bg-green-100 text-green-600"}
      ${status === "Expired" && "bg-gray-100 text-gray-600"}`}
    >
      {status}
    </div>
  );
};

export default Status;

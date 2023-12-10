
const Dashboard = () => {
  return (
    <div className="p-4 flex flex-col gap-6">
      <div className="flex flex-wrap gap-4">
        {[1, 1, 1, 1].map((card, key) => (
          <DataCard key={key} />
        ))}
      </div>

      <div className="flex flex-wrap gap-4">
        {[1, 1, 1, 1].map((card, key) => (
          <DataCardColor key={key} index={key} />
        ))}
      </div>
    </div>
  );
};

const DataCard = () => {
  return (
    <div className=" flex items-center   border border-slate-400 flex-1 p-4 h-24 rounded-md">
      <div className=" px-2 py-2 rounded-full bg-orange-500 text-white mr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
          />
        </svg>
      </div>
      <div>
        <h1 className="text-xl font-semibold">GHC 34000</h1>
        <p className="text-sm font-thin">Total Products In-stock</p>
      </div>
    </div>
  );
};

const colors = ["orange-500", "blue-500", "blue-800", "green-500"];

const DataCardColor = ({ index }) => {
  return (
    <div
      className={`flex  bg-${colors[index]} items-center  justify-between   border-slate-400 text-white flex-1 p-4 h-24 rounded-md`}
    >
      <div>
        <h1 className="text-xl font-semibold">GHC 34000 </h1>
        <p className="text-sm font-thin">Total Products In-stock</p>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";

const MaidPerMonthCard = ({ maid, setBookMaid }) => {
  const { img, name, task, location, gender, salary } = maid;

  const handleKnowMoreClick = () => {
    setBookMaid(maid);
  };

  return (
    <div>
      <div className="w-80 h-80 rounded-3xl border-2 pb-[16.67%] text-black relative bg-slate-100 m-4 hover:scale-105 cursor-grab transition-all duration-300 ease-in-out">
        <div>
          <figure className="absolute top-3 left-3 right-0 h-full">
            <img src={img} alt="Maid" className="h-32 w-32 rounded-full" />
          </figure>
          <div className="p-7 text-right text-black font-bold ">
            <h2 className="text-xl font-bold">{name}</h2>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-right text-black">
          <p>
            <strong>Location:</strong>{" "}
            {Array.isArray(location) ? location.join(", ") : location}
          </p>
          <p>
            <strong className="underline">Task </strong>
            {task && salary ? (
              <ul>
                {task.map((taskName, index) => (
                  <li key={index}>
                    <strong>{taskName}: </strong>
                    {salary[index]}
                  </li>
                ))}
              </ul>
            ) : (
              "Salary information not available"
            )}
          </p>
          <div className="mt-4">
            <label
              for="booking-maid"
              onClick={() => setBookMaid(maid)}
              className="px-4 btn-md mt-3 bg-primary text-white font-bold rounded-full hover:bg-opacity-80 transition duration-300"
            >
              Know More
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaidPerMonthCard;

// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
// import { FaBeer } from 'react-icons/fa';
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { GiCheckMark } from "react-icons/gi";
// import { FaBeer } from 'react-icons/FaBeer';
// import { BsFa } from 'react-icons/BsFa';
const Card = ({
  card,
  handlerSelectedCard,
  selectedCard,
  totlaCost,
  currentBalance,
}) => {
  console.log(totlaCost);
  const buttonChecker = (
    <GiCheckMark className="text-3xl text-emerald-400 "></GiCheckMark>
  );
  // console.log(selectedCard);
  return (
    <div className="grid md:grid-cols-3 grid-cols-2 gap-4 py-10">
      <div className=" md:col-span-2 col-span-1 grid  md:grid-cols-2 grid-cols-1 gap-10">
        {card.map((item, i) => {
          return (
            <div
              className="col-span-1  backdrop-blur p-4 py-7 rounded-md text-center border-2 border-gray-600 max-w-[400px]"
              key={item.id}
            >
              <figure className="flex justify-center items-center">
                <img className="w-44 rounded-full" src={item.image} alt="" />
              </figure>
              <p className="text-2xl my-3 font-bold uppercase">{item.name}</p>
              <p className="my-4 text-xl">
                {" "}
                Your Price:{" "}
                <span className="text-red-500 font-bold">
                  {item.salary}
                </span>{" "}
              </p>

              <div className="flex  gap-3 justify-center items-center">
                <p>FaceBook</p>
                {/* <BsFacebook></BsFacebook> */}
                <FaFacebook className="text-2xl text-emerald-400"></FaFacebook>
              </div>
              <div className="flex  gap-3 justify-center items-center mt-4">
                <p>TwiTer</p>
                {/* <BsFacebook></BsFacebook> */}
                <AiFillTwitterCircle className="text-2xl text-emerald-400"></AiFillTwitterCircle>
              </div>
              {/* ==========button conatainer=========== */}
              <div className="flex justify-center items-center mt-3 gap-4 ">
                <button
                  onClick={() => handlerSelectedCard(item)}
                  className="border-0 outline-0 px-6 py-2 rounded bg-emerald-600   font-semibold uppercase text-white"
                >
                  {" "}
                  Selete
                </button>
                {selectedCard.map((btnId, i) =>
                  item.id == btnId.id ? (
                    <GiCheckMark
                      key={i + btnId.id}
                      className=" text-3xl text-emerald-400 "
                    ></GiCheckMark>
                  ) : (
                    ""
                  )
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className=" col-span-1   backdrop-blur p-4 rounded-md">
        {/* ======= your selected item ========= */}
        <h1 className="text-2xl text-emerald-400  ">
          {" "}
          Selectd item:{" "}
          <span className="text-white">{selectedCard.length}</span>
        </h1>
        {/* ======= current balance========= */}
        <div className=" text-2xl  text-emerald-400 my-3 ">
          Current Balance: <span className="text-white">{currentBalance}</span>
        </div>
        {/* ======= cost balance========= */}
        <div className=" text-2xl  text-emerald-400 my-3 ">
          Totlal Cost: <span className="text-white">{totlaCost}</span>
        </div>

        {/* ======= selecte card title ========= */}
        <div>
          {selectedCard.map((element) => (
            <p
              key={element.id}
              className="text-xl text-white p-3 rounded mb-3 bg-black"
            >
              {element.name}{" "}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;

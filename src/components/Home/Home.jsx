import { useEffect, useState } from "react";
import Card from "../Card/Card";
import swal from "sweetalert";

const Home = () => {
  const [card, setCard] = useState([]);
  const [selectedCard, setSelectedCard] = useState([]);
  const [totlaCost, setTotalCost] = useState(0);
  const [currentBalance, setCurrentBalance] = useState(2000);
  useEffect(() => {
    fetch("../../../public/data.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);
  //   setTotalCost();
  const handlerSelectedCard = (item) => {
    const newSelected = [...selectedCard, item];
    const itemCheker = selectedCard.find((data) => data.id === item.id);
    if (!itemCheker) {
      let cost = item.salary;
      const bujetChecker = selectedCard.forEach((salaryChecker) => {
        cost += salaryChecker.salary;
      });
      const youBujet = 20000 - cost;
      // ========================= mone checker switch alert ======
      if (cost > 20000) {
        swal({
          title: "Opps...",
          text: "Your balance not available",
          icon: "warning",

          // buttons: true,
          dangerMode: true,
        });
      } else {
        setCurrentBalance(youBujet);
        setSelectedCard(newSelected);
        setTotalCost(cost);
      }
      // console.log(cost);
      // console.log(item.salary);
      console.log(totlaCost);
    }

    // console.log(newSelected);
  };
  //   console.log(card);
  return (
    <div>
      <Card
        card={card}
        handlerSelectedCard={handlerSelectedCard}
        selectedCard={selectedCard}
        totlaCost={totlaCost}
        currentBalance={currentBalance}
      ></Card>
    </div>
  );
};

export default Home;

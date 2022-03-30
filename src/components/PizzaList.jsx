import { useSelector } from "react-redux";
import { selectUser } from "../store/users/selectors";
import { getAllPizzas } from "../store/pizzas/selectors";

export default function PizzaList() {
  const user = useSelector(selectUser);
  const pizzaList = useSelector(getAllPizzas);

  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>
      </p>
      <p>TODO: the list of pizzas</p>
      {pizzaList.map((pizza) => (
        <ul key={pizza.id}>
          <li>{pizza.name}</li>
          <li>{pizza.description}</li>
          <li>{pizza.bought}</li>
          <img src={pizza.image} alt="img" />
        </ul>
      ))}
    </div>
  );
}

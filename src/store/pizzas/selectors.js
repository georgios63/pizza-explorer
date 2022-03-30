export const getAllPizzas = (reduxState) => {
  const filteredPizza = [...reduxState.pizzas.allPizzas];

  return filteredPizza.sort((a, b) => {
    return b.bought - a.bought;
  });
};

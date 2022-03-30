export const addPizza = ({ name, description }) => ({
  type: "pizzas/addPizza",
  payload: {
    id: Math.random(),
    name,
    description,
  },
});

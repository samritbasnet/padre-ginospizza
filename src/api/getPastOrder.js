export default async function getPastOrders(order) {
  await new Promise(resolve => setTimeout(resolve, 10000));
  const response = await fetch(`/api/past-order/${order}`);
  const data = await response.json();
  return data;
}

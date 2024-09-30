// export async function generateMetadata({ params }) {
//   console.log("params", params);
//   const product = {
//     id: 1,
//     name: "product 1",
//     description: "hello",
//   };
//   return {
//     title: product.name,
//   };
// }

export default async function Home() {
  const response = await fetch("https://api.escuelajs.co/api/v1/products");
  const products = await response.json();
  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
          </li>
        ))}
      </ul>
    </>
  );
}

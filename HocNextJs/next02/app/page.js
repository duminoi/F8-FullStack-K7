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
  const response = await fetch(
    "https://api-exercise-sopi.vercel.app/api/v1/products?limit=25",
    { next: { revalidate: 3600 } }
  );

  const { data } = await response.json();
  const { listProduct } = data;

  return (
    <>
      <ul>
        {listProduct.map((product) => (
          <li key={product._id}>
            <h2>{product.name}</h2>
          </li>
        ))}
      </ul>
    </>
  );
}

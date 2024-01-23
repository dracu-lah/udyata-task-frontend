import ProductCard from "@/components/ProductCard";
import { useGetProductsQuery } from "@/services/productsApi";
const Dashboard = () => {
  const {
    data,
    error,
    isLoading,
  } = useGetProductsQuery();
  if (isLoading) {
    return <a href="#" aria-busy="true">Loading Products...</a>;
  }
  if (error) {
    return "Error Occurred!";
  }
  return (
    <div className="container">
      {data.products.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
        />
      ))}
    </div>
  );
};

export default Dashboard;

import ProductCard from "@/components/ProductCard";
import { useGetProductsQuery } from "@/services/productsApi";
const Dashboard = () => {
  const {
    data,
    error,
    isLoading,
  } = useGetProductsQuery();
  if (isLoading) {
    return "Loading...";
  }
  if (error) {
    return "Error Occurred!";
  }
  return (
    <div>
      <div>
        {data.products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

import { useParams } from 'react-router-dom';

export default function ProductNotFound() {
  const { productId } = useParams(); //productId should be same as our dynamic route of Product.jsx inside our Route.jsx file

  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-red-900 text-[24px]">
        404 Error: Product {productId} Page Not Found
      </h1>
      <p>Could not find the requested resource</p>
    </div>
  );
}

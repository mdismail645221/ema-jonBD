import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css';
import Order from './components/Order/Order';
import Shop from './components/Shop/Shop';
import Root from './Layout/Layout';
import { ProductsAndCartsLoader } from './Loders/ProductsAndCartsLoader';




function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root></Root>,
      errorElement: <div className='text-center mt-80 text-5xl'>not found</div>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: 'shop',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: "order",
          loader: ProductsAndCartsLoader,
          element: <Order></Order>
        }
      ]
    }
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

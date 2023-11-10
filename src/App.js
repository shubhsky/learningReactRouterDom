import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './pages/Home';
import About from "./pages/About";
import Items from "./pages/Items";
import Navbar from "./Navbar/navbar";
import ItemDetails from "./pages/itemsDetails";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element:<Navbar/>,
      children:[
        {
          // path: '/',
          index:true,
          element:<Home/>
        },
        {
          path: 'about',
          element:<About/>
        },
        {
          path: 'items',
          children:[
            {
              // path: '/',
              index:true,
              element:<Items/>
            },
            {
              path:':itemId',
              element:<ItemDetails/>
            }
          ]
        },
        
      ],
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

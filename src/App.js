import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from  './pages/Home'
import Login from './pages/Login';
import LoginForm from './components/LoginForm';
import Cart from './pages/Cart';
import Main from './Layout/Main'
import Signup from './pages/Signup'
import OrdersForm from './pages/OrdersForm';
import Cards from './components/Cards';
import CustomerForm from './components/CustomerForm';





function App() {
  const router = createBrowserRouter([
    {path:'/', element:<Main></Main>,
  children:[
    {path:'/', element:<Home></Home>},
    {path:'/Home', element:<Home></Home>},
    {path:'/Login', element:<Login></Login>},
    {path:'/Cart', element:<Cart></Cart>},
    {path:'/Signup', element: <Signup></Signup>},
    {path:'/OrderForm', element: <OrdersForm></OrdersForm>},
    {path:'/Products', element: <Cards></Cards>},
    {path:'/Form', element: <CustomerForm></CustomerForm>}

    
  ]}
    
     
])
  
  return (
    <RouterProvider router = {router}></RouterProvider>
  );
}

export default App;

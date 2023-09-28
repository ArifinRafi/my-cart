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
import About from './pages/About'
import { Web } from './pages/Web';
import { MobileApp } from './pages/MobileApp';





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
    {path:'/Form', element: <CustomerForm></CustomerForm>},
    {path:'/About', element: <About></About>},
    {path:'/Web', element: <Web></Web>},
    {path:'/mobile', element: <MobileApp></MobileApp>}
    

    
  ]}
    
     
])
  
  return (
    <div className=''>
      <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;

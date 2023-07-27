import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from  './pages/Home'
import Login from './pages/Login';
import LoginForm from './components/LoginForm';
import Cart from './pages/Cart';
import Main from './Layout/Main'
import Signup from './pages/Signup'





function App() {
  const router = createBrowserRouter([
    {path:'/', element:<Main></Main>,
  children:[
    {path:'/', element:<Home></Home>},
    {path:'/Home', element:<Home></Home>},
    {path:'/Login', element:<Login></Login>},
    {path:'/Cart', element:<Cart></Cart>},
    {path:'/Signup', element: <Signup></Signup>}
    
  ]}
    
     
])
  
  return (
    <RouterProvider router = {router}></RouterProvider>
  );
}

export default App;

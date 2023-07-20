import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from  './pages/Home'
import Login from './pages/Login';





function App() {
  const router = createBrowserRouter([
    {path:'/', element:<Home></Home>},
    {path:'/Login', element:<Login></Login>},
    {path:'/Home', element:<Home></Home>}, 
])
  
  return (
    <RouterProvider router = {router}></RouterProvider>
  );
}

export default App;

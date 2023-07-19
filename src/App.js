import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from  './pages/Home'

function App() {
  const router = createBrowserRouter(
    [
      {path : '/', element:<Home></Home>}
    ]

  )
  return (
    <RouterProvider router = {router}></RouterProvider>
  );
}

export default App;

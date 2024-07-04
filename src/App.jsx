import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './Layout/Main'
import Home from './components/Home/Home'
import UserDetails from './components/UserDetails/UserDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch ("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "/user-details/:id",
        loader: ({params}) => fetch (`https://jsonplaceholder.typicode.com/users/${params.id}`),
        element: <UserDetails></UserDetails>,
      },
      {
        path: "/",
        element: <Home></Home>,
      },
    ]
  }
])

function App() {

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App

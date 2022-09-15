import './index.css'
import LoginPage from './views/LoginPage';
import Dashboard from './views/Dashboard';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";


export default function App(): JSX.Element {

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <LoginPage />,
  //     // children: [
  //     //   {
  //     //     path: "dashboard",
  //     //     element: <LoginPage />,
  //     //   }
  //     // ]
  //   },
  //   {
  //     path: "/dashboard",
  //     element: <LoginPage />,
  //   },
  // ]);

  return (
    < div className='bg-grey'>

      {/* <BrowserRouter> */}
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes> 
      {/* </BrowserRouter> */}
     
      {/* <React.StrictMode> */}
        {/* <RouterProvider router={router} /> */}
      {/* </React.StrictMode> */}
    </div>
  );
}
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';

import Root from "./routes/Main";
import Events from './routes/Events';
import Community from './routes/Community';
// import Code from './routes/Code';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "events",
    element: <Events />,
  },
  {
    path: "community",
    element: <Community />,
  },
  // {
  //   path: "code",
  //   element: <Code />,
  // }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);

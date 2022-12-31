import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/Header";
import About from "./screens/About";
import Home from "./screens/Home";
import Root from "./Root";
import NotFound from "./screens/NotFound";
import Error from "./components/Error";
import User from "./screens/users/User";
import Followers from "./screens/users/Followers";

export const router = createBrowserRouter([
  {
    path: "/", // 기본 URL 모든 URL의 부보다
    element: <Root />,
    children: [
      {
        path: "about", // URL 창에 abot 이라고 입력하게 되면 Root.tsx 에서 Outlet를 사용해 자식들애게 건너갈수 있다고
        element: <About />,
      },
      {
        path: "",
        element: <Home />,
        // error 컴포넌트를 사용하여 App이 에러 발생시 App전체를 죽이지 않는다.
        errorElement: <Error />,
      },
      {
        path: "users/:userId",
        element: <User />,
        children: [
          {
            path: "followers",
            element: <Followers />,
          },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
]);

// export default function Router() {
//   return (
//     <BrowserRouter>
//       {/* <Header /> */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/" element={<About />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

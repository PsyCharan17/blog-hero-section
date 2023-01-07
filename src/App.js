import "./App.css";
import InputForm from "./components/InputForm/InputForm";
import NavbarTop from "./components/Navbar/NavbarTop";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// import Dummy from "./components/dummy/Dummy";
import DisplayBlogs from "./components/displayBlogs/DisplayBlogs";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" exact="true" element={<InputForm />}>
//       {/* <Route path="dummy" element={<Dummy />} /> */}
//       <Route path="display" element={<DisplayBlogs />} />
//     </Route>
//   )
// );
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <InputForm />,
//     children: [
//       {
//         path: "display",
//         element: <DisplayBlogs />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//     ],
//   },
// ]);

function App() {
  return (
    <div className="App">
      <NavbarTop />
      <main>
        {/* <Routes>
          <Route path="/" element={<InputForm />} />
        </Routes> */}
        {/* <RouterProvider router={router} /> */}
        <InputForm />
        {/* <DisplayBlogs /> */}
      </main>
    </div>
  );
}

export default App;

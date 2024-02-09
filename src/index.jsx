import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ModuleProvider } from "./context/ModuleContext";

// const router = createBrowserRouter([
//   // {
//   //   path: "/",
//   //   element: <App />,
//   // },
//   // {
//   //   path : '/modules',
//   //   element :
//   // },
//   // {
//   //   path : '/module/:id',
//   //   element :
//   // },
//   // {
//   //   path : '/mentors',
//   //   element :
//   // },
//   // {
//   //   path : '/mentors/:id',
//   //   element :
//   // },
//   {
//     path: "/quiz-rules",
//     element: (
//       <CheckUserExist>
//         <Main />
//       </CheckUserExist>
//     ),
//   },
//   {
//     path: "/quiz",
//     element: (
//       <CheckUserExist>
//         <Quiz />
//       </CheckUserExist>
//     ),
//   },
//   {
//     path: "/result",
//     element: (
//       <CheckUserExist>
//         <Result />
//       </CheckUserExist>
//     ),
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ModuleProvider>
    <App />
  </ModuleProvider>,
);

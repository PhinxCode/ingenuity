import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import QuienesSomos from "./pages/QuienesSomos";
import Consultores from "./pages/Consultores";
import Capacitaciones from "./pages/Capacitaciones";
import Proyectos from "./pages/Proyectos";
import Clientes from "./pages/Clientes";
import Contacto from "./pages/Contacto";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "quienes-somos", Component: QuienesSomos },
      { path: "consultores", Component: Consultores },
      { path: "capacitaciones", Component: Capacitaciones },
      { path: "proyectos", Component: Proyectos },
      { path: "clientes", Component: Clientes },
      { path: "contacto", Component: Contacto },
    ],
  },
]);

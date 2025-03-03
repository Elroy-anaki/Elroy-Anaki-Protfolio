import { RouteObject } from "react-router-dom";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";

export const routes: RouteObject[] = [
  { path: "/about", element: <About /> },
  { path: "/projects", element: <Projects /> }
];

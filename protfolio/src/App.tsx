import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { routes } from "./routes/routes";

import NavBar from "./components/NavBar/NavBar";

import { PageLink } from "./types/link.type";
import About from "./components/About/About";

const links: PageLink[] = [
  { title: "About Me", to: "/about" },
  { title: "Projects", to: "/projects" },
  { title: "Hire Me", to: "/hire-me" },
];

const Layout: React.FC = () => {
  return (
    <>
      <header>
        <NavBar links={links} />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<About />} />
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

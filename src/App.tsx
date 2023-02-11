import {Suspense, useContext, useState} from "react";
import {Route, Routes} from "react-router-dom";
import "./styles/index.scss";
import {Link} from "react-router-dom";
import {MainPageLazy} from "./pages/MainPage/MainPage.async";
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helper/classNames/classNames";


export default function App() {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link to="/">MainPage</Link>
      <Link to="/about">AboutPage</Link>
      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<MainPageLazy/>}/>
          <Route path="/about" element={<AboutPageLazy/>}/>
        </Routes>
      </Suspense>
    </div>
  );
}

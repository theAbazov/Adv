import {Suspense, useContext, useState} from "react";
import {Route, Routes} from "react-router-dom";
import "./styles/index";
import {Link} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import { MainPage } from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";


export default function App() {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link to="/">MainPage</Link>
      <Link to="/about">AboutPage</Link>
      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
        </Routes>
      </Suspense>
    </div>
  );
}

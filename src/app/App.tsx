import { Suspense } from "react";
import "./styles/index";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar";
import { AppRouter } from "app/providers/router";
import { Sidebar } from "widgets/Sidebar";
import { useTranslation } from "react-i18next";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="Loading...">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

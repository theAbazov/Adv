import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "app/providers/router/routerConfig/routerConfig";

const AppRouter = () => (
  <div>
    <Suspense fallback="<div>Loading...</div>">
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  </div>
);

export default AppRouter;

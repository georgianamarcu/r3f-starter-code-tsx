import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Scene from "@/scene/Scene";

const Router: React.FC = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Scene />,
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;

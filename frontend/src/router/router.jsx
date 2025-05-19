import { useRouteError } from "react-router-dom";
import { NavLayout } from "../components/NavBar/NavBar";
import SkillsPage from "../pages/SkillsPage/SkillsPage";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <NavLayout />,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    {
                        path: "/",
                        element: <HomePage />
                    },
                    {
                        path: "/skills",
                        children: [
                            {
                                index: true,
                                element: <SkillsPage />
                            }
                        ]
                    }
                ]
            }
        ]
    }
])

function ErrorPage() {
    const error = useRouteError()

    return (
        <>
            <h1>Something went wrong!</h1>
            {import.meta.env.MODE != "production" && (
                <>
                    <pre>{error.message}</pre>
                    <pre>{error.stack}</pre>
                </>
            )}
        </>
    )
}
import { useRouteError } from "react-router-dom";
import { NavLayout } from "../components/NavBar/NavBar";
import SkillsPage from "../pages/SkillsPage/SkillsPage";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import SkillPage from "../pages/SkillPage/SkillPage";
import CategoriesPage from "../pages/CategoriesPage/CategoriesPage";
import MentorPage from "../pages/MentorPage/MentorPage";

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
                        path: `/:username`,
                        children: [
                            {
                                index: true,
                                element: <MentorPage />
                            }
                        ]
                    },
                    {
                        path: "/skills",
                        children: [
                            {
                                index: true,
                                element: <SkillsPage />
                            }
                        ]
                    },
                    {
                        path: "/skills/:category",
                        children: [
                            {
                                index: true,
                                element: <CategoriesPage />
                            }
                        ]
                    },
                    {
                        path: `/skill/:id`,
                        children: [
                            {
                                index: true,
                                element: <SkillPage />
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
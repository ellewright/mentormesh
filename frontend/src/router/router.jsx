import SkillsPage from "../pages/SkillsPage/SkillsPage";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import SkillPage from "../pages/SkillPage/SkillPage";
import CategoriesPage from "../pages/CategoriesPage/CategoriesPage";
import MentorPage from "../pages/MentorPage/MentorPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import NavLayout from "../components/Nav/NavLayout/NavLayout";
import OfferPage from "../pages/OfferPage/OfferPage";
import OfferSuccessModal from "../components/Offer/OfferSuccessModal/OfferSuccessModal";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <NavLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                children: [
                    {
                        path: "/",
                        element: <OfferSuccessModal /> // switch back to HomePage
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
                    },
                    {
                        path: "/offer/:skillId",
                        children: [
                            {
                                index: true,
                                element: <OfferPage />
                            }
                        ]
                    }
                ]
            }
        ]
    }
])
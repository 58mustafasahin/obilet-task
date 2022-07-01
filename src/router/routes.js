import { lazy } from "react";
// import Home from "../pages/Home";
// import JourneyList from "../pages/JourneyList";
// import NotFound from "../pages/NotFound";

const Home = lazy(() => import("../pages/Home"))
const JourneyList = lazy(() => import("../pages/JourneyList"))
const NotFound = lazy(() => import("../pages/NotFound"))

export const routes =
    [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/journeyList/:originId/:destinationId/:departureDate",
            element: <JourneyList />
        },
        {
            path: "*",
            element: <NotFound />
        }
    ]
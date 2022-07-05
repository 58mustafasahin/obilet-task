import { lazy, Suspense } from "react";
// import Home from "../pages/Home";
// import JourneyList from "../pages/JourneyList";
import NotFound from "../pages/NotFound";

const Home = lazy(() => import("../pages/Home"))
const JourneyList = lazy(() => import("../pages/JourneyList"))
// const NotFound = lazy(() => import("../pages/NotFound"))

export const routes =
    [
        {
            path: "/",
            element: <Suspense fallback={
                <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'black', opacity: '0.6', top: 0, bottom: 0, width: '100%' }}>
                    <h1>Loading</h1>
                </div>
            }>
                <Home />
            </Suspense>
        },
        {
            path: "/journeyList/:originId/:destinationId/:departureDate",
            element: <Suspense fallback={
                <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'black', opacity: '0.6', top: 0, bottom: 0, width: '100%' }}>
                    <img src={`https://s3.eu-central-1.amazonaws.com/static.obilet.com/images/web/loading-bus.gif`} style={{ width: "300px" }} />
                </div>
            }>
                <JourneyList />
            </Suspense>
        },
        {
            path: "/*",
            element: <NotFound />
        }
    ]
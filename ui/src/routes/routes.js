import routesAdmin from "./routesAdmin";
import routesBlog from "./routesBlog"

export default function() {
    return [...routesAdmin,...routesBlog]
}
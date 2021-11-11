import axios from 'axios';
import authHeader from "./auth-header";
const BUSDETAILS_API_BASE_URL = "http://localhost:8080/api/bus/addrou";

class BusDetailsService {

    getRoute() {
        return axios.get(BUSDETAILS_API_BASE_URL, { headers: authHeader() });
    }

    createRoute(route) {
        return axios.post(BUSDETAILS_API_BASE_URL, route,{ headers: authHeader() });
    }
    getRouteById(routeId) {
        return axios.get(BUSDETAILS_API_BASE_URL + '/' + routeId,{ headers: authHeader() });
    }

    updateRoute(route, routeId) {
        return axios.put(BUSDETAILS_API_BASE_URL + '/' + routeId, route,{ headers: authHeader() });

    }
    deleteRoute(routeId) {
        return axios.delete(BUSDETAILS_API_BASE_URL + '/' + routeId,{ headers: authHeader() });
    }
}

export default new BusDetailsService()
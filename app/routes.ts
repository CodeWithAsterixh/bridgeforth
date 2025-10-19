import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("/consultation", "routes/consultation.tsx"),
	route("/services", "routes/services.tsx"),
	route("/services/private-pay", "routes/services/private-pay.tsx"),
	route("/services/medicaid-partner", "routes/services/medicaid-partner.tsx"),
] satisfies RouteConfig;

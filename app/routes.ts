import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("/consultation", "routes/consultation.tsx"),
	route("/intake", "routes/intake.tsx"),
	route("/services", "routes/services.tsx"),
	route("/services/private-pay", "routes/services/private-pay.tsx"),
	route("/services/medicaid-partner", "routes/services/medicaid-partner.tsx"),
	route("/partners/referral", "routes/partners/referral.tsx"),
	route("/refer-a-client", "routes/refer-a-client.tsx"),
	route("/pricing", "routes/pricing.tsx"),
	route("/how-it-works", "routes/how-it-works.tsx"),
	route("/about", "routes/about.tsx"),
	route("/case-studies", "routes/case-studies.tsx"),
	route("/resources", "routes/resources.tsx"),
	route("/faqs", "routes/faqs.tsx"),
	route("/privacy", "routes/privacy.tsx"),
	route("/terms", "routes/terms.tsx"),
	route("/non-discrimination", "routes/non-discrimination.tsx"),
	route("/*", "routes/404.tsx"),
] satisfies RouteConfig;

import { appVersions } from "@forge/models";
import { createSchemaRoute } from "../../lib/resolve-schema";

export const GET = createSchemaRoute(
	(models) => models.registryCampaign,
	"schema.registry-campaign.json",
);

export function getStaticPaths() {
	return appVersions.map((version) => ({
		params: { version },
	}));
}

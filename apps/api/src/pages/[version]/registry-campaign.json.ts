import { createSchemaRoute } from "../../lib/resolve-schema";
import { appVersions } from "../../lib/versions";

export const GET = createSchemaRoute(
	(models) => models.registryCampaign,
	"schema.registry-campaign.json",
);

export function getStaticPaths() {
	return appVersions.map((version) => ({
		params: { version },
	}));
}

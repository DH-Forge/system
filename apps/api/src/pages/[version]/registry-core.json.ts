import { createSchemaRoute } from "../../lib/resolve-schema";
import { appVersions } from "../../lib/versions";

export const GET = createSchemaRoute(
	(models) => models.registryCore,
	"schema.registry-core.json",
);

export function getStaticPaths() {
	return appVersions.map((version) => ({
		params: { version },
	}));
}

import { appVersions } from "@forge/models";
import { createSchemaRoute } from "../../lib/resolve-schema";

export const GET = createSchemaRoute(
	(models) => models.registryCore,
	"schema.registry-core.json",
);

export function getStaticPaths() {
	return appVersions.map((version) => ({
		params: { version },
	}));
}

import { appVersions } from "@forge/models";
import { createSchemaEndpoint } from "../../../lib/create-schema-endpoint";

export const GET = createSchemaEndpoint(
	(models) => models.registryCore,
	"schema.registry-core.json",
);

export function getStaticPaths() {
	return appVersions.map((version) => ({
		params: { version },
	}));
}

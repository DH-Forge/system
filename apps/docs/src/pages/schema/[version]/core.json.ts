import { schemaVersions } from "@forge/models";
import { createSchemaEndpoint } from "../../../lib/create-schema-endpoint";

export const GET = createSchemaEndpoint(
	(models) => models.core,
	"schema.registry-core.json",
);

export function getStaticPaths() {
	return schemaVersions.map((version) => ({
		params: { version },
	}));
}

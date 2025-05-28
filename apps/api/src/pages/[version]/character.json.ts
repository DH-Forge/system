import { createSchemaRoute } from "../../lib/resolve-schema";
import { appVersions } from "../../lib/versions";

export const GET = createSchemaRoute(
	(models) => models.character,
	"schema.character.json",
);

export function getStaticPaths() {
	return appVersions.map((version) => ({
		params: { version },
	}));
}

import type { Character } from "@forge/schema/types";

const versionUrl = "https://www.dh-forge.com/schema/0.0.0/character.json";

type DataProps = Partial<Omit<Character, "$schema" | "_type">>;

export function createCharacterSchema(data: DataProps) {
	const character: Partial<Character> = {
		$schema: versionUrl,
		_type: "character",
		_meta: {
			campaignUrl: "https://www.example.com/campaign/misty-mountains.json",
			dateCreated: new Date("2025-04-24").toISOString(),
			dateUpdated: new Date().toISOString(),
			rulesetVersion: "1.0.0",
			...data._meta,
		},
		...data,
	};

	return JSON.stringify(character, null, 3);
}

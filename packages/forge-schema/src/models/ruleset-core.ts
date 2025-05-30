import { z } from "zod/v4";
import { jsonCollection } from "../json-collection.js";
import { ancestry } from "./artifact/ancestry.js";
import { community } from "./artifact/community.js";
import { inventoryArmor } from "./artifact/inventory-armor.js";
import { inventoryThing } from "./artifact/inventory-thing.js";
import { inventoryWeapon } from "./artifact/inventory-weapon.js";
import { roleClass } from "./artifact/role-class.js";
import { roleSubclass } from "./artifact/role-subclass.js";
import { schemaMeta, schemaVersion } from "./schema.js";

export const coreRuleset = z
	.object({
		_type: z.literal("coreRuleset"),
		_meta: schemaMeta.extend({
			minVersion: schemaVersion,
		}),
		"item/armor": z.record(z.string(), inventoryArmor),
		"item/special": z.record(z.string(), inventoryThing),
		"item/weapon": z.record(z.string(), inventoryWeapon),
		"role/class": z.record(z.string(), roleClass),
		"role/subclass": z.record(z.string(), roleSubclass),
		"heritage/ancestry": z.record(z.string(), ancestry),
		"heritage/community": z.record(z.string(), community),
	})
	.register(jsonCollection, {
		id: "CoreRuleset",
		description: "A ruleset of all the things that can be used in the game",
		examples: [
			{
				_type: "coreRuleset",
				_meta: {
					rulesetUrl: "https://dh-forge.com/schema.json",
					rulesetVersion: "0.2.0",
					minVersion: "0.0.1",
					dateCreated: "2025-05-30T12:00:00.000Z",
					dateUpdated: "2025-05-30T12:00:00.000Z",
				},
				"item/armor": {},
				"item/weapon": {},
				"item/special": {},
				"role/class": {},
				"role/subclass": {},
				"heritage/ancestry": {},
				"heritage/community": {},
			},
		],
	});

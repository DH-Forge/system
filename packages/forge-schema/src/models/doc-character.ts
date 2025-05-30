import { z } from "zod/v4";
import { jsonCollection } from "../json-collection.js";
import { inventoryArmorReference } from "./artifact/inventory-armor.js";
import {
	inventoryThing,
	inventoryThingReference,
} from "./artifact/inventory-thing.js";
import { inventoryWeaponReference } from "./artifact/inventory-weapon.js";
import { heritage } from "./common/character-heritage.js";
import { characterRole } from "./common/character-role.js";
import { damageThresholds } from "./common/damage-threshold.js";
import { experience } from "./common/experience.js";
import { gold } from "./common/gold.js";
import { pronouns } from "./common/pronouns.js";
import { dynamicResource } from "./common/resource.js";
import { trait, traitName } from "./common/trait.js";
import { schemaMeta } from "./schema.js";

export const characterDocument = z
	.object({
		_type: z.literal("characterDocument"),
		_meta: schemaMeta,

		// Identity
		name: z.string(),
		nameAlternate: z.string().nullable(),
		pronouns: pronouns,
		heritage: heritage,

		// Attributes
		roles: z.array(characterRole),
		experiences: z.array(experience),

		// Stats
		level: z.number().int().min(1).max(10),
		evasion: z.number().int().min(0).max(100),
		armorSlots: dynamicResource,
		hitPoints: dynamicResource,
		damageThresholds: damageThresholds,
		hope: dynamicResource,
		stress: dynamicResource,

		// Traits
		traits: z.record(traitName, trait),

		// Possessions
		gold: gold,
		equippedArmor: z.object({
			primary: inventoryArmorReference.nullable(),
			notes: z.string().nullable(),
		}),
		equippedWeapon: z.object({
			primary: inventoryWeaponReference.nullable(),
			secondary: inventoryWeaponReference.nullable(),
			notes: z.string().nullable(),
		}),
		inventory: z.array(
			z.union([
				inventoryArmorReference,
				inventoryWeaponReference,
				inventoryThingReference,
				inventoryThing,
			]),
		),
	})
	.register(jsonCollection, {
		id: "CharacterDocument",
		description: "A character sheet",
		examples: [
			{
				_type: "characterDocument",
				_meta: {
					rulesetUrl: "https://dh-forge.com/schema.json",
					rulesetVersion: "1.0.0",
					dateCreated: "2025-05-30T12:00:00.000Z",
					dateUpdated: "2025-05-30T12:00:00.000Z",
				},
				name: "Elara Meadowlight",
				nameAlternate: "Ela",
				pronouns: {
					_type: "pronouns",
					subject: "she",
					object: "her",
					possessive: "hers",
					reflexive: "herself",
				},
				heritage: {
					_type: "heritage",
					community: {
						_type: "reference",
						_key: "heritage/community",
						value: "seaborne",
					},
					ancestry: {
						_type: "dualAncestry",
						primary: {
							_type: "reference",
							_key: "heritage/ancestry",
							value: "elf",
						},
						secondary: {
							_type: "reference",
							_key: "heritage/ancestry",
							value: "faun",
						},
					},
				},
				roles: [
					{
						_type: "characterRole",
						class: {
							_type: "reference",
							_key: "role/class",
							value: "bard",
						},
						subclass: {
							_type: "reference",
							_key: "role/subclass",
							value: "troubadour",
						},
					},
					{
						_type: "characterRole",
						class: {
							_type: "reference",
							_key: "role/class",
							value: "sorcerer",
						},
						subclass: {
							_type: "reference",
							_key: "role/subclass",
							value: "pyromancer",
						},
					},
				],
				experiences: [
					{
						_type: "experience",
						name: "Loremaster of the Ancient Texts",
						description: "Years spent deciphering forgotten scrolls.",
					},
					{
						_type: "experience",
						name: "Survivor of the Whispering Woods",
						description: null,
					},
				],
				level: 5,
				evasion: 14,
				armorSlots: { _type: "dynamicResource", max: 5, current: 3 },
				hitPoints: { _type: "dynamicResource", max: 8, current: 7 },
				damageThresholds: {
					_type: "damageThresholds",
					major: 10,
					severe: 15,
				},
				hope: { _type: "dynamicResource", max: 8, current: 4 },
				stress: { _type: "dynamicResource", max: 5, current: 1 },
				traits: {
					Agility: { _type: "trait", value: 2, locked: false },
					Strength: { _type: "trait", value: 0, locked: false },
					Finesse: { _type: "trait", value: 3, locked: true },
					Instinct: { _type: "trait", value: 1, locked: false },
					Presence: { _type: "trait", value: 4, locked: false },
					Knowledge: { _type: "trait", value: 1, locked: true },
				},
				gold: { _type: "gold", handfuls: 15, bags: 2, chests: 0 },
				equippedArmor: {
					primary: {
						_type: "reference",
						_key: "item/armor",
						value: "enchanted_leather",
					},
					notes: "Glows faintly in moonlight",
				},
				equippedWeapon: {
					primary: {
						_type: "reference",
						_key: "item/weapon",
						value: "singing_shortbow",
					},
					secondary: null,
					notes: null,
				},
				inventory: [
					{
						_type: "reference",
						_key: "item/weapon",
						value: "silvered_dagger",
					},
					{
						_type: "reference",
						_key: "item/special",
						value: "healing_potion_greater",
					},
					{
						_type: "inventoryThing",
						name: "Bundle of Strange Herbs",
						description:
							"Found near the Shadowfen, smells of sulfur and roses.",
					},
					{
						_type: "inventoryThing",
						name: "Tarnished Silver Locket",
						description: "Opens, but is empty inside.",
					},
				],
			},
		],
	});

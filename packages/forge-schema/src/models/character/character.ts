import { z } from "zod/v4";
import { referenceRegistry } from "../reference.js";
import { characterTraits } from "./character-abilities.js";
import { characterArmor } from "./character-armor.js";
import { characterEvasion } from "./character-evasion.js";
import { characterExperience } from "./character-experience.js";
import { characterGold } from "./character-gold.js";
import { characterHealth } from "./character-health.js";
import { characterHeritage } from "./character-heritage.js";
import { characterHope } from "./character-hope.js";
import { characterInventoryItem } from "./character-inventory.js";
import { characterLevel } from "./character-level.js";
import { characterName } from "./character-name.js";
import { characterPronouns } from "./character-pronouns.js";
import { characterRole } from "./character-role.js";
import { characterStress } from "./character-stress.js";

export const characterMeta = z.object({
	_type: z.literal("characterMeta"),
	registry: referenceRegistry,
});

export type CharacterMeta = z.infer<typeof characterMeta>;

export const character = z.object({
	_type: z.literal("character"),
	_meta: characterMeta,

	// Identity
	name: characterName,
	pronouns: characterPronouns,
	heritage: characterHeritage,

	// Progress
	level: characterLevel,
	experiences: z.array(characterExperience),

	// Attributes
	classes: z.array(characterRole),
	evasion: characterEvasion,
	armor: characterArmor,
	traits: characterTraits,

	// Status
	health: characterHealth,
	hope: characterHope,
	stress: characterStress,
	gold: characterGold,
	inventory: z.array(characterInventoryItem),
});

export type Character = z.infer<typeof character>;

const demoData: Character = {
	_type: "character",
	_meta: {
		_type: "characterMeta",
		registry: {
			_type: "documentRegistry",
			url: "https://forge.daggerheart.com/core-registry.json",
			usedVersion: "0.1.0",
		},
	},
	// Identity
	name: {
		_type: "characterName",
		fullName: "Sir Dalton",
		nickname: "Dal",
	},
	pronouns: {
		_type: "characterPronouns",
		object: "him",
		subject: "he",
		possessive: "his",
		reflexive: "himself",
	},
	heritage: {
		_type: "characterHeritage",
		community: "heritage/community:the-order-of-the-silver-dragon",
		ancestry: {
			_type: "singleAncestry",
			ancestry: "heritage/ancestry:human",
		},
	},

	// Progress
	level: 1,
	experiences: [
		{
			_type: "characterExperience",
			name: "Knight in Shining Armor",
		},
	],

	// Attributes
	classes: [
		{
			_type: "characterRole",
			class: "role/class:warrior",
			subclass: "role/subclass:paladin",
		},
	],
	evasion: 10,
	armor: {
		_type: "characterArmor",
		total: 4,
		spent: 0,
	},
	traits: {
		_type: "characterTraits",
		agility: { _type: "characterTrait", value: 1, locked: false },
		strength: { _type: "characterTrait", value: 1, locked: false },
		finesse: { _type: "characterTrait", value: 1, locked: false },
		instinct: { _type: "characterTrait", value: 1, locked: false },
		presence: { _type: "characterTrait", value: 1, locked: false },
		knowledge: { _type: "characterTrait", value: 1, locked: false },
	},

	// Status
	health: {
		_type: "characterHealth",
		max: 10,
		current: 10,
		damageThreshold: {
			_type: "damageThreshold",
			minor: 3,
			major: 6,
			severe: 8,
		},
	},
	hope: { _type: "characterHope", max: 6, current: 2 },
	stress: { _type: "characterStress", max: 6, current: 0 },
	gold: {
		_type: "characterGold",
		handfuls: 2,
		bags: 0,
		chests: 0,
	},
	inventory: [],
};

console.log(JSON.stringify(demoData, null, 2));

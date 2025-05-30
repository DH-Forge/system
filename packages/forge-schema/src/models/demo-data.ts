import type { Campaign, Character, Registry } from "../types.js";

const demoCampaign: Campaign = {
	_type: "campaign",
	_meta: {
		_type: "campaignMeta",
		extends: {
			_type: "documentRegistry",
			url: "https://forge.daggerheart.com/core-registry.json",
			usedVersion: "0.1.0",
		},
	},
	homebrew: {
		"item/armor": {},
		"item/weapon": {},
		"item/special": {},
		"role/class": {},
		"role/subclass": {},
		"heritage/ancestry": {},
		"heritage/community": {},
	},
};

const demoCharacter: Character = {
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

const demoRegistry: Registry = {
	_type: "registry",
	_meta: {
		_type: "registryMeta",
		version: "0.2.0",
		minVersion: "0.0.1",
	},
	"item/armor": {},
	"item/weapon": {},
	"item/special": {},
	"role/class": {},
	"role/subclass": {},
	"heritage/ancestry": {},
	"heritage/community": {},
};

console.info(
	JSON.stringify(
		{
			demoRegistry,
			demoCharacter,
			demoCampaign,
		},
		null,
		2,
	),
);

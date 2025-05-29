import { z } from "zod/v4";
import { referenceVersion } from "../reference.js";
import { registryAncestry } from "./registry-ancestry.js";
import { registryItemArmor } from "./registry-armor.js";
import { registryClass, registrySubclass } from "./registry-class.js";
import { registryCommunity } from "./registry-community.js";
import { registryItemSpecial } from "./registry-special.js";
import { registryItemWeapon } from "./registry-weapon.js";

export const registryMeta = z.object({
	_type: z.literal("registryMeta"),
	version: referenceVersion,
	minVersion: referenceVersion,
});

export type RegistryMeta = z.infer<typeof registryMeta>;

export const registry = z.object({
	_type: z.literal("registry"),
	_meta: registryMeta,
	"item/armor": z.record(z.string(), registryItemArmor),
	"item/special": z.record(z.string(), registryItemSpecial),
	"item/weapon": z.record(z.string(), registryItemWeapon),
	"role/class": z.record(z.string(), registryClass),
	"role/subclass": z.record(z.string(), registrySubclass),
	"heritage/ancestry": z.record(z.string(), registryAncestry),
	"heritage/community": z.record(z.string(), registryCommunity),
});

export type Registry = z.infer<typeof registry>;

export const demoData: Registry = {
	_type: "registry",
	_meta: {
		_type: "registryMeta",
		version: { major: 0, minor: 2, patch: 0 },
		minVersion: { major: 0, minor: 0, patch: 1 },
	},
	"item/armor": {},
	"item/weapon": {},
	"item/special": {},
	"role/class": {},
	"role/subclass": {},
	"heritage/ancestry": {},
	"heritage/community": {},
};

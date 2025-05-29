import { versionStringValidator } from "@forge/helpers/version";
import { z } from "zod/v4";
import { registryAncestry } from "./registry-ancestry";
import { registryItemArmor } from "./registry-armor";
import { registryClass, registrySubclass } from "./registry-class";
import { registryCommunity } from "./registry-community";
import { registryItemSpecial } from "./registry-special";
import { registryItemWeapon } from "./registry-weapon";

export const registryMeta = z.object({
	_type: z.literal("registryMeta"),
	version: versionStringValidator,
	compatibleVersions: z.array(versionStringValidator),
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
		version: "0.1.0",
		compatibleVersions: ["0.1.x", "0.2.x"],
	},
	"item/armor": {},
	"item/weapon": {},
	"item/special": {},
	"role/class": {},
	"role/subclass": {},
	"heritage/ancestry": {},
	"heritage/community": {},
};

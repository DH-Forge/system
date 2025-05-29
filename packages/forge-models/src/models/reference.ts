import { versionStringValidator } from "@forge/helpers/version";
import { z } from "zod/v4";

export const referenceRegistry = z.object({
	_type: z.literal("documentRegistry"),
	url: z.url(),
	version: versionStringValidator,
});

export type ReferenceRegistry = z.infer<typeof referenceRegistry>;

function validatePrefix(prefix: `${string}/${string}:`) {
	return (val: unknown): val is `${typeof prefix}:${string}` => {
		if (typeof val !== "string") return false;
		if (!val.startsWith(prefix)) return false;

		const [, id] = val.split(":");

		return id.length > 0;
	};
}

export const referenceRoleClass = z.custom<`role/class:${string}`>(
	validatePrefix("role/class:"),
	'invalid role/class reference."',
);
export type ReferenceRoleClass = z.infer<typeof referenceRoleClass>;

export const referenceRoleSubclass = z.custom<`role/subclass:${string}`>(
	validatePrefix("role/subclass:"),
	'invalid role/subclass reference."',
);
export type ReferenceRoleSubclass = z.infer<typeof referenceRoleSubclass>;

export const referenceItemWeapon = z.custom<`item/weapon:${string}`>(
	validatePrefix("item/weapon:"),
	'invalid item/weapon reference."',
);
export type ReferenceItemWeapon = z.infer<typeof referenceItemWeapon>;

export const referenceItemArmor = z.custom<`item/armor:${string}`>(
	validatePrefix("item/armor:"),
	'invalid item/armor reference."',
);
export type ReferenceItemArmor = z.infer<typeof referenceItemArmor>;

export const referenceItemSpecial = z.custom<`item/special:${string}`>(
	validatePrefix("item/special:"),
	'invalid item/special reference."',
);
export type ReferenceItemSpecial = z.infer<typeof referenceItemSpecial>;

export const referenceHeritageAncestry =
	z.custom<`heritage/ancestry:${string}`>(
		validatePrefix("heritage/ancestry:"),
		'invalid heritage/ancestry reference."',
	);
export type ReferenceHeritageAncestry = z.infer<
	typeof referenceHeritageAncestry
>;

export const referenceHeritageCommunity =
	z.custom<`heritage/community:${string}`>(
		validatePrefix("heritage/community:"),
		'invalid heritage/community reference."',
	);
export type ReferenceHeritageCommunity = z.infer<
	typeof referenceHeritageCommunity
>;

/*  */

export type ReferenceValues =
	| ReferenceRoleClass
	| ReferenceRoleSubclass
	| ReferenceItemWeapon
	| ReferenceItemArmor
	| ReferenceItemSpecial
	| ReferenceHeritageAncestry
	| ReferenceHeritageCommunity;

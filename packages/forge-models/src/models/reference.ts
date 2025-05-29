import { z } from "zod/v4";

export const referenceVersion = z.object({
	major: z.number().int().min(0),
	minor: z.number().int().min(0),
	patch: z.number().int().min(0),
});
export type ReferenceVersion = z.infer<typeof referenceVersion>;

export const referenceRegistry = z.object({
	_type: z.literal("documentRegistry"),
	url: z.url(),
	version: referenceVersion,
});

export type ReferenceRegistry = z.infer<typeof referenceRegistry>;

export const referenceRoleClass = z.object({
	_type: z.literal("reference"),
	key: z.literal("role/class"),
	id: z.string(),
});
export type ReferenceRoleClass = z.infer<typeof referenceRoleClass>;

export const referenceRoleSubclass = z.object({
	_type: z.literal("reference"),
	key: z.literal("role/subclass"),
	id: z.string(),
});
export type ReferenceRoleSubclass = z.infer<typeof referenceRoleSubclass>;

export const referenceItemWeapon = z.object({
	_type: z.literal("reference"),
	key: z.literal("item/weapon"),
	id: z.string(),
});
export type ReferenceItemWeapon = z.infer<typeof referenceItemWeapon>;

export const referenceItemArmor = z.object({
	_type: z.literal("reference"),
	key: z.literal("item/armor"),
	id: z.string(),
});
export type ReferenceItemArmor = z.infer<typeof referenceItemArmor>;

export const referenceItemSpecial = z.object({
	_type: z.literal("reference"),
	key: z.literal("item/special"),
	id: z.string(),
});
export type ReferenceItemSpecial = z.infer<typeof referenceItemSpecial>;

export const referenceHeritageAncestry = z.object({
	_type: z.literal("reference"),
	key: z.literal("heritage/ancestry"),
	id: z.string(),
});
export type ReferenceHeritageAncestry = z.infer<
	typeof referenceHeritageAncestry
>;

export const referenceHeritageCommunity = z.object({
	_type: z.literal("reference"),
	key: z.literal("heritage/community"),
	id: z.string(),
});
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

import { z } from "zod/v4";
import {
	referenceItemArmor,
	referenceItemSpecial,
	referenceItemWeapon,
} from "../reference.js";

const baseItem = z.object({
	notes: z.array(z.string()).optional(),
});

export const characterInventoryItemWeapon = baseItem.extend({
	_type: z.literal("characterInventoryItemWeapon"),
	item: referenceItemWeapon,
	equipped: z.boolean().default(false),
});

export const characterInventoryItemArmor = baseItem.extend({
	_type: z.literal("characterInventoryItemArmor"),
	item: referenceItemArmor,
	equipped: z
		.union([z.literal("Primary"), z.literal("Secondary"), z.literal(false)])
		.default(false),
});

export const characterInventoryItemSpecial = baseItem.extend({
	_type: z.literal("characterInventoryItemSpecial"),
	item: referenceItemSpecial,
});

export const characterInventoryItemGeneral = baseItem.extend({
	_type: z.literal("characterInventoryItemGeneral"),
	name: z.string(),
});

export const characterInventoryItem = z.union([
	characterInventoryItemWeapon,
	characterInventoryItemArmor,
	characterInventoryItemSpecial,
	characterInventoryItemGeneral,
]);

export type CharacterInventoryItem = z.infer<typeof characterInventoryItem>;

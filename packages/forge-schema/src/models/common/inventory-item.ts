import { z } from "zod/v4";
import { jsonCollection } from "../../json-collection.js";
import { inventoryArmorReference } from "../artifact/inventory-armor.js";
import {
	inventoryThing,
	inventoryThingReference,
} from "../artifact/inventory-thing.js";
import { inventoryWeaponReference } from "../artifact/inventory-weapon.js";

export const inventoryItem = z
	.union([
		inventoryArmorReference,
		inventoryWeaponReference,
		inventoryThingReference,
		inventoryThing,
	])
	.register(jsonCollection, {
		id: "InventoryItem",
		description: "An item in a character's inventory",
		examples: [
			{
				_type: "reference",
				_key: "item/weapon",
				value: "warhammer",
			},
			{
				_type: "inventoryThing",
				name: "Unknown Potion",
				description:
					"Blue liquid in a glass vial with a green cap, smells like mint.",
			},
		],
	});

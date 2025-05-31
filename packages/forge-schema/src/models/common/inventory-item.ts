import { z } from "zod/v4";
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
	.meta({
		id: "InventoryItem",
		title: "Inventory Item",
		description: "An item in a character's inventory",
	});

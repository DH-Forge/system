import type { z } from "zod/v4";
import type {
	ancestry,
	ancestryReference,
	campaignRuleset,
	characterAncestry,
	characterDocument,
	characterRole,
	community,
	communityReference,
	coreRuleset,
	damageThresholds,
	damageType,
	diceType,
	domain,
	domainReference,
	dynamicResource,
	experience,
	gold,
	heritage,
	inventoryArmor,
	inventoryArmorReference,
	inventoryItem,
	inventoryThing,
	inventoryThingReference,
	inventoryWeapon,
	inventoryWeaponReference,
	pronouns,
	range,
	roleClass,
	roleClassReference,
	roleSubclass,
	roleSubclassReference,
	schemaMeta,
	schemaVersion,
	trait,
	traitName,
} from "./models/index.js";

export type Ancestry = z.infer<typeof ancestry>;
export type AncestryReference = z.infer<typeof ancestryReference>;
export type Community = z.infer<typeof community>;
export type CommunityReference = z.infer<typeof communityReference>;
export type Domain = z.infer<typeof domain>;
export type DomainReference = z.infer<typeof domainReference>;
export type InventoryArmor = z.infer<typeof inventoryArmor>;
export type InventoryArmorReference = z.infer<typeof inventoryArmorReference>;
export type InventoryThing = z.infer<typeof inventoryThing>;
export type InventoryThingReference = z.infer<typeof inventoryThingReference>;
export type InventoryWeapon = z.infer<typeof inventoryWeapon>;
export type InventoryWeaponReference = z.infer<typeof inventoryWeaponReference>;
export type RoleClass = z.infer<typeof roleClass>;
export type RoleClassReference = z.infer<typeof roleClassReference>;
export type RoleSubclass = z.infer<typeof roleSubclass>;
export type RoleSubclassReference = z.infer<typeof roleSubclassReference>;
export type CharacterAncestry = z.infer<typeof characterAncestry>;
export type CharacterRole = z.infer<typeof characterRole>;
export type DamageThresholds = z.infer<typeof damageThresholds>;
export type DamageType = z.infer<typeof damageType>;
export type DiceType = z.infer<typeof diceType>;
export type DynamicResource = z.infer<typeof dynamicResource>;
export type Experience = z.infer<typeof experience>;
export type Gold = z.infer<typeof gold>;
export type Heritage = z.infer<typeof heritage>;
export type InventoryItem = z.infer<typeof inventoryItem>;
export type Pronouns = z.infer<typeof pronouns>;
export type Range = z.infer<typeof range>;
export type Trait = z.infer<typeof trait>;
export type TraitName = z.infer<typeof traitName>;
export type CharacterDocument = z.infer<typeof characterDocument>;
export type CampaignRuleset = z.infer<typeof campaignRuleset>;
export type CoreRuleset = z.infer<typeof coreRuleset>;
export type SchemaMeta = z.infer<typeof schemaMeta>;
export type SchemaVersion = z.infer<typeof schemaVersion>;

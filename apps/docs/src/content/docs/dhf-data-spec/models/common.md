---
title: Common
description: Common schemas are used in multiple models.
sidebar: 
 order: 5
---

## Character Ancestry

ID: `CharacterAncestry`

A character's ancestry

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "id": "CharacterAncestry",
  "anyOf": [
    {
      "type": "object",
      "properties": {
        "_type": {
          "default": "singleAncestry",
          "const": "singleAncestry"
        },
        "ancestry": {
          "$ref": "#/$defs/ReferenceAncestry"
        }
      },
      "required": [
        "_type",
        "ancestry"
      ],
      "additionalProperties": false
    },
    {
      "type": "object",
      "properties": {
        "_type": {
          "default": "dualAncestry",
          "const": "dualAncestry"
        },
        "primary": {
          "$ref": "#/$defs/ReferenceAncestry"
        },
        "secondary": {
          "$ref": "#/$defs/ReferenceAncestry"
        }
      },
      "required": [
        "_type",
        "primary",
        "secondary"
      ],
      "additionalProperties": false
    }
  ],
  "$defs": {
    "ReferenceAncestry": {
      "id": "ReferenceAncestry",
      "title": "Reference to an Ancestry",
      "type": "object",
      "properties": {
        "_type": {
          "const": "reference"
        },
        "_key": {
          "const": "heritage/ancestry"
        },
        "value": {
          "type": "string"
        }
      },
      "required": [
        "_type",
        "_key",
        "value"
      ],
      "additionalProperties": false
    }
  }
}
```
---
## Character Role

ID: `CharacterRole`

Ruleset references to the class and subclass of a character

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "id": "CharacterRole",
  "type": "object",
  "properties": {
    "_type": {
      "default": "characterRole",
      "const": "characterRole"
    },
    "class": {
      "$ref": "#/$defs/ReferenceClass"
    },
    "subclass": {
      "$ref": "#/$defs/ReferenceSubclass"
    }
  },
  "required": [
    "_type",
    "class",
    "subclass"
  ],
  "additionalProperties": false,
  "$defs": {
    "ReferenceClass": {
      "id": "ReferenceClass",
      "title": "Reference to a Class",
      "type": "object",
      "properties": {
        "_type": {
          "const": "reference"
        },
        "_key": {
          "const": "role/class"
        },
        "value": {
          "type": "string"
        }
      },
      "required": [
        "_type",
        "_key",
        "value"
      ],
      "additionalProperties": false
    },
    "ReferenceSubclass": {
      "id": "ReferenceSubclass",
      "title": "Reference to a Subclass",
      "type": "object",
      "properties": {
        "_type": {
          "const": "reference"
        },
        "_key": {
          "const": "role/subclass"
        },
        "value": {
          "type": "string"
        }
      },
      "required": [
        "_type",
        "_key",
        "value"
      ],
      "additionalProperties": false
    }
  }
}
```
---
## Damage Thresholds

ID: `DamageThresholds`

The damage thresholds of a character

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "id": "DamageThresholds",
  "type": "object",
  "properties": {
    "_type": {
      "default": "damageThresholds",
      "const": "damageThresholds"
    },
    "major": {
      "type": "integer",
      "minimum": 0,
      "maximum": 100
    },
    "severe": {
      "type": "integer",
      "minimum": 0,
      "maximum": 100
    }
  },
  "required": [
    "_type",
    "major",
    "severe"
  ],
  "additionalProperties": false
}
```
---
## Damage Type

ID: `DamageType`

The type of damage a weapon or ability deals

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "id": "DamageType",
  "examples": [
    "Physical",
    "Magical"
  ],
  "anyOf": [
    {
      "const": "Physical"
    },
    {
      "const": "Magical"
    }
  ]
}
```
---
## Dice Type

ID: `DiceType`

The type of dice to roll

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "id": "DiceType",
  "examples": [
    "d4",
    "d6",
    "d8",
    "d10",
    "d12",
    "d20"
  ],
  "anyOf": [
    {
      "const": "d4"
    },
    {
      "const": "d6"
    },
    {
      "const": "d8"
    },
    {
      "const": "d10"
    },
    {
      "const": "d12"
    },
    {
      "const": "d20"
    }
  ]
}
```
---
## Dynamic Resource

ID: `DynamicResource`

A dynamic resource used by a character

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "id": "DynamicResource",
  "type": "object",
  "properties": {
    "_type": {
      "const": "dynamicResource"
    },
    "max": {
      "type": "integer",
      "minimum": 0,
      "maximum": 9007199254740991
    },
    "current": {
      "type": "integer",
      "minimum": 0,
      "maximum": 9007199254740991
    }
  },
  "required": [
    "_type",
    "max",
    "current"
  ],
  "additionalProperties": false
}
```
---
## Character Experience

ID: `Experience`

Experience represents a character specialization.

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "id": "Experience",
  "type": "object",
  "properties": {
    "_type": {
      "default": "experience",
      "const": "experience"
    },
    "name": {
      "type": "string"
    },
    "description": {
      "default": null,
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ]
    }
  },
  "required": [
    "_type",
    "name",
    "description"
  ],
  "additionalProperties": false
}
```
---
## Gold

ID: `Gold`

The amount of gold held by a character

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "id": "Gold",
  "type": "object",
  "properties": {
    "_type": {
      "const": "gold"
    },
    "handfuls": {
      "default": 0,
      "type": "integer",
      "minimum": -9007199254740991,
      "maximum": 9007199254740991
    },
    "bags": {
      "default": 0,
      "type": "integer",
      "minimum": -9007199254740991,
      "maximum": 9007199254740991
    },
    "chests": {
      "default": 0,
      "type": "integer",
      "minimum": -9007199254740991,
      "maximum": 9007199254740991
    }
  },
  "required": [
    "_type",
    "handfuls",
    "bags",
    "chests"
  ],
  "additionalProperties": false
}
```
---
## Character Heritage

ID: `Heritage`

A character's heritage

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "id": "Heritage",
  "type": "object",
  "properties": {
    "_type": {
      "default": "heritage",
      "const": "heritage"
    },
    "community": {
      "$ref": "#/$defs/ReferenceCommunity"
    },
    "ancestry": {
      "$ref": "#/$defs/CharacterAncestry"
    }
  },
  "required": [
    "_type",
    "community",
    "ancestry"
  ],
  "additionalProperties": false,
  "$defs": {
    "ReferenceCommunity": {
      "id": "ReferenceCommunity",
      "title": "Reference to a Community",
      "type": "object",
      "properties": {
        "_type": {
          "const": "reference"
        },
        "_key": {
          "const": "heritage/community"
        },
        "value": {
          "type": "string"
        }
      },
      "required": [
        "_type",
        "_key",
        "value"
      ],
      "additionalProperties": false
    },
    "CharacterAncestry": {
      "id": "CharacterAncestry",
      "title": "Character Ancestry",
      "description": "A character's ancestry",
      "anyOf": [
        {
          "type": "object",
          "properties": {
            "_type": {
              "default": "singleAncestry",
              "const": "singleAncestry"
            },
            "ancestry": {
              "$ref": "#/$defs/ReferenceAncestry"
            }
          },
          "required": [
            "_type",
            "ancestry"
          ],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "_type": {
              "default": "dualAncestry",
              "const": "dualAncestry"
            },
            "primary": {
              "$ref": "#/$defs/ReferenceAncestry"
            },
            "secondary": {
              "$ref": "#/$defs/ReferenceAncestry"
            }
          },
          "required": [
            "_type",
            "primary",
            "secondary"
          ],
          "additionalProperties": false
        }
      ]
    },
    "ReferenceAncestry": {
      "id": "ReferenceAncestry",
      "title": "Reference to an Ancestry",
      "type": "object",
      "properties": {
        "_type": {
          "const": "reference"
        },
        "_key": {
          "const": "heritage/ancestry"
        },
        "value": {
          "type": "string"
        }
      },
      "required": [
        "_type",
        "_key",
        "value"
      ],
      "additionalProperties": false
    }
  }
}
```
---
## Inventory Item

ID: `InventoryItem`

An item in a character's inventory

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "id": "InventoryItem",
  "anyOf": [
    {
      "$ref": "#/$defs/ReferenceArmor"
    },
    {
      "$ref": "#/$defs/ReferenceWeapon"
    },
    {
      "$ref": "#/$defs/ReferenceThing"
    },
    {
      "$ref": "#/$defs/Thing"
    }
  ],
  "$defs": {
    "ReferenceArmor": {
      "id": "ReferenceArmor",
      "title": "Reference to a piece of Armor",
      "type": "object",
      "properties": {
        "_type": {
          "const": "reference"
        },
        "_key": {
          "const": "item/armor"
        },
        "value": {
          "type": "string"
        }
      },
      "required": [
        "_type",
        "_key",
        "value"
      ],
      "additionalProperties": false
    },
    "ReferenceWeapon": {
      "id": "ReferenceWeapon",
      "title": "Reference to a Weapon",
      "type": "object",
      "properties": {
        "_type": {
          "const": "reference"
        },
        "_key": {
          "const": "item/weapon"
        },
        "value": {
          "type": "string"
        }
      },
      "required": [
        "_type",
        "_key",
        "value"
      ],
      "additionalProperties": false
    },
    "ReferenceThing": {
      "id": "ReferenceThing",
      "title": "Reference to a Thing",
      "type": "object",
      "properties": {
        "_type": {
          "const": "reference"
        },
        "_key": {
          "const": "item/thing"
        },
        "value": {
          "type": "string"
        }
      },
      "required": [
        "_type",
        "_key",
        "value"
      ],
      "additionalProperties": false
    },
    "Thing": {
      "id": "Thing",
      "title": "Thing",
      "description": "A thing that can be added to a character's inventory",
      "type": "object",
      "properties": {
        "_type": {
          "default": "inventoryThing",
          "const": "inventoryThing"
        },
        "name": {
          "type": "string"
        },
        "description": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ]
        }
      },
      "required": [
        "_type",
        "name",
        "description"
      ],
      "additionalProperties": false
    }
  }
}
```
---
## Pronouns

ID: `Pronouns`

The pronouns of a character

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "id": "Pronouns",
  "type": "object",
  "properties": {
    "_type": {
      "const": "pronouns"
    },
    "subject": {
      "$ref": "#/$defs/PronounsSubject"
    },
    "object": {
      "$ref": "#/$defs/PronounsObject"
    },
    "possessive": {
      "$ref": "#/$defs/PronounsPossessive"
    },
    "reflexive": {
      "$ref": "#/$defs/PronounsReflexive"
    }
  },
  "required": [
    "_type",
    "subject",
    "object",
    "possessive",
    "reflexive"
  ],
  "additionalProperties": false,
  "$defs": {
    "PronounsSubject": {
      "id": "PronounsSubject",
      "title": "Subject Pronoun",
      "description": "A pronoun form used when it performs the verb’s action.",
      "examples": [
        "she",
        "he",
        "they"
      ],
      "type": "string"
    },
    "PronounsObject": {
      "id": "PronounsObject",
      "title": "Object Pronoun",
      "description": "A pronoun form used when it receives the action or follows a preposition.",
      "examples": [
        "her",
        "him",
        "them"
      ],
      "type": "string"
    },
    "PronounsPossessive": {
      "id": "PronounsPossessive",
      "title": "Possessive Pronoun",
      "description": "A pronoun form that replaces a noun to show ownership or relationship.",
      "examples": [
        "hers",
        "his",
        "theirs"
      ],
      "type": "string"
    },
    "PronounsReflexive": {
      "id": "PronounsReflexive",
      "title": "Reflexive Pronoun",
      "description": "A pronoun form ending in “-self” or “-selves” that refers back to the clause’s subject.",
      "examples": [
        "herself",
        "himself",
        "themselves"
      ],
      "type": "string"
    }
  }
}
```
---
## Range

ID: `Range`

The range of a weapon or ability

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "id": "Range",
  "examples": [
    "Melee",
    "Very Close",
    "Close",
    "Far",
    "Very Far"
  ],
  "anyOf": [
    {
      "const": "Melee"
    },
    {
      "const": "Very Close"
    },
    {
      "const": "Close"
    },
    {
      "const": "Far"
    },
    {
      "const": "Very Far"
    }
  ]
}
```
---
## Trait

ID: `Trait`

The details of a character trait

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "id": "Trait",
  "examples": [
    {
      "_type": "trait",
      "value": 2,
      "locked": true
    },
    {
      "_type": "trait",
      "value": -1,
      "locked": false
    }
  ],
  "type": "object",
  "properties": {
    "_type": {
      "default": "trait",
      "const": "trait"
    },
    "value": {
      "default": 0,
      "type": "integer",
      "minimum": -9007199254740991,
      "maximum": 9007199254740991
    },
    "locked": {
      "default": false,
      "type": "boolean"
    }
  },
  "required": [
    "_type",
    "value",
    "locked"
  ],
  "additionalProperties": false
}
```
---
## Trait Name

ID: `TraitName`

The name of a character trait

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "id": "TraitName",
  "examples": [
    "Agility",
    "Strength",
    "Finesse",
    "Instinct",
    "Presence",
    "Knowledge"
  ],
  "anyOf": [
    {
      "const": "Agility"
    },
    {
      "const": "Strength"
    },
    {
      "const": "Finesse"
    },
    {
      "const": "Instinct"
    },
    {
      "const": "Presence"
    },
    {
      "const": "Knowledge"
    }
  ]
}
```
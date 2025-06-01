---
title: Artifacts
description: Artifacts are items that can be used in a campaign.
sidebar: 
 order: 4
---

## Ancestry

ID: `Ancestry`

The ancestry of a character

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "id": "Ancestry",
  "type": "object",
  "properties": {
    "_type": {
      "const": "ancestry"
    },
    "name": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "primaryFeature": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "description": {
          "type": "string"
        }
      },
      "required": [
        "name",
        "description"
      ],
      "additionalProperties": false
    },
    "secondaryFeature": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "description": {
          "type": "string"
        }
      },
      "required": [
        "name",
        "description"
      ],
      "additionalProperties": false
    }
  },
  "required": [
    "_type",
    "name",
    "primaryFeature",
    "secondaryFeature"
  ],
  "additionalProperties": false
}
```
---
## Reference to an Ancestry

ID: `ReferenceAncestry`

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "id": "ReferenceAncestry",
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
```
---
## Community

ID: `Community`

A community that shaped a characters backstory

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "id": "Community",
  "type": "object",
  "properties": {
    "_type": {
      "const": "community"
    },
    "name": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "feature": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "description": {
          "type": "string"
        }
      },
      "required": [
        "name",
        "description"
      ],
      "additionalProperties": false
    }
  },
  "required": [
    "_type",
    "name",
    "feature"
  ],
  "additionalProperties": false
}
```
---
## Reference to a Community

ID: `ReferenceCommunity`

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "id": "ReferenceCommunity",
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
}
```
---
## Domain

ID: `Domain`

A domain of a character class

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "id": "Domain",
  "type": "object",
  "properties": {
    "_type": {
      "const": "domain"
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
```
---
## Reference to a Domain

ID: `ReferenceDomain`

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "id": "ReferenceDomain",
  "type": "object",
  "properties": {
    "_type": {
      "const": "reference"
    },
    "_key": {
      "const": "role/domain"
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
```
---
## Armor

ID: `Armor`

A set of armor that can be equipped by a character

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "id": "Armor",
  "type": "object",
  "properties": {
    "_type": {
      "default": "inventoryArmor",
      "const": "inventoryArmor"
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
    },
    "baseThresholds": {
      "$ref": "#/$defs/DamageThresholds"
    },
    "baseScore": {
      "type": "integer",
      "minimum": 0,
      "maximum": 9007199254740991
    },
    "features": {
      "anyOf": [
        {
          "type": "array",
          "items": {
            "type": "string"
          }
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
    "description",
    "baseThresholds",
    "baseScore",
    "features"
  ],
  "additionalProperties": false,
  "$defs": {
    "DamageThresholds": {
      "id": "DamageThresholds",
      "title": "Damage Thresholds",
      "description": "The damage thresholds of a character",
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
  }
}
```
---
## Reference to a piece of Armor

ID: `ReferenceArmor`

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "id": "ReferenceArmor",
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
}
```
---
## Thing

ID: `Thing`

A thing that can be added to a character's inventory

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "id": "Thing",
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
```
---
## Reference to a Thing

ID: `ReferenceThing`

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "id": "ReferenceThing",
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
}
```
---
## Weapon

ID: `Weapon`

A weapon that can be equipped by a character

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "id": "Weapon",
  "type": "object",
  "properties": {
    "_type": {
      "default": "inventoryWeapon",
      "const": "inventoryWeapon"
    },
    "name": {
      "type": "string"
    },
    "trait": {
      "$ref": "#/$defs/TraitName"
    },
    "range": {
      "$ref": "#/$defs/Range"
    },
    "damageDice": {
      "$ref": "#/$defs/DiceType"
    },
    "damageType": {
      "$ref": "#/$defs/DamageType"
    },
    "features": {
      "anyOf": [
        {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        {
          "type": "null"
        }
      ]
    },
    "burden": {
      "anyOf": [
        {
          "const": "One-Handed"
        },
        {
          "const": "Two-Handed"
        }
      ]
    }
  },
  "required": [
    "_type",
    "name",
    "trait",
    "range",
    "damageDice",
    "damageType",
    "features",
    "burden"
  ],
  "additionalProperties": false,
  "$defs": {
    "TraitName": {
      "id": "TraitName",
      "title": "Trait Name",
      "description": "The name of a character trait",
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
    },
    "Range": {
      "id": "Range",
      "title": "Range",
      "description": "The range of a weapon or ability",
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
    },
    "DiceType": {
      "id": "DiceType",
      "title": "Dice Type",
      "description": "The type of dice to roll",
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
    },
    "DamageType": {
      "id": "DamageType",
      "title": "Damage Type",
      "description": "The type of damage a weapon or ability deals",
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
  }
}
```
---
## Reference to a Weapon

ID: `ReferenceWeapon`

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "id": "ReferenceWeapon",
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
}
```
---
## Class

ID: `Class`

A class of a character

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "id": "Class",
  "type": "object",
  "properties": {
    "_type": {
      "const": "class"
    },
    "name": {
      "type": "string"
    },
    "domain": {
      "$ref": "#/$defs/ReferenceDomain"
    },
    "initialEvasion": {
      "type": "integer",
      "minimum": 0,
      "maximum": 100
    },
    "initialHitPoints": {
      "type": "integer",
      "minimum": 0,
      "maximum": 9007199254740991
    },
    "initialInventory": {
      "type": "array",
      "items": {
        "anyOf": [
          {
            "$ref": "#/$defs/Thing"
          },
          {
            "$ref": "#/$defs/Weapon"
          },
          {
            "$ref": "#/$defs/Armor"
          }
        ]
      }
    },
    "features": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "description": {
            "type": "string"
          }
        },
        "required": [
          "name",
          "description"
        ],
        "additionalProperties": false
      }
    },
    "hopeFeature": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "description": {
          "type": "string"
        }
      },
      "required": [
        "name",
        "description"
      ],
      "additionalProperties": false
    },
    "subclasses": {
      "type": "array",
      "items": {
        "$ref": "#/$defs/ReferenceSubclass"
      }
    }
  },
  "required": [
    "_type",
    "name",
    "domain",
    "initialEvasion",
    "initialHitPoints",
    "initialInventory",
    "features",
    "hopeFeature",
    "subclasses"
  ],
  "additionalProperties": false,
  "$defs": {
    "ReferenceDomain": {
      "id": "ReferenceDomain",
      "title": "Reference to a Domain",
      "type": "object",
      "properties": {
        "_type": {
          "const": "reference"
        },
        "_key": {
          "const": "role/domain"
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
    },
    "Weapon": {
      "id": "Weapon",
      "title": "Weapon",
      "description": "A weapon that can be equipped by a character",
      "type": "object",
      "properties": {
        "_type": {
          "default": "inventoryWeapon",
          "const": "inventoryWeapon"
        },
        "name": {
          "type": "string"
        },
        "trait": {
          "$ref": "#/$defs/TraitName"
        },
        "range": {
          "$ref": "#/$defs/Range"
        },
        "damageDice": {
          "$ref": "#/$defs/DiceType"
        },
        "damageType": {
          "$ref": "#/$defs/DamageType"
        },
        "features": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "burden": {
          "anyOf": [
            {
              "const": "One-Handed"
            },
            {
              "const": "Two-Handed"
            }
          ]
        }
      },
      "required": [
        "_type",
        "name",
        "trait",
        "range",
        "damageDice",
        "damageType",
        "features",
        "burden"
      ],
      "additionalProperties": false
    },
    "TraitName": {
      "id": "TraitName",
      "title": "Trait Name",
      "description": "The name of a character trait",
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
    },
    "Range": {
      "id": "Range",
      "title": "Range",
      "description": "The range of a weapon or ability",
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
    },
    "DiceType": {
      "id": "DiceType",
      "title": "Dice Type",
      "description": "The type of dice to roll",
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
    },
    "DamageType": {
      "id": "DamageType",
      "title": "Damage Type",
      "description": "The type of damage a weapon or ability deals",
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
    },
    "Armor": {
      "id": "Armor",
      "title": "Armor",
      "description": "A set of armor that can be equipped by a character",
      "type": "object",
      "properties": {
        "_type": {
          "default": "inventoryArmor",
          "const": "inventoryArmor"
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
        },
        "baseThresholds": {
          "$ref": "#/$defs/DamageThresholds"
        },
        "baseScore": {
          "type": "integer",
          "minimum": 0,
          "maximum": 9007199254740991
        },
        "features": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "type": "string"
              }
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
        "description",
        "baseThresholds",
        "baseScore",
        "features"
      ],
      "additionalProperties": false
    },
    "DamageThresholds": {
      "id": "DamageThresholds",
      "title": "Damage Thresholds",
      "description": "The damage thresholds of a character",
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
## Reference to a Class

ID: `ReferenceClass`

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "id": "ReferenceClass",
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
}
```
---
## Subclass

ID: `Subclass`

A subclass of a class

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "id": "Subclass",
  "type": "object",
  "properties": {
    "_type": {
      "const": "subclass"
    },
    "name": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "spellTrait": {
      "default": null,
      "anyOf": [
        {
          "$ref": "#/$defs/TraitName"
        },
        {
          "type": "null"
        }
      ]
    },
    "foundationFeatures": {
      "type": "array",
      "items": {
        "$ref": "#/$defs/Feature"
      }
    },
    "specializationFeatures": {
      "type": "array",
      "items": {
        "$ref": "#/$defs/Feature"
      }
    },
    "masteryFeatures": {
      "type": "array",
      "items": {
        "$ref": "#/$defs/Feature"
      }
    }
  },
  "required": [
    "_type",
    "name",
    "description",
    "spellTrait",
    "foundationFeatures",
    "specializationFeatures",
    "masteryFeatures"
  ],
  "additionalProperties": false,
  "$defs": {
    "TraitName": {
      "id": "TraitName",
      "title": "Trait Name",
      "description": "The name of a character trait",
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
    },
    "Feature": {
      "id": "Feature",
      "title": "Feature",
      "description": "A feature for a character to use",
      "type": "object",
      "properties": {
        "_type": {
          "const": "feature"
        },
        "name": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "notes": {
          "default": null,
          "anyOf": [
            {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "modifiers": {
          "default": null,
          "type": "null"
        }
      },
      "required": [
        "_type",
        "name",
        "description",
        "notes",
        "modifiers"
      ],
      "additionalProperties": false
    }
  }
}
```
---
## Reference to a Subclass

ID: `ReferenceSubclass`

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "id": "ReferenceSubclass",
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
```
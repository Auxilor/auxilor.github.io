---
title: "Enchantment Configuration"
sidebar_position: 6
---

## Example Config
```yaml
#
# Aquatic EcoEnchant
#

name: "Aquatic"
description: Trident deals additional damage when shot from water.
enabled: true

obtaining:
  table: true
  villager: true
  loot: true
  rarity: rare

general-config:
  targets:
    - trident
  grindstoneable: true
  conflicts: []
  maximum-level: 8

config:
  multiplier: 0.05 # 1 + (Level * Multiplier) is multiplied with the damage
```

### Name

The name of the enchantment is how it will show up on items. You can edit this, reload configs, and items with this enchantment will automatically update.

### Description

The same goes for descriptions. Descriptions are automatically line-wrapped as well, so don't worry about them being too long.

### Obtaining

Obtaining is slightly more complex. It works as follows:

| Key      | Function                                                                                                      |
|----------|---------------------------------------------------------------------------------------------------------------|
| Table    | Whether the enchantment should be available from enchanting tables at all. Overrides permissions if disabled. |
| Villager | Whether the enchantment should be available as a trade from villagers.                                        |
| Loot     | Whether the enchantment should be available from loot chests                                                  |
| Rarity   | The rarity of the enchantment. Must be from a group specified in rarity.yml                                   |

### Disabling

If you want to disable an enchantment completely, and have it automatically be removed from all items that have it, simply set enabled to false.

### General Config

General config is config that applies to the enchantment itself rather than the function it performs.

It works as follows:

| Key            | Function                                                                                                           |
|----------------|--------------------------------------------------------------------------------------------------------------------|
| Grindstoneable | Whether the enchantment should be removable in a grindstone.                                                       |
| Conflicts      | The key names of enchantments that it should conflict with.                                                        |
| Maximum Level  | The maximum obtainable level of this enchantment. Some configs do not have this, meaning they only have one level. |
| Targets        | The items that the enchantment can be applied to. Specified in targets.yml                                         |

### Config

Config modifies how the enchantment works in gameplay.

Here, it is quite simple: multiplier is how much more damage will be dealt
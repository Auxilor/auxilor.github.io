---
title: "The Gameplay"
sidebar_position: 2
---

## Types

What are types? Well, vanilla minecraft has 2 types: Normal, and Curse. However, EcoEnchants expands on this model to add more to the enchantment metagame.

* Normal Enchantments: These are very straightforward - most enchantments are like this, and they generally improve the item and make it stronger.

* Curse Enchantments: These are the opposite of normal enchantments. They make the item worse and weaker.

* Artifact Enchantments: These are purely cosmetic enchantments. By default, an item can only have one artifact enchantment at a time (change in config.yml) - and create particles depending on the item they're applied on. On an elytra, they create a trail behind each wing, on melee weapons they create a spiral of particles around the victim, on bows / crossbows / tridents, they create a particle trail behind the projectile, and on Pickaxes, they create particles when breaking certain blocks (ores by default)

* Special Enchantments: These are the more powerful version of normal enchantments. They're very strong, and so by default you can only have one special enchantment on an item at a time. This forces players to specialize their items and focus them on a specific trait, which adds a whole new layer to the item metagame.

* Spell Enchantments: These are abilities. You can alt-click (right click on most items, left-click on bows / crossbows / tridents / fishing rods / etc) while holding an item to activate it, and then a cooldown will start before you can activate it again.

## Rarity

Rarity is mostly hidden from the player, and functions more as a way for you to choose how each enchantment can be obtained. A rarity consists of several values. The minimum xp level required to get the enchantment from an enchanting table - should they be level 1, level 15, level 30? Something else altogether? The percentage chance for the enchantment to be applied to an item every time it is enchanted above that minimum level, the percentage chance for a villager to spawn with a trade for that enchantment, and the percentage chance for an item in a loot chest to spawn with that enchantment. All values are completely configurable, and you can create, edit, and delete as many rarities as you want.

Check out rarity.yml here:

[GitHub](https://github.com/Auxilor/EcoEnchants/blob/master/eco-core/core-plugin/src/main/resources/rarity.yml)

## Means of obtaining

By default, normal, special, and artifact enchantments are available from Enchanting Tables, Villagers, and Loot Chests. Curse enchantments, by default, are only available from Villagers and Loot Chests, just like in vanilla.

Levels are calculated based on their cost. If you get an enchantment from 1 xp level or 1 emerald, it will probably be a level 1 enchantment. Of course, it is possible to get above this at a low cost but it is rare. This is designed to be as similar to vanilla as possible.

Special enchantments are very, very unlikely to ever be obtained at their max level from an enchanting table or villager, by default they are heavily skewed towards level 1 - however you can change this in config.

Loot chests will generally contain higher level enchantments. This is also designed to be like vanilla, where enchantments in, for example, and end city will have a relatively high level.

## Targets

Targets are the items that can be enchanted by any given enchantment. These are things like melee weapons, tools, armor pieces, elytra, fishing rods, etc. You can create your own targets (for example if you want diamond and netherite items to have exclusive enchantments) and edit and delete as many targets as you want.

For custom enchants (made in config), you'll need to specify the slot for any target by adding an extra entry into the list of items:

* `slot:hands` For the enchantment to check for items in hands (tools, weapons, bows, tridents)

* `slot:armor` For the enchantment to check for armor

* `slot:any` For the enchantment to work when in the inventory at all

Check out target.yml here:

[GitHub](https://github.com/Auxilor/EcoEnchants/blob/master/eco-core/core-plugin/src/main/resources/target.yml)


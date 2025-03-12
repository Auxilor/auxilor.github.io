---
title: Additional Configuration Options
sidebar_position: 3
---

## How to add additional recipes
Each recipe is its own config file, placed in the `/recipes/` folder, and you can add or remove them as you please. There's an example config called `_example.yml` to help you out!

The ID of the recipe is the file name. These currently do not have function, just make sure they're unique.
ID's must be lowercase letters, numbers, and underscores only.

Additional recipes can be used for EcoItems but also for items from other plugins, such as additional recipes for Pet Spawn Eggs from EcoPets, or creating a recipe for Enchanted Golden Apples.
## Example Recipe Config
```yaml
result: ecoitems:enchanted_emerald 9 # The item to give, read here for more: https://plugins.auxilor.io/all-plugins/the-item-lookup-system

recipe: # The recipe, read here for more: https://plugins.auxilor.io/all-plugins/the-item-lookup-system#crafting-recipes
  - ""
  - emerald_block 32
  - ""
  - emerald_block 32
  - emerald_block 32
  - emerald_block 32
  - ""
  - emerald_block 32
  - ""

permission: "ecoitems.craft.enchanted_emerald_block_craft" # (Optional) The permission required to craft this recipe.
```

### Understanding all the sections

**result:** The item(s) being crafted, read here for more: [Item Lookup System](https://plugins.auxilor.io/all-plugins/the-item-lookup-system).

**recipe:** The recipe, read here for more info: [Crafting Recipes](https://plugins.auxilor.io/all-plugins/the-item-lookup-system#crafting-recipes)

**permission:** (Optional) The permission required to craft the recipe.

## How to add rarities
Each rarity is its own config file, placed in the `/rarities/` folder, and you can add or remove them as you please. There's an example config called `_example.yml` to help you out!

The ID of the rarity is the file name. This is what you use in the EcoItem configs, read here for more: [How to make an Item](https://plugins.auxilor.io/ecoitems/how-to-make-a-custom-item).
ID's must be lowercase letters, numbers, and underscores only.

Rarities in EcoItems are a system for categorizing items based on their rarity level. Each rarity is defined by a specific tag in lore to show players which items are harder to obtain and/or which loot items are better.

## Example Rarity Config

```yaml
# The ID of the rarity is the name of the .yml file,
# for example common.yml has the ID of common
# You can place rarities anywhere in this folder,
# including in subfolders if you want to organize your rarity configs
# _example.yml is not loaded.

# The lore added to items with this rarity
lore:
  - "&a&lCOMMON"

# The weight of the rarity. Higher weights take precedence over lower weights,
# so if an item has multiple rarities, the one with the highest weight will be used.
weight: 1

# The items that have this rarity
# Read here: https://plugins.auxilor.io/all-plugins/the-item-lookup-system
# EcoItems items should specify the rarity in their config rather than here
items:
  - diamond
```

### Understanding all the sections

**lore:** The lore added to the item with this rarity. Options for this can be found in [config.yml](https://github.com/Auxilor/EcoItems/blob/master/eco-core/core-plugin/src/main/resources/config.yml).

**weight:** The weight of the rarity. If an item has multiple rarities, the one with the highest weight will be shown.

**items:** The items to have this rarity, read here for more: [Item Lookup System](https://plugins.auxilor.io/all-plugins/the-item-lookup-system). For EcoItems, you should specify it in the item config.
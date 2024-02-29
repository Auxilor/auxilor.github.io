---
title: "How to make a custom item"
sidebar_position: 2
---

## Default config
The default configs can be found [here](https://github.com/Auxilor/EcoItems/blob/master/eco-core/core-plugin/src/main/resources/items/).
You can find additional user-created configs on [lrcdb](https://lrcdb.auxilor.io/).

## How to add items
Each item is its own config file, placed in the `/items/` folder, and you can add or remove them as you please. There's an example config called `_example.yml` to help you out!

The ID of the EcoItem is the file name. This is what you use in commands and in the [Item Lookup System](https://plugins.auxilor.io/all-plugins/the-item-lookup-system).
ID's must be lowercase letters, numbers, and underscores only.

## Example Item Config

```yaml
item:
  item: iron_sword hide_attributes # The item in-game: https://plugins.auxilor.io/all-plugins/the-item-lookup-system
  display-name: "<g:#f953c6>Mithril Sword</g:#b91d73>" # The display name of the item
  lore: # The item lore
    - "&7Damage: &c12❤"
    - "&7Attack Speed: &c1.5"
    - ""
    - "<g:#f953c6>MITHRIL BONUS</g:#b91d73>"
    - "&8» &#f953c6Deal 50% more damage in the nether"
  craftable: true # If the item can be crafted
  crafting-permission: "ecoitems.craft.example" # (Optional) The permission required to craft this recipe.
  recipe: # The recipe, read here for more: https://plugins.auxilor.io/all-plugins/the-item-lookup-system#crafting-recipes
    - ""
    - ecoitems:mithril 2
    - ""
     
    - ""
    - ecoitems:mithril 2
    - ""
     
    - ""
    - stick
    - ""
  recipe-give-amount: 1 # Optional, set the amount of items to give in the recipe

  # The actual item durability isn't set (because it can't be changed), but instead
  # this scales how quickly the item wears to act as if it had this durability.
  # For example, let's say the actual durability is 350, but you set this to 700,
  # it will wear at half the normal rate.

  effective-durability: 1024 # Optional, set the durability

# The slot the item has to be in to activate its effects.
# The options for slot are mainhand, offhand, hands, helmet, chestplate,
# leggings, boots, armor, any, a number from 0-40 (to specify an exact slot),
# or a list of slots like "9, 10, 11, mainhand"
# Use to choose weather this is a weapon, tool, armor piece, charm, etc.
# If you don't specify this, it will default to mainhand.
slot: mainhand

base-damage: 12 # (Optional) The item base damage
base-attack-speed: 1.5 # (Optional) The item base attack speed

# The effects of the item (i.e. the functionality)
# See here: https://plugins.auxilor.io/effects/configuring-an-effect
effects:
  - id: damage_multiplier
    args:
      multiplier: 1.5
    triggers:
      - melee_attack

# The conditions required for the effects to activate
conditions:
  - id: in_world
    args:
    world: world_the_nether
```

## Understanding all the sections

**item:** The base item, read here for more: [Item Lookup System](https://plugins.auxilor.io/all-plugins/the-item-lookup-system).

**display-name:** The item name in-game.

**lore:** The item lore shown in-game. Set to `lore: []` to remove all lore lines.

**craftable:** If the item should be craftable (true/false).

**crafting-permission:** (Optional) The permission required to craft the recipe.

**recipe:** The recipe, read here for more info: [Crafting Recipes](https://plugins.auxilor.io/all-plugins/the-item-lookup-system#crafting-recipes)

**recipe-give-amount:** The amount of items to give when crafted.

**effective-durability:** The scaled durability of the item.

**slot:** The slot for the effects to be active in.

**base-damage:** The item base damage. You can find vanilla damage values on the [Minecraft Wiki](https://minecraft.wiki/w/Damage#Dealing_damage).

**base-attack-speed:** the item base attack speed. You can find the vanilla attack speed values on the [Minecraft Wiki](https://minecraft.wiki/w/Damage#Dealing_damage).

### Effects & Conditions

The effects section is the core functionality of the EcoItem. You can configure effects, conditions, filters, mutators and triggers in this section to run whilst the item is held or used.

Check out [Configuring an Effect](https://plugins.auxilor.io/effects/configuring-an-effect) to understand how to configure this section correctly.

For more advanced users or setups, you can configure chains in this section to string together different effects under one trigger. Check out [Configuring an Effect Chain](https://plugins.auxilor.io/effects/configuring-a-chain) for more info.


## How to add additional recipes
Recipes work the same - they are each config files placed in the `/recipes/` folder, and you can add or remove them as you please. There's also an example config called `_example.yml` to help you out!

The ID of the recipe is the file name. This currently doesn't have a function but make sure it is unique.
ID's must be lowercase letters, numbers, and underscores only.

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

## Understanding all the sections

**result:** The item(s) being crafted, read here for more: [Item Lookup System](https://plugins.auxilor.io/all-plugins/the-item-lookup-system).

**recipe:** The recipe, read here for more info: [Crafting Recipes](https://plugins.auxilor.io/all-plugins/the-item-lookup-system#crafting-recipes)

**permission:** (Optional) The permission required to craft the recipe.
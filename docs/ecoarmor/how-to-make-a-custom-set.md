---
title: "How to make a custom set"
sidebar_position: 4
---

## Default config
The default configs can be found [here](https://github.com/Auxilor/EcoArmor/tree/master/eco-core/core-plugin/src/main/resources/sets).
You can find additional user-created configs on [lrcdb](https://lrcdb.auxilor.io/).

## How to add sets
Each set is its own config file, placed in the `/sets/` folder, and you can add or remove them as you please. There's an example config called `_example.yml` to help you out!

The ID of the Armor Set is the file name. This is what you use in commands and in the [Item Lookup System](https://plugins.auxilor.io/all-plugins/the-item-lookup-system).
ID's must be lowercase letters, numbers, and underscores only.

## Example Armor Set Config

```yaml
# The effects of the set (i.e. the functionality)
# See here: https://plugins.auxilor.io/effects/configuring-an-effect
effects:
  - id: damage_multiplier
    args:
      multiplier: 1.25
    triggers:
      - melee_attack
      - bow_attack
      - trident_attack
      - 
# The effects of the set (i.e. the functionality)
# See here: https://plugins.auxilor.io/effects/configuring-an-effect
advancedEffects:
  - id: damage_multiplier
    args:
      multiplier: 1.25
    triggers:
      - melee_attack
      - bow_attack
      - trident_attack
  - id: damage_multiplier
    args:
      multiplier: 0.9
    triggers:
      - take_damage

sounds:
  equip:
    enabled: false # If a sound should play when armor is equipped.
    sound: "" # The sound to play, sounds: https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Sound.html
    volume: 1
    pitch: 1
  advancedEquip:
    enabled: false # If a sound should play when advanced armor is equipped.
    sound: "" # The sound to play, sounds: https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Sound.html
    volume: 1
    pitch: 1
  unequip:
    enabled: false # If a sound should play when armor is unequipped.
    sound: "" # The sound to play, sounds: https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Sound.html
    volume: 1
    pitch: 1
    
advancedLore: # Lore to be added to the armor piece when it has been advanced.
  - ''
  - "<gradient:f12711>&lADVANCED BONUS</gradient:f5af19>"
  - "&8» &6Take 10% less damage"
  - "&8&oRequires full set to be worn"
 
shard:
  item: prismarine_shard unbreaking:1 hide_enchants # The shard item, read more here: https://plugins.auxilor.io/all-plugins/the-item-lookup-system
  name: "<GRADIENT:f12711>Advancement Shard:</GRADIENT:f5af19> &cReaper" # The in-game name of the shard.
  lore: # The lore shown in-game on the shard. Set to `lore: []` to remove lore.
    - "&8Drop this onto &cReaper Armor"
    - "&8to make it <GRADIENT:f12711>Advanced</GRADIENT:f5af19>."
  craftable: false # If the shard is craftable
  crafting-permission: "permission" # (Optional) The permission required to craft this recipe.
  recipe: # The recipe, read here for more: https://plugins.auxilor.io/all-plugins/the-item-lookup-system#crafting-recipes
    - prismarine_shard
    - ecoarmor:set_reaper_helmet
    - prismarine_shard
     
    - ecoarmor:set_reaper_chestplate
    - nether_star
    - ecoarmor:set_reaper_leggings
     
    - prismarine_shard
    - ecoarmor:set_reaper_boots
    - prismarine_shard
    
helmet:
  item: leather_helmet color:#303030 hide_dye # https://plugins.auxilor.io/all-plugins/the-item-lookup-system
  name: "&cReaper Helmet" # The name shown in-game.
  advancedName: "<GRADIENT:f12711>Advanced</GRADIENT:f5af19>&c Reaper Helmet" # The advanced name shown in-game.
  lore: # The lore shown in-game. Set to `lore: []` to remove lore.
    - "&c&lREAPER SET BONUS"
    - "&8» &cDeal 25% more damage"
    - "&8&oRequires full set to be worn"
    - ''
    - "&fTier: %tier%"
    - "&8&oUpgrade with an Upgrade Crystal"
  craftable: true # If the armor piece is craftable
  crafting-permission: "permission" # (Optional) The permission required to craft this recipe.
  recipe: # The recipe, read here for more: https://plugins.auxilor.io/all-plugins/the-item-lookup-system#crafting-recipes
    - ecoitems:armor_core ? air
    - nether_star
    - ecoitems:armor_core ? air
     
    - nether_star
    - netherite_helmet
    - nether_star
     
    - air
    - nether_star
    - air
  defaultTier: default # The default tier of the armor

  # The actual item durability isn't set (because it can't be changed), but instead
  # this scales how quickly the item wears to act as if it had this durability.
  # For example, let's say the actual durability is 350, but you set this to 700,
  # it will wear at half the normal rate.

  effectiveDurability: 2048  # Optional, set the durability

  # The effects of the item (i.e. the functionality)
  # See here: https://plugins.auxilor.io/effects/configuring-an-effect
  effects: []
  advancedEffects: []

  # The conditions required for the effects to activate
  conditions: [] # The conditions for the effects to be ru

chestplate:
  item: leather_chestplate color:#303030 hide_dye
  name: "&cReaper Chestplate"
  advancedName: "<GRADIENT:f12711>Advanced</GRADIENT:f5af19>&c Reaper Chestplate"
  lore:
    - "&c&lREAPER SET BONUS"
    - "&8» &cDeal 25% more damage"
    - "&8&oRequires full set to be worn"
    - ''
    - "&fTier: %tier%"
    - "&8&oUpgrade with an Upgrade Crystal"
  craftable: true
  crafting-permission: "permission"
  recipe:
    - ecoitems:armor_core ? air
    - nether_star
    - ecoitems:armor_core ? air
     
    - nether_star
    - netherite_chestplate
    - nether_star
     
    - air
    - nether_star
    - air
  defaultTier: default
  effectiveDurability: 2048
  effects: []
  advancedEffects: []
  conditions: []

elytra:
  item: elytra
  name: "&cReaper Elytra"
  advancedName: "<GRADIENT:f12711>Advanced</GRADIENT:f5af19>&c Reaper Elytra"
  lore:
    - "&c&lREAPER SET BONUS"
    - "&8» &cDeal 25% more damage"
    - "&8&oRequires full set to be worn"
    - ''
    - "&fTier: %tier%"
    - "&8&oUpgrade with an Upgrade Crystal"
  craftable: true
  crafting-permission: "permission"
  recipe:
    - ecoitems:armor_core ? air
    - nether_star
    - ecoitems:armor_core ? air
     
    - nether_star
    - elytra
    - nether_star
     
    - air
    - nether_star
    - air
  defaultTier: default
  effectiveDurability: 2048
  effects: []
  advancedEffects: []
  conditions: []

leggings:
  item: leather_leggings color:#303030 hide_dye
  name: "&cReaper Leggings"
  advancedName: "<GRADIENT:f12711>Advanced</GRADIENT:f5af19>&c Reaper Leggings"
  lore:
    - "&c&lREAPER SET BONUS"
    - "&8» &cDeal 25% more damage"
    - "&8&oRequires full set to be worn"
    - ''
    - "&fTier: %tier%"
    - "&8&oUpgrade with an Upgrade Crystal"
  craftable: true
  crafting-permission: "permission"
  recipe:
    - ecoitems:armor_core ? air
    - nether_star
    - ecoitems:armor_core ? air
     
    - nether_star
    - netherite_leggings
    - nether_star
     
    - air
    - nether_star
    - air
  defaultTier: default
  effectiveDurability: 2048
  effects: []
  advancedEffects: []
  conditions: []

boots:
  item: leather_boots color:#303030 hide_dye
  name: "&cReaper Boots"
  advancedName: "<GRADIENT:f12711>Advanced</GRADIENT:f5af19>&c Reaper Boots"
  lore:
    - "&c&lREAPER SET BONUS"
    - "&8» &cDeal 25% more damage"
    - "&8&oRequires full set to be worn"
    - ''
    - "&fTier: %tier%"
    - "&8&oUpgrade with an Upgrade Crystal"
  craftable: true
  crafting-permission: "permission"
  recipe:
    - ecoitems:armor_core ? air
    - nether_star
    - ecoitems:armor_core ? air
     
    - nether_star
    - netherite_boots
    - nether_star
      
    - air
    - nether_star
    - air
  defaultTier: default
  effectiveDurability: 2048
  effects: []
  advancedEffects: []
  conditions: []
```

## Config Breakdown:
## Armor Set Config

```yaml
# The effects of the set (i.e. the functionality)
# See here: https://plugins.auxilor.io/effects/configuring-an-effect
effects:
  - id: damage_multiplier
    args:
      multiplier: 1.25
    triggers:
      - melee_attack
      - bow_attack
      - trident_attack
      -
        # The effects of the set (i.e. the functionality)
      # See here: https://plugins.auxilor.io/effects/configuring-an-effect
advancedEffects:
  - id: damage_multiplier
    args:
      multiplier: 1.25
    triggers:
      - melee_attack
      - bow_attack
      - trident_attack
  - id: damage_multiplier
    args:
      multiplier: 0.9
    triggers:
      - take_damage

sounds:
  equip:
    enabled: false # If a sound should play when armor is equipped.
    sound: "" # The sound to play, sounds: https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Sound.html
    volume: 1
    pitch: 1
  advancedEquip:
    enabled: false # If a sound should play when advanced armor is equipped.
    sound: "" # The sound to play, sounds: https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Sound.html
    volume: 1
    pitch: 1
  unequip:
    enabled: false # If a sound should play when armor is unequipped.
    sound: "" # The sound to play, sounds: https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Sound.html
    volume: 1
    pitch: 1

advancedLore: # Lore to be added to the armor piece when it has been advanced.
  - ''
  - "<gradient:f12711>&lADVANCED BONUS</gradient:f5af19>"
  - "&8» &6Take 10% less damage"
  - "&8&oRequires full set to be worn"
```

### Understanding all the sections

**Sounds:** The sounds to play when the armor is equipped and unequipped.

**advancedLore:** The lore added to the armor once it's advanced.

### Effects / AdvancedEffects

The effects section is the core functionality of the Armor Set. You can configure effects, conditions, filters, mutators and triggers in this section to run whilst the full set is worn.

Check out [Configuring an Effect](https://plugins.auxilor.io/effects/configuring-an-effect) to understand how to configure this section correctly.

For more advanced users or setups, you can configure chains in this section to string together different effects under one trigger. Check out [Configuring an Effect Chain](https://plugins.auxilor.io/effects/configuring-a-chain) for more info.


## Advancement Shard Config

```yaml
shard:
  item: prismarine_shard unbreaking:1 hide_enchants # The shard item, read more here: https://plugins.auxilor.io/all-plugins/the-item-lookup-system
  name: "<GRADIENT:f12711>Advancement Shard:</GRADIENT:f5af19> &cReaper" # The in-game name of the shard.
  lore: # The lore shown in-game on the shard. Set to `lore: []` to remove lore.
    - "&8Drop this onto &cReaper Armor"
    - "&8to make it <GRADIENT:f12711>Advanced</GRADIENT:f5af19>."
  craftable: false # If the shard is craftable
  crafting-permission: "permission" # (Optional) The permission required to craft this recipe.
  recipe: # The recipe, read here for more: https://plugins.auxilor.io/all-plugins/the-item-lookup-system#crafting-recipes
    - prismarine_shard
    - ecoarmor:set_reaper_helmet
    - prismarine_shard
     
    - ecoarmor:set_reaper_chestplate
    - nether_star
    - ecoarmor:set_reaper_leggings
     
    - prismarine_shard
    - ecoarmor:set_reaper_boots
    - prismarine_shard
```

### Understanding all the sections

**item:** The base item, read here for more: [Item Lookup System](https://plugins.auxilor.io/all-plugins/the-item-lookup-system).

**name:** The item name in-game.

**lore:** the item lore shown in-game. Set to `lore: []` to remove all lore lines.

**craftable:** If the item should be craftable (true/false).

**crafting-permission:** (Optional) The permission required to craft the recipe.

**recipe:** The recipe, read here for more info: [Crafting Recipes](https://plugins.auxilor.io/all-plugins/the-item-lookup-system#crafting-recipes)

## Individual Armor Piece Config

A typical item (armor piece) config looks like this:

```yaml
helmet:
  item: leather_helmet color:#303030 hide_dye # https://plugins.auxilor.io/all-plugins/the-item-lookup-system
  name: "&cReaper Helmet" # The name shown in-game.
  advancedName: "<GRADIENT:f12711>Advanced</GRADIENT:f5af19>&c Reaper Helmet" # The advanced name shown in-game.
  lore: # The lore shown in-game. Set to `lore: []` to remove lore.
    - "&c&lREAPER SET BONUS"
    - "&8» &cDeal 25% more damage"
    - "&8&oRequires full set to be worn"
    - ''
    - "&fTier: %tier%"
    - "&8&oUpgrade with an Upgrade Crystal"
  craftable: true # If the armor piece is craftable
  crafting-permission: "permission" # (Optional) The permission required to craft this recipe.
  recipe: # The recipe, read here for more: https://plugins.auxilor.io/all-plugins/the-item-lookup-system#crafting-recipes
    - ecoitems:armor_core ? air
    - nether_star
    - ecoitems:armor_core ? air
     
    - nether_star
    - netherite_helmet
    - nether_star
     
    - air
    - nether_star
    - air
  defaultTier: default # The default tier of the armor

  # The actual item durability isn't set (because it can't be changed), but instead
  # this scales how quickly the item wears to act as if it had this durability.
  # For example, let's say the actual durability is 350, but you set this to 700,
  # it will wear at half the normal rate.

  effectiveDurability: 2048  # Optional, set the durability

  # The effects of the item (i.e. the functionality)
  # See here: https://plugins.auxilor.io/effects/configuring-an-effect
  effects: []
  advancedEffects: []

  # The conditions required for the effects to activate
  conditions: [] # The conditions for the effects to be ru
```

### Understanding all the sections

**item:** The base item, read here for more: [Item Lookup System](https://plugins.auxilor.io/all-plugins/the-item-lookup-system).

**name:** The item name in-game.

**advancedName:** The advanced item name in-game.

**lore:** the item lore shown in-game. Set to `lore: []` to remove all lore lines.

**craftable:** If the item should be craftable (true/false).

**crafting-permission:** (Optional) The permission required to craft the recipe.

**recipe:** The recipe, read here for more info: [Crafting Recipes](https://plugins.auxilor.io/all-plugins/the-item-lookup-system#crafting-recipes)

**defaultTier:** The default tier of the armor piece. Tiers are found in `/ecoarmor/tiers`, read here for more: [How to make a custom tier](https://plugins.auxilor.io/ecoarmor/how-to-make-a-custom-tier).

**effectiveDurability:** The scaled durability of the item.

### Effects / AdvancedEffects

The effects section is the core functionality of the Armor Set. You can configure effects, conditions, filters, mutators and triggers in this section to run whilst the armor piece is worn.

Check out [Configuring an Effect](https://plugins.auxilor.io/effects/configuring-an-effect) to understand how to configure this section correctly.

For more advanced users or setups, you can configure chains in this section to string together different effects under one trigger. Check out [Configuring an Effect Chain](https://plugins.auxilor.io/effects/configuring-a-chain) for more info.
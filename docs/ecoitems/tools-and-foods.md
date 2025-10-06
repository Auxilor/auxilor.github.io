---
title: Tools + Foods
sidebar_position: 2
---

1.21 added Item Components, allowing you to make custom tools and foods. EcoItems provides support for this, where you can add an extra section to your config to make an item into a tool or a food.

### Example Tool Config
```yaml
item:
  item: netherite_pickaxe glint max_damage:4096 item_name:"Hardened Netherite Pickaxe"
  lore: [ ]
  craftable: true
  recipe:
    - netherite_ingot
    - netherite_ingot
    - netherite_ingot

    - netherite_ingot
    - netherite_pickaxe
    - netherite_ingot

    - netherite_ingot
    - netherite_ingot
    - netherite_ingot

# Options for the tool
# These options do not update existing tools, only new ones
tool:
  # The default mining speed, if not overridden by any rules
  mining-speed: 1.0

  # The amount of durability to remove from the tool when it is used
  damage-per-block: 1

  # (Optional) Rules for the tool
  # Blocks are lists of block names or block tags
  # A list of block names is here: https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html
  # A list of block (Material) tags is here: https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Tag.html
  rules:
    - blocks:
        - "#mineable_pickaxe" # Tags start with a #
      speed: 45.8 # The mining speed for these blocks
    - blocks:
        - "#incorrect_for_netherite_tool"
      speed: 1
      drops: false # (Optional) If the block should drop items when mined with this tool
```

#### Tool Config Options

**mining-speed**: The default mining speed of the item.

**damage-per-block**: The amount of durability damage taken when using the tool. Must be a non-negative integer.

**rules**: A list of tool rules. For each one you can specify the blocks / vanilla block tags, as well as mining speed and whether or not blocks should drop.

### Example Food Config
```yaml
item:
  item: cooked_beef glint item_name:"Enchanted Steak"
  lore: [ ]
  craftable: true
  recipe:
    - ""
    - cooked_beef 64
    - ""
    - cooked_beef 64
    - cooked_beef 64
    - cooked_beef 64
    - ""
    - cooked_beef 64
    - ""

# Options for the food
# These options do not update existing foods, only new ones
food:
  # Read here: https://minecraft.fandom.com/wiki/Food#Hunger_and_saturation
  nutrition: 12
  saturation: 2

  # The time in seconds it takes to eat the food
  eat-seconds: 1

  # (Optional) Set if this food can always be eaten, even if the player is not hungry
  can-always-eat: false

  # (Optional) Potion effects to give when eating the food
  effects:
    - effect: regeneration # The ID of the potion effect to give
      duration: 40 # The duration of the potion effect in ticks
      level: 1 # The level of the potion effect
      ambient: true # If the potion is ambient (defaults to true)
      particles: true # If the potion has particles (defaults to true)
      icon: true # If the potion icon shows up (defaults to true)
      probability: 100 # The probability of the potion effect occurring (defaults to 100)
```

#### Food Config Options

**nutrition**: The amount of hunger points given when the food is eaten.

**saturation**: The amount of saturation to give.

**eat-seconds**: The time it takes to eat the food, in seconds.

**can-always-eat**: If the food can always be eaten regardless of if the player is hungry.

**effects**: A list of potion effects to give when eating the food. You must specify the effect, duration, and level, but other options are optional.
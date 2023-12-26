---
title: "How to make a custom mob"
sidebar_position: 2
---

## Default configs
The default configs can be found here:

[GitHub](https://github.com/Auxilor/EcoMobs/blob/master/eco-core/core-plugin/src/main/resources/mobs/)

## How to add mobs
Mobs are each config files placed in the `/mobs/` folder, and you can add or remove them as you please. There's an example config called `_example.yml` to help you out!

## Example Mob Config

```yaml
# The ID of the mob is the name of the .yml file,
# for example steel_golem.yml has the ID of steel_golem
# You can place mobs anywhere in this folder,
# including in subfolders if you want to organize your mob configs
# _example.yml is not loaded.

# A base mob and modifiers
# View an explanation for this system here: https://plugins.auxilor.io/all-plugins/the-entity-lookup-system
mob: zombie attack-damage:90 movement-speed:1.5 follow-range:16 health:1200

# The ID of the mob category, handles spawning.
category: common

# Supported placeholders:
# %health%, %max_health%, %health_percent%, %time% (formats as minutes:seconds, eg 1:56)
display-name: "&cNecrotic Soldier &7| &c%health%♥ &7| &e%time%"

# If the mob you're using supports equipment, you can specify the items in each slot.
# Remove any slots that you don't want to put equipment in.
equipment:
  hand: diamond_sword sharpness:2
  off-hand: shield
  head: ""
  chest: ""
  legs: ""
  feet: ""

# Options for plugin integrations
# Remove sections for plugins you're not using
integrations:
  # Options for LevelledMobs
  levelled-mobs:
    can-level: true

  # Options for ModelEngine
  model-engine:
    id: ""

  # Options for LibsDisguises
  libs-disguises:
    id: ""

# Custom Mob AI
# Read here: https://plugins.auxilor.io/all-plugins/custom-entity-ai
custom-ai:
  # If custom AI should override the vanilla entity AI.
  clear: false

  # How the mob decides who to attack.
  target-goals: [ ]

  # How the mob should behave.
  entity-goals: [ ]

# Effects are done from the player's perspective: to treat the player as the victim,
# either use self_as_victim in args, or use player_as_victim in mutators.
# You can use display name placeholders in effects
# You can also use top damager placeholders:
# %top_damager_<place>_name%, %top_damager_<place>_damage%, %top_damager_<place>_display%
effects:
  # Effects ran when the mob spawns
  spawn: [ ]

  # Effects ran when the mob despawns
  despawn: [ ]

  # Effects ran when the player interacts with the mob
  interact: [ ]

  # Effects ran when the player melee attacks the mob
  melee-attack: [ ]

  # Effects ran when the player does a ranged attack on the mob
  ranged-attack: [ ]

  # Effects ran when the player attacks the mob
  any-attack: [ ]

  # Effects ran when the mob takes damage
  take-damage: [ ]

  # Effects ran when the player is damaged by the mob
  damage-player: [ ]

  # Effects ran when the player is killed by the mob
  kill-player: [ ]

  # Effects ran when the mob dies
  death: [ ]

  # Effects ran when the mob is killed by the player
  kill: [ ]

# The lifespan of the mob, in seconds. Set to -1 to disable.
lifespan: 120

defence:
  # If the mob can get into boats, minecarts, etc.
  can-mount: true

  # A list of damage causes that the mob should multiply incoming damage by.
  # The list of damage causes can be found here:
  # https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityDamageEvent.DamageCause.html
  damage-modifiers:
    hot_floor: 1
    fire_tick: 1
    lava: 1
    suffocation: 1
    drowning: 1
    entity_explosion: 1
    block_explosion: 1

# Options for what the mob drops
drops:
  # The amount of experience to drop
  experience: 30

  # You can specify as many drops as you want, and group several drops together under one chance
  items:
    - chance: 100
      items:
        - diamond_sword unbreaking:1 name:"Example Sword"

# Options for the boss bar
boss-bar:
  # If the mob should have a boss bar
  enabled: true

  # Options: blue, green, pink, purple, red, white, yellow
  color: white

  # Options: progress, notched_20, notched_12, notched_10, notched_6
  style: progress

  # The distance from the mob where the boss bar is visible
  radius: 120

# Options for spawning the mob
spawn:
  # A spawn totem is a set of 3 blocks on top of each other to spawn a mob (like a snow golem)
  totem:
    # If spawn totems should be enabled
    enabled: false

    # The top block
    top: netherite_block

    # The middle block
    middle: iron_block

    # The bottom block
    bottom: magma_block

    # The conditions for the totem to work
    conditions: [ ]

  # Options for a spawn egg
  egg:
    # If the mob should have a spawn egg
    enabled: true

    # The conditions for the spawn egg to work
    # not-met-lines will show up on the spawn egg
    conditions: [ ]

    # The spawn egg item
    item: evoker_spawn_egg unbreaking:1 hide_enchants
    name: "&cNecrotic Soldier&f Spawn Egg"
    lore:
      - ""
      - "&8&oPlace on the ground to"
      - "&8&osummon a &cNecrotic Soldier"

    craftable: true

    recipe:
      - iron_block
      - netherite_block
      - iron_block
      - air
      - ecoitems:boss_core ? nether_star
      - air
      - iron_block
      - netherite_block
      - iron_block
```

### Custom AI goals
Check how to configure custom entity AI here:

[Custom Entity AI](https://plugins.auxilor.io/all-plugins/custom-entity-ai)

---
title: "How to make a custom mob"
sidebar_position: 2
---

## Default config
The default configs can be found [here](https://github.com/Auxilor/EcoMobs/tree/master/eco-core/core-plugin/src/main/resources/mobs).
You can find additional user-created configs on [lrcdb](https://lrcdb.auxilor.io/).

## How to add mobs
Each mob is its own config file, placed in the `/mobs/` folder, and you can add or remove them as you please. There's an example config called `_example.yml` to help you out!

The ID of the mob is the file name. This is what you use in commands, effects, the [Entity Lookup System](https://plugins.auxilor.io/all-plugins/the-entity-lookup-system) and in the [Item Lookup System](https://plugins.auxilor.io/all-plugins/the-item-lookup-system).
ID's must be lowercase letters, numbers, and underscores only.

## Example Mob Config

```yaml
# A base mob and modifiers
# View an explanation for this system here: https://plugins.auxilor.io/all-plugins/the-entity-lookup-system
mob: zombie attack-damage:90 movement-speed:1.5 follow-range:16 health:1200

# The ID of the mob category, handles spawning.
category: common

# Supported placeholders:
# %health%, %max_health%, %health_percent%, %time% (formats as minutes:seconds, eg 1:56)
display-name: "&cNecrotic Soldier &7| &c%health%♥ &7| &e%time%"

# The lifespan of the mob, in seconds. Set to -1 to disable.
lifespan: 120

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

## Understanding all the sections

**mob:** The base mob and modifiers, read here for more info: [Entity Lookup System](https://plugins.auxilor.io/all-plugins/the-entity-lookup-system).

**category:** The ID of the mob category, see [How to make Mob Categories](https://plugins.auxilor.io/ecomobs/how-to-make-mob-categories).

**display-name:** The name shown in game.

**lifespan:** How long the mob should live, in seconds (-1 to disable/infinite).

**equipment:** The equipment that your mob will hold/hear. Use the [Item Lookup System](https://plugins.auxilor.io/all-plugins/the-item-lookup-system) here.

**integrations:** Options for supported external plugins - LevelledMobs, ModelEngine and LibsDisguises.

### Custom AI

**clear:** If Custom AI should override vanilla mob AI (True/False)

**target-goals:** How the mob decides who/what to attack, read here for more info: [Custom AI](https://plugins.auxilor.io/all-plugins/custom-entity-ai).

**entity-goals:** How the mob behaves, read here for more info: [Custom AI](https://plugins.auxilor.io/all-plugins/custom-entity-ai).

### Effects & Conditions

You can configure effects, conditions, filters, and mutators in this section to run when specific actions happen, such as when the mob spawns, dies, takes damage and more.

Check out [Configuring an Effect](https://plugins.auxilor.io/effects/configuring-an-effect) to understand how to configure this section correctly.

For more advanced users or setups, you can configure chains in this section to string together different effects under one trigger. Check out [Configuring an Effect Chain](https://plugins.auxilor.io/effects/configuring-a-chain) for more info.

### Defence

**can-mount:** If the mob can get into boats and minecarts (True/False).

**damage-modifiers:** A list of damage causes that the mob multiplies damage by, eg:
```yaml
  damage-modifiers:
    hot_floor: 2
```
This means the mob will take double damage from standing on magma blocks.
A list of damage causes can be found here: [Damage Causes](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityDamageEvent.DamageCause.html).

### Drops

**experience:** The amount of experience to drop.

#### Items

**chance:** The chance of the drop

**items:** The list of items to drop. Use the [Item Lookup System](https://plugins.auxilor.io/all-plugins/the-item-lookup-system) here.

### Boss-Bar

**enabled:** If the mob has a boss bar.

**color:** The color of the boss-bar (blue, green, pink, purple, red, white, yellow).

**style:** The visual style of the boss-bar (progress, notched_20, notched_12, notched_10, notched_6).

**radius:** The distance from the mob where the boss bar is visible.

### Spawn

#### Totem

**enabled:** If spawn totems are enabled.

**top/middle/bottom:** The block in it's location. Use the [Item Lookup System](https://plugins.auxilor.io/all-plugins/the-item-lookup-system) here.

**conditions:** Conditions for the totem to work, read here for more info: [Configuring a Condition](https://plugins.auxilor.io/effects/configuring-a-condition).

#### Egg

**enabled:** If spawn eggs are enabled.

**conditions:** Conditions for the spawn egg to work, read here for more info: [Configuring a Condition](https://plugins.auxilor.io/effects/configuring-a-condition).

**item:** The base item, read here for more: [Item Lookup System](https://plugins.auxilor.io/all-plugins/the-item-lookup-system).

**display-name:** The item name in-game.

**lore:** The item lore shown in-game. Set to `lore: []` to remove all lore lines.

**craftable:** If the item should be craftable (true/false).

## Internal Placeholders

| Placeholder        | Value                                                     |
| ------------------ | --------------------------------------------------------- |
| `%health%`         | The current health of the mob.                            |
| `%max_health%`     | The max health of the mob.                                |
| `%health_percent%` | The percentage of health the mob has.                     |
| `%time%`           | The time left before the mob despawns (`minutes:seconds`) |

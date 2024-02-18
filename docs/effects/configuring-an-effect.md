---
title: Configuring an Effect
sidebar_position: 1
---
## The Basics
First, you need to know of the different types of Effects: Triggered and Permanent. These are configured similarly but there are a few differences.
The main difference is that all Triggered effects require a [trigger](https://plugins.auxilor.io/effects/all-triggers) to activate, Permanent effects are always active if all conditions (optional) are met.

## Example Effect Config
```yaml
effects:
  - id: spawn_particle
    args:
      amount: 10
      particle: soul
      chance: 25
    triggers:
      - mine_block
    filters:
      blocks:
        - diamond_ore
        - deepslate_diamond_ore
    mutators:
      - id: translate_location
        args:
          add_x: 0.5
          add_y: 0.5
          add_z: 0.5
    conditions:
      - id: below_y
        args:
          y: 10
```
The example effect: 10% chance to spawn 10 soul particles in the centre of a diamond ore when its mined and the player is below Y level 10.

## Understanding The Sections

**id**: The ID of the effect. You can find all the effects under "All Effects" on the sidebar.

**args**: The args for the effect (from the effect page). There are additional optional args that you can put here (see below).

**triggers**: The list of [triggers](https://plugins.auxilor.io/effects/all-triggers) that activate this effect. (This does not apply on permanent effects).

**filters**: The list of filters to be applied on the trigger. (e.g. `blocks` filter on `mine_block` trigger, or `entities` filter on `melee_attack` trigger.)

**conditions**: As well as each effect holder (e.g. Talisman, Reforge, Enchant) having its own conditions, you can specify
a list of effect-specific conditions that work in exactly the same way

**mutators**: Mutate the data sent to the effect: you can change parameters such as the victim, the location, etc.
A mutator, like an effect or condition, consists of an ID and arguments.

## Optional Arguments

#### `chance`

The chance of this effect activating, as a percentage. (defaults to 100)

```yaml
args:
  chance: 50
```

#### `cooldown`

The cooldown between effect activations, in seconds. (defaults to 0)

```yaml
args:
  cooldown: 10
  send_cooldown_message: true # (Optional) If the cooldown message should be sent
  cooldown_message: "Custom cooldown message with %seconds% left" # (Optional) a custom cooldown message
  cooldown_effects: # (Optional) Effects to run if on cooldown
    - id: send_message
      args:
        message: "You are on cooldown! Try again in &a%seconds%&r seconds."
```

#### `cost`

The cost required to use or activate this effect. **Requires Vault.** (defaults to 0)

```yaml
args:
  cost: 200
```

#### `every`

Specify the effect to activate every x times. (defaults to always)

```yaml
args:
  every: 3
```

#### `require`

Require an expression to be true for the effect to run.

```yaml
args:
  require: '%ecobits_crystals% > 4'
```
#### `mana_cost`

The mana cost required to use or activate this effect. **Requires Aurelium Skills.** (defaults to 0)

```yaml
args:
  mana_cost: 10
```

#### `<magic>_cost`

The magic cost (e.g. mana) required to use or activate this effect. **Requires EcoSkills.** (defaults to 0)

```yaml
args:
  mana_cost: 10
```

#### `delay`

The amount of ticks to wait before executing the effect. (defaults to 0)

```yaml
args:
  delay: 20
```

#### `repeat`

Specify the effect to activate repeatedly. If the effect has a delay, it will delay between each repeat.
If the effect has any mutators, they will run again for each repeat.

This provides new placeholders: `%repeat_times%`, `%repeat_start%`, `%repeat_increment%`, and `%repeat_count%`.

```yaml
  args:
    repeat:
      times: 5 # How many times the effect should be repeated
      start: -10 # The initial value of the %repeat_count% placeholder
      increment: 10 # How much the count should be increased (or decreased) by on each repeat
```

#### `filters_before_mutation`

By default, filters are ran after mutation - set this to true if filters should be ran on the un-mutated data. (defaults
to false)

```yaml
args:
  filters_before_mutation: true
```

#### `disable_antigrief_check`

By default, the antigrief plugins on your server are checked. Set this to true to disable that. (defaults to false)

```yaml
args:
  disable_antigrief_check: true
```

#### `price`

The price required to use or activate this effect.

This supports all known prices: supports money, items, points, second currencies, etc.
Read more about the system here: https://plugins.auxilor.io/all-plugins/prices

Looks like this in config:

```yaml
args:
  price:
    value: 100 * %player_y%
    type: crystals
    display: "&b%value% Crystals ❖"
```

#### `weight`

The weight (chance) of this effect firing if the chain is ran randomly.

Chance is calculated as `<weight of element> / <sum of all weights>`

```yaml
args:
  weight: 10
```

#### `run_order`

The order the effect should run in. This can be `start`, `early`, `normal`, `late`, or `end`.

Effects have default run orders (used to make effects work together properly), but this option allows for overriding them,
for example to make `add_damage` (defaults to `late`) run before `damage_multiplier` (defaults to `normal`).

```yaml
args:
  run-order: early
```

#### `custom_<id>`

Use a [custom effect argument](https://plugins.auxilor.io/effects/custom-arguments).

```yaml
args:
  custom_<id>:
    <arg 1>: <value>
    <arg 2>: <value>
    ... etc
```

## Placeholders

**Any numeric value (integer, decimal) can be a mathematical expression involving placeholders!**

For example, you can specify the chance to be dependent on your y level: as in `chance: 100 - %player_y%` - permanent
effects will evaluate the expression on activation, and triggered effects will evaluate it on each trigger. Make sure
you only use placeholders with numeric values, as you will get weird behaviour otherwise.

There are also extra placeholders passed in that you can use:

`%trigger_value%`, `%triggervalue%`, `%trigger%`, `%value%`, `%tv%`, `%v%`, and `%t%`: The value passed by the trigger 
(e.g. the amount of damage dealt; see [here](https://plugins.auxilor.io/effects/all-triggers)).

`%player%`: The player's name

`%player_uuid%`: The player's UUID

`%victim_health%`: The victim's health

`%victim_max_health%`: The victim's max health

`%distance%`: The distance between the player and the victim

`%victim_level%`: The victim's level **Requires LevelledMobs**

If the victim is a player, you can supply any placeholder prefixed with `victim_` (e.g. `%victim_player_y%`) as well.

`%hits%`: The amount of times the player has hit the victim

`%text%`, `%string%`, and `%message%`: The message text from the trigger, for example a chat message

`%location_x%`, `%loc_x%`, and `%x%`: The x-coordinate of the location

`%location_block_x%`, `%loc_b_x%`, `%block_x%`, and `%bx%`: The block x-coordinate of the location

`%location_y%`, `%loc_y%`, and `%y%`: The y-coordinate of the location

`%location_block_y%`, `%loc_b_y%`, `%block_y%`, and `%by%`: The block y-coordinate of the location

`%location_z%`, `%loc_z%`, and `%z%`: The z-coordinate of the location

`%location_block_z%`, `%loc_b_z%`, `%block_z%`, and `%bz%`: The block z-coordinate of the location

`%location_world%`, `%loc_w%`, and `%world%`: The world name of the location

## Load Weight

All configs are loaded alphabetically by default. However, if you have a config that depends on
another one, for example an EcoItems item that's crafted with another EcoItems item, you can add
`load-weight: <weight>`. All configs have a default load weight of 100, and it's loaded in ascending
order, so a config with a load weight of 10 is loaded before a load weight of 20.

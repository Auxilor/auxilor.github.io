---
title: Configuring an Effect
sidebar_position: 1
---

## Example Effect Config
```yaml
id: spawn_particle
args:
  amount: 10
  chance: 25
  particle: soul
triggers: 
  - mine_block
filters:
  blocks:
    - diamond_ore
    - ancient_debris
conditions: []
mutators:
  - id: translate_location
    args:
      add_x: 0.5
      add_y: 0.5
      add_z: 0.5
```

This is an effect that gives you a 10% chance to spawn 10 soul particles in the middle of a block of diamond ore or ancient debris when it's mined

**Any numeric value (integer, decimal) can be a mathematical expression involving placeholders!**

For example, you can specify the chance to be dependent on your y level: as in `chance: 100 -%player_y%` - permanent effects will evaluate the expression on activation, and triggered effects will evaluate it on each trigger. Make sure you only use placeholders with numeric values, as you will get an error otherwise.

## The Sections

**id**: The effect ID. A list of ID's and their corresponding arguments can be found [here](https://plugins.auxilor.io/effects/all-effects)

**args**: The arguments. All (triggerable) effects have optional arguments (see below)

**triggers**: The list of triggers that activate this effect. If the effect is permanent (see next page) then this section is not applicable

**filters**: The list of filters against arguments created by the trigger, ie mine_block will provide blocks to be filtered, melee_attack will provide entities to be filtered.

**conditions**: As well as each effect holder (eg Talisman, Reforge, Enchant) having its own conditions, you can specify a list of effect-specific conditions that work in exactly the same way

**mutators**: Mutate the data sent to the effect: you can change parameters such as the victim, the location, et cetera. A mutator, like an effect or condition, consists of an ID and arguments.

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
  send_cooldown_message: true # If the cooldown message should be sent
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

#### `mana_cost`
The mana cost required to use or activate this effect. **Requires Aurelium Skills.** (defaults to 0)
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

#### `filters_before_mutation`
By default, filters are ran after mutation - set this to true if filters should be ran on the un-mutated data. (defaults to false)
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

#### `point_cost`
-The point cost required to use or activate this effect, looks like this in config:
```yaml
args:
  point_cost:
      cost: 100 * %player_y%
      type: g_souls
```

## Effect Chains
Effect chains are groups of effects that can be executed together. This is very useful if you want to create a chance-based effect with several components: chance is calculated independently on each trigger, so without chains, particles and messages could send when the effects don't activate, and vice-versa.

Effect chains are also useful to re-use more complex logic, via custom arguments that you can specify.
These work like regular placeholders, and you reference them in your chains with `%<id>%`, for example `%size%` if you had a size argument.

You can create a chain in config, under the 'chains' section - which should look like this:

```yaml
chains:
  - id: <chain id>
    effects:
      - <effect 1>
      - <effect 2>
      - <effect 3>
```

**Effects in chains do not need to specify triggers as they are triggered by the run_chain effect**

You can add or remove as many chains as you want. Then, if you want to call a chain, use the `run_chain` effect, like this:

```yaml
id: run_chain
args:
  chance: 50 * (%player_health% / 20) # Example to demonstrate placeholders in config
  cooldown: 2
  chain: <chain id>
triggers: 
  - melee_attack
  - bow_attack
  - trident_attack
filters:
  entities:
    - zombie
    - creeper charged
    - skeleton 
```

Custom arguments can be specified like this:

```yaml
id: run_chain
args:
  chain: <chain id>
  chain_args:
    strength: %player_y% * 100 # You can put anything you want, doesn't only have to be numbers - you can use strings too!
    ... add whichever arguments you use in your chain
```

If you don't want to re-use chains, or if you prefer having them specified directly under the effect, you can use the `run_chain_inline` effect instead, like this:

```yaml
id: run_chain_inline
args:
  every: 3
  chain:
    - effects:
        - <effect 1>
        - <effect 2>
        - <effect 3>
triggers:
  - mine_block
```

Inline chains also support custom arguments, just like regular chains.

Effects in chains run isolated, so applying a mutator to one effect in the chain will apply it only to that effect - however, you can specify a mutator to the parent effect (`run_chain` or `run_chain_inline`) which will be applied to all effects in the chain. The same works for delays, e.g. if an effect in a chain has a delay of 2, it won't hold up other effects down the chain.

Effect chains also support several run types:
- **normal**: All effects in the chain will be ran, one after another
- **cycle**: Only one effect will be ran, and it cycles through each effect each time the chain is ran
- **random**: Only one effect will be ran, chosen at random on each execution

To specify the run type, add the `run-type` argument into config:

```
id: run_chain_inline
args:
  run-type: cycle
  chain:
    - effects:
        - <effect 1>
        - <effect 2>
        - <effect 3>
triggers:
  - alt_click
```

So in this example, effect 1 will be ran the first time, next time effect 2, then effect 3, then back to effect 1 (and so on).

## Shorthand inline chains

It can be feel quite cumbersome to have a lot of inline chains filling up your configs. To fix this, there's a shorthand syntax:

```
triggers:
  - alt_click
effects:
  - <effect 1>
  - <effect 2>
  - <effect 3>
args:
  run-type: random
  chance: 30
... filters, mutators, etc
```

This is an alternative way of configuring your effects; you don't specify a top-level effect ID, instead you specify a list of effects to be called. This can be thought of as being more trigger-centric; multiple triggers to multiple effects straight away, no worrying about the underlying inline chain.

These work exactly like inline chains (they are inline chains), so everything is still supported; run-type, custom arguments, et cetera.

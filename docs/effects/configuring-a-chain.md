---
title: Configuring an Effect Chain
sidebar_position: 2
---
## Effect Chains
### What is an Effect Chain?
Effect chains are groups of effects that can be executed together. This is very useful if you want to create a chance-based effect with several components: chance is calculated independently on each trigger, so without chains, particles and messages could send when the effects don't activate, and vice-versa.

Effects in chains run isolated, so applying a mutator to one effect in the chain will apply it only to that effect - however, you can specify a mutator to the parent effect which will be applied to all
effects in the chain. The same works for delays, e.g. if an effect in a chain has a delay of 2, it won't hold up other effects down the chain.

Effect chains are also useful to re-use more complex logic, via custom arguments that you can specify.
These work like regular placeholders, and you reference them in your chains with `%<id>%`, for example `%size%` if you
had a size argument.

## Reusable Chains

One of the ways to create chains is in "chains.yml" in "/plugins/libreforge". This is great if you want to use chains more than once.

Chains created here are universally accessible. You can use them in Enchants, Skills, Jobs or any other effect holders.

You don't need to specify triggers in your chain, these are handled by the `run_chain` effect (see below).
### The Basic Layout
```yaml
chains:
  - id: <chain id>
    effects:
      - <effect 1>
      - <effect 2>
      - <effect 3>
```
### Chain Config Example
```yaml
  - id: mining_effect
    effects:
      - id: play_sound
        args:
          sound: BLOCK_AMETHYST_CLUSTER_BREAK
          pitch: 0.7
          volume: 10
      - id: spawn_particle
        args:
          particle: soul
          amount: 10
        mutators:
          - id: translate_location
            args:
              add_x: 0.5
              add_y: 0.5
              add_z: 0.5
```

You can add or remove as many chains as you want. Then, if you want to call a chain, use the `run_chain` effect, like
this:

### Calling Your Chain

```yaml
id: run_chain
args:
  chain: mining_effect # The ID of the chain
  chance: 50 * (%player_health% / 20) # Example to demonstrate placeholders in config
  cooldown: 2
triggers:
  - mine_block
filters:
  blocks:
    - diamond_ore
    - emerald_ore
    - ancient_debris
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

## Inline Chains

If you don't want to re-use chains, or if you prefer having them specified directly under the effect, you can specify effects inline instead.
### The Basic Layout
```yaml
effects:
  - <effect 1>
  - <effect 2>
  - <effect 3>
triggers:
  - mine_block
args:
  every: 3 # You can use Optional Args here: https://plugins.auxilor.io/effects/configuring-an-effect#optional-arguments
```

### Example Inline Chain
```yaml
effects:
  - triggers:
      - mine_block
    filters:
      blocks:
        - diamond_ore
        - emerald_ore
        - ancient_debris
    effects:
      - id: play_sound
        args:
          sound: BLOCK_AMETHYST_CLUSTER_BREAK
          pitch: 0.7
          volume: 10
      - id: spawn_particle
        args:
          particle: soul
          amount: 10
        mutators:
          - id: translate_location
            args:
              add_x: 0.5
              add_y: 0.5
              add_z: 0.5
```

Inline chains also support custom arguments, just like regular chains.
## Run Types

Effect chains also support several run types:

- **normal**: All effects in the chain will be ran, sequentially, one after another
- **cycle**: Only one effect will be ran, and it cycles through each effect each time the chain is triggered
- **random**: Only one effect will be ran, chosen at random each time the chain is triggered

To specify the run type, add the `run-type` argument into config:

```yaml
effects:
  - triggers:
      - alt_click
    effects:
      - <effect 1>
      - <effect 2>
      - <effect 3>
    args:
      run-type: random # The run-type from above
      chance: 30
... filters, mutators, etc
```

### Weighted Random Chains

Sometimes you may want certain chain effects to occur more frequently. Such as higher chance of a Iron Ingot being dropped, and a lower chance for a Diamond.

To do this, you must specify a weight within your chain effects:

```yaml
effects:
  - triggers:
      - mine_block
    args:
      run-type: random
    effects:
      - id: drop_item
        args:
          item: diamond
        weight: 10 # The chance of this effect being run within a random chain
      - id: drop_item
        args:
          item: iron_ingot
        weight: 60
```

Weight is calculated as `<weight of element> / <sum of all weights>`.
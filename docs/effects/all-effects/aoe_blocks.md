# `aoe_blocks`
:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Runs effects for all blocks within an area of effect

The list of shapes is found [here](https://plugins.auxilor.io/effects/all-effects/aoe#list-of-shapes)

# Effect Syntax

```yaml
- id: aoe
  args:
    effects: # The effects to run for each block
      - id: break_block
    shape: beam # The shape of the AOE area (see above)
    radius: 3 # The radius of the cone (see above)
    distance: 15 # The length of the beam (see above)
    pierce_blocks: true # If the beam should pass through blocks (see above)
    pierce_entities: true # If the beam should pass through entities (see above)
  ...other config (eg triggers, filters, mutators, etc)
```

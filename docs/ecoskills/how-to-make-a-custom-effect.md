---
title: "How to make a custom effect"
sidebar_position: 5
---

## Default config
The default configs can be found here:

[GitHub](https://github.com/Auxilor/EcoSkills/blob/master/eco-core/core-plugin/src/main/resources/customeffects/)

## How to add custom effects
Custom effects are each config files placed in the `/customeffects/` folder, and you can add or remove them as you please. There's an example config called `_example.yml` to help you out!

### Example Custom Effect Config

```yaml
placeholder: "%level% / 50" # The placeholder to be shown in the description, you can use expressions - eg %level% * 2
description: "&a%placeholder%%&8 chance to get $50 every time you mine a block" # The description to be shown in lore and messages

# The effects of the effect (i.e. the functionality)
# See here: https://plugins.auxilor.io/effects/configuring-an-effect
# Use %level% as a placeholder for the effect level
effects:
  - id: give_money
    args:
      chance: "%level% / 50"
      amount: 50
    triggers:
      - mine_block

# The conditions required for the effect to activate,
# you can use %level% as a placeholder here too
conditions: [ ]
```

## Understanding all the sections

**id**: The id of the effect (lowercase only!)

**placeholder**: The formula to calculate the placeholder shown in the description; you can use mathematical operations, e.g. `%level% / 50`

**description**: The description shown in lore and mesasges, you can use %placeholder% to have the value

Each skill effect has its own effects/conditions, and you can configure them the same way as other plugins of mine: read the guide on how to understand the effect system here:

[Configuring an Effect](https://plugins.auxilor.io/effects/configuring-an-effect)

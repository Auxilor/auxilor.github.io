---
title: "How to make a custom effect"
sidebar_position: 5
---

## Breakdown of customeffects.yml

customeffects.yml is where the configs for all of your own custom skill effects are. It may initially seem daunting however it is very easy to configure and make your own effects.

Simply, customeffects.yml looks like this:

```yaml
effects:
  - <effect 1>
  - <effect 2>
```

It's an array of effect configs - and you can add and remove configs as you please.

## Typical Custom Effect Config

```yaml
- id: gold_touch # The ID of the effect, to be used in skills
  placeholder: "%level%" # The placeholder to be shown in the description, you can use expressions - eg %level% * 2
  description: "&a%placeholder%%&8 chance to get $50 every time you mine a block" # The description to be shown in lore and messages

  effects:
    - id: give_money
      args:
        chance: "%level%"
        amount: 50
      triggers:
        - mine_block

  conditions: [ ]
```

## Understanding all the sections

**id**: The id of the effect (lowercase only!)

**placeholder**: The formula to calculate the placeholder shown in the description; you can use mathematical operations, e.g. `%level% / 50`

**description**: The description shown in lore and mesasges, you can use %placeholder% to have the value

Each skill effect has its own effects/conditions, and you can configure them the same way as other plugins of mine: read the guide on how to understand the effect system here:

[Configuring an Effect](https://plugins.auxilor.io/effects/configuring-an-effect)

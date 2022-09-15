---
title: "How to make a custom action"
sidebar_position: 2
---

## Default config

The default configs can be found here:

[GitHub](https://github.com/Auxilor/Actions/blob/master/eco-core/core-plugin/src/main/resources/actions/)

## How to add actions
Actions are each config files placed in the `/actions/` folder, and you can add or remove them as you please. There's an example config called `_example.yml` to help you out!

## Typical Action Config

```yaml
# If the action should be enabled
enabled: true

# Read https://plugins.auxilor.io/effects/configuring-an-effect
# The effects for the action
effects:
  - id: give_money
    args:
      amount: "0.25 * %victim_level%"
    triggers:
      - kill
    filters:
      not_entities:
        - player


# Read https://plugins.auxilor.io/effects/configuring-a-condition
# The conditions for the action to work
conditions: [ ]
```

### Effects + Conditions

Effects are the actual functionality of the action, and conditions are requirements that a player must meet for the action to activate for them - so you can make it so an action only works for a certain type of player, ie only players that have above a certain amount of playtime, or those that only have below a certain balance.

See this page for how to configure effects:

[Configuring an Effect](https://plugins.auxilor.io/effects/configuring-an-effect)

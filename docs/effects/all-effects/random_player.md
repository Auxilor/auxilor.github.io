# `random_player`
:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Runs effects for a random player on the server

# Effect Syntax
```yaml
- id: random_player
  args:
    effects: # The effects to run for the player
      - id: kick
  ...other config (eg triggers, filters, mutators, etc)
```

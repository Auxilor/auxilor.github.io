# `all_players`
#### Triggered Effect

Runs effects for all players on the server

# Effect Syntax
```yaml
- id: all_players
  args:
    effects: # The effects to run for each player
      - id: damage_victim
        args:
          damage: 2
          true-damage: true
  ...other config (eg triggers, filters, mutators, etc)
```

# `give_xp`
#### Triggered Effect

Gives experience points

# Effect Syntax
```yaml
- id: give_xp
  args:
    amount: 100 # The amount of xp to give
    apply_mending: true # PAPER ONLY - If mending should be applied from the xp
  ...other config (eg triggers, filters, mutators, etc)
```
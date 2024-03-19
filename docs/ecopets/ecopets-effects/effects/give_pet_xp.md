# `give_pet_xp`
#### Triggered Effect

Gives experience points for a certain pet

**Requires EcoPets**

# Example Config
```yaml
- id: give_pet_xp
  args:
    amount: 100 # The amount of xp to give
    pet: ghost_wolf # The pet to give the xp for
  ...other config (eg triggers, filters, mutators, etc)
```
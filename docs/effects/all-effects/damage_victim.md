# `damage_victim`
#### Triggered Effect

Damage the victim

# Example Config
```yaml
- id: damage_victim
  args:
    damage: 10.4 # The damage to deal
    use_source: false # If the player should be marked as the damager, will trigger melee_damage and run listeners: set to false if you don't know what this means
  ...other config (eg triggers, filters, mutators, etc)
```
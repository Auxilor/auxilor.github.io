# `item_durability_multiplier`
#### Permanent Effect

Multiplies item durability (only works if holders are items, e.g. in EcoEnchants, EcoItems, etc.)

Item durability cannot actually be changed, so this functions like unbreaking where items will instead lose durability more quickly / slowly.

# Example Config
```yaml
- id: item_durability_multiplier
  args:
    multiplier: 1.5 # The multiplier for the durability
```

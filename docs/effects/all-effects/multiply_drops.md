# `multiply_drops`
#### Triggered Effect

Multiplies drops (requires a drop trigger)

# Example Config
```yaml
- id: multiply_drops
  args:
    on_items: # (Optional) The drops to multiply
      - diamond
      - emerald
    fortune: 3 # The level of fortune to mimic
  ...other config (eg triggers, filters, mutators, etc)
```
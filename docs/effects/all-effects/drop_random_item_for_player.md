# `drop_random_item`
#### Triggered Effect

Drops a random item at a location for a player (to support Telekinesis)

# Example Config
```yaml
- id: drop_random_item
  args:
    items: # The list of items to choose from
      - diamond
      - ancient_debris
  ...other config (eg triggers, filters, mutators, etc)
```
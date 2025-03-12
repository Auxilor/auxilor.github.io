# `mine_radius_one_deep`
#### Triggered Effect

Mines a square radius around a block, but only one block deep

# Example Config
```yaml
- id: mine_radius_one_deep
  args:
    radius: 1 # The radius around the center block: 1 = 3x3x1, 2 = 5x5x1, etc
    blacklisted_blocks: # The blocks to not mine
      - obsidian
    check_hardness: true # If only blocks with the same (or lower) hardness than the mined block can be broken
    disable_on_sneak: true # If the effect shouldn't activate while sneaking
    whitelist: [] # The only blocks allowed to mine - Remove if you don't want this
    no_corners: false # If the corners shouldn't be broken (plus-sign shape) - Defaults to false
    prevent_trigger: true # Optional, if the mine_block trigger should not be called from this
  ...other config (eg triggers, filters, mutators, etc)
```

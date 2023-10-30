# `mine_vein`

#### Triggered Effect

Mines a vein of blocks

# Example Config

```yaml
- id: mine_vein
  args:
    limit: 10 # The maximum amount of blocks to mine
    blocks: [] # (Optional) The blocks allowed to mine - if this is not specified, only blocks of the same type as the first block will be mined.
    disable_on_sneak: true # If the effect shouldn't activate while sneaking
    prevent_trigger: true # Optional, if the mine_block trigger should not be called from this
    filters: # (Optional) Filters for the blocks
      player_placed: false
  ...other config (eg triggers, filters, mutators, etc)
```

# `multiply_drops`
:::dangerTriggered Effect
:::

Multiplies drops (requires a drop trigger)

# Effect Syntax
```yaml
- id: multiply_drops
  args:
    on_items: # (Optional) The drops to multiply
      - diamond
      - emerald
    fortune: 3 # The level of fortune to mimic (Option 1)
    multiplier: 2 # The drop multiplier (Option 2)
  ...other config (eg triggers, filters, mutators, etc)
```

:::tip  
  
If you're experiencing drops not being multiplied, you may need to change the anti-duplication settings in [config.yml](https://github.com/Auxilor/libreforge/blob/master/core/common/src/main/resources/config.yml) and add blocks to the whitelist.

:::
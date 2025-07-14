# `homing`

#### Triggered Effect

Makes projectiles hone in onto entities (homing arrows / tridents)

# Effect Syntax

```yaml
- id: homing
  args:
      distance: 10 # The distance to hone in from
      targets: # (Optional) The whitelist of entities to target
        - zombie
        - skeleton
    ...other config (eg triggers, filters, mutators, etc)
```

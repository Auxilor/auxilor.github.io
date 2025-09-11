# `add_damage`
:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Adds incoming or outgoing damage from any damage trigger

# Effect Syntax
```yaml
- id: add_damage
  args:
    damage: 2 # The damage to add (or subtract)
  ...other config (eg triggers, filters, mutators, etc)
```

:::tip

To modify MythicMobs damage, use the `take_mythic_damage` trigger.

:::
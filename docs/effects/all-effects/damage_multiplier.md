# `damage_multiplier`
:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Multiplies incoming or outgoing damage from any damage trigger

# Effect Syntax
```yaml
- id: damage_multiplier
  args:
    multiplier: 0.5 # The multiplier
  ...other config (eg triggers, filters, mutators, etc)
```

:::tip

To modify MythicMobs damage, use the `take_mythic_damage` trigger.

:::
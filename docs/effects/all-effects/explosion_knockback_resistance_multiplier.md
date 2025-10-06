# `explosion_knockback_resistance_multiplier`

:::dangerPermanent Effect
This effect is permanent and does not require a trigger.
:::

Multiplies explosion resistance
# Effect Syntax
```yaml
- id: explosion_knockback_resistance_multiplier
  args:
    multiplier: 2 # The multiplier for explosion knockback resistance
```

:::tip

Multiplier of 1.0 = 0 knockback resistance (default)
Multiplier of 2.0 = 1 knockback resistance (maximum)

Values above 2.0 (1 knockback resistance) will not have any additional effect.

:::
# `knockback_resistance_multiplier`
:::dangerPermanent Effect
This effect is permanent and does not require a trigger.
:::

Multiplies knockback resistance

# Effect Syntax
```yaml
- id: knockback_resistance_multiplier
  args:
    multiplier: 2 # The multiplier for knockback resistance
```

:::tip

Multiplier of 1.0 = 0 knockback resistance (default)
Multiplier of 2.0 = 1 knockback resistance (maximum)

Values above 2.0 (1 knockback resistance) will not have any additional effect.

:::
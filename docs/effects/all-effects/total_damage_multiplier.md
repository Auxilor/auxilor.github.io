# `total_damage_multiplier`
#### Triggered Effect

Multiplies all incoming or outgoing damage from any damage trigger

This effect **always** runs at the **end** of the run-order. This allows you to multiply other damage effects, such as damage added by the `add_damage` effect, as well as damage added by other plugins.

Warning: This effect can lead to dealing big damage, in most cases you probably only want to use [`damage_multiplier`](https://plugins.auxilor.io/effects/all-effects/damage_multiplier)
# Example Config
```yaml
- id: total_damage_multiplier
  args:
    multiplier: 0.5 # The multiplier
  ...other config (eg triggers, filters, mutators, etc)
```

## Real-Use Example:

In the below example, the math is as follows:

`((<base_damage> * <damage_multiplier>) + <add_damage>) * <total_damage_multiplier>` or `(( 5 * 1.2 ) + 2 ) * 2` = 16 damage

```yaml
effects:
  - triggers:
      - melee_attack # The base damage is 5 for this example
    effects:
      - id: damage_multiplier
        args:
          multiplier: 1.2
      - id: add_damage
        args:
          damage: 2
      - id: total_damage_multiplier
        args:
          multiplier: 2
```
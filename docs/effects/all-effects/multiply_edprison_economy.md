# `edprison_economy_multiplier`
:::infoRequires:
EdPrison
:::

:::dangerPermanent Effect
This effect is permanent and does not require a trigger.
:::

Multiplies incoming EdPrison economy.
# Effect Syntax
```yaml
- id: edprison_economy_multiplier
  args:
    multiplier: 1.5 # The xp multiplier
    economies: # The economy types to multiply
      - blocks
      - tokens
```

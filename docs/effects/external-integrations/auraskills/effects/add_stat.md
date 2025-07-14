# `add_stat`
:::infoPermanent Effect
This effect is permanent and does not require a trigger.
:::

Adds a value to a specific stat

:::warningRequirements:
EcoSkills || AuraSkills
:::

# Example Config
```yaml
- id: add_stat
  args:
    stat: strength # The name of the stat
    amount: 10 # The amount to add (or subtract, allows negative values)
```

# `add_stat`
:::infoRequires:
EcoSkills || AuraSkills
:::

:::dangerPermanent Effect
This effect is permanent and does not require a trigger.
:::

Adds a value to a specific stat
# Example Config
```yaml
- id: add_stat
  args:
    stat: strength # The name of the stat
    amount: 10 # The amount to add (or subtract, allows negative values)
```

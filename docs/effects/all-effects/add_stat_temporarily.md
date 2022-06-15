# `add_stat_temporarily`
#### Triggered Effect

Adds a value to a specific stat

**Requires EcoSkills**

# Example Config
```yaml
- id: add_stat
  args:
    stat: strength # The name of the stat
    amount: 10 # The amount to add (or subtract, allows negative values)
    duration: 20 # The duration (in ticks)
  ...other config (eg triggers, filters, mutators, etc)
```

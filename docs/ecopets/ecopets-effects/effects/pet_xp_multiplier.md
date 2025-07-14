# `pet_xp_multiplier`
:::dangerPermanent Effect
This effect is permanent and does not require a trigger.
:::

Multiplies pet xp gain

:::infoRequires:
EcoPets
:::

# Example Config
```yaml
- id: pet_xp_multiplier
  args:
    multiplier: 1.5 # The experience multiplier
    pets: # The list of pets to multiply xp for. If removed, it will multiply all pets.
      - tiger
      - golem 
```

# `near_entity`

Requires a player to be within a certain radius of an entity

# Condition Syntax
```yaml
- id: near_entity
  args:
    entities: # The list of entities
      - zombie
      - ecomobs:illusioner
    radius: 25 # The radius
    amount: 5 # (Optional) The minimum amount of listed entities
```

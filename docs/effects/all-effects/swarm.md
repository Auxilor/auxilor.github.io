# `swarm`

#### Triggered Effect

Makes nearby monsters in a certain radius attack the victim

# Effect Syntax

```yaml
- id: swarm
  args:
    radius: 20 # The radius to swarm from
    entities: # (Optional) The list of entities to anger
      - zombie 
  ...other config (eg triggers, filters, mutators, etc)
```

---
title: "How to configure a condition"
---

Like effects, mutators, and entity goals, conditions consist of an ID and arguments.

## Example Condition Config
```yaml
- id: has_permission
  args:
    permission: "ecomc.rank.mvp" # The required permission
    inverse: true # If the player should *not* have the permission
```


As shown in the above example, all conditions additionally have an inverse argument, like this:
```yaml
- id: on_fire
  args:
    inverse: true
```
This will negate the condition, i.e. only be true when the base condition is false.

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

If this condition is for a plugin for items (EcoEnchants, EcoItems, Reforges, Talismans, and EcoArmor) you can also add lore lines to be shown to the player if they don't meet the condition, like this:

```yaml
- id: has_permission
  args:
    permission: "ecomc.rank.mvp"
    not-met-lines:
      - "&cYou need &bMVP&c rank to use &7Crystal Finder"
      - "&cBuy it at &astore.ecomc.net"
```

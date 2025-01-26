# `has_enchant`

Requires a player to have certain enchant(s)
# Example Configs
```yaml
- id: has_enchant
  args:
    enchant: sharpness # The enchant ID 
    slot: mainhand # The slot
```

Multiple enchants and/or slots are supported:
```yaml
- id: has_enchant
  args:
    enchants: # All enchants must be present on a single item in the slot(s).
      - looting # The enchant ID (enchant / enchant:<level> / enchant:<min-max>)
      - knockback:2
      - sharpness:1-3
    slots: # The enchant must be present in ANY specified slot.
      - mainhand
      - 6
      - helmet
```

| Arg               | Example         | Result                                                                 |
| ----------------- | --------------- | ---------------------------------------------------------------------- |
| `enchant`         | `sharpness`     | Any level of the enchantment will satisfy the condition.               |
| `enchant:level`   | `sharpness:1`   | Only the specified enchantment & level will satisfy the condition.     |
| `enchant:min-max` | `sharpness:1-3` | Only enchant levels in the specified range will satisfy the condition. |
The options for slot are `mainhand`, `offhand`, `hands`, `helmet`, `chestplate`, `leggings`, `boots`, `armor`, `any`, or a number from 0-40 (to specify an exact slot).
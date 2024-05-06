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
      - sharpness # The enchant ID (enchant / enchant:<level> / enchant:<min-max>)
    slots: # The enchant must be present in ANY specified slot.
      - mainhand
      - offhand
```

| Arg               | Example         | Result                                                                 |
| ----------------- | --------------- | ---------------------------------------------------------------------- |
| `enchant`         | `sharpness`     | Any level of the enchantment will satisfy the condition.               |
| `enchant:level`   | `sharpness:1`   | Only the specified enchantment & level will satisfy the condition.     |
| `enchant:min-max` | `sharpness:1-3` | Only enchant levels in the specified range will satisfy the condition. |

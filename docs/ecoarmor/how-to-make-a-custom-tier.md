---
title: "How to make a custom tier"
sidebar_position: 5
---

## Typical Tier Config

```yaml
- id: manyullyn
    display: "&d&k!!&r <GRADIENT:f953c6>&lMANYULLYN</GRADIENT:b91d73>&r &d&k!!&r"
    requiresTiers:
      - netherite
    crystal:
      item: end_crystal
      name: "<GRADIENT:f953c6>Manyullyn Upgrade Crystal</GRADIENT:b91d73>"
      craftable: true
      recipe:
        - ecoarmor:upgrade_crystal_netherite
        - enchanted_golden_apple
        - ecoarmor:upgrade_crystal_netherite
        - enchanted_golden_apple
        - ecoarmor:upgrade_crystal_netherite
        - enchanted_golden_apple
        - ecoarmor:upgrade_crystal_netherite
        - enchanted_golden_apple
        - ecoarmor:upgrade_crystal_netherite
      giveAmount: 1
      lore:
        - "&8Drop this onto an armor piece"
        - "&8to set its tier to:"
        - "&d&k!!&r <GRADIENT:f953c6>&lMANYULLYN</GRADIENT:b91d73>&r &d&k!!&r"
        - ''
        - "&8&oRequires the armor to already have Netherite tier"
    properties:
      helmet:
        armor: 3
        toughness: 5
        knockbackResistance: 2
        speedPercentage: 0
        attackSpeedPercentage: 0
        attackDamagePercentage: 0
        attackKnockbackPercentage: 0
      chestplate:
        armor: 8
        toughness: 5
        knockbackResistance: 2
        speedPercentage: 0
        attackSpeedPercentage: 0
        attackDamagePercentage: 0
        attackKnockbackPercentage: 0
      elytra:
        armor: 3
        toughness: 0
        knockbackResistance: 2
        speedPercentage: 0
        attackSpeedPercentage: 0
        attackDamagePercentage: 0
        attackKnockbackPercentage: 0
      leggings:
        armor: 6
        toughness: 5
        knockbackResistance: 2
        speedPercentage: 0
        attackSpeedPercentage: 0
        attackDamagePercentage: 0
        attackKnockbackPercentage: 0
      boots:
        armor: 3
        toughness: 5
        knockbackResistance: 2
        speedPercentage: 0
        attackSpeedPercentage: 0
        attackDamagePercentage: 0
        attackKnockbackPercentage: 0
```

**name** is the name of the tier

**display** is how the tier will show up on armor pieces

**requiresTiers** is a list of tiers that the item can be in order to apply the crystal.

To explain this, here is an example progression:
default -> iron -> diamond -> platinum

For this, iron would require default, diamond would require iron, and platinum would require diamond.

However, if you wanted a progression to look like this:
                --> mythical -\
default --> iron -|         --> elite
                --> ancient  -/

Elite needs **either** mythical **or** ancient to be applied, so it would have this:

```yaml
  requiresTiers:
    - mythical
    - ancient
```

The **crystal** subsection is config related to the upgrade crystal item itself and should be fairly self-explanatory.

**properties** are the actual attributes given to an armor piece with that tier.
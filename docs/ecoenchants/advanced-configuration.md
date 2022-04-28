---
title: "Advanced Configuration"
sidebar_position: 7
---

## Cost Exponent

Cost exponent is a feature of anvils, which can increase or decrease cost based on the original cost.

The formula works as follows:

```yaml
cost = original_cost * exponent^original_cost
```

So, working with an exponent of 1.02 and an original cost of 25:

```yaml
cost = 25 * 1.02^25
```

This is then rounded up to the nearest whole number, so the cost in this example would then become 42.

## Special Enchantment Bias

Special enchantments are designed to be extremely rare, and require a lot of work to make them worth the cost.

Therefore, special enchantments are biased according to a curve.

Let's use Razor for this example.

By default, Razor has 5 Levels. So, to calculate the level to apply, a random number between 0 and 1 is generated. This number is then biased according to a curve, which means that more inputs give a lower output, so for example 0.7 may become 0.1, and only extremely high inputs, such as 0.99 may become 0.6 or higher.

The "band" for each level is calculated by dividing 1 by the amount of levels. This looks like this for an enchantment with 5 levels:

| Level | Range      |
|-------|------------|
| 1     | 0 - 0.2    |
| 2     | 0.21 - 0.4 | 
| 3     | 0.41 - 0.6 |
| 4     | 0.61 - 0.8 |
| 5     | 0.81 - 1   |

Increasing the bias towards 1 will lead to an increased likeliness of low-level enchantments, and lowering the bias towards -1 will lead to an increased likeliness of high-level enchantments.

## Flags

In all enchantment configs, there is this key:

```yaml
general-config:
  flags: []
```

Flags are optional settings that can be set for enchantments if required.

Here is a list of flags currently available:

| Flag                | Description                                              |
|---------------------|----------------------------------------------------------|
| hard-cap-ignore     | If the enchantment should not contribute to the hard cap |
| no-cooldown-message | If no cooldown message should be sent (spell)            |
| no-use-message      | If no use message should be sent (spell)                 |

## Requirements

In all enchantment configs, there are these options:

```yaml
general-config:
  requirements:
    list: []
    not-met-lore: []
```

Requirements are things that the player must meet in order to use the enchantment.

Here is a list of requirements currently available:

| Requirement              | Description                                                                                                                                                      | Format                                         |
|--------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------|
| has-permission           | If a player has a permission                                                                                                                                     | has-permission:<permission>                    |
| placeholder-equals       | If a placeholder for a player equals a certain value. NOTE: placeholder should include % signs                                                                   | placeholder-equals:<placeholder>:<value>       | 
| placeholder-greater-than | If a placeholder for a player should be greater than or equal to a certain value. NOTE: placeholder should include % signs - only numeric placeholders supported | placeholder-greater-than:<placeholder>:<value> |
| placeholder-less-than    | If a placeholder for a player should be less than a certain value. NOTE: placeholder should include % signs - only numeric placeholders supported                | placeholder-less-than:<placeholder>:<value>    |

#### Lore

The lore is the lore that is appended to the item explaining why a certain enchantment is disabled.

This can include placeholders.

## Example:

To make Razor require Enchanting level 20 (from EcoSkills), you would do this:

```yaml
general-config:
  requirements:
    list:
      - 'placeholder-greater-than:%ecoskills_enchanting%:20'
    not-met-lore: 
      - ""
      - "&cYou must have &eEnchanting XX"
      - "&cto use the &dRazor&c enchantment" 
```

In game, that would look like this:

![List of enchants](https://1192817931-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FXwJPPRqRpT7b0ZXxU13J%2Fuploads%2F1fO5WoYHx2hNpkNJuEkK%2Fimage.png?alt=media&token=4ed78851-e1fc-44b5-ae56-5731f233ba72)
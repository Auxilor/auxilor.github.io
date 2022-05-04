---
title: "Skills"
sidebar_position: 3
---

Skills are the means by which effects and stats are upgraded. They are levelled up by completing tasks:

![The farming skil](https://1192817931-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FXwJPPRqRpT7b0ZXxU13J%2Fuploads%2Fw6PcDlcTWC9ee3tK3L1g%2FScreenshot%202021-08-21%20at%2017.55.51.png?alt=media&token=f8373e2d-b2c8-444e-a434-d92f9015cfb8)

| Skill       | Task                                  |
|-------------|---------------------------------------|
| Mining      | Break blocks to earn Mining XP        |
| Combat      | Kill mobs to earn Combat XP           |
| Enchanting  | Enchant items to earn Enchanting XP   |
| Farming     | Harvest crops to earn Farming XP      |
| Woodcutting | Cut down trees to earn Woodcutting XP |
| Fishing     | Fish to earn Fishing XP               |
| Alchemy     | Brew potions to earn Alchemy XP       |
| Armory      | Take damage to earn Armory XP         |
| Exploration | Move and fall to earn Exploration XP  |

## Levelling Up

Skills require experience in order to level up. The experience requirement is completely configurable, but by default it ships the same as Hypixel Skyblock: Level 1 requires 50 XP and level 50 requires 4,000,000.

Every skill has a max level. This is also completely configurable, but is 50 for all skills by default.

Levelling up a skill will level up whichever stats and effects are configured for it: you can make any skill level up any stat and/or effect

Take alchemy for example:

```yaml
level-up-rewards:
  - "crit_chance::2"
  - "wisdom::1"
  - "potionmaster::1"
  - "efficient_brewing::1:10:100"
  - "mystic_resilience::1"
```

This means that every time the player levels up alchemy, they will gain **2 Crit Chance, 1 Wisdom, 1 Level of Potionmaster, 1 Level of Mystic Resilience, and between level 10 and 100 (above max), 1 level of Efficient Brewing**

The config for each reward can look one of two ways:

Simply: `id::number` This would make any stat or effect level up by the specified amount

More complexly, in the case of Efficient Brewing here, `id::number:min:max`

This would make any stat or effect level up by the specified amount, **but only between the minimum and maximum bound of the skill.** So here, above alchemy level 10, but before alchemy level 100, efficient brewing will be levelled up.

You can use this to vary rewards depending on level.

For example, you could make the player get 1 strength up to level 15, and 2 strength above that, which would look like this:

```yaml
- "strength::1:1:14"
- "strength::2:15:100"
```

There are also level up commands, which are a lot simpler:

```yaml
level-commands:
  - "10:eco give %player% 5000"
```

This means that when you reach level 10 in this skill, the command to give you 5000 will be executed. The placeholder %player% will be replaced with the player's name. You can add multiple commands for a level by having multiple entries for that level.

If you don't specify a level, the command will apply to all levels.

## Messages and GUI

By default, players are sent a message when they level up a skill

This is configurable on a by-skill and also on an overall basis. The overall message can be found in config.yml, but I'll focus on the skill-specific part here:

```yaml
rewards-messages:
  1:
    - " &8» &r&f+2 %ecoskills_crit_chance_name%"
    - " &8» &r&f+1 %ecoskills_wisdom_name%"
    - " &8» &r&6Potionmaster %ecoskills_potionmaster_numeral%"
    - " &8» &r&6Mystic Resilience %ecoskills_mystic_resilience_numeral%"
  10:
    - " &8» &r&f+2 %ecoskills_crit_chance_name%"
    - " &8» &r&f+1 %ecoskills_wisdom_name%"
    - " &8» &r&6Potionmaster %ecoskills_potionmaster_numeral%"
    - " &8» &r&6Efficient Brewing %ecoskills_efficient_brewing_numeral%"
    - " &8» &r&6Mystic Resilience %ecoskills_mystic_resilience_numeral%"
```

What this means, is that at level 1 and above (between 1 and 9 here), the first set of messages are sent, and at level 10 and above, the second set are sent. You can set new groups at any level you want in order to make it line up with rewards at different levels.

The same applies to GUI lore:

![The GUI progression item](https://1192817931-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FXwJPPRqRpT7b0ZXxU13J%2Fuploads%2FvjUByWUJWIBW9EuFjvb5%2FScreenshot%202021-08-21%20at%2018.26.35.png?alt=media&token=ec17aadd-99cd-424d-97b0-4033cb79ade9)

Which can be formatted in much the same way:

```yaml
rewards-gui-lore:
  1:
    - " &8» &r&f+2 %ecoskills_crit_chance_name%"
    - " &8» &r&f+1 %ecoskills_wisdom_name%"
    - " &8» &r&6Potionmaster %ecoskills_potionmaster_numeral%"
    - " &8» &r&6Mystic Resilience %ecoskills_mystic_resilience_numeral%"
  10:
    - " &8» &r&f+2 %ecoskills_crit_chance_name%"
    - " &8» &r&f+1 %ecoskills_wisdom_name%"
    - " &8» &r&6Potionmaster %ecoskills_potionmaster_numeral%"
    - " &8» &r&6Efficient Brewing %ecoskills_efficient_brewing_numeral%"
    - " &8» &r&6Mystic Resilience %ecoskills_mystic_resilience_numeral%"
```
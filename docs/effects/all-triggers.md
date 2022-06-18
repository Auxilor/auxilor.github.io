---
title: "All Triggers"
sidebar_position: 5
---

Triggered effects require a trigger, permanent effects do not support triggers and instead always apply when the effect is active

Triggered effects also produce a value, which is used in EcoPets for levelling.

| ID | Description | Value Provided |
| --- | --- | --- |
| `alt_click` | Right Click on most items, Left Click on those that have a default right click functionality | 1 |
| `bow_attack` | Shoot an entity with a bow and arrow (or crossbow) | The damage dealt |
| `fall_damage` | Take fall damage | The damage taken |
| `heal` | Regain health | The health regained |
| `jump` | Jump (press space) | 1 |
| `kill` | Kill a player or entity | The victim's max health |
| `lose_hunger` | Lose hunger | The hunger lost |
| `melee_attack` | Injure an entity with a melee attack | The damage dealt |
| `mine_block` | Mine a block | 1 |
| `projectile_hit` | Hit a location with a projectile (arrow or trident) | 1 |
| `projectile_launch` | Launch a projectile (arrow or trident) | 1 |
| `take_damage` | Take damage from any source | The damage taken |
| `take_entity_damage` | Take damage from an entity or player | The damage taken |
| `trident_attack` | Injure an entity with a thrown trident | The damage dealt |
| `gain_xp` | Gain experience points | The xp gained |
| `shield_block` | Block an attack with a shield | The damage blocked |
| `gain_skill_xp` | Gain skill experience points **Requires EcoSkills** | The experience gained |
| `block_item_drop` | Drop items from a block on mine | 1 |
| `entity_item_drop` | Drop items from an entity on death | 1 |
| `gain_hunger` | Gain hunger points | The hunger gained |
| `move` | Move at all: looking around and moving blocks | The distance moved |
| `swap_hands` | Press the swap hands button (F by default) | 1 |
| `swing` | Swing an item, hand, or weapon **Requires Paper** | 1 |
| `toggle_flight` | Change flight state | 1 | 
| `toggle_sneak` | Change sneak state | 1 |
| `toggle_sprint` | Change sprint state | 1 |
| `level_up_skill` | Level up a skill **Requires EcoSkills** | The new level |
| `potion_effect` | Gain a potion effect | 1 |
| `lose_potion_effect` | Lose a potion effect | 1 |
| `death` | Die from any cause | 1 |
| `mine_block_progress` | Damage a block | 1 |
| `item_break` | Break any item in your inventory (durability) | 1 |
| `bite` | Get a fish to bite on your rod | 1 |
| `cast_rod` | Cast a fishing line | 1 |
| `static_%interval%` | Run every x ticks, eg `static_20` would run every second | 1 |
| `consume` | Consume an item | 1 |
| `gain_pet_xp` | Gain pet experience points **Requires EcoPets** | The experience gained |
| `level_up_pet` | Level up a pet **Requires EcoPets** | The new level |
| `craft` | Craft an item | 1 |
| `damage_item` | Damage an item | The damage |
| `enchant_item` | Enchant an item | The xp cost |
| `enchant_special` | Enchant an item with a special enchantment **Requires EcoEnchants** | The xp cost |
| `kill_boss` | Kill a boss **Requires EcoBosses** | The bosses max health |
| `spawn_boss` | Spawn a boss **Requires EcoBosses** | 1 |

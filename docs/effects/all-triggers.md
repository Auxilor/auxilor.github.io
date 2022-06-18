---
title: "All Triggers"
sidebar_position: 5
---

Triggered effects require a trigger, permanent effects do not support triggers and instead always apply when the effect is active

Triggered effects also produce a value, which is used in EcoPets for levelling.

| ID | Description | Value Provided |
| --- | --- | --- |
| `alt_click` | Triggered when using Right Click on most items, Left Click on those that have a default right click functionality | 1 |
| `bow_attack` | Triggered when shooting an entity with a bow and arrow (or crossbow) | The damage dealt |
| `fall_damage` | Triggered when taking fall damage | The damage taken |
| `heal` | Triggered when regaining health | The health regained |
| `jump` | Triggered when Jumping (pressing space) | 1 |
| `kill` | Triggered when a player kills a player or entity | The victim's max health |
| `lose_hunger` | Triggered when losing hunger | The hunger lost |
| `melee_attack` | Triggered when injuring an entity with a melee attack | The damage dealt |
| `mine_block` | Triggered when mining a block | 1 |
| `projectile_hit` | Triggered when hitting a block or an entity with a projectile (arrow, trident, splash potion, egg, snowball) | 1 |
| `projectile_launch` | Triggered when launching a projectile (arrow, trident, splash potion, egg, snowball) | 1 |
| `take_damage` | Triggered when taking damage from any source | The damage taken |
| `take_entity_damage` | Triggered when taking damage from an entity or player | The damage taken |
| `trident_attack` | Triggered on injuring an entity with a thrown trident | The damage dealt |
| `gain_xp` | Triggered when gaining experience points | The xp gained |
| `shield_block` | Triggered when blocking an attack with a shield | The damage blocked |
| `gain_skill_xp` | Triggered when gaining skill experience points **Requires EcoSkills** | The experience gained |
| `block_item_drop` | Triggered when a mined block drops loot | 1 |
| `entity_item_drop` | Triggered when a killed entity drops loot | 1 |
| `gain_hunger` | Triggered when gaining hunger points | The hunger gained |
| `move` | Triggered on all movement: looking around, walking | The distance moved |
| `swap_hands` | Triggered when swapping items in hands (F by default) | 1 |
| `swing` | Triggered when swining an item, hand or weapon **Requires Paper** | 1 |
| `toggle_flight` | Triggered when chainging the flight state | 1 | 
| `toggle_sneak` | Triggered when chainging the sneak state | 1 |
| `toggle_sprint` | Triggered when chainging the sprint state | 1 |
| `level_up_skill` | Triggered when levelling up **Requires EcoSkills** | The new level |
| `potion_effect` | Triggered when gaining a potion effect | 1 |
| `lose_potion_effect` | Triggered when losing a potion effect | 1 |
| `death` | Triggered on death from any sources | 1 |
| `mine_block_progress` | Triggered when damaging a block | 1 |
| `item_break` | Triggered when breaking any item in your inventory (durability) | 1 |
| `bite` | Triggered when a fish bites on your rod | 1 |
| `cast_rod` | Triggered when casting a fishing line | 1 |
| `static_%interval%` | Run every x ticks, eg `static_20` would run every second | 1 |
| `consume` | Triggered on item consumption | 1 |
| `gain_pet_xp` | Triggered when gaining pet experience points **Requires EcoPets** | The experience gained |
| `level_up_pet` | Triggered when levelling up a pet **Requires EcoPets** | The new level |
| `craft` | Triggered when crafting an item | 1 |
| `damage_item` | Triggered when damaging an item | The damage |
| `enchant_item` | Triggered when ehcnahting an item | The xp cost |
| `enchant_special` | Triggered when enchanting an item with a special enchantment **Requires EcoEnchants** | The xp cost |
| `kill_boss` | Triggered when killing a boss **Requires EcoBosses** | The bosses max health |
| `spawn_boss` | Triggered when spawning a boss **Requires EcoBosses** | 1 |

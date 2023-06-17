---
title: "All Triggers"
sidebar_position: 6
---

Triggered effects require a trigger, permanent effects do not support triggers and instead always apply when the effect
is active

Triggered effects also produce a value, which is used in EcoPets for levelling.

| ID                     | Description                                                                                                       | Value Provided                    |
|------------------------|-------------------------------------------------------------------------------------------------------------------|-----------------------------------|
| `alt_click`            | Triggered when using Right Click on most items, Left Click on those that have a default right click functionality | 1                                 |
| `bite`                 | Triggered when a fish bites on your rod                                                                           | 1                                 |
| `block_item_drop`      | Triggered when a mined block drops loot                                                                           | The amount of items dropped       |
| `bow_attack`           | Triggered when shooting an entity with a bow and arrow (or crossbow)                                              | The damage dealt                  |
| `cast_rod`             | Triggered when casting a fishing line                                                                             | 1                                 |
| `catch_entity`         | Triggered when hooking onto an entity with a fishing rod                                                          | 1                                 |
| `catch_fish`           | Triggered when catching a fish                                                                                    | The experience dropped            |
| `catch_fish_fail`      | Triggered when failing to catch a fish                                                                            | 1                                 |
| `hook_in_ground`       | Triggered when a fishing rod hook hits the ground                                                                 | 1                                 |
| `reel_in`              | Triggered when reeling in a fishing rod                                                                           | 1                                 |
| `consume`              | Triggered on item consumption                                                                                     | 1                                 |
| `craft`                | Triggered when crafting an item                                                                                   | 1                                 |
| `damage_item`          | Triggered when damaging an item                                                                                   | The damage                        |
| `death`                | Triggered on death from any sources                                                                               | 1                                 |
| `enchant_item`         | Triggered when enchanting an item                                                                                 | The xp cost                       |
| `enchant_%type%`       | Triggered when enchanting an item with a certain type of enchantment **Requires EcoEnchants**                     | The xp cost                       |
| `entity_item_drop`     | Triggered when a killed entity drops loot                                                                         | The amount of items dropped       |
| `fall_damage`          | Triggered when taking fall damage                                                                                 | The damage taken                  |
| `gain_hunger`          | Triggered when gaining hunger points                                                                              | The hunger gained                 |
| `gain_pet_xp`          | Triggered when gaining pet experience points **Requires EcoPets**                                                 | The experience gained             |
| `gain_skill_xp`        | Triggered when gaining skill experience points **Requires EcoSkills**                                             | The experience gained             |
| `gain_xp`              | Triggered when gaining experience points                                                                          | The xp gained                     |
| `heal`                 | Triggered when regaining health                                                                                   | The health regained               |
| `item_break`           | Triggered when breaking any item in your inventory (durability)                                                   | 1                                 |
| `jump`                 | Triggered when Jumping (pressing space)                                                                           | 1                                 |
| `kill`                 | Triggered when a player kills a player or entity                                                                  | The victim's max health           |
| `kill_boss`            | Triggered when killing a boss **Requires EcoBosses**                                                              | The bosses max health             |
| `level_up_pet`         | Triggered when levelling up a pet **Requires EcoPets**                                                            | The new level                     |
| `level_up_skill`       | Triggered when levelling up **Requires EcoSkills**                                                                | The new level                     |
| `lose_hunger`          | Triggered when losing hunger                                                                                      | The hunger lost                   |
| `lose_potion_effect`   | Triggered when losing a potion effect                                                                             | 1                                 |
| `melee_attack`         | Triggered when injuring an entity with a melee attack                                                             | The damage dealt                  |
| `mine_block`           | Triggered when mining a block                                                                                     | 1                                 |
| `mine_block_progress`  | Triggered when damaging a block                                                                                   | 1                                 |
| `move`                 | Triggered on all movement: looking around, walking                                                                | The distance moved                |
| `potion_effect`        | Triggered when gaining a potion effect                                                                            | 1                                 |
| `projectile_hit`       | Triggered when hitting a block or an entity with a projectile (arrow, trident, splash potion, egg, snowball)      | 1                                 |
| `projectile_launch`    | Triggered when launching a projectile (arrow, trident, splash potion, egg, snowball)                              | 1                                 |
| `shield_block`         | Triggered when blocking an attack with a shield                                                                   | The damage blocked                |
| `spawn_boss`           | Triggered when spawning a boss **Requires EcoBosses**                                                             | 1                                 |
| `static_%interval%`    | Run every x ticks, eg `static_20` would run every second                                                          | 1                                 |
| `swap_hands`           | Triggered when swapping items in hands (F by default)                                                             | 1                                 |
| `swing`                | Triggered when swining an item, hand or weapon **Requires Paper**                                                 | 1                                 |
| `take_damage`          | Triggered when taking damage from any source                                                                      | The damage taken                  |
| `take_entity_damage`   | Triggered when taking damage from an entity or player                                                             | The damage taken                  |
| `toggle_flight`        | Triggered when chainging the flight state                                                                         | 1                                 |
| `toggle_sneak`         | Triggered when chainging the sneak state                                                                          | 1                                 |
| `toggle_sprint`        | Triggered when chainging the sprint state                                                                         | 1                                 |
| `trident_attack`       | Triggered on injuring an entity with a thrown trident                                                             | The damage dealt                  |
| `win_raid`             | Triggered when a player wins a raid                                                                               | The level of bad omen             |
| `jobs_level_up`        | Triggered when levelling up a job **Requires Jobs Reborn**                                                        | The new level                     |
| `brew`                 | Triggered when brewing a potion in a brewing stand                                                                | 1                                 |
| `brew_ingredient`      | Same as `brew`, but passes the ingredient as the item                                                             | 1                                 |
| `smelt`                | Triggered when smelting an item in a furnace                                                                      | 1                                 |
| `place_block`          | Triggered when placing a block                                                                                    | 1                                 |
| `level_up_job`         | Triggered when levelling up a job **Requires EcoJobs**                                                            | The new level                     |
| `gain_job_xp`          | Triggered when gaining job experience points **Requires EcoJobs**                                                 | The experience gained             |
| `breed`                | Triggered when breeding entities together                                                                         | The experience received           |
| `join_job`             | Triggered when joining a job **Requires EcoJobs**                                                                 | The job level                     |
| `leave_job`            | Triggered when leaving a job **Requires EcoJobs**                                                                 | The job level                     |
| `sell_item`            | Triggered when selling an item in a shop                                                                          | The price                         |
| `headshot`             | Triggered when hitting an enemy with a projectile in the head                                                     | The damage dealt                  |
| `scyther_auto_collect` | Triggered when autocollecting crops with a scyther hoe **Requires Scyther**                                       | 1                                 |
| `scyther_auto_sell`    | Triggered when autoselling crops with a scyther hoe **Requires Scyther**                                          | 1                                 |
| `join`                 | Triggered when joining the server                                                                                 | 1                                 |
| `leave`                | Triggered when leaving the server                                                                                 | 1                                 |
| `respawn`              | Triggered when respawning                                                                                         | 1                                 |
| `level_up_xp`          | Triggered when levelling up XP                                                                                    | The new level                     |
| `change_world`         | Triggered when changing world                                                                                     | 1                                 |
| `change_armor`         | Triggered when changing armor                                                                                     | 1                                 |
| `hold_item`            | Triggered when changing your held item                                                                            | 1                                 |
| `send_message`         | Triggered when sending a message                                                                                  | 1                                 |
| `pick_up_item`         | Triggered when picking up an item                                                                                 | The amount of items               |
| `drop_item`            | Triggered when dropping an item                                                                                   | The amount of items               |
| `entity_target`        | Triggered when an entity targets the player                                                                       | 1                                 |
| `enter_bed`            | Triggered when entering a bed                                                                                     | 1                                 |
| `leave_bed`            | Triggered when leaving a bed                                                                                      | 1                                 |
| `villager_trade`       | Triggered when trading with a villager **Requires Paper**                                                         | The experience the villager gains |
| `fill_bucket`          | Triggered when filling a bucket                                                                                   | 1                                 |
| `empty_bucket`         | Triggered when emptying a bucket                                                                                  | 1                                 |
| `shear_entity`         | Triggered when shearing an entity                                                                                 | 1                                 |
| `enable`               | Triggered when an item / enchant / etc enables                                                                    | 1                                 |
| `disable`              | Triggered when an item / enchant / etc disables                                                                   | 1                                 |
| `teleport`             | Triggered when teleporting                                                                                        | 1                                 |
| `run_command`          | Triggered when running a command                                                                                  | 1                                 |
| `click_entity`         | Triggered when right-clicking on an entity                                                                        | 1                                 |
| `enter_region`         | Triggered when entering a region **Requires WorldGuard**                                                          | 1                                 |
| `leave_region`         | Triggered when leaving a region **Requires WorldGuard**                                                           | 1                                 |
| `level_up_item`        | Triggered when levelling up an item                                                                               | The new item level                |
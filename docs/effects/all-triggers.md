---
title: "All Triggers"
sidebar_position: 7
---

Triggered effects require a trigger, permanent effects do not support triggers and instead always apply when the effect is active

Triggered effects also produce a value, which can be referenced with [their placeholders](https://plugins.auxilor.io/effects/configuring-an-effect#placeholders),
and are used in plugins like EcoSkills, EcoPets, EcoJobs (etc) for levelling.

| ID                              | Description                                                                                                       | Value Provided                                |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| `alt_click`                     | Triggered when using Right Click on most items, Left Click on those that have a default right click functionality | 1                                             |
| `beacon_effect`                 | Triggered when a player gains effects from a beacon **Requires Paper**                                            | 1                                             |
| `bite`                          | Triggered when a fish bites on your rod                                                                           | 1                                             |
| `block_item_drop`               | Triggered when a mined block drops loot                                                                           | The amount of items dropped                   |
| `bow_attack`                    | Triggered when shooting an entity with a bow and arrow (or crossbow)                                              | The damage dealt                              |
| `breed`                         | Triggered when breeding entities together                                                                         | The experience received                       |
| `brew`                          | Triggered when brewing a potion in a brewing stand                                                                | 1                                             |
| `brew_ingredient`               | Same as `brew`, but passes the ingredient as the item                                                             | 1                                             |
| `buy_item`                      | Triggered when buying an item in a shop **Requires EcoShop**                                                      | The price                                     |
| `cast_rod`                      | Triggered when casting a fishing line                                                                             | 1                                             |
| `catch_entity`                  | Triggered when hooking onto an entity with a fishing rod                                                          | 1                                             |
| `catch_fish`                    | Triggered when catching a fish                                                                                    | The experience dropped                        |
| `catch_fish_fail`               | Triggered when failing to catch a fish                                                                            | 1                                             |
| `change_armor`                  | Triggered when changing armor                                                                                     | 1                                             |
| `change_chunk`                  | Triggered when changing chunk                                                                                     | 1                                             |
| `change_world`                  | Triggered when changing world                                                                                     | 1                                             |
| `claim_battlepass_reward`       | Triggered when claiming a battlepass reward **Requires xBattlepass**                                              | 1                                             |
| `click_block`                   | Triggered when right-clicking on a block                                                                          | 1                                             |
| `click_entity`                  | Triggered when right-clicking on an entity                                                                        | 1                                             |
| `collect_envoy`                 | Triggered when collecting an envoy crate **Requires AxEnvoy**                                                     | 1                                             |
| `complete_advancement`          | Triggered when completing an advancement                                                                          | 1                                             |
| `complete_battlepass_task`      | Triggered when completing a battlepass task **Requires xBattlepass**                                              | 1                                             |
| `complete_quest`                | Triggered when completing a quest **Requires EcoQuests**                                                          | 1                                             |
| `complete_task`                 | Triggered when completing a task **Requires EcoQuests**                                                           | 1                                             |
| `consume`                       | Triggered on item consumption                                                                                     | 1                                             |
| `craft`                         | Triggered when crafting an item                                                                                   | The amount of items crafted                   |
| `damage_item`                   | Triggered when damaging an item                                                                                   | The damage                                    |
| `death`                         | Triggered on death from any sources                                                                               | 1                                             |
| `deploy_elytra`                 | Triggered when the player starts elytra gliding                                                                   | 1                                             |
| `disable`                       | Triggered when an item / enchant / etc disables                                                                   | 1                                             |
| `drop_item`                     | Triggered when dropping an item                                                                                   | The amount of items                           |
| `elytra_boost`                  | Triggered when a player boosts an elytra **Requires Paper**                                                       | 1                                             |
| `empty_bucket`                  | Triggered when emptying a bucket                                                                                  | 1                                             |
| `enable`                        | Triggered when an item / enchant / etc enables                                                                    | 1                                             |
| `enchant_<type>`                | Triggered when enchanting an item with a certain type of enchantment **Requires EcoEnchants**                     | The xp cost                                   |
| `enchant_item`                  | Triggered when enchanting an item                                                                                 | The xp cost                                   |
| `enter_bed`                     | Triggered when entering a bed                                                                                     | 1                                             |
| `enter_region`                  | Triggered when entering a region **Requires WorldGuard**                                                          | 1                                             |
| `entity_break_door`             | Triggered when an entity breaks a door                                                                            | 1                                             |
| `entity_catch_fire_from_block`  | Triggered when an entity catches fire from a block                                                                | 1                                             |
| `entity_catch_fire_from_entity` | Triggered when an entity catches fire from an entity                                                              | 1                                             |
| `entity_damage`                 | Triggered when an entity takes damage                                                                             | The damage taken                              |
| `entity_damage_by_entity`       | Triggered when an entity takes damage from another entity                                                         | The damage taken                              |
| `entity_death`                  | Triggered when an entity dies                                                                                     | 1                                             |
| `entity_item_drop`              | Triggered when a killed entity drops loot                                                                         | The amount of items dropped                   |
| `entity_spawn`                  | Triggered when an entity spawns                                                                                   | 1                                             |
| `entity_target`                 | Triggered when an entity targets another entity                                                                   | 1                                             |
| `entity_teleport`               | Triggered when an entity teleports                                                                                | 1                                             |
| `fall_damage`                   | Triggered when taking fall damage                                                                                 | The damage taken                              |
| `fill_bucket`                   | Triggered when filling a bucket                                                                                   | 1                                             |
| `gain_battlepass_xp`            | Triggered when gaining battlepass XP **Requires xBattlepass**                                                     | The experience gained                         |
| `gain_hunger`                   | Triggered when gaining hunger points                                                                              | The hunger gained                             |
| `gain_job_xp`                   | Triggered when gaining job experience points **Requires EcoJobs**                                                 | The experience gained                         |
| `gain_mcmmo_xp`                 | Triggered when gaining McMMO xp **Requires McMMO**                                                                | The xp gained                                 |
| `gain_pet_xp`                   | Triggered when gaining pet experience points **Requires EcoPets**                                                 | The experience gained                         |
| `gain_skill_xp`                 | Triggered when gaining skill experience points **Requires EcoSkills**                                             | The experience gained                         |
| `gain_task_xp`                  | Triggered when gaining task XP **Requires EcoQuests**                                                             | The experience gained                         |
| `gain_xp`                       | Triggered when gaining experience points                                                                          | The xp gained                                 |
| `global_static_%interval%`      | Run every x ticks for the server, eg `global_static_20` would run every second                                    | 1                                             |
| `headshot`                      | Triggered when hitting an enemy with a projectile in the head                                                     | The damage dealt                              |
| `heal`                          | Triggered when regaining health                                                                                   | The health regained                           |
| `hold_item`                     | Triggered when changing your held item                                                                            | 1                                             |
| `hook_in_ground`                | Triggered when a fishing rod hook hits the ground                                                                 | 1                                             |
| `inscribe`                      | Triggered when inscribing a scroll **Requires EcoScrolls**                                                        | 1                                             |
| `item_break`                    | Triggered when breaking any item in your inventory (durability)                                                   | 1                                             |
| `jobs_level_up`                 | Triggered when levelling up a job **Requires Jobs Reborn**                                                        | The new level                                 |
| `join`                          | Triggered when joining the server                                                                                 | 1                                             |
| `join_job`                      | Triggered when joining a job **Requires EcoJobs**                                                                 | The job level                                 |
| `jump`                          | Triggered when Jumping (pressing space)                                                                           | 1                                             |
| `kill`                          | Triggered when a player kills a player or entity                                                                  | The victim's max health                       |
| `leash_entity`                  | Triggered when leashing an entity                                                                                 | 1                                             |
| `leave`                         | Triggered when leaving the server                                                                                 | 1                                             |
| `leave_bed`                     | Triggered when leaving a bed                                                                                      | 1                                             |
| `leave_job`                     | Triggered when leaving a job **Requires EcoJobs**                                                                 | The job level                                 |
| `leave_region`                  | Triggered when leaving a region **Requires WorldGuard**                                                           | 1                                             |
| `left_click_npc`                | Triggered when left-clicking an NPC **Requires Citizens \|\| FancyNpcs**                                          | 1                                             |
| `level_down_mcmmo`              | Triggered when levelling down McMMO skill **Requires McMMO**                                                      | The new level                                 |
| `level_up_item`                 | Triggered when levelling up an item                                                                               | The new item level                            |
| `level_up_job`                  | Triggered when levelling up a job **Requires EcoJobs**                                                            | The new level                                 |
| `level_up_mcmmo`                | Triggered when levelling up McMMO skill **Requires McMMO**                                                        | The new level                                 |
| `level_up_pet`                  | Triggered when levelling up a pet **Requires EcoPets**                                                            | The new level                                 |
| `level_up_skill`                | Triggered when levelling up **Requires EcoSkills**                                                                | The new level                                 |
| `level_up_xp`                   | Triggered when levelling up XP                                                                                    | The new level                                 |
| `lose_hunger`                   | Triggered when losing hunger                                                                                      | The hunger lost                               |
| `lose_potion_effect`            | Triggered when losing a potion effect                                                                             | 1                                             |
| `mcmmo_ability_activate`        | Triggered when an McMMO ability is activated **Requires McMMO**                                                   | 1                                             |
| `mcmmo_ability_deactivate`      | Triggered when an McMMO ability is deactivated **Requires McMMO**                                                 | 1                                             |
| `melee_attack`                  | Triggered when injuring an entity with a melee attack                                                             | The damage dealt                              |
| `mine_block`                    | Triggered when mining a block                                                                                     | 1                                             |
| `mine_block_progress`           | Triggered when damaging a block                                                                                   | 1                                             |
| `move`                          | Triggered on all movement: looking around, walking                                                                | The distance moved                            |
| `pick_up_item`                  | Triggered when picking up an item                                                                                 | The amount of items                           |
| `place_block`                   | Triggered when placing a block                                                                                    | 1                                             |
| `player_trade`                  | Triggered when trading with a player **Required AxTrade**                                                         | The total amount of items traded              |
| `potion_effect`                 | Triggered when gaining a potion effect                                                                            | 1                                             |
| `projectile_hit`                | Triggered when hitting a block or an entity with a projectile (arrow, trident, splash potion, egg, snowball)      | 1                                             |
| `projectile_launch`             | Triggered when launching a projectile (arrow, trident, splash potion, egg, snowball)                              | 1                                             |
| `reel_in`                       | Triggered when reeling in a fishing rod                                                                           | 1                                             |
| `regen_magic`                   | Triggered when regenerating magic **Requires EcoSkills**                                                          | 1                                             |
| `register_vote`                 | Triggered when a player votes for the server **Requires NuVotifier**                                              | 1                                             |
| `respawn`                       | Triggered when respawning                                                                                         | 1                                             |
| `right_click_npc`               | Triggered when right-clicking an NPC **Requires Citizens \|\| FancyNpcs**                                         | 1                                             |
| `run_command`                   | Triggered when running a command                                                                                  | 1                                             |
| `scyther_auto_collect`          | Triggered when autocollecting crops with a scyther hoe **Requires Scyther**                                       | 1                                             |
| `scyther_auto_sell`             | Triggered when autoselling crops with a scyther hoe **Requires Scyther**                                          | 1                                             |
| `sell_item`                     | Triggered when selling an item in a shop                                                                          | The price                                     |
| `send_message`                  | Triggered when sending a message                                                                                  | 1                                             |
| `shear_entity`                  | Triggered when shearing an entity                                                                                 | 1                                             |
| `shield_block`                  | Triggered when blocking an attack with a shield                                                                   | The damage blocked                            |
| `shoot_bow`                     | Triggered when shooting a bow                                                                                     | The force the bow was shot at between 0 and 1 |
| `smelt`                         | Triggered when smelting an item in a furnace                                                                      | The amount of items smelted                   |
| `smith_item`                    | Triggered when smithing an item in a smithing table                                                               | 1                                             |
| `start_quest`                   | Triggered when starting a quest **Requires EcoQuests**                                                            | 1                                             |
| `static_%interval%`             | Run every x ticks, eg `static_20` would run every second                                                          | 1                                             |
| `swap_hands`                    | Triggered when swapping items in hands (F by default)                                                             | 1                                             |
| `swing`                         | Triggered when swinging an item, hand or weapon **Requires Paper**                                                | 1                                             |
| `take_damage`                   | Triggered when taking damage from any source                                                                      | The damage taken                              |
| `take_entity_damage`            | Triggered when taking damage from an entity or player                                                             | The damage taken                              |
| `tame_animal`                   | Triggered when taming an animal                                                                                   | 1                                             |
| `teleport`                      | Triggered when teleporting                                                                                        | 1                                             |
| `tier_up_battlepass`            | Triggered when tiering up the battlepass **Requires xBattlepass**                                                 | The new level                                 |
| `toggle_flight`                 | Triggered when changing the flight state                                                                          | 1                                             |
| `toggle_sneak`                  | Triggered when changing the sneak state                                                                           | 1                                             |
| `toggle_sprint`                 | Triggered when changing the sprint state                                                                          | 1                                             |
| `trident_attack`                | Triggered on injuring an entity with a thrown trident **Requires Paper**                                          | The damage dealt                              |
| `try_inscribe`                  | Triggered when attempting to inscribe a scroll **Requires EcoScrolls**                                            | 1                                             |
| `villager_trade`                | Triggered when trading with a villager **Requires Paper**                                                         | The experience the villager gains             |
| `win_raid`                      | Triggered when a player wins a raid                                                                               | The level of bad omen                         |

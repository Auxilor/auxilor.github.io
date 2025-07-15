---
title: All Triggers
sidebar_position: 7
tags:
  - triggers
---
Triggered effects require a trigger, these are the events/actions that cause the effects to run.

Triggers can also produce a `value`, and some produce an `alt-value`, you can reference these using their to scale multipliers, level up EcoSkills/Jobs/Pets, or send messages in chat.

| Placeholder           | Value                               | Aliases                                                                    |
| --------------------- | ----------------------------------- | -------------------------------------------------------------------------- |
| `%trigger_value%`     | The value passed by the trigger     | `%triggervalue%`, `%trigger%`, `%value%`, `%tv%`, `%v%`, `%t%`             |
| `%alt_trigger_value%` | The alt-value passed by the trigger | `%alttriggervalue%`, `%alttrigger%`, `%altvalue%`, `%atv%`, `%av%`, `%at%` |
## Internal Triggers

| ID                              | Description                                                                                                       | Value(s)                                               |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| `alt_click`                     | Triggered when using Right Click on most items, Left Click on those that have a default right click functionality | `value: 1`                                             |
| `beacon_effect`                 | Triggered when a player gains effects from a beacon **Requires Paper**                                            | `value: 1`                                             |
| `bite`                          | Triggered when a fish bites on your rod                                                                           | `value: 1`                                             |
| `block_item_drop`               | Triggered when a mined block drops loot                                                                           | `value: The amount of items dropped`                   |
| `bonemeal_crop`                 | Triggered when using bonemeal on a crop **Supports CustomCrops**                                                  | `value: 1`                                             |
| `bow_attack`                    | Triggered when shooting an entity with a bow and arrow (or crossbow)                                              | `value: The damage dealt`                              |
| `breed`                         | Triggered when breeding entities together                                                                         | `value: The experience received`                       |
| `brew`                          | Triggered when brewing a potion in a brewing stand                                                                | `value: 1`                                             |
| `brew_ingredient`               | Same as `brew`, but passes the ingredient as the item                                                             | `value: 1`                                             |
| `cast_rod`                      | Triggered when casting a fishing line                                                                             | `value: 1`                                             |
| `catch_entity`                  | Triggered when hooking onto an entity with a fishing rod                                                          | `value: 1`                                             |
| `catch_fish`                    | Triggered when catching a fish                                                                                    | `value: The experience dropped`                        |
| `catch_fish_fail`               | Triggered when failing to catch a fish                                                                            | `value: 1`                                             |
| `change_armor`                  | Triggered when changing armor                                                                                     | `value: 1`                                             |
| `change_chunk`                  | Triggered when changing chunk                                                                                     | `value: 1`                                             |
| `change_world`                  | Triggered when changing world                                                                                     | `value: 1`                                             |
| `click_block`                   | Triggered when right-clicking on a block                                                                          | `value: 1`                                             |
| `click_entity`                  | Triggered when right-clicking on an entity                                                                        | `value: 1`                                             |
| `complete_advancement`          | Triggered when completing an advancement                                                                          | `value: 1`                                             |
| `consume`                       | Triggered on item consumption                                                                                     | `value: 1`                                             |
| `craft`                         | Triggered when crafting an item                                                                                   | `value: The amount of items crafted`                   |
| `damage_item`                   | Triggered when damaging an item                                                                                   | `value: The damage`                                    |
| `death`                         | Triggered on death from any sources                                                                               | `value: 1`                                             |
| `deploy_elytra`                 | Triggered when the player starts elytra gliding                                                                   | `value: 1`                                             |
| `disable`                       | Triggered when an item / enchant / etc disables                                                                   | `value: 1`                                             |
| `drop_item`                     | Triggered when dropping an item                                                                                   | `value: The amount of items`                           |
| `elytra_boost`                  | Triggered when a player boosts an elytra **Requires Paper**                                                       | `value: 1`                                             |
| `empty_bucket`                  | Triggered when emptying a bucket                                                                                  | `value: 1`                                             |
| `enable`                        | Triggered when an item / enchant / etc enables                                                                    | `value: 1`                                             |
| `enter_bed`                     | Triggered when entering a bed                                                                                     | `value: 1`                                             |
| `entity_break_door`             | Triggered when an entity breaks a door                                                                            | `value: 1`                                             |
| `entity_catch_fire_from_block`  | Triggered when an entity catches fire from a block                                                                | `value: 1`                                             |
| `entity_catch_fire_from_entity` | Triggered when an entity catches fire from an entity                                                              | `value: 1`                                             |
| `entity_damage`                 | Triggered when an entity takes damage                                                                             | `value: The damage taken`                              |
| `entity_damage_by_entity`       | Triggered when an entity takes damage from another entity                                                         | `value: The damage taken`                              |
| `entity_death`                  | Triggered when an entity dies                                                                                     | `value: 1`                                             |
| `entity_item_drop`              | Triggered when a killed entity drops loot                                                                         | `value: The amount of items dropped`                   |
| `entity_spawn`                  | Triggered when an entity spawns                                                                                   | `value: 1`                                             |
| `entity_target`                 | Triggered when an entity targets another entity                                                                   | `value: 1`                                             |
| `entity_teleport`               | Triggered when an entity teleports                                                                                | `value: 1`                                             |
| `fall_damage`                   | Triggered when taking fall damage                                                                                 | `value: The damage taken`                              |
| `fill_bucket`                   | Triggered when filling a bucket                                                                                   | `value: 1`                                             |
| `gain_hunger`                   | Triggered when gaining hunger points                                                                              | `value: The hunger gained`                             |
| `gain_xp`                       | Triggered when gaining experience points                                                                          | `value: The xp gained`                                 |
| `global_static_%interval%`      | Run every x ticks for the server, eg `global_static_20` would run every second                                    | `value: 1`                                             |
| `headshot`                      | Triggered when hitting an enemy with a projectile in the head                                                     | `value: The damage dealt`                              |
| `heal`                          | Triggered when regaining health                                                                                   | `value: The health regained`                           |
| `hold_item`                     | Triggered when changing your held item                                                                            | `value: 1`                                             |
| `hook_in_ground`                | Triggered when a fishing rod hook hits the ground                                                                 | `value: 1`                                             |
| `item_break`                    | Triggered when breaking any item in your inventory (durability)                                                   | `value: 1`                                             |
| `join`                          | Triggered when joining the server                                                                                 | `value: 1`                                             |
| `jump`                          | Triggered when Jumping (pressing space)                                                                           | `value: 1`                                             |
| `kill`                          | Triggered when a player kills a player or entity                                                                  | `value: The victim's max health`                       |
| `leash_entity`                  | Triggered when leashing an entity                                                                                 | `value: 1`                                             |
| `leave`                         | Triggered when leaving the server                                                                                 | `value: 1`                                             |
| `leave_bed`                     | Triggered when leaving a bed                                                                                      | `value: 1`                                             |
| `leave_land`                    | Triggered when leaving a Town                                                                                     | `value: 1`                                             |
| `level_up_item`                 | Triggered when levelling up an item                                                                               | `value: The new item level`                            |
| `level_up_xp`                   | Triggered when levelling up XP                                                                                    | `value: The new level`                                 |
| `lose_hunger`                   | Triggered when losing hunger                                                                                      | `value: The hunger lost`                               |
| `lose_potion_effect`            | Triggered when losing a potion effect                                                                             | `value: 1`                                             |
| `melee_attack`                  | Triggered when injuring an entity with a melee attack                                                             | `value: The damage dealt`                              |
| `mine_block`                    | Triggered when mining a block                                                                                     | `value: 1`                                             |
| `mine_block_progress`           | Triggered when damaging a block                                                                                   | `value: 1`                                             |
| `move`                          | Triggered on all movement: looking around, walking                                                                | `value: The distance moved`                            |
| `pick_up_item`                  | Triggered when picking up an item                                                                                 | `value: The amount of items`                           |
| `place_block`                   | Triggered when placing a block                                                                                    | `value: 1`                                             |
| `potion_effect`                 | Triggered when gaining a potion effect                                                                            | `value: 1`                                             |
| `projectile_hit`                | Triggered when hitting a block or an entity with a projectile (arrow, trident, splash potion, egg, snowball)      | `value: 1`                                             |
| `projectile_launch`             | Triggered when launching a projectile (arrow, trident, splash potion, egg, snowball)                              | `value: 1`                                             |
| `reel_in`                       | Triggered when reeling in a fishing rod                                                                           | `value: 1`                                             |
| `rename_entity`                 | Triggered when a player renames an entity using a name tag **Requires Paper**                                     | `value: 1`                                             |
| `respawn`                       | Triggered when respawning                                                                                         | `value: 1`                                             |
| `ring_bell`                     | Triggered when ringing a bell                                                                                     | `value: 1`                                             |
| `run_command`                   | Triggered when running a command                                                                                  | `value: 1`                                             |
| `sell_item`                     | Triggered when selling an item in a shop                                                                          | `value: The price`                                     |
| `send_message`                  | Triggered when sending a message                                                                                  | `value: 1`                                             |
| `shear_entity`                  | Triggered when shearing an entity                                                                                 | `value: 1`                                             |
| `shield_block`                  | Triggered when blocking an attack with a shield                                                                   | `value: The damage blocked`                            |
| `shoot_bow`                     | Triggered when shooting a bow                                                                                     | `value: The force the bow was shot at between 0 and 1` |
| `smelt`                         | Triggered when smelting an item in a furnace                                                                      | `value: The amount of items smelted`                   |
| `smith_item`                    | Triggered when smithing an item in a smithing table                                                               | `value: 1`                                             |
| `static_%interval%`             | Run every x ticks, eg `static_20` would run every second                                                          | `value: 1`                                             |
| `swap_hands`                    | Triggered when swapping items in hands (F by default)                                                             | `value: 1`                                             |
| `swing`                         | Triggered when swinging an item, hand or weapon **Requires Paper**                                                | `value: 1`                                             |
| `take_damage`                   | Triggered when taking damage from any source                                                                      | `value: The damage taken`                              |
| `take_entity_damage`            | Triggered when taking damage from an entity or player                                                             | `value: The damage taken`                              |
| `tame_animal`                   | Triggered when taming an animal                                                                                   | `value: 1`                                             |
| `teleport`                      | Triggered when teleporting                                                                                        | `value: 1`                                             |
| `toggle_flight`                 | Triggered when changing the flight state                                                                          | `value: 1`                                             |
| `toggle_sneak`                  | Triggered when changing the sneak state                                                                           | `value: 1`                                             |
| `toggle_sprint`                 | Triggered when changing the sprint state                                                                          | `value: 1`                                             |
| `trident_attack`                | Triggered on injuring an entity with a thrown trident **Requires Paper**                                          | `value: The damage dealt`                              |
| `unleash_entity`                | Triggered when unleashing an entity                                                                               | `value: 1`                                             |
| `use_flower_pot`                | Triggered when a player insets or extracts a plant from a flower pot **Requires Paper**                           | `value: 1`                                             |
| `villager_trade`                | Triggered when trading with a villager **Requires Paper**                                                         | `value: The experience the villager gains`             |
| `win_raid`                      | Triggered when a player wins a raid                                                                               | `value: The level of bad omen`                         |

## EcoPlugin Triggers

| ID               | Description                                                          | Plugin      | Value(s)                       |
| ---------------- | -------------------------------------------------------------------- | ----------- | ------------------------------ |
| `enchant_<type>` | Triggered when enchanting an item with a certain type of enchantment | EcoEnchants | `value: The xp cost`           |
| `gain_job_xp`    | Triggered when gaining job experience points                         | EcoJobs     | `value: The experience gained` |
| `join_job`       | Triggered when joining a job                                         | EcoJobs     | `value: The job level`         |
| `leave_job`      | Triggered when leaving a job                                         | EcoJobs     | `value: The job level`         |
| `level_up_job`   | Triggered when levelling up a job                                    | EcoJobs     | `value: The new level`         |
| `gain_pet_xp`    | Triggered when gaining pet experience points                         | EcoPets     | `value: The experience gained` |
| `level_up_pet`   | Triggered when levelling up a pet                                    | EcoPets     | `value: The new level`         |
| `complete_task`  | Triggered when completing a task                                     | EcoQuests   | `value: 1`                     |
| `complete_quest` | Triggered when completing a quest                                    | EcoQuests   | `value: 1`                     |
| `gain_task_xp`   | Triggered when gaining task XP                                       | EcoQuests   | `value: The experience gained` |
| `start_quest`    | Triggered when starting a quest                                      | EcoQuests   | `value: 1`                     |
| `inscribe`       | Triggered when inscribing a scroll                                   | EcoScrolls  | `value: 1`                     |
| `try_inscribe`   | Triggered when attempting to inscribe a scroll                       | EcoScrolls  | `value: 1`                     |
| `buy_item`       | Triggered when buying an item in a shop                              | EcoShop     | `value: The price`             |
| `gain_skill_xp`  | Triggered when gaining skill experience points                       | EcoSkills   | `value: The experience gained` |
| `level_up_skill` | Triggered when levelling up                                          | EcoSkills   | `value: The new level`         |
| `regen_magic`    | Triggered when regenerating magic                                    | EcoSkills   | `value: 1`                     |
## External Integration Triggers

| ID                         | Description                                            | Plugin                           | Value(s)                                                     |
| -------------------------- | ------------------------------------------------------ | -------------------------------- | ------------------------------------------------------------ |
| `collect_envoy`            | Triggered when collecting an envoy crate               | AxEnvoy                          | `value: 1`                                                   |
| `player_trade`             | Triggered when trading with a player                   | AxTrade                          | `value: The total amount of items traded`                    |
| `left_click_npc`           | Triggered when left-clicking an NPC                    | Citizens<br/>FancyNpcs            | `value: 1`                                                   |
| `right_click_npc`          | Triggered when right-clicking an NPC                   | Citizens<br/>FancyNpcs            | `value: 1`                                                   |
| `bonemeal_crop`            | Triggered when using bonemeal on a crop                | CustomCrops                      | `value: 1`                                                   |
| `harvest_custom_crop`      | Triggered when harvesting a custom crop                | CustomCrops                      | `value: 1`                                                   |
| `plant_custom_crop`        | Triggered when planting a custom crop                  | CustomCrops                      | `value: 1`                                                   |
| `use_fertilizer`           | Triggered when using fertilizer                        | CustomCrops                      | `value: 1`                                                   |
| `use_watering_can`         | Triggered when using a watering can                    | CustomCrops                      | `value: 1`                                                   |
| `change_town_role`         | Triggered when changing town role                      | HuskTowns                        | `value: 1`                                                   |
| `create_town`              | Triggered when creating a Town                         | HuskTowns                        | `value: 1`                                                   |
| `disband_town`             | Triggered when disbanding a Town                       | HuskTowns                        | `value: 1`                                                   |
| `join_town`                | Triggered when joining a Town                          | HuskTowns                        | `value: 1`                                                   |
| `leave_town`               | Triggered when leaving a Town                          | HuskTowns                        | `value: 1`                                                   |
| `enter_claim`              | Triggered when entering a claimed area                 | HuskTowns<br/>HuskClaims          | `value: 1`                                                   |
| `claim`                    | Triggered when claiming an area                        | HuskTowns<br/>HuskClaims<br/>Lands | `value: 1`                                                   |
| `exit_claim`               | Triggered when exiting a claimed area                  | HuskTowns<br/>HuskClaims<br/>Lands | `value: 1`                                                   |
| `unclaim`                  | Triggered when unclaiming an area                      | HuskTowns<br/>HuskClaims<br/>Lands | `value: 1`                                                   |
| `jobs_level_up`            | Triggered when levelling up a job                      | Jobs Reborn                      | `value: The new level`                                       |
| `join_land`                | Triggered when joining a Land                          | Lands                            | `value: 1`                                                   |
| `lands_bank_deposit`       | Triggered when depositing into the Lands bank          | Lands                            | `value: The value deposited`<br/>`alt-value: The new balance` |
| `lands_bank_withdraw`      | Triggered when withdrawing from the Lands bank         | Lands                            | `value: The value withdrawn`<br/>`alt-value: The new balance` |
| `lands_spawn_teleport`     | Triggered when teleporting to Lands spawn              | Lands                            | `value: 1`                                                   |
| `gain_mcmmo_xp`            | Triggered when gaining McMMO xp                        | McMMO                            | `value: The xp gained`                                       |
| `level_down_mcmmo`         | Triggered when levelling down McMMO skill              | McMMO                            | `value: The new level`                                       |
| `level_up_mcmmo`           | Triggered when levelling up McMMO skill                | McMMO                            | `value: The new level`                                       |
| `mcmmo_ability_activate`   | Triggered when an McMMO ability is activated           | McMMO                            | `value: 1`                                                   |
| `mcmmo_ability_deactivate` | Triggered when an McMMO ability is deactivated         | McMMO                            | `value: 1`                                                   |
| `scyther_auto_collect`     | Triggered when autocollecting crops with a scyther hoe | Scyther                          | `value: 1`                                                   |
| `scyther_auto_sell`        | Triggered when autoselling crops with a scyther hoe    | Scyther                          | `value: 1`                                                   |
| `register_vote`            | Triggered when a player votes for the server           | Votifier                         | `value: 1`                                                   |
| `enter_region`             | Triggered when entering a region                       | WorldGuard                       | `value: 1`                                                   |
| `leave_region`             | Triggered when leaving a region                        | WorldGuard                       | `value: 1`                                                   |
| `claim_battlepass_reward`  | Triggered when claiming a battlepass reward            | xBattlepass                      | `value: 1`                                                   |
| `complete_battlepass_task` | Triggered when completing a battlepass task            | xBattlepass                      | `value: 1`                                                   |
| `gain_battlepass_xp`       | Triggered when gaining battlepass XP                   | xBattlepass                      | `value: The experience gained`                               |
| `tier_up_battlepass`       | Triggered when tiering up the battlepass               | xBattlepass                      | `value: The new level`                                       |
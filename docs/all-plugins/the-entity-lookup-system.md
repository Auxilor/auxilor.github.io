---
title: The Entity Lookup System
sidebar_position: 4
---

## What is the Entity Lookup System?
Much like how the item lookup system allows for specifying many options for ItemStacks in a simple, user-friendly string, the entity lookup system is designed to do the same for entities.

## Keys Explained
In each string is the key for an entity. A key looks one of two ways:
- A vanilla minecraft entity: (eg `husk`)
- An entity from another plugin: (eg `ecobosses:tarantula`)

You may also have noticed the ? in some of the keys. This means 'try to use the first entity, but if it doesn't exist, use the second entity' You can chain these together, but they're actually only useful for me to provide integrations in default configs without breaking things for people who don't use all my plugins together.

You can also use || . This means 'spawn the first entity, or the second entity'. These can also be chained together: in tests, this means any of the entities can pass, and in specifying the types of entities, this means that a random entity out of the options will be spawned on each call.

## Modifiers
Entities can have modifiers applied to them in the key. For example, lets say you're configuring a boss in EcoBosses. You want it to be a massive slime, a baby zombie, or a charged creeper, but you're not sure how to do that, because it looks like you have to just specify an entity type. Actually, in all of my plugins, wherever it asks for an entity, it's actually doing a lookup. You can specify any of the following modifiers to it:
- `adult` Force the entity to be an adult
- `attack-damage` Set the entities attack damage
- `attack-speed` Set the entities attack speed
- `baby` Force the entity to be a baby
- `charged` Set a creeper to be charged
- `explosion-radius` Set a creepers explosion radius
- `fly-speed` Set the entities fly speed
- `follow-range` Set the entities follow range
- `health` Set the entities health
- `jump-strength` Set a horses jump strength
- `knockback` Set the entities attack knockback
- `knockback-resistance` Set the entities knockback resistance
- `name` Set the entities display name, use quotes (") for multi-word names
- `no-ai` Set the entity to have no AI
- `size` Set the size of a slime or phantom
- `spawn-reinforcements` Set a zombie to spawn reinforcements
- `speed` Set the movement speed of the entity
- `silent` Set the entity to make no sound
- `head` Set the helmet item
- `chest` Set the chestplate
- `legs` Set the leggings
- `feet` Set the boots
- `hand` Set the held item
- `off_hand` Set the held item in the offhand
- `model-engine` Set the Model Engine ID and animation (for ID do `model-engine:id`, for ID and animation do `model-engine:id,animation`)

You simply chain the modifiers together, for example:
`phantom size:5 follow-range:25 speed:2 health:200 name:"&4Deadly Phantom" model-engine:dragon,flap`
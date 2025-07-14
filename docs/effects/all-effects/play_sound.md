# `play_sound`
:::dangerTriggered Effect
:::

Plays a sound to the player

# Effect Syntax
```yaml
- id: play_sound
  args:
    sound: entity_wolf_growl # The sound to play (https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Sound.html)
    pitch: 0.7 # The pitch of the sound (0.5 - 2)
    volume: 10 # The volume of the sound
  ...other config (eg triggers, filters, mutators, etc)
```
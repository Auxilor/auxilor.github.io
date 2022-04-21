# `run_chain_inline`
#### Triggered Effect

Execute an effect chain inline, rather than specifiying the ID

# Example Config
```yaml
- id: run_chain_inline
  args:
    chain: # The chain to run
      effects:
        - id: teleport
        - id: potion_effect
          args:
            effect: blindness
            level: 3
            duration: 30
            apply_to_player: true
        - id: send_message
          args:
            message: "&fYou have been teleported!"
            action_bar: true
        - id: play_sound
          args:
            sound: entity_dragon_fireball_explode
            pitch: 1.5
            volume: 4
  ...other config (eg triggers, filters, mutators, etc)
```
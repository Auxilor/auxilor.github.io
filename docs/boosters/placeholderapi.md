---
title: "PlaceholderAPI"
sidebar_position: 3
---

| Placeholder                    | Description                                                                                                                                                                                                                                    |
|--------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `%boosters_booster_info%`      | If there is a booster active, it will display the name of the booster and the player who activated it. If not, it will show a message showing that there is no currently active booster. The exact messages shown are configurable in lang.yml |
| `%boosters_active%`            | Shows the ID of the active booster, or an empty string if none active                                                                                                                                                                          |
| `%boosters_active_name%`       | Shows the name of the active booster, or an empty string if none active                                                                                                                                                                        |
| `%boosters_active_player%`     | Shows the display name of the player who activated the current booster, or an empty string if none active                                                                                                                                      |
| `%boosters_seconds_remaining%` | Shows the amount of seconds left on a booster, or zero if no booster is active                                                                                                                                                                 |
| `%boosters_time_remaining%`    | Shows the amount of time left on a booster, formatted as hh:mm:ss (ie 01:05:12). Shows 00:00:00 if no booster is active                                                                                                                        |
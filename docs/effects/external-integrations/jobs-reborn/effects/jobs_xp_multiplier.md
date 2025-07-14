# `jobs_xp_multiplier`
:::infoPermanent Effect
This effect is permanent and does not require a trigger.
:::

Multiplies xp gain from jobs


:::dangerRequires:
Jobs Reborn
:::

# Example Config
```yaml
- id: jobs_xp_multiplier
  args:
    multiplier: 1.5 # The experience multiplier
    jobs: # The list of jobs to multiply xp for. If removed, it will multiply all jobs.
      - miner
      - fisherman
```
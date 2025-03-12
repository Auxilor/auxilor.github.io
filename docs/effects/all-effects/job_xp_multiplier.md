# `job_xp_multiplier`
#### Permanent Effect

Multiplies job xp gain

**Requires EcoJobs**

# Example Config
```yaml
- id: job_xp_multiplier
  args:
    multiplier: 1.5 # The experience multiplier
    jobs: # The list of jobs to multiply xp for. If removed, it will multiply all jobs.
      - miner
      - builder 
```

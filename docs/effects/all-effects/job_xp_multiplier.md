# `job_xp_multiplier`

Multiplies job XP gain

> [!hint] Permanent Effect

> [!warning] Requires EcoJobs

> [!example]
> ```yaml
> - id: job_xp_multiplier
>   args:
>     multiplier: 1.5 # The experience multiplier
>     jobs: # The list of jobs to multiply xp for. If removed, it will multiply all jobs.
>       - miner
>       - builder 
> ```

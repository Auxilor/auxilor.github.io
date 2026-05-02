# `send_discord_webhook`
:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Send a message to a Discord webhook

# Effect Syntax
```yaml
- id: send_discord_webhook
  args:
    webhook_url: "https://discord.com/api/webhooks/..." # The webhook URL to send to
    text: "Hello from libreforge!" # The message content
    username: "MyBot" # (Optional) Override the webhook username
    avatar_url: "https://example.com/avatar.png" # (Optional) Override the webhook avatar
    tts: false # (Optional) Send as text-to-speech
    embeds: # (Optional) List of embeds to include
      - title: "Embed Title" # (Optional) Embed title
        description: "Embed description" # (Optional) Embed body text
        url: "https://example.com" # (Optional) URL the title links to
        color: "FF0000" # (Optional) Embed sidebar color (hex)
        timestamp: "2024-01-01T00:00:00Z" # (Optional) ISO 8601 timestamp
        author:
          name: "Author Name" # (Optional) Author display name
          url: "https://example.com" # (Optional) Author URL
          icon_url: "https://example.com/icon.png" # (Optional) Author icon
        footer:
          text: "Footer text" # (Optional) Footer text
          icon_url: "https://example.com/icon.png" # (Optional) Footer icon
        image:
          url: "https://example.com/image.png" # (Optional) Large image
        thumbnail:
          url: "https://example.com/thumb.png" # (Optional) Small thumbnail
        fields: # (Optional) List of inline fields
          - name: "Field Name" # Field label
            value: "Field Value" # Field content
            inline: false # (Optional) Display field inline
  ...other config (eg triggers, filters, mutators, etc)
```
---
title: "API"
sidebar_position: 6
---

## Source Code

Like all my plugins, EcoCrates is open-source and available on JitPack.

The source code can be found here:

[GitHub](https://github.com/Auxilor/EcoCrates)

### Using EcoCrates in your plugin

Add EcoCrates to your build.gradle like this:

```groovy
repositories {
    maven { url 'https://jitpack.io' }
}

dependencies {
    compileOnly 'com.willfp:EcoCrates:VERSION'
}
```

The latest version available on JitPack can be found here:
https://github.com/Auxilor/EcoCrates/releases

# Make your own rolls

Implement the roll interface, and create a RollFactory for it - the examples will be in Kotlin but you can also use Java:

[Quick Roll Source Code, an example of it](https://paste.willfp.com/tocahazizu.kotlin)
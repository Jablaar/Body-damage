# Body Damage

Body Damage is a localized anatomical damage system for Minecraft 1.20.1 Forge. It tracks ten body regions independently, renders staged tissue damage, persists catastrophic injuries through death, and integrates with compatible cybernetics and Viltrumite abilities.

- Website: <https://jablaar.github.io/Body-damage/>
- Repository: <https://github.com/Jablaar/Body-damage>

| | |
| --- | --- |
| Current version | 2.4.39 |
| Minecraft | 1.20.1 |
| Forge | 47+; 47.4.10 tested |
| Environment | Client and server |
| License | All rights reserved |

[Download Body Damage 2.4.39](dist/downloads/Body_Damage-2_4_39-invincible-anatomical-immortality-anatomygui-viltrumitecore-optional.jar)

## Features

- Localized melee, projectile, and fall-damage resolution.
- Independent structural health for the head, torso, both arms, both hands, both legs, and both feet.
- Skin → muscle → bone → removed biological stages.
- Stable visual healing and post-respawn layer transitions.
- Configurable max-heart penalties for destroyed regions.
- Persistent damage, missing limbs, cybernetic limbs, and cyber durability through death.
- Human and Viltrumite-specific vital thresholds and regeneration behavior.
- Native anatomy screen with synchronized multiplayer data.
- Forge configuration for pools, penalties, regeneration, respawn anatomy, cyber durability, and ability gates.
- Admin commands for testing, repair, removal, cybernetic placement, and diagnostics.

## Requirements

- Java 17
- Minecraft 1.20.1
- Forge 47+
- Palladium 4.5.8+
- Pehkui 3.8.2+
- GeckoLib 4.8.4+
- KubeJS 2001.6.5+
- Rhino 2001.2.3+

Optional integrations:

- CyberWare 1.20.1 Port 1.7.1+
- ViltrumiteCore 1.6.2+
- Viltrumite Progression 1.1.31+
- CyberwarePlus 1.6.2, with its paired CyberWare build
- Configured, for the in-game Forge configuration screen
- Essential, for hosted multiplayer worlds

Advanced prosthetic and ability-gate features require the matching paired builds described in the release notes.

## Installation

1. Install the required dependencies for Minecraft 1.20.1 Forge.
2. Place the Body Damage JAR in the `mods` folder on the client and server.
3. Remove older Body Damage builds so only one version is installed.
4. Start the game. Press `N` to open the anatomy screen.

The key can be changed under **Controls → Body Damage → Open Anatomy Screen**.

## Anatomy and vital rules

| Region | Default structural HP | Default heart penalty |
| --- | ---: | ---: |
| Head | 17 | Vital |
| Torso | 20 | 4 |
| Right / left arm | 18 each | 2 each |
| Right / left hand | 12 each | 1 each |
| Right / left leg | 20 each | 2 total |
| Right / left foot | 11 each | 1 total |

- Human head or torso damage is lethal at the middle of the muscle range.
- Viltrumite head or torso damage is lethal at bone.
- The admin-only Invincible rank cannot die and stops further damage at the head-bone floor. Other anatomy can still be destroyed and reconstructed.
- Biological parts at bone or removed state do not passively regenerate.
- Cybernetic parts use separate non-regenerating durability, with a default 3× multiplier.

## Integrations

Every integration below is optional. Body Damage keeps its core anatomy, damage, rendering, GUI, and command systems when none of them are installed.

### CyberWare 1.20.1 Port

CyberWare connects missing biological parts to the Robosurgeon and lets cybernetic replacements restore actual gameplay function.

- Arms, legs, hands, and feet use independent, non-regenerating cyber HP. The default durability is three times the matching biological pool and can be configured.
- At 0 cyber HP, Body Damage removes the installed replacement from CyberWare’s real player capability and synchronizes the change to clients.
- A Reinforced Fist is tracked as a left- or right-hand prosthetic instead of automatically replacing the entire arm above it.
- Administrative install and removal commands validate Robosurgeon regions, slot limits, prerequisites, incompatibilities, and replacement slots.
- Use the paired CyberWare 1.7.3 build for Reinforced Fist support. The complete hand and offhand compatibility path uses the paired 1.7.4 build.

### CyberwarePlus

CyberwarePlus 1.6.2 adds the paired rendering path for hand-only prosthetics. With the paired CyberWare 1.7.4 build, a Reinforced Fist renders as an independent hand replacement while the biological or cybernetic arm above it remains intact.

### ViltrumiteCore

ViltrumiteCore adds race-aware healing and lets actual structural integrity control compatible abilities. Cosmetic injury alone never closes an ability gate.

- Laser Eyes follows head integrity. Grab follows the left hand, and Thunderclap checks both hands.
- Sonic Punch remains usable with either functional arm and selects the surviving biological or cybernetic arm when only one remains.
- Block, Lethal Chop, and Barrage remain available until both arms are nonfunctional.
- Compatible cybernetic limbs satisfy the same structural checks as biological limbs.
- Head-gate Darkness can pass Viltrumite effect immunity only for the exact effect applied and owned by Body Damage; unrelated harmful effects keep their normal immunity behavior.
- ViltrumiteCore 1.6.2+ supplies the baseline race integration. Use the paired 1.7.12 build for the complete ability-gate and surviving-arm behavior.

### Viltrumite Progression

Viltrumite Progression 1.1.31+ scales structural healing speed by rank. With the default Body Damage base rate, Soldier heals at 1/6×, General at 1/3×, Grand Regent at 2/3×, and Emperor or Betrayer at 1×. The configured post-death multiplier is applied after that rank factor.

The admin-only Invincible rank receives a head-bone damage floor and ordered anatomical reconstruction: torso skeleton first, then arms, legs, hands and feet before normal muscle and skin regeneration resumes. If Progression is absent, Body Damage safely uses the normal 1× rank factor.

### Configured

Configured exposes `config/bodydamage-common.toml` through **Mods → Body Damage → Config**. It can edit structural pools, heart penalties, Human and Viltrumite regeneration, post-death recovery, cyber durability, respawn anatomy, and compatible ability thresholds. Saved values reload into gameplay live. Configured is a convenience only; the TOML file can be edited manually without it.

### Essential multiplayer

Essential-hosted worlds use Body Damage’s normal server-authoritative synchronization. Structural health, visible layers, installed cyber limbs, and cyber HP publish to tracking clients, and admin command changes refresh affected clients immediately. Every player still needs Body Damage and its required client-side dependencies; no Essential-specific setting is required.

## Commands

Commands require permission level 2. Supported commands accept a trailing player argument.

```text
/bodydamage status [player]
/bodydamage set <part> <value> [player]
/bodydamage state <part> <intact|muscle|bone|removed> [player]
/bodydamage remove <part> [player]
/bodydamage heal <part> [player]
/bodydamage reset [player]
/bodydamage reset all [player]
/bodydamage reset biological [part] [player]
/bodydamage reset cybernetic [part] [player]
/bodydamage cyber install <side> [player]
/bodydamage cyber remove <side> [player]
/bodydamage cyber list [player]
/bodydamage cyberware install <namespace:id> [count] [player]
/bodydamage cyberware remove <namespace:id> [count] [player]
/bodydamage cyberware list [player]
```

Parts include `head`, `body`, `right_arm`, `left_arm`, `right_hand`, `left_hand`, `right_leg`, `left_leg`, `right_foot`, and `left_foot`. Group aliases such as `arms`, `hands`, `legs`, and `feet` remain available.

## Configuration

Body Damage registers `config/bodydamage-common.toml`. With Configured installed, open:

**Mods → Body Damage → Config**

Changes apply live after Configured saves and reloads the Forge configuration. Compatible settings from an older Body Damage installation are used as first-run defaults where possible so established worlds retain their values.

## GitHub Pages

The repository includes a static site in `dist/` and a GitHub Actions workflow. In the repository settings, set **Pages → Source** to **GitHub Actions**. A push to `main` will publish the page automatically at <https://jablaar.github.io/Body-damage/>.

## License

All rights reserved.

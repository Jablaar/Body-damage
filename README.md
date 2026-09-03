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
| Heroes mod | Not required |
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
- Configured, for the in-game Forge configuration screen

Advanced prosthetic and ability-gate features require the matching paired builds described in the release notes.

## Installation

1. Install the required dependencies for Minecraft 1.20.1 Forge.
2. Place the Body Damage JAR in the `mods` folder on the client and server.
3. Do not install an older Heroes-dependent Body Damage build beside it.
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

### CyberWare

Compatible limbs restore function and use their own durability pools. Body Damage synchronizes missing limbs and installed replacements with the Robosurgeon. Supported prosthetic hands are tracked independently from their arms.

### ViltrumiteCore and Viltrumite Progression

Body Damage can gate Laser Eyes, Grab Entities, Thunderclap, Sonic Punch, Block, Lethal Chop, and Barrage using real structural anatomy. Viltrumite regeneration can scale with progression rank, and the Invincible rank receives its anatomical immortality behavior.

### Multiplayer

Structural, visible, cyber-limb, and cyber-HP state is synchronized to tracking clients. The mod is compatible with integrated multiplayer environments such as Essential when every player has the required client-side files.

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

Changes apply live after Configured saves and reloads the Forge configuration. Existing `config/heroes_body_damage.json` values are used as first-run defaults where possible so established worlds retain their settings.

## GitHub Pages

The repository includes a static site in `dist/` and a GitHub Actions workflow. In the repository settings, set **Pages → Source** to **GitHub Actions**. A push to `main` will publish the page automatically at <https://jablaar.github.io/Body-damage/>.

## License

All rights reserved.

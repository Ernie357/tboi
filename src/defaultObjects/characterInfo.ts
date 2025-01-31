const characterInfo: { 
    [key: string]: {  
        type: string, 
        imagePath: string, 
        birthright: {
            subtitle: string,
            description: string
        } 
    } 
} = {
    "Isaac": {
      birthright: {
        subtitle: "More options",
        description: "All new item pedestals cycle between two options. Previously-seen items are unaffected."
      },
      type: "normal",
      imagePath: "/images/characters/playerportrait_isaac.png"
    },
    "Maggy": {
      birthright: {
        subtitle: "Limit breaker + HP up",
        description: "Adds 1 full red Heart Container. Increases the maximum heart limit to 18."
      },
      type: "normal",
      imagePath: "/images/characters/playerportrait_magdalene.png"
    },
    "Cain": {
      birthright: {
        subtitle: "Better arcades + luck up",
        description: "+1 Luck. Every floor, except for ???, Chest, Dark Room, The Void, and Home, has a very high chance to contain an upgraded Arcade that generally contains more Machines."
      },
      type: "normal",
      imagePath: "/images/characters/playerportrait_cain.png"
    },
    "Judas": {
      birthright: {
        subtitle: "Belial incarnate",
        description: "The Book of Belial becomes a passive item that can be held beneath other active items, similar to Book of Virtues..."
      },
      type: "normal",
      imagePath: "/images/characters/playerportrait_judas.png"
    },
    "Blue Baby": {
      birthright: {
        subtitle: "Stronger spirit",
        description: "Whenever a red Heart Container would have been gained, grants 2 Soul Hearts instead of 1."
      },
      type: "normal",
      imagePath: "/images/characters/playerportrait_bluebaby.png"
    },
    "Eve": {
      birthright: {
        subtitle: "Forever cursed",
        description: "Whore of Babylon is active regardless of health and Dead Bird is active without taking damage."
      },
      type: "normal",
      imagePath: "/images/characters/playerportrait_eve.png"
    },
    "Samson": {
      birthright: {
        subtitle: "Rage up",
        description: "Bloody Lust can grant 4 more Damage boosts at +0.2 intervals, for a new maximum total of +14.0."
      },
      type: "normal",
      imagePath: "/images/characters/playerportrait_samson.png"
    },
    "Azazel": {
      birthright: {
        subtitle: "Wide breath",
        description: "Azazel's Brimstone beam becomes much wider like Mega Blast, with 2× larger collision area. No effect on damage."
      },
      type: "normal",
      imagePath: "/images/characters/playerportrait_azazel.png"
    },
    "Lazarus": { 
      birthright: {
        subtitle: "Come back stronger", 
        description: "No direct effect. The item is triggered if Lazarus dies and becomes Lazarus Risen.",
      },
      type: "normal",
      imagePath: "/images/characters/playerportrait_lazarus.png"
    },
		"Lazarus Risen": {
      birthright: {
        subtitle: "Temporary DMG up", 
        description: "Grants a +7.2 Damage bonus that fades by 0.12 per second. Until the effect completely fades, killing an enemy restores 0.07 damage to the bonus."
      },
      type: "normal",
      imagePath: "/images/characters/playerportrait_lazarus.png"
    },
    "Eden": {
      birthright: { 
        subtitle: "???", 
        description: "Creates 3 random items from random item pools. Only one can be taken. Ignores item weight and can spawn items that have already been taken during the run. Can also spawn multiples of the same item, if they exist in multiple item pools." 
      },
      type: "normal",
      imagePath: "/images/characters/playerportrait_eden.png"
    },
    "The Lost": {
      birthright: { 
        subtitle: "Better destiny", 
        description: "Prevents items with the nolostbr item tag from appearing. This automatically re-rolls most items that aren't beneficial to The Lost, namely ones that only give health, flight, and/or spectral tears or activate upon taking damage." 
      },
      type: "normal",
      imagePath: "/images/characters/playerportrait_thelost.png"
    },
    "Lilith": {
      birthright: { 
        subtitle: "Offensive Formation", 
        description: "Most familiars that normally follow Lilith, including Lilith's innate Incubus, will always be positioned in front of Lilith, creating a stack, facing whatever direction she was shooting. Non-attacking familiars (The Relic, Farting Baby, etc.) will follow Lilith's most recently acquired attacking familiar instead; if the most recent familiar is throwable like Holy Water, familiars following it will also be launched with it. If Lilith has King Baby, it will always be positioned directly in front of Lilith with all other affected familiars forming a semi-circle around it, and will behave normally otherwise. Dry Baby is considered an 'attacking familiar' and will be within the stack. Lil Portal and Jaw Bone are exempt and behave normally." 
      },
      type: "normal",
      imagePath: "/images/characters/playerportrait_lilith.png"
    },
    "Keeper": {
      birthright: { 
        subtitle: "Coin up", 
        description: "Adds one Coin Heart and raises Keeper's maximum Coin Heart limit to 4." 
      },
      type: "normal",
      imagePath: "/images/characters/playerportrait_keeper.png"
    },
    "Apollyon": {
      birthright: { 
        subtitle: "Regurgitate", 
        description: "Using Void has a 10% chance to spawn one previously destroyed passive item (while keeping the bonus stats). Each absorbed passive item has an equal chance to be spawned. Spawned items can be spawned again even if they are not reabsorbed. Absorbing duplicates of the same item will make it more likely to be spawned, as each duplicate counts as a separate item and thus has its own chance to be spawned. Birthright has no effect if Void is not held." 
      },
      type: "normal",
      imagePath: "/images/characters/playerportrait_apollyon.png"
    },
    "The Forgotten": {
      birthright: { 
        subtitle: "Unchained", 
        description: "The Soul is unchained and free to move. It can move to different rooms, leaving The Forgotten behind, and switching back teleports The Soul back to The Forgotten." 
      },
      type: "normal",
      imagePath: "/images/characters/playerportrait_theforgotten.png"
    },
    "Bethany": {
      birthright: { 
        subtitle: "Conserve your faith", 
        description: "Activating an item using Soul Charges is free 50% of the time." 
      },
      type: "normal",
      imagePath: "/images/characters/playerportrait_bethany.png"
    },
    "Jacob & Esau": {
      birthright: { 
        subtitle: "What's yours is mine", 
        description: "The character who picks up Birthright gains copies of the three most recent passive items from the other." 
      },
      type: "normal",
      imagePath: "/images/characters/playerportrait_jacob.png"
    },
    "Tainted Isaac": {
      birthright: {
        subtitle: "Inventory up",
        description: "All new item pedestals cycle between two options. Previously-seen items are unaffected."
      },
      type: "tainted",
      imagePath: "/images/characters/playerportrait_isaac_b.png"
    },
    "Tainted Maggy": {
      birthright: {
        subtitle: "HP up!",
        description: "Adds 1 full red Heart Container. Increases the number of non-draining hearts to 3."
      },
      type: "tainted",
      imagePath: "/images/characters/playerportrait_magdalene_b.png"
    },
    "Tainted Cain": {
      birthright: {
        subtitle: "Salvage",
        description: "The amount of pickups dropped from collecting an item is doubled."
      },
      type: "tainted",
      imagePath: "/images/characters/playerportrait_cain_b.png"
    },
    "Tainted Judas": {
      birthright: {
        subtitle: "Extended darkness",
        description: "Increases the range of Dark Arts by giving Tainted Judas a dark radius which applies the Dark Arts effect to enemies and projectiles that enter it."
      },
      type: "tainted",
      imagePath: "/images/characters/playerportrait_judas_b.png"
    },
    "Tainted Blue Baby": {
      birthright: {
        subtitle: "Poop up",
        description: "Increases the maximum number of poop pickups that can be carried to 29."
      },
      type: "tainted",
      imagePath: "/images/characters/playerportrait_bluebaby_b.png"
    },
    "Tainted Eve": {
      birthright: { 
        subtitle: "Coagulate", 
        description: "Red Heart Clots now spawn temporary Half Red Hearts on death that last for two seconds before disappearing. Clots spawned from other types of hearts will not drop hearts." 
      },
      type: "tainted",
      imagePath: "/images/characters/playerportrait_eve_b.png"
    },
    "Tainted Samson": {
      birthright: { 
        subtitle: "Unstoppable force", 
        description: "The berserk timer gains 3 seconds instead of 1 when Tainted Samson kills an enemy." 
      },
      type: "tainted",
      imagePath: "/images/characters/playerportrait_samson_b.png"
    },
    "Tainted Azazel": {
      birthright: { 
        subtitle: "Stronger sneeze", 
        description: "Doubles the size of Tainted Azazel's Hemoptysis sneeze attack." 
      },
      type: "tainted",
      imagePath: "/images/characters/playerportrait_azazel_b.png"
    },
    "Tainted Lazarus": {
      birthright: { 
        subtitle: "Superposition", 
        description: "The non-active form of Tainted Lazarus will appear in ghostly form, being completely immune to damage and dealing 25% damage (including tear effects such as Holy Light). Holding down the 'drop' key allows the active form to move independently of the other form, similar to Jacob and Esau. Using Flip will cause the two characters to switch states while maintaining positions. Both characters receive the Birthright effect when one character collects it." 
      },
      type: "tainted",
      imagePath: "/images/characters/playerportrait_lazarus_b.png"
    },
    "Tainted Eden": {
      birthright: {
        subtitle: "Eternal",
        description: "Items gained before Birthright will not be re-rolled, neither by taking damage, nor by items such as D4 and Missing No.."
      },
      type: "tainted",
      imagePath: "/images/characters/playerportrait_eden_b.png"
    },
    "Tainted Lost": {
      birthright: {
        subtitle: "Extra life",
        description: "Grants an extra life that revives Tainted Lost in the same room and deals 200 damage to nearby enemies. It can hit the same enemy up to 4 times."
      },
      type: "tainted",
      imagePath: "/images/characters/playerportrait_thelost_b.png"
    },
    "Tainted Lilith": {
      birthright: {
        subtitle: "Conjoined",
        description: "Familiars that normally follow Tainted Lilith will instead act like and stack on top of her Gello familiar..."
      },
      type: "tainted",
      imagePath: "/images/characters/playerportrait_lilith_b.png"
    },
    "Tainted Keeper": {
      birthright: {
        subtitle: "Money money money",
        description: "Strongly attracts the coins dropped by killed enemies from a short distance. No effect on other coins."
      },
      type: "tainted",
      imagePath: "/images/characters/playerportrait_keeper_b.png"
    },
    "Tainted Apollyon": {
      birthright: {
        subtitle: "Torment",
        description: "Holding down the fire button causes Abyss locusts to continuously damage enemies instead of returning."
      },
      type: "tainted",
      imagePath: "/images/characters/playerportrait_apollyon_b.png"
    },
    "Tainted Forgotten": {
      birthright: {
        subtitle: "Recall",
        description: "Tainted Soul is given Recall, an unlimited-use active item, in their pocket active slot. When used, Recall pulls Tainted Forgotten into Tainted Soul's hands automatically from a distance..."
      },
      type: "tainted",
      imagePath: "/images/characters/playerportrait_theforgotten_b.png"
    },
    "Tainted Bethany": {
      birthright: {
        subtitle: "Artifact",
        description: "Spawns four Lemegeton wisps of items with a quality of 3 or higher. These wisps are much larger and have much higher HP than normal wisps."
      },
      type: "tainted",
      imagePath: "/images/characters/playerportrait_bethany_b.png"
    },
    "Tainted Jacob": {
      birthright: {
        subtitle: "It's not yours",
        description: "Dark Esau splits into two. Both Esaus will always charge at the same time, and one will not charge if the other is not in position."
      },
      type: "tainted",
      imagePath: "/images/characters/playerportrait_jacob_b.png"
    }
}

export default characterInfo;
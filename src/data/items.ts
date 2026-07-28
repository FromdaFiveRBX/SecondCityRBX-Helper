export type ItemType = "weapon" | "drug" | "attachment" ;

export interface WeaponStats {
  damage: number;
  range: number;
  fireRate: number;
  recoil: number;
}

export interface DrugStats {
  duration: string;
  effect: string;
  weight: string;
}

export interface AttachmentStats {
  AtachType: string;
  effect: string;
  weight: string;
}

export interface CatalogItem {
  id: string;
  name: string;
  type: ItemType;
  rarity: "Common" | "Uncommon" | "Rare" | "Epic" | "Legendary";
  tier: 1 | 1.5 | 2;
  description: string;
  tags: string[];
  image?: string;
  stats?: WeaponStats | DrugStats | AttachmentStats;
}

export const catalogItems: CatalogItem[] = [
  {
    id: "glock-19",
    name: "Glock 19",
    type: "weapon",
    rarity: "Common",
    tier: 1,
    description:
      "Light sidearm for new players with fast draw speed, cheap ammo cost, and steady entry-level value for simple city jobs and everyday protection.",
    tags: ["Low recoil", "Fast draw"],
    image: "/glock-19.png",
    stats: { damage: 28, range: 35, fireRate: 72, recoil: 20 },
  },
    {
    id: "glock-9g",
    name: "Glock 19",
    type: "weapon",
    rarity: "Common",
    tier: 1,
    description:
      "Light sidearm for new players with fast draw speed, cheap ammo cost, and steady entry-level value for simple city jobs and everyday protection.",
    tags: ["Low recoil", "Fast draw"],
    image: "https://fromdafiverbx.github.io/SecondCityRBX-Helper/c329409f-c3e5-41f9-8913-4b8dd7834a03.png",
    stats: { damage: 28, range: 35, fireRate: 72, recoil: 20 },
  },
  {
    id: "draco-t1",
    name: "Micro Draco",
    type: "weapon",
    rarity: "Rare",
    tier: 1,
    description:
      "A semi-automatic, heavy-hitting compact rifle. Delivers devastating close-range damage with a slower, deliberate fire rate and massive recoil.",
    tags: ["Semi Automatic", "High Damage"],
    image: "https://fromdafiverbx.github.io/SecondCityRBX-Helper/draco-t1.png",
    stats: { 
      damage: 35,     
      range: 45,       
      fireRate: 50,   
      recoil: 60       
    },
  },
  {
    id: "mini-smg",
    name: "Mini SMG",
    type: "weapon",
    rarity: "Rare",
    tier: 1.5,
    description:
      "Compact automatic weapon built for vehicle fights, alley pushes, and fast faction rotations where close-range pressure matters more than precision.",
    tags: ["Close range", "Vehicle use"],
    image: "/mini-smg.png",
    stats: { damage: 34, range: 28, fireRate: 90, recoil: 38 },
  },
  {
    id: "combat-pistol",
    name: "Combat Pistol",
    type: "weapon",
    rarity: "Common",
    tier: 1,
    description:
      "Reliable sidearm with a larger magazine than the Glock, suited for extended firefights where ammo management matters.",
    tags: ["High ammo", "Reliable"],
    stats: { damage: 30, range: 38, fireRate: 65, recoil: 22 },
  },
  {
    id: "carbine-rifle",
    name: "Carbine Rifle",
    type: "weapon",
    rarity: "Epic",
    tier: 2,
    description:
      "Full-auto mid-range rifle used by experienced faction players. Strong damage output and solid accuracy for open street engagements.",
    tags: ["Mid range", "Full auto"],
    stats: { damage: 56, range: 70, fireRate: 82, recoil: 42 },
  },
  {
    id: "special-carbine",
    name: "Special Carbine",
    type: "weapon",
    rarity: "Epic",
    tier: 2,
    description:
      "Upgraded carbine variant with slightly improved handling. Preferred by players who want more accuracy in medium-range faction pushes.",
    tags: ["Mid range", "Accurate"],
    stats: { damage: 58, range: 72, fireRate: 80, recoil: 38 },
  },
  {
    id: "pump-shotgun",
    name: "Pump Shotgun",
    type: "weapon",
    rarity: "Uncommon",
    tier: 1.5,
    description:
      "Slow but devastating at close range. One shot can drop a target indoors. Best used in tight spaces and building rushes.",
    tags: ["High damage", "Close range"],
    stats: { damage: 80, range: 18, fireRate: 25, recoil: 65 },
  },
  {
    id: "smg",
    name: "SMG",
    type: "weapon",
    rarity: "Uncommon",
    tier: 1.5,
    description:
      "Standard submachine gun with good spray control. Effective for both vehicle combat and on-foot chases around the city.",
    tags: ["Versatile", "Mobile"],
    stats: { damage: 38, range: 40, fireRate: 88, recoil: 32 },
  },
  {
    id: "heavy-pistol",
    name: "Heavy Pistol",
    type: "weapon",
    rarity: "Rare",
    tier: 2,
    description:
      "Upgraded pistol with significantly better stopping power. Often used as a secondary by mid-tier faction players.",
    tags: ["High stopping power", "Secondary"],
    stats: { damage: 45, range: 42, fireRate: 60, recoil: 28 },
  },
  [
  {
    id: "Actavis",
    name: "Actavis Syrup",
    type: "drug",
    group: "Faction",
    rarity: "Rare",
    tier: 1,
    description:
      "25% Health Regen. Stamina regeneration until restart. -20% Movement Speed for 600s. Vehicle handling -10% for 600s.",
    tags: ["Health regen", "Stamina"],
    image: "https://fromdafiverbx.github.io/SecondCityRBX-Helper/Actavis.png",
    stats: { duration: "600s", effect: "Heavy sedation, euphoria", weight: "0.5 kg" },
  },
  {
    id: "Adderall",
    name: "Adderall",
    type: "drug",
    group: "Faction",
    rarity: "Common",
    tier: 1,
    description:
      "Removes worst screenshake. Gives SpotEmGotEm skill until restart. -10% Health instantly. -10% Slower until restart.",
    tags: ["SpotEmGotEm", "Focus"],
    image: "https://fromdafiverbx.github.io/SecondCityRBX-Helper/Adderall.png",
    stats: { duration: "Until restart", effect: "Focus boost, reduced screenshake", weight: "0.05 kg" },
  },
  {
    id: "ALG",
    name: "ALG",
    type: "drug",
    group: "Faction",
    rarity: "Uncommon",
    tier: 1,
    description:
      "30% Health Regen boost. Slowed movement for 300s.",
    tags: ["Health regen"],
    image: "https://fromdafiverbx.github.io/SecondCityRBX-Helper/ALG.png",
    stats: { duration: "300s", effect: "Health regen, slowed movement", weight: "0.1 kg" },
  },
  {
    id: "BlueXanax",
    name: "Blue Xanax",
    type: "drug",
    group: "Faction",
    rarity: "Uncommon",
    tier: 1,
    description:
      "100% Health Regen. 10% Health Regen. Makes you slower for 300s.",
    tags: ["Health regen", "Sedation"],
    image: "https://fromdafiverbx.github.io/SecondCityRBX-Helper/BlueXanax.png",
    stats: { duration: "300s", effect: "Health regen, slowed movement", weight: "0.05 kg" },
  },
  {
    id: "BlueDream",
    name: "Blue Dream",
    type: "drug",
    group: "Faction",
    rarity: "Common",
    tier: 1,
    description:
      "15% Health Regen. Reduced aim sway for 600s. -10% Speed for 600s. Stamina reduction for 600s.",
    tags: ["Health regen", "Aim sway"],
    image: "https://fromdafiverbx.github.io/SecondCityRBX-Helper/BlueDream.png",
    stats: { duration: "600s", effect: "Health regen, reduced aim sway", weight: "0.3 kg" },
  },
  {
    id: "Cocaine",
    name: "Cocaine",
    type: "drug",
    group: "Faction",
    rarity: "Rare",
    tier: 1,
    description:
      "+10% Run Speed for 300s. +15% Stamina Regen for 300s. -8% Health instantly. -10% Stamina Regen for 180s.",
    tags: ["Run speed", "Stamina"],
    image: "https://fromdafiverbx.github.io/SecondCityRBX-Helper/Cocaine.png",
    stats: { duration: "300s", effect: "Run speed, stamina regen", weight: "0.3 kg" },
  },
  {
    id: "CodeineSyrup",
    name: "Codeine Syrup",
    type: "drug",
    group: "Faction",
    rarity: "Uncommon",
    tier: 1,
    description:
      "25% Health Regen. Stamina regeneration until restart. -20% Movement Speed for 600s. Vehicle handling -10% for 600s.",
    tags: ["Health regen", "Stamina"],
    image: "https://fromdafiverbx.github.io/SecondCityRBX-Helper/CodeineSyrup.png",
    stats: { duration: "600s", effect: "Health regen, slowed movement", weight: "0.4 kg" },
  },
  {
    id: "Crack",
    name: "Crack",
    type: "drug",
    group: "Faction",
    rarity: "Rare",
    tier: 1,
    description:
      "+10 Armor (reactive on bullet). +20% Melee Damage for 180s. -5% Health instantly. Stamina drain for 240s.",
    tags: ["Reactive armor", "Melee"],
    image: "https://fromdafiverbx.github.io/SecondCityRBX-Helper/Crack.png",
    stats: { duration: "180s", effect: "Reactive armor, melee damage", weight: "0.1 kg" },
  },
  {
    id: "Flakka",
    name: "Flakka",
    type: "drug",
    group: "Faction",
    rarity: "Epic",
    tier: 1,
    description:
      "+25% Speed for 300s. +30% Melee Damage for 300s. -25% Health (crash damage). Stamina drain for 300s.",
    tags: ["Speed", "Melee"],
    image: "https://fromdafiverbx.github.io/SecondCityRBX-Helper/Flakka.png",
    stats: { duration: "300s", effect: "Speed boost, melee damage", weight: "0.1 kg" },
  },
  {
    id: "GGPill",
    name: "GG Pill",
    type: "drug",
    group: "Faction",
    rarity: "Uncommon",
    tier: 1,
    description:
      "Adrenaline Rush skill until restart. 50% Health Regen. -5% Health instantly. -15% Stamina Regen for 300s.",
    tags: ["Adrenaline Rush", "Health regen"],
    image: "https://fromdafiverbx.github.io/SecondCityRBX-Helper/GGPill.png",
    stats: { duration: "Until restart", effect: "Adrenaline rush, health regen", weight: "0.05 kg" },
  },
  {
    id: "Grenades",
    name: "Grenades",
    type: "drug",
    group: "Faction",
    rarity: "Uncommon",
    tier: 1,
    description:
      "Adrenaline Rush skill until restart. 50% Health Regen. -5% Health instantly. -15% Stamina Regen for 300s.",
    tags: ["Adrenaline Rush", "Health regen"],
    image: "https://fromdafiverbx.github.io/SecondCityRBX-Helper/Grenades.png",
    stats: { duration: "Until restart", effect: "Adrenaline rush, health regen", weight: "0.05 kg" },
  },
  {
    id: "Heroin",
    name: "Heroin",
    type: "drug",
    group: "Faction",
    rarity: "Legendary",
    tier: 1,
    description:
      "25% Armor (reactive). 10% Health Regen. -30% Movement Speed until restart. -10% Health after effect.",
    tags: ["Reactive armor", "Health regen"],
    image: "https://fromdafiverbx.github.io/SecondCityRBX-Helper/Heroin.png",
    stats: { duration: "Until restart", effect: "Reactive armor, slowed movement", weight: "0.3 kg" },
  },
  {
    id: "HiTecSyrup",
    name: "Hi-Tec Syrup",
    type: "drug",
    group: "Faction",
    rarity: "Uncommon",
    tier: 1,
    description:
      "25% Health Regen. Stamina regeneration until restart. -20% Movement Speed for 600s. Vehicle handling -10% for 600s.",
    tags: ["Health regen", "Stamina"],
    image: "https://fromdafiverbx.github.io/SecondCityRBX-Helper/HiTecSyrup.png",
    stats: { duration: "600s", effect: "Health regen, slowed movement", weight: "0.5 kg" },
  },
  {
    id: "Hydrocodone",
    name: "Hydrocodone",
    type: "drug",
    group: "Faction",
    rarity: "Common",
    tier: 1,
    description:
      "Gives Headshot King skill until restart. 8% Armor (reactive). -30% Health (Fentanyl). -25% Dehydration.",
    tags: ["Headshot King", "Reactive armor"],
    image: "https://fromdafiverbx.github.io/SecondCityRBX-Helper/Hydrocodone.png",
    stats: { duration: "Until restart", effect: "Headshot king, reactive armor", weight: "0.05 kg" },
  },
  {
    id: "Hydrocodone30",
    name: "Hydrocodone 30",
    type: "drug",
    group: "Faction",
    rarity: "Uncommon",
    tier: 1,
    description:
      "Gives Headshot King skill until restart. 8% Armor (reactive). -30% Health (Fentanyl). -25% Dehydration.",
    tags: ["Headshot King", "Reactive armor"],
    image: "https://fromdafiverbx.github.io/SecondCityRBX-Helper/Hydrocodone30.png",
    stats: { duration: "Until restart", effect: "Headshot king, reactive armor", weight: "0.05 kg" },
  },
  {
    id: "K2",
    name: "K2",
    type: "drug",
    group: "Faction",
    rarity: "Common",
    tier: 1,
    description:
      "+10% Damage Resistance for 300s. -20% Health (severe loss). Hallucinations for 300s.",
    tags: ["Damage resistance"],
    image: "https://fromdafiverbx.github.io/SecondCityRBX-Helper/K2.png",
    stats: { duration: "300s", effect: "Damage resistance, hallucinations", weight: "0.2 kg" },
  },
  {
    id: "Ketamine",
    name: "Ketamine",
    type: "drug",
    group: "Faction",
    rarity: "Rare",
    tier: 1,
    description:
      "+10% Damage Resistance for 300s. 15% Health Regen. Slowed movement for 300s. Disorientation for 300s.",
    tags: ["Damage resistance", "Health regen"],
    image: "https://fromdafiverbx.github.io/SecondCityRBX-Helper/Ketamine.png",
    stats: { duration: "300s", effect: "Damage resistance, health regen", weight: "0.1 kg" },
  },
  {
    id: "LSDAcid",
    name: "LSD (Acid)",
    type: "drug",
    group: "Faction",
    rarity: "Rare",
    tier: 1,
    description:
      "20% Health Regen. Reduced aim sway for 600s. -10% Speed for 600s. Visual distortion for 600s.",
    tags: ["Health regen", "Aim sway"],
    image: "https://fromdafiverbx.github.io/SecondCityRBX-Helper/LSDAcid.png",
    stats: { duration: "600s", effect: "Health regen, reduced aim sway", weight: "0.01 kg" },
  },
  {
    id: "MDMA",
    name: "MDMA",
    type: "drug",
    group: "Faction",
    rarity: "Rare",
    tier: 1,
    description:
      "Adrenaline Rush skill until restart. 50% Health Regen. -5% Health instantly. -15% Stamina Regen for 300s.",
    tags: ["Adrenaline Rush", "Health regen"],
    image: "https://fromdafiverbx.github.io/SecondCityRBX-Helper/MDMA.png",
    stats: { duration: "Until restart", effect: "Adrenaline rush, health regen", weight: "0.1 kg" },
  },
  {
    id: "Methamphetamine",
    name: "Methamphetamine",
    type: "drug",
    group: "Faction",
    rarity: "Epic",
    tier: 1,
    description:
      "+20% Run Speed for 420s. +25% Stamina Regen for 420s. -12% Health instantly. -30% Stamina Regen for 300s.",
    tags: ["Run speed", "Stamina"],
    image: "https://fromdafiverbx.github.io/SecondCityRBX-Helper/Methamphetamine.png",
    stats: { duration: "420s", effect: "Run speed, stamina regen", weight: "0.2 kg" },
  },
  {
    id: "OGKush",
    name: "OG Kush",
    type: "drug",
    group: "Faction",
    rarity: "Common",
    tier: 1,
    description:
      "+10 Melee Damage for 600s. +5% Damage Resistance for 600s. -5% Run Speed for 600s. Increased aim sway for 600s.",
    tags: ["Melee", "Damage resistance"],
    image: "https://fromdafiverbx.github.io/SecondCityRBX-Helper/OGKush.png",
    stats: { duration: "600s", effect: "Melee damage, damage resistance", weight: "0.3 kg" },
  },
  {
    id: "Opioids",
    name: "Opioids",
    type: "drug",
    group: "Faction",
    rarity: "Uncommon",
    tier: 1,
    description:
      "Gives Headshot King skill until restart. 8% Armor (reactive). -30% Health (Fentanyl). -25% Dehydration.",
    tags: ["Headshot King", "Reactive armor"],
    image: "https://fromdafiverbx.github.io/SecondCityRBX-Helper/Opioids.png",
    stats: { duration: "Until restart", effect: "Headshot king, reactive armor", weight: "0.1 kg" },
  },
  {
    id: "PurpleOxycodone",
    name: "Purple Oxycodone",
    type: "drug",
    group: "Faction",
    rarity: "Uncommon",
    tier: 1,
    description:
      "Gives Headshot King skill until restart. 8% Armor (reactive). -30% Health (Fentanyl). -25% Dehydration.",
    tags: ["Headshot King", "Reactive armor"],
    image: "https://fromdafiverbx.github.io/SecondCityRBX-Helper/PurpleOxycodone.png",
    stats: { duration: "Until restart", effect: "Headshot king, reactive armor", weight: "0.05 kg" },
  },
  {
    id: "Oxycodone",
    name: "Oxycodone",
    type: "drug",
    group: "Faction",
    rarity: "Common",
    tier: 1,
    description:
      "Gives Headshot King skill until restart. 8% Armor (reactive). -30% Health (Fentanyl). -25% Dehydration.",
    tags: ["Headshot King", "Reactive armor"],
    image: "https://fromdafiverbx.github.io/SecondCityRBX-Helper/Oxycodone.png",
    stats: { duration: "Until restart", effect: "Headshot king, reactive armor", weight: "0.05 kg" },
  },
  {
    id: "Oxycodone90",
    name: "Oxycodone 90",
    type: "drug",
    group: "Faction",
    rarity: "Rare",
    tier: 1,
    description:
      "Gives Headshot King skill until restart. 8% Armor (reactive). -30% Health (Fentanyl). -25% Dehydration.",
    tags: ["Headshot King", "Reactive armor"],
    image: "https://fromdafiverbx.github.io/SecondCityRBX-Helper/Oxycodone90.png",
    stats: { duration: "Until restart", effect: "Headshot king, reactive armor", weight: "0.05 kg" },
  },
  {
    id: "Oxycodons",
    name: "Oxycodons",
    type: "drug",
    group: "Faction",
    rarity: "Common",
    tier: 1,
    description:
      "Gives Headshot King skill until restart. 8% Armor (reactive). -30% Health (Fentanyl). -25% Dehydration.",
    tags: ["Headshot King", "Reactive armor"],
    image: "https://fromdafiverbx.github.io/SecondCityRBX-Helper/Oxycodons.png",
    stats: { duration: "Until restart", effect: "Headshot king, reactive armor", weight: "0.3 kg" },
  },
  {
    id: "PCP",
    name: "PCP",
    type: "drug",
    group: "Faction",
    rarity: "Rare",
    tier: 1,
    description:
      "+25% Melee Damage for 300s. +10% Damage Resistance for 300s. -15% Health instantly. Stamina drain for 300s.",
    tags: ["Melee", "Damage resistance"],
    image: "https://fromdafiverbx.github.io/SecondCityRBX-Helper/PCP.png",
    stats: { duration: "300s", effect: "Melee damage, damage resistance", weight: "0.1 kg" },
  },
  {
    id: "Percocet",
    name: "Percocet",
    type: "drug",
    group: "Faction",
    rarity: "Common",
    tier: 1,
    description:
      "Gives Headshot King skill until restart. 8% Armor (reactive). -30% Health (Fentanyl). -25% Dehydration.",
    tags: ["Headshot King", "Reactive armor"],
    image: "https://fromdafiverbx.github.io/SecondCityRBX-Helper/Percocet.png",
    stats: { duration: "Until restart", effect: "Headshot king, reactive armor", weight: "0.05 kg" },
  },
  {
    id: "PurpleHaze",
    name: "Purple Haze",
    type: "drug",
    group: "Faction",
    rarity: "Common",
    tier: 1,
    description:
      "+15% Health Regen. SpotEmGotEm skill until restart. Gets hungrier. Vehicle handling -5% for 600s.",
    tags: ["Health regen", "SpotEmGotEm"],
    image: "https://fromdafiverbx.github.io/SecondCityRBX-Helper/PurpleHaze.png",
    stats: { duration: "Until restart", effect: "Health regen, spotEmGotEm", weight: "0.3 kg" },
  },
  {
    id: "Shrooms",
    name: "Shrooms",
    type: "drug",
    group: "Faction",
    rarity: "Uncommon",
    tier: 1,
    description:
      "20% Health Regen. 5% Damage Resistance for 600s. Increased aim sway for 600s. Hallucinations for 600s.",
    tags: ["Health regen", "Damage resistance"],
    image: "https://fromdafiverbx.github.io/SecondCityRBX-Helper/Shrooms.png",
    stats: { duration: "600s", effect: "Health regen, damage resistance", weight: "0.1 kg" },
  },
  {
    id: "SourDiesel",
    name: "Sour Diesel",
    type: "drug",
    group: "Faction",
    rarity: "Common",
    tier: 1,
    description:
      "+5% Run Speed for 600s. +10% Stamina Regen for 600s. Stamina drains faster when sprinting. Mild blur for 600s.",
    tags: ["Run speed", "Stamina"],
    image: "https://fromdafiverbx.github.io/SecondCityRBX-Helper/SourDiesel.png",
    stats: { duration: "600s", effect: "Run speed, stamina regen", weight: "0.3 kg" },
  },
  {
    id: "Spice",
    name: "Spice",
    type: "drug",
    group: "Faction",
    rarity: "Common",
    tier: 1,
    description:
      "+10% Damage Resistance for 300s. -20% Health (severe loss). Hallucinations for 300s.",
    tags: ["Damage resistance"],
    image: "https://fromdafiverbx.github.io/SecondCityRBX-Helper/Spice.png",
    stats: { duration: "300s", effect: "Damage resistance, hallucinations", weight: "0.2 kg" },
  },
  {
    id: "SpongeBobs",
    name: "Spongebobs",
    type: "drug",
    group: "Faction",
    rarity: "Uncommon",
    tier: 1,
    description:
      "Adrenaline Rush skill until restart. 50% Health Regen. -5% Health instantly. -15% Stamina Regen for 300s.",
    tags: ["Adrenaline Rush", "Health regen"],
    image: "https://fromdafiverbx.github.io/SecondCityRBX-Helper/SpongeBobs.png",
    stats: { duration: "Until restart", effect: "Adrenaline rush, health regen", weight: "0.05 kg" },
  },
  {
    id: "Steroids",
    name: "Steroids",
    type: "drug",
    group: "Faction",
    rarity: "Rare",
    tier: 1,
    description:
      "+20% Melee Damage until restart. +10% Damage Resistance until restart. -15% Stamina Regen for 300s.",
    tags: ["Melee", "Damage resistance"],
    image: "https://fromdafiverbx.github.io/SecondCityRBX-Helper/Steroids.png",
    stats: { duration: "Until restart", effect: "Melee damage, damage resistance", weight: "0.2 kg" },
  },
  {
    id: "Supermans",
    name: "Supermans",
    type: "drug",
    group: "Faction",
    rarity: "Uncommon",
    tier: 1,
    description:
      "Adrenaline Rush skill until restart. 50% Health Regen. -5% Health instantly. -15% Stamina Regen for 300s.",
    tags: ["Adrenaline Rush", "Health regen"],
    image: "https://fromdafiverbx.github.io/SecondCityRBX-Helper/Supermans.png",
    stats: { duration: "Until restart", effect: "Adrenaline rush, health regen", weight: "0.05 kg" },
  },
  {
    id: "Telsas",
    name: "Telsas",
    type: "drug",
    group: "Faction",
    rarity: "Uncommon",
    tier: 1,
    description:
      "Adrenaline Rush skill until restart. 50% Health Regen. -5% Health instantly. -15% Stamina Regen for 300s.",
    tags: ["Adrenaline Rush", "Health regen"],
    image: "https://fromdafiverbx.github.io/SecondCityRBX-Helper/Telsas.png",
    stats: { duration: "Until restart", effect: "Adrenaline rush, health regen", weight: "0.05 kg" },
  },
  {
    id: "THCWax",
    name: "THC Wax",
    type: "drug",
    group: "Faction",
    rarity: "Common",
    tier: 1,
    description:
      "10% Health Regen. Reduced aim sway for 600s. -5% Speed for 600s. Stamina reduction for 600s.",
    tags: ["Health regen", "Aim sway"],
    image: "https://fromdafiverbx.github.io/SecondCityRBX-Helper/THCWax.png",
    stats: { duration: "600s", effect: "Health regen, reduced aim sway", weight: "0.05 kg" },
  },
  {
    id: "Whippets",
    name: "Whippets",
    type: "drug",
    group: "Faction",
    rarity: "Common",
    tier: 1,
    description:
      "+5% Speed burst for 120s. -20% Stamina Regen for 120s.",
    tags: ["Speed"],
    image: "https://fromdafiverbx.github.io/SecondCityRBX-Helper/Whippets.png",
    stats: { duration: "120s", effect: "Speed burst, stamina drop", weight: "0.1 kg" },
  },
  {
    id: "Xanax",
    name: "Xanax",
    type: "drug",
    group: "Faction",
    rarity: "Common",
    tier: 1,
    description:
      "100% Health Regen. 10% Health Regen. Makes you slower for 300s.",
    tags: ["Health regen", "Sedation"],
    image: "https://fromdafiverbx.github.io/SecondCityRBX-Helper/Xanax.png",
    stats: { duration: "300s", effect: "Health regen, slowed movement", weight: "0.05 kg" },
  },

    
  {
    id: "oxy",
    name: "Oxy Pills",
    type: "drug",
    rarity: "Common",
    tier: 1,
    description:
      "Basic pharmaceutical product for the street market. Low risk, low reward but easy to move through civilian contacts.",
    tags: ["Low risk", "Common supply"],
    stats: { duration: "15 min", effect: "Minor pain relief, slight disorientation", weight: "0.1 kg" },
  },
  {
    id: "cocaine",
    name: "Cocaine Bag",
    type: "drug",
    rarity: "Rare",
    tier: 2,
    description:
      "High-value white product with strong street demand. Requires careful transport due to police attention and rival faction interest.",
    tags: ["High value", "Hot product"],
    stats: { duration: "30 min", effect: "Heightened awareness, speed boost", weight: "0.3 kg" },
  },
  {
    id: "meth",
    name: "Meth Shard",
    type: "drug",
    rarity: "Epic",
    tier: 2,
    description:
      "Potent crystalline product with a complex production chain. High street value but draws significant law enforcement attention.",
    tags: ["Very high value", "Complex supply"],
    stats: { duration: "45 min", effect: "Extreme focus, stamina boost", weight: "0.2 kg" },
  },
  {
    id: "weed",
    name: "Weed Bag",
    type: "drug",
    rarity: "Common",
    tier: 1,
    description:
      "Low-tier green product. Easy to source and move, minimal penalties if caught. Good starter product for new runners.",
    tags: ["Easy to move", "Starter product"],
    stats: { duration: "20 min", effect: "Relaxation, slight slowdown", weight: "0.4 kg" },
  },
  {
    id: "Percocet30",
    name: "Percocet 30",
    type: "drug",
    rarity: "Uncommon",
    tier: 1,
    description:
      "Percocet 30mg pill. A strong dose that hits harder and lasts longer, popular with heavy users.",
    tags: ["Health regen", "Aim sway"],
    image: "https://fromdafiverbx.github.io/SecondCityRBX-Helper/perc30.png",
    stats: { duration: "300s", effect: "Health regen, reduced aim sway", weight: "0.01 kg" },
  },
{
  id: "ClearEXT",
  name: "Clear Extended Magazine",
  type: "attachment",
  rarity: "Rare",
  tier: 1,
  description: "A transparent, high‑capacity magazine built from reinforced polymer. Allows quick visual ammo checks and boosts sustained fire performance.",
  tags: ["Extended Mag", "Increased Capacity"],
  image: "https://fromdafiverbx.github.io/SecondCityRBX-Helper/ClearEXT.png", 
  stats: { 
    AtachType: "Magazine", 
    effect: "+5 Rounds, -5% Reload Speed", 
    weight: "0.45 kg" 
  },
},
  {
  id: "DrumMag",
  name: "Drum Magazine",
  type: "attachment",
  rarity: "Epic",
  tier: 1,
  description: "A high‑capacity drum magazine engineered for maximum sustained fire. Its reinforced housing ensures reliable feeding during extended engagements.",
  tags: ["Extended Mag", "Increased Capacity"],
  image: "https://fromdafiverbx.github.io/SecondCityRBX-Helper/DrumMag.png", 
  stats: { 
    AtachType: "Magazine", 
    effect: "+20 Rounds, -20% Reload Speed", 
    weight: "0.50 kg" 
  },
},
  {
  id: "RubberGrip",
  name: "Rubber Band Grip",
  type: "attachment",
  rarity: "Common",
  tier: 1,
  description: "A flexible rubber band grip that improves weapon stability and recoil control. Its textured surface provides a firm, reliable hold during rapid engagements.",
  tags: ["Grip", "Stability", "Control"],
  image: "https://fromdafiverbx.github.io/SecondCityRBX-Helper/RubberGrip.png",
  stats: {
    AtachType: "Grip",
    effect: "Reduced Weapon Sway, +10% Recoil Control",
    weight: "0.10 kg"
  },
},
  {
  id: "ColoredRubberGrip",
  name: "Colored Rubber Band Grip",
  type: "attachment",
  rarity: "Common",
  tier: 1,
  description: "A flexible rubber band grip that improves weapon stability and recoil control. Its textured surface provides a firm, reliable hold during rapid engagements.",
  tags: ["Grip", "Stability", "Control"],
  image: "https://fromdafiverbx.github.io/SecondCityRBX-Helper/ColoredRubberGrip.png",
  stats: {
    AtachType: "Grip",
    effect: "Reduced Weapon Sway, +10% Recoil Control",
    weight: "0.10 kg"
  },
},
];

export const getItemsByTier = (tier: 1 | 1.5 | 2): CatalogItem[] =>
  catalogItems.filter((item) => item.tier === tier);

export const getWeaponsByTier = (tier: 1 | 1.5 | 2): CatalogItem[] =>
  catalogItems.filter((item) => item.type === "weapon" && item.tier === tier);

export const getRandomItems = (pool: CatalogItem[], count: number): CatalogItem[] => {
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

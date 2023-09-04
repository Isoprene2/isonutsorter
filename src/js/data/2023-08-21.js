dataSetVersion = "2023-09-04"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by setting",
      key: "setting",
      tooltip: "Check these to only include characters from certain settings.",
      checked: false,
      sub: [
        { name: "Lilaverse (Test Reality, There, Limbo)", key: "lila" },
        { name: "SYOL", key: "syol" },
        { name: "Asthenopia", key: "asth" },
        { name: "RPG Hell", key: "rpg" },
        { name: "Siderea", key: "side" },
        { name: "Monster Defense Squad/Greater Underworld", key: "mds" },
        { name: "Princess Soul Ultimatum", key: "psu" },
        { name: "VN", key: "vn" },
        { name: "Hell College", key: "hell" },
        { name: "Heaven College", key: "heav" },
        { name: "Celestella", key: "cele" },
        { name: "Altirety/Interabang", key: "alt" },
        { name: "En2rety", key: "en2" },
        { name: "Al2rety", key: "al2" },
        { name: "Misc.", key: "misc" }
      ]
    },
  {
    name: "Filter by group",
      key: "group",
      tooltip: "Check these to only include characters of certain categories.",
      checked: false,
      sub: [
        { name: "Protagonists", key: "protag" },
        { name: "Meme Characters", key: "meme" },
        { name: "Superior Beings", key: "supb" },
        { name: "Oress Holders", key: "oress" },
        { name: "Them", key: "them" },
        { name: "Representatives", key: "rep" },
        { name: "Siderean Pantheon", key: "sidep" },
        { name: "Fanfernals/Ignis-Adjacent", key: "ignis" },
        { name: "Dicros", key: "dicro" }
      ]
    },
  {
    name: "Filter by notability",
      key: "notab",
      tooltip: "Check these to only include characters of certain levels of notability.",
      checked: false,
      sub: [
        { name: "Popular OCs", key: "pop" },
        { name: "Was in the Isonut Tournament", key: "tour" },
        { name: "Has a Toyhouse profile", key: "th" },
        { name: "Has been RPed with on Interrobang", key: "rp" },
        { name: "Relevant to the En2rety plot", key: "plot" }
      ]
    }
  ];
  
  dataSet[dataSetVersion].characterData = [
    {
      name: "Aquari",
      img: "Aquari.PNG",
      opts: {
        setting: ["side"],
        group: ["sidep"],
        notab: ["pop", "tour", "rp", "plot"]
      }
    },
    {
      name: "Arachne",
      img: "Arachne.PNG",
      opts: {
        setting: ["side"],
        group: ["sidep"],
        notab: ["rp", "plot"]
      }
    },
    {
      name: "Arietis",
      img: "Arietis.PNG",
      opts: {
        setting: ["side"],
        group: ["sidep"],
        notab: ["pop", "tour", "rp", "plot"]
      }
    },
    {
      name: "Cancri",
      img: "Cancri.PNG",
      opts: {
        setting: ["side"],
        group: ["sidep"],
        notab: ["rp"]
      }
    },
    {
      name: "Capricoris",
      img: "Capricoris.PNG",
      opts: {
        setting: ["side"],
        group: ["sidep"],
        notab: ["rp"]
      }
    },
    {
      name: "Cetia",
      img: "Cetia.PNG",
      opts: {
        setting: ["side"],
        group: ["sidep"],
        notab: ["pop", "tour", "rp"]
      }
    },
    {
      name: "Geminorum",
      img: "Geminorum.PNG",
      opts: {
        setting: ["side"],
        group: ["sidep"],
        notab: ["pop", "tour", "rp", "plot"]
      }
    },
    {
      name: "Leonis",
      img: "Leonis.PNG",
      opts: {
        setting: ["side"],
        group: ["sidep"],
        notab: ["tour", "rp"]
      }
    },
    {
      name: "Librae",
      img: "Librae.PNG",
      opts: {
        setting: ["side"],
        group: ["sidep"],
        notab: ["rp", "plot"]
      }
    },
    {
      name: "Piscium",
      img: "Piscium.PNG",
      opts: {
        setting: ["side"],
        group: ["sidep"],
        notab: ["pop", "rp", "plot"]
      }
    },
    {
      name: "Sagittaria",
      img: "Sagittaria.PNG",
      opts: {
        setting: ["side"],
        group: ["sidep"],
        notab: ["rp"]
      }
    },
    {
      name: "Scorpius",
      img: "Scorpius.PNG",
      opts: {
        setting: ["side"],
        group: ["protag", "sidep"],
        notab: ["pop", "tour", "rp", "plot"]
      }
    },
    {
      name: "Serpentarius",
      img: "Serpentarius.PNG",
      opts: {
        setting: ["side"],
        group: ["sidep"],
        notab: ["rp"]
      }
    },
    {
      name: "Spes",
      img: "Spes.PNG",
      opts: {
        setting: ["side"],
        group: ["meme"],
        notab: ["pop", "tour", "rp", "plot"]
      }
    },
    {
      name: "Tauri",
      img: "Tauri.PNG",
      opts: {
        setting: ["side"],
        group: ["sidep"],
        notab: ["rp"]
      }
    },
    {
      name: "Virginis",
      img: "Virginis.PNG",
      opts: {
        setting: ["side"],
        group: ["sidep"],
        notab: ["rp"]
      }
    }
  ]

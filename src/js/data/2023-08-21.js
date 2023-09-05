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
        { name: "Antagonists", key: "antag" },
        { name: "Meme Characters", key: "meme" },
        { name: "Superior Beings", key: "supb" },
        { name: "Oress Holders", key: "oress" },
        { name: "Them", key: "them" },
        { name: "Representatives", key: "reps" },
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
        { name: "Was in the Isonut Tournament", key: "tourn" },
        { name: "Has a Toyhouse profile", key: "th" },
        { name: "Has been RPed with on Interrobang", key: "rp" },
        { name: "Relevant to the En2rety plot", key: "plot" }
      ]
    }
  ];
  
  dataSet[dataSetVersion].characterData = [
    {
      name: "2cro",
      img: "2cro.PNG",
      opts: {
        setting: ["misc"],
        group: ["ignis", "dicro"],
        notab: ["th", "rp"]
      }
    },
    {
      name: "2leris",
      img: "2leris.PNG",
      opts: {
        setting: ["en2"],
        group: [],
        notab: ["rp", "plot"]
      }
    },
    {
      name: "2nny/Expurgitor",
      img: "2nny.PNG",
      opts: {
        setting: ["en2"],
        group: ["meme"],
        notab: ["pop", "rp", "plot"]
      }
    },
    {
      name: "Abilene Sandoval",
      img: "Abilene.PNG",
      opts: {
        setting: ["psu"],
        group: [],
        notab: []
      }
    },
    {
      name: "Adhil",
      img: "Adhil.PNG",
      opts: {
        setting: ["heav"],
        group: [],
        notab: ["th", "rp"]
      }
    },
    {
      name: "Aedi Levon",
      img: "Aedi.PNG",
      opts: {
        setting: ["syol"],
        group: [],
        notab: ["pop", "th", "rp"]
      }
    },
    {
      name: "Aelle",
      img: "Aelle.PNG",
      opts: {
        setting: ["lila"],
        group: ["oress"],
        notab: []
      }
    },
    {
      name: "Aeoria Filarosa",
      img: "Aeoria.PNG",
      opts: {
        setting: ["mds"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Aeran Luscon",
      img: "Aeran.PNG",
      opts: {
        setting: ["syol"],
        group: ["antag"],
        notab: ["pop", "rp"]
      }
    },
    {
      name: "Aestatis Timoris",
      img: "Aesie.PNG",
      opts: {
        setting: ["hell"],
        group: [],
        notab: ["th"]
      }
    },
    {
      name: "Agate",
      img: "Agate.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Agatha Thales",
      img: "Agatha.PNG",
      opts: {
        setting: ["heav"],
        group: [],
        notab: ["rp", "th"]
      }
    },
    {
      name: "Agnes Marguerite",
      img: "Agnes.PNG",
      opts: {
        setting: ["misc"],
        group: [],
        notab: []
      }
    },
    {
      name: "Almach",
      img: "Almach.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Almandine Andesine",
      img: "Alma.PNG",
      opts: {
        setting: ["vn"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Alpheratz",
      img: "Alpheratz.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Altcro",
      img: "Altcro.PNG",
      opts: {
        setting: ["alt"],
        group: ["dicro"],
        notab: ["rp"]
      }
    },
    {
      name: "Altistra",
      img: "Altistra.PNG",
      opts: {
        setting: ["alt"],
        group: ["protag"],
        notab: ["rp"]
      }
    },
    {
      name: "Amazonia Zirconus",
      img: "Amazonia.PNG",
      opts: {
        setting: ["misc"],
        group: ["antag"],
        notab: ["th", "rp"]
      }
    },
    {
      name: "Amelano Vilifonz",
      img: "Amelano.PNG",
      opts: {
        setting: ["syol"],
        group: ["reps"],
        notab: []
      }
    },
    {
      name: "Ametrine Galena",
      img: "Ametrine.PNG",
      opts: {
        setting: ["vn"],
        group: [],
        notab: []
      }
    },
    {
      name: "Anacrusia Espirando",
      img: "Anacrusia.PNG",
      opts: {
        setting: ["mds"],
        group: ["protag"],
        notab: ["pop", "tourn", "rp"]
      }
    },
    {
      name: "Anbar",
      img: "Anbar.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: []
      }
    },
    {
      name: "Andromeda/Antarmada",
      img: "Andromeda.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: ["pop", "tourn", "rp", "plot"]
      }
    },
    {
      name: "Angele Cerusse",
      img: "Angele.PNG",
      opts: {
        setting: ["vn"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Angelica Harland",
      img: "Angelica.PNG",
      opts: {
        setting: ["psu"],
        group: [],
        notab: []
      }
    },
    {
      name: "Anisa",
      img: "Anisa.PNG",
      opts: {
        setting: ["alt"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Anthuria",
      img: "Anthuria.PNG",
      opts: {
        setting: ["heav"],
        group: [],
        notab: ["th"]
      }
    },
    {
      name: "Aoaea Gluttire",
      img: "Aoaea.PNG",
      opts: {
        setting: ["hell"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Aquari",
      img: "Aquari.PNG",
      opts: {
        setting: ["side"],
        group: ["sidep"],
        notab: ["pop", "tourn", "rp", "plot"]
      }
    },
    {
      name: "Ara Eselle",
      img: "Ara.PNG",
      opts: {
        setting: ["lila"],
        group: ["supb"],
        notab: ["pop", "tourn", "th", "rp", "plot"]
      }
    },
    {
      name: "Arachne",
      img: "Arachne.PNG",
      opts: {
        setting: ["side"],
        group: ["sidep"],
        notab: ["pop", "rp", "plot"]
      }
    },
    {
      name: "Arella",
      img: "Arella.PNG",
      opts: {
        setting: ["lila"],
        group: ["antag", "them"],
        notab: ["pop"]
      }
    },
    {
      name: "Ariadne",
      img: "Ariadne.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Ariel",
      img: "Ariel.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: []
      }
    },
    {
      name: "Arietis",
      img: "Arietis.PNG",
      opts: {
        setting: ["side"],
        group: ["sidep"],
        notab: ["pop", "tourn", "rp", "plot"]
      }
    },
    {
      name: "Arioso Volante",
      img: "Arioso.PNG",
      opts: {
        setting: ["mds"],
        group: [],
        notab: []
      }
    },
    {
      name: "Arode",
      img: "Arode.PNG",
      opts: {
        setting: ["lila"],
        group: ["oress"],
        notab: []
      }
    },
    {
      name: "Artemis",
      img: "Artemis.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: []
      }
    },
    {
      name: "Asclepius",
      img: "Asclepius.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: []
      }
    },
    {
      name: "Astor",
      img: "Astor.PNG",
      opts: {
        setting: ["misc"],
        group: [],
        notab: ["pop", "th", "rp"]
      }
    },
    {
      name: "Astraea",
      img: "Astraea.PNG",
      opts: {
        setting: ["side"],
        group: ["protag"],
        notab: []
      }
    },
    {
      name: "Astrid",
      img: "Astrid.PNG",
      opts: {
        setting: ["en2"],
        group: ["protag", "antag"],
        notab: ["pop", "tourn", "rp", "plot"]
      }
    },
    {
      name: "Atelobe",
      img: "Atelobe.PNG",
      opts: {
        setting: ["lila"],
        group: ["oress"],
        notab: []
      }
    },
    {
      name: "Augustine Mirevoix",
      img: "Augustine.PNG",
      opts: {
        setting: ["misc"],
        group: [],
        notab: ["th", "rp"]
      }
    },
    {
      name: "Aurelia Waters",
      img: "Aurelia.PNG",
      opts: {
        setting: ["psu"],
        group: [""],
        notab: ["rp"]
      }
    },
    {
      name: "Azior Blye",
      img: "Azior.PNG",
      opts: {
        setting: ["rpg"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Azrael",
      img: "Azrael.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: []
      }
    },
    {
      name: "Baldasarre Adarez",
      img: "Baldasarre.PNG",
      opts: {
        setting: ["misc"],
        group: ["protag"],
        notab: []
      }
    },
    {
      name: "Belau",
      img: "Belau.PNG",
      opts: {
        setting: ["misc"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Belinda Whittle",
      img: "Belinda.PNG",
      opts: {
        setting: ["psu"],
        group: ["antag"],
        notab: []
      }
    },
    {
      name: "Big Kani",
      img: "BigKani.PNG",
      opts: {
        setting: ["side"],
        group: ["meme"],
        notab: ["rp"]
      }
    },
    {
      name: "Blair Yamamoto",
      img: "Blair.PNG",
      opts: {
        setting: ["psu"],
        group: [],
        notab: []
      }
    },
    {
      name: "Blizume",
      img: "Blizume.PNG",
      opts: {
        setting: ["lila"],
        group: ["oress"],
        notab: []
      }
    },
    {
      name: "Bonnie",
      img: "Bonnie.PNG",
      opts: {
        setting: ["asth"],
        group: ["protag", "meme"],
        notab: ["pop", "tourn", "th", "rp"]
      }
    },
    {
      name: "Box-chan",
      img: "BoxChan.PNG",
      opts: {
        setting: ["misc"],
        group: ["meme", "ignis"],
        notab: ["pop", "tourn", "th", "rp"]
      }
    },
    {
      name: "Breccia Gabbrostea",
      img: "Breccia.PNG",
      opts: {
        setting: ["rpg"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Brossard Lewelyo",
      img: "Brossard.PNG",
      opts: {
        setting: ["misc"],
        group: ["protag"],
        notab: ["rp"]
      }
    },
    {
      name: "Bunny",
      img: "Bunny.PNG",
      opts: {
        setting: ["lila", "misc"],
        group: ["meme", "supb"],
        notab: ["pop", "tourn", "th", "rp", "plot"]
      }
    },
    {
      name: "Caelestis Elior",
      img: "Caelestis.PNG",
      opts: {
        setting: ["heav"],
        group: ["antag"],
        notab: ["rp"]
      }
    },
    {
      name: "Calando Morento",
      img: "Calando.PNG",
      opts: {
        setting: ["mds"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Calisto Fontana",
      img: "Calisto.PNG",
      opts: {
        setting: ["hell"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Calore",
      img: "Calore.PNG",
      opts: {
        setting: ["mds"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Cancri",
      img: "Cancri.PNG",
      opts: {
        setting: ["side"],
        group: ["sidep"],
        notab: ["pop", "rp"]
      }
    },
    {
      name: "Caprichronos",
      img: "Caprichronos.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Capricoris",
      img: "Capricoris.PNG",
      opts: {
        setting: ["side"],
        group: ["sidep"],
        notab: ["pop", "rp"]
      }
    },
    {
      name: "Carisel",
      img: "Carisel.PNG",
      opts: {
        setting: ["rpg"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Carnis",
      img: "Carnis.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: []
      }
    },
    {
      name: "Cashier",
      img: "Cashier.PNG",
      opts: {
        setting: ["misc"],
        group: ["meme"],
        notab: ["rp"]
      }
    },
    {
      name: "Cassie",
      img: "Cassie.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Castalinde",
      img: "Castalinde.PNG",
      opts: {
        setting: ["heav"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Catenata",
      img: "Catenata.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Catercro",
      img: "Catercro.PNG",
      opts: {
        setting: ["misc"],
        group: ["meme", "dicro"],
        notab: []
      }
    },
    {
      name: "Catia Macfadyena",
      img: "Catia.PNG",
      opts: {
        setting: ["heav"],
        group: [],
        notab: ["th", "rp"]
      }
    },
    {
      name: "Cecilia Siegel",
      img: "Cecilia.PNG",
      opts: {
        setting: ["psu"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Cel Entria",
      img: "Cel.PNG",
      opts: {
        setting: ["lila"],
        group: ["protag", "oress"],
        notab: ["pop", "tourn", "th", "rp", "plot"]
      }
    },
    {
      name: "Celesca",
      img: "Celesca.PNG",
      opts: {
        setting: ["cele"],
        group: ["antag"],
        notab: ["th"]
      }
    },
    {
      name: "Celsa Charouse",
      img: "Celsa.PNG",
      opts: {
        setting: ["misc"],
        group: ["ignis"],
        notab: ["pop", "tourn", "rp"]
      }
    },
    {
      name: "Celt",
      img: "Celt.PNG",
      opts: {
        setting: ["alt"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Celthe",
      img: "Celthe.PNG",
      opts: {
        setting: ["asth"],
        group: [],
        notab: []
      }
    },
    {
      name: "Cendrillon",
      img: "Cendrillon.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: []
      }
    },
    {
      name: "Cenoir",
      img: "Cenoir.PNG",
      opts: {
        setting: ["lila"],
        group: ["oress"],
        notab: ["pop", "rp"]
      }
    },
    {
      name: "Ceri Etoile",
      img: "Ceri.PNG",
      opts: {
        setting: ["lila"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Cetia",
      img: "Cetia.PNG",
      opts: {
        setting: ["side"],
        group: ["sidep"],
        notab: ["pop", "tourn", "rp"]
      }
    },
    {
      name: "Chalcedony",
      img: "Chalcedony.PNG",
      opts: {
        setting: ["vn"],
        group: ["protag"],
        notab: ["pop", "th", "rp"]
      }
    },
    {
      name: "Chamuel/Camille",
      img: "Chamuel.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Charity Belle",
      img: "Charity.PNG",
      opts: {
        setting: ["misc"],
        group: ["meme"],
        notab: ["th"]
      }
    },
    {
      name: "Chaude Eclatant",
      img: "Chaude.PNG",
      opts: {
        setting: ["misc"],
        group: ["antag"],
        notab: ["rp"]
      }
    },
    {
      name: "Chaurus",
      img: "Chaurus.PNG",
      opts: {
        setting: ["hell"],
        group: ["ignis"],
        notab: ["pop", "tourn", "th", "rp", "plot"]
      }
    },
    {
      name: "Chelsea Martinez",
      img: "Chelsea.PNG",
      opts: {
        setting: ["hell"],
        group: [],
        notab: ["th", "rp"]
      }
    },
    {
      name: "Chiro Shiroiro",
      img: "Chiro.PNG",
      opts: {
        setting: ["syol"],
        group: ["reps"],
        notab: ["pop", "rp"]
      }
    },
    {
      name: "Chiron",
      img: "Chiron.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: []
      }
    },
    {
      name: "Chroncri",
      img: "Chroncri.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Chrysomallos",
      img: "Chrysomallos.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: []
      }
    },
    {
      name: "Ciess",
      img: "Ciess.PNG",
      opts: {
        setting: ["lila"],
        group: ["oress"],
        notab: ["pop", "tourn", "rp"]
      }
    },
    {
      name: "Clevae",
      img: "Clevae.PNG",
      opts: {
        setting: ["lila"],
        group: ["them"],
        notab: ["rp"]
      }
    },
    {
      name: "Cora Entria",
      img: "Cora.PNG",
      opts: {
        setting: ["lila"],
        group: ["antag", "oress"],
        notab: ["pop", "rp"]
      }
    },
    {
      name: "Coris",
      img: "Coris.PNG",
      opts: {
        setting: ["al2"],
        group: ["protag", "dicro"],
        notab: ["pop", "tourn", "rp"]
      }
    },
    {
      name: "Geminorum",
      img: "Geminorum.PNG",
      opts: {
        setting: ["side"],
        group: ["sidep"],
        notab: ["pop", "tourn", "rp", "plot"]
      }
    },
    {
      name: "Leonis",
      img: "Leonis.PNG",
      opts: {
        setting: ["side"],
        group: ["sidep"],
        notab: ["tourn", "rp"]
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
        notab: ["pop", "tourn", "rp", "plot"]
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
        notab: ["pop", "tourn", "rp", "plot"]
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

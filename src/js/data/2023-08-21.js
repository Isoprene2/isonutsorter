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
      name: "Corone Violaceus",
      img: "Corone.PNG",
      opts: {
        setting: ["heav"],
        group: [],
        notab: ["th", "rp"]
      }
    },
    {
      name: "Cosimo Gualtier",
      img: "Cosimo.PNG",
      opts: {
        setting: ["misc"],
        group: ["dicro"],
        notab: []
      }
    },
    {
      name: "Cressula Fairouz",
      img: "Cressula.PNG",
      opts: {
        setting: ["hell"],
        group: [],
        notab: ["th"]
      }
    },
    {
      name: "Crona",
      img: "Crona.PNG",
      opts: {
        setting: ["lila"],
        group: ["oress"],
        notab: []
      }
    },
    {
      name: "Crucifera Bishopi",
      img: "Crucifera.PNG",
      opts: {
        setting: ["hell"],
        group: [],
        notab: ["th", "rp"]
      }
    },
    {
      name: "Dakota Warren",
      img: "Dakota.PNG",
      opts: {
        setting: ["psu"],
        group: [],
        notab: []
      }
    },
    {
      name: "Danica Leclair",
      img: "Danica.PNG",
      opts: {
        setting: ["psu"],
        group: [],
        notab: []
      }
    },
    {
      name: "Datura",
      img: "Datura.PNG",
      opts: {
        setting: ["side"],
        group: ["ignis"],
        notab: ["rp"]
      }
    },
    {
      name: "Dauphine Nacreous",
      img: "Dauphine.PNG",
      opts: {
        setting: ["heav"],
        group: [],
        notab: ["th", "rp"]
      }
    },
    {
      name: "Deius Noceur",
      img: "Deius.PNG",
      opts: {
        setting: ["misc"],
        group: ["protag"],
        notab: ["pop", "th", "rp"]
      }
    },
    {
      name: "Demon Hands McGee",
      img: "DemonHandsMcGee.PNG",
      opts: {
        setting: ["side"],
        group: ["meme"],
        notab: ["rp"]
      }
    },
    {
      name: "Desima Vespus",
      img: "Desima.PNG",
      opts: {
        setting: ["hell"],
        group: [],
        notab: ["th"]
      }
    },
    {
      name: "Devon Rex Ailswen",
      img: "DevonRex.PNG",
      opts: {
        setting: ["hell"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Diaemus Desmodus",
      img: "DIaemus.PNG",
      opts: {
        setting: ["misc"],
        group: [],
        notab: ["th"]
      }
    },
    {
      name: "Dianthe Katriel",
      img: "Dianthe.PNG",
      opts: {
        setting: ["misc"],
        group: ["dicro"],
        notab: []
      }
    },
    {
      name: "Dicro Corrune",
      img: "Dicro.PNG",
      opts: {
        setting: ["lila"],
        group: ["protag", "ignis", "dicro"],
        notab: ["pop", "tourn", "th", "rp", "plot"]
      }
    },
    {
      name: "Dioclea Hexandra",
      img: "Dioclea.PNG",
      opts: {
        setting: ["hell"],
        group: ["ignis"],
        notab: ["pop", "tourn", "th", "rp"]
      }
    },
    {
      name: "Doctor Chainsaw",
      img: "DoctorChainsaw.PNG",
      opts: {
        setting: ["hell"],
        group: ["meme"],
        notab: ["pop", "rp"]
      }
    },
    {
      name: "Dulce-Malois Fandango",
      img: "DMF.PNG",
      opts: {
        setting: ["misc"],
        group: ["protag"],
        notab: ["rp"]
      }
    },
    {
      name: "Ea",
      img: "Ea.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: []
      }
    },
    {
      name: "Echelle",
      img: "Echelle.PNG",
      opts: {
        setting: ["misc"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Eirlys Wynne",
      img: "Eirlys.PNG",
      opts: {
        setting: ["hell"],
        group: [],
        notab: ["th", "rp"]
      }
    },
    {
      name: "Eirwen Berglund",
      img: "Eirwen.PNG",
      opts: {
        setting: ["psu"],
        group: [],
        notab: []
      }
    },
    {
      name: "Elemon Ohod",
      img: "Elemon.PNG",
      opts: {
        setting: ["syol"],
        group: ["reps"],
        notab: ["rp"]
      }
    },
    {
      name: "Eleutheria Parthenope",
      img: "Eleutheria.PNG",
      opts: {
        setting: ["heav"],
        group: [],
        notab: ["th"]
      }
    },
    {
      name: "Elmand",
      img: "Elmand.PNG",
      opts: {
        setting: ["lila"],
        group: ["oress"],
        notab: []
      }
    },
    {
      name: "Eloise Schuler",
      img: "Eloise.PNG",
      opts: {
        setting: ["psu"],
        group: ["antag"],
        notab: ["pop", "rp"]
      }
    },
    {
      name: "Emera",
      img: "Emera.PNG",
      opts: {
        setting: ["misc"],
        group: [],
        notab: []
      }
    },
    {
      name: "Endael/Elliot Andeville",
      img: "Endael.PNG",
      opts: {
        setting: ["asth"],
        group: ["protag"],
        notab: []
      }
    },
    {
      name: "Eo",
      img: "Eo.PNG",
      opts: {
        setting: ["asth"],
        group: ["protag"],
        notab: ["pop", "tourn", "th", "rp"]
      }
    },
    {
      name: "Erimentha Richmond",
      img: "Erimentha.PNG",
      opts: {
        setting: ["misc"],
        group: ["protag"],
        notab: ["rp"]
      }
    },
    {
      name: "Ernest Clarence",
      img: "Ernest.PNG",
      opts: {
        setting: ["misc"],
        group: [],
        notab: []
      }
    },
    {
      name: "Eros",
      img: "Eros.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Essery Revelin",
      img: "Essery.PNG",
      opts: {
        setting: ["misc"],
        group: ["dicro"],
        notab: ["rp"]
      }
    },
    {
      name: "Esva",
      img: "Esva.PNG",
      opts: {
        setting: ["al2"],
        group: [],
        notab: ["pop", "tourn", "th", "rp"]
      }
    },
    {
      name: "Eta Eridani",
      img: "Eta.PNG",
      opts: {
        setting: ["rpg"],
        group: [],
        notab: []
      }
    },
    {
      name: "Etoile Celestella",
      img: "Etoile.PNG",
      opts: {
        setting: ["cele"],
        group: ["protag"],
        notab: ["th", "rp"]
      }
    },
    {
      name: "Euanthe Audiveile",
      img: "Euanthe.PNG",
      opts: {
        setting: ["rpg"],
        group: [],
        notab: ["th", "rp"]
      }
    },
    {
      name: "Euphesme Misericordia",
      img: "Euphesme.PNG",
      opts: {
        setting: ["misc"],
        group: ["antag"],
        notab: ["th"]
      }
    },
    {
      name: "Euryhalia Nacreous",
      img: "Euryhalia.PNG",
      opts: {
        setting: ["heav"],
        group: [],
        notab: []
      }
    },
    {
      name: "FFXIVcro",
      img: "FFXIVcro.PNG",
      opts: {
        setting: ["misc"],
        group: ["meme", "dicro"],
        notab: ["rp"]
      }
    },
    {
      name: "FLO",
      img: "FLO.PNG",
      opts: {
        setting: ["misc"],
        group: ["supb"],
        notab: ["pop", "tourn", "rp"]
      }
    },
    {
      name: "Felicity Gottschalk",
      img: "Felicity.PNG",
      opts: {
        setting: ["heav"],
        group: [],
        notab: ["th", "rp"]
      }
    },
    {
      name: "Felina Boteille",
      img: "Felina.PNG",
      opts: {
        setting: ["misc"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Filael",
      img: "Filael.PNG",
      opts: {
        setting: ["asth"],
        group: [],
        notab: []
      }
    },
    {
      name: "Flann Fennella",
      img: "Flann.PNG",
      opts: {
        setting: ["syol"],
        group: ["reps"],
        notab: ["pop", "tourn", "th", "rp"]
      }
    },
    {
      name: "Floor Slut/Flory",
      img: "FloorSlut.PNG",
      opts: {
        setting: ["misc"],
        group: ["antag", "meme"],
        notab: ["pop", "tourn", "rp"]
      }
    },
    {
      name: "Flyri",
      img: "Flyri.PNG",
      opts: {
        setting: ["lila"],
        group: ["oress"],
        notab: []
      }
    },
    {
      name: "Fray",
      img: "Fray.PNG",
      opts: {
        setting: ["lila"],
        group: [],
        notab: ["pop", "th", "rp", "plot"]
      }
    },
    {
      name: "Fredericks",
      img: "Fredericks.PNG",
      opts: {
        setting: ["lila"],
        group: [],
        notab: []
      }
    },
    {
      name: "Frenzael Bon Moel",
      img: "Frenzael.PNG",
      opts: {
        setting: ["side", "misc"],
        group: ["supb", "dicro"],
        notab: ["pop", "tourn", "th", "rp", "plot"]
      }
    },
    {
      name: "Fyel",
      img: "Fyel.PNG",
      opts: {
        setting: ["lila"],
        group: ["oress"],
        notab: []
      }
    },
    {
      name: "GSGal",
      img: "GSGal.PNG",
      opts: {
        setting: ["misc"],
        group: ["meme"],
        notab: []
      }
    },
    {
      name: "Gabriel",
      img: "Gabriel.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Ganymede",
      img: "Ganymede.PNG",
      opts: {
        setting: ["side", "hell"],
        group: [],
        notab: ["pop", "tourn", "th", "rp", "plot"]
      }
    },
    {
      name: "Gauss Azimech",
      img: "Gauss.PNG",
      opts: {
        setting: ["rpg"],
        group: ["antag"],
        notab: []
      }
    },
    {
      name: "Gehenael",
      img: "Gehenael.PNG",
      opts: {
        setting: ["asth"],
        group: [],
        notab: []
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
      name: "Gerlinde Gabbrostea",
      img: "Gerlinde.PNG",
      opts: {
        setting: ["rpg", "hell"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Glaucio Deseronto",
      img: "Glaucio.PNG",
      opts: {
        setting: ["misc"],
        group: ["dicro"],
        notab: ["rp"]
      }
    },
    {
      name: "Granatum",
      img: "Granatum.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: []
      }
    },
    {
      name: "Guindet",
      img: "Guindet.PNG",
      opts: {
        setting: ["lila"],
        group: ["oress"],
        notab: []
      }
    },
    {
      name: "Gulisa",
      img: "Gulisa.PNG",
      opts: {
        setting: ["hell"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Hadris Torant",
      img: "Hadris.PNG",
      opts: {
        setting: ["syol"],
        group: ["protag", "antag"],
        notab: ["pop", "tourn", "th", "rp"]
      }
    },
    {
      name: "Hal",
      img: "Hal.PNG",
      opts: {
        setting: ["hell"],
        group: ["ignis"],
        notab: ["th", "rp"]
      }
    },
    {
      name: "Halatia Drosophil",
      img: "Halatia.PNG",
      opts: {
        setting: ["heav"],
        group: [],
        notab: ["th"]
      }
    },
    {
      name: "Halim",
      img: "Halim.PNG",
      opts: {
        setting: ["en2"],
        group: ["ignis"],
        notab: ["pop", "rp", "plot"]
      }
    },
    {
      name: "Halyn",
      img: "Halyn.PNG",
      opts: {
        setting: ["lila"],
        group: [],
        notab: ["pop", "tourn", "rp", "plot"]
      }
    },
    {
      name: "Hamal",
      img: "Hamal.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Hania Anginn",
      img: "Hania.PNG",
      opts: {
        setting: ["misc"],
        group: [],
        notab: ["th"]
      }
    },
    {
      name: "Haniel",
      img: "Haniel.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: []
      }
    },
    {
      name: "Haplopelma Bishopi",
      img: "Pelma.PNG",
      opts: {
        setting: ["heav"],
        group: [],
        notab: ["th"]
      }
    },
    {
      name: "Harena Bichon",
      img: "Hare.PNG",
      opts: {
        setting: ["cele"],
        group: [],
        notab: ["th"]
      }
    },
    {
      name: "Haruto",
      img: "Haruto.PNG",
      opts: {
        setting: ["heav"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Hattie Cecile",
      img: "Hattie.PNG",
      opts: {
        setting: ["misc"],
        group: [],
        notab: ["th", "rp"]
      }
    },
    {
      name: "Hellscream",
      img: "Hellscream.PNG",
      opts: {
        setting: ["cele"],
        group: ["antag"],
        notab: ["th", "rp"]
      }
    },
    {
      name: "Her",
      img: "Her.PNG",
      opts: {
        setting: ["lila"],
        group: ["antag", "them"],
        notab: ["pop", "rp"]
      }
    },
    {
      name: "Herelia",
      img: "Herelia.PNG",
      opts: {
        setting: ["syol"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Hestael",
      img: "Hestael.PNG",
      opts: {
        setting: ["asth"],
        group: [],
        notab: []
      }
    },
    {
      name: "Hiemalis Timoris",
      img: "Hiemalis.PNG",
      opts: {
        setting: ["hell"],
        group: [],
        notab: ["th"]
      }
    },
    {
      name: "Hong Jing",
      img: "Jing.PNG",
      opts: {
        setting: ["hell"],
        group: [],
        notab: ["th", "rp"]
      }
    },
    {
      name: "Humilia",
      img: "Humilia.PNG",
      opts: {
        setting: ["side", "heav"],
        group: ["supb"],
        notab: ["pop", "tourn", "rp", "plot"]
      }
    },
    {
      name: "Icisa",
      img: "Icisa.PNG",
      opts: {
        setting: ["lila"],
        group: ["oress"],
        notab: []
      }
    },
    {
      name: "Ilnaine",
      img: "Ilnaine.PNG",
      opts: {
        setting: ["lila"],
        group: ["oress"],
        notab: []
      }
    },
    {
      name: "Indico Morion",
      img: "Indico.PNG",
      opts: {
        setting: ["vn"],
        group: ["antag"],
        notab: ["rp"]
      }
    },
    {
      name: "Irma Penrose",
      img: "Irma.PNG",
      opts: {
        setting: ["psu"],
        group: [],
        notab: []
      }
    },
    {
      name: "Iroha",
      img: "Iroha.PNG",
      opts: {
        setting: ["hell"],
        group: [],
        notab: []
      }
    },
    {
      name: "Isabella Palmer",
      img: "Isabella.PNG",
      opts: {
        setting: ["psu"],
        group: [],
        notab: []
      }
    },
    {
      name: "Isadorus",
      img: "Isadorus.PNG",
      opts: {
        setting: ["al2"],
        group: ["antag"],
        notab: ["pop", "tourn", "rp"]
      }
    },
    {
      name: "Isblau Cristata",
      img: "Isblau.PNG",
      opts: {
        setting: ["hell"],
        group: [],
        notab: ["th"]
      }
    },
    {
      name: "Ishtar",
      img: "Ishtar.PNG",
      opts: {
        setting: ["side"],
        group: ["antag"],
        notab: []
      }
    },
    {
      name: "Iskal",
      img: "Iskal.PNG",
      opts: {
        setting: ["cele"],
        group: [],
        notab: ["th"]
      }
    },
    {
      name: "Islette Paradisa",
      img: "Islette.PNG",
      opts: {
        setting: ["hell"],
        group: [],
        notab: ["th", "rp"]
      }
    },
    {
      name: "Istra",
      img: "Istra.PNG",
      opts: {
        setting: ["hell", "misc"],
        group: ["protag"],
        notab: ["pop", "tourn", "th", "rp", "plot"]
      }
    },
    {
      name: "Jacinth",
      img: "Jacinth.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: []
      }
    },
    {
      name: "Jacqueline Parrish",
      img: "Jacqueline.PNG",
      opts: {
        setting: ["hell"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Jophiel",
      img: "Jophiel.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: []
      }
    },
    {
      name: "Josmec",
      img: "Josmec.PNG",
      opts: {
        setting: ["lila"],
        group: ["antag", "oress"],
        notab: []
      }
    },
    {
      name: "Juniper Russell",
      img: "Juniper.PNG",
      opts: {
        setting: ["psu"],
        group: [],
        notab: []
      }
    },
    {
      name: "Justine Lusine",
      img: "Justine.PNG",
      opts: {
        setting: ["hell"],
        group: ["meme"],
        notab: ["th"]
      }
    },
    {
      name: "Kameila Carabaffe",
      img: "Kameila.PNG",
      opts: {
        setting: ["misc"],
        group: [],
        notab: ["th"]
      }
    },
    {
      name: "Kanon",
      img: "Kanon.PNG",
      opts: {
        setting: ["misc"],
        group: [],
        notab: ["th"]
      }
    },
    {
      name: "Karina Cirice",
      img: "Karina.PNG",
      opts: {
        setting: ["misc"],
        group: [],
        notab: ["th", "rp"]
      }
    },
    {
      name: "Karkinos",
      img: "Karkinos.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: []
      }
    },
    {
      name: "The Keeper of the Forbidden Knowledge of Victorius III",
      img: "Keepy.PNG",
      opts: {
        setting: ["hell", "al2"],
        group: ["meme"],
        notab: ["rp"]
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

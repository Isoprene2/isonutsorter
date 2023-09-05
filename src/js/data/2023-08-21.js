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
      img: "Agnes.png",
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
        notab: ["th", "rp"]
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
        notab: ["pop", "rp"]
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
        notab: ["pop", "tourn", "rp"]
      }
    },
    {
      name: "Angele Cerusse",
      img: "Angele.PNG",
      opts: {
        setting: ["vn"],
        group: [],
        notab: ["th", "rp"]
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
        notab: ["pop", "rp"]
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
      img: "Artemis.png",
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
        notab: ["th", "rp"]
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
        notab: ["th", "rp"]
      }
    },
    {
      name: "Belinda Whittle",
      img: "Belinda.PNG",
      opts: {
        setting: ["psu"],
        group: [],
        notab: []
      }
    },
    {
      name: "Big Kani",
      img: "BigKani.png",
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
        group: ["meme"],
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
      img: "Ernest.png",
      opts: {
        setting: ["misc"],
        group: [],
        notab: []
      }
    },
    {
      name: "Eros",
      img: "Eros.png",
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
      img: "FloorSlut.png",
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
        group: ["oress", "them"],
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
      name: "Judge Truly",
      img: "Truly.PNG",
      opts: {
        setting: ["lila"],
        group: ["them"],
        notab: ["rp"]
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
        setting: ["hell", "alt"],
        group: ["meme"],
        notab: ["rp"]
      }
    },
    {
      name: "Kenta Gluttire",
      img: "Kenta.PNG",
      opts: {
        setting: ["hell"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Khazael",
      img: "Khazael.PNG",
      opts: {
        setting: ["asth"],
        group: [],
        notab: []
      }
    },
    {
      name: "Ki",
      img: "Ki.PNG",
      opts: {
        setting: ["misc"],
        group: ["protag"],
        notab: ["pop", "rp"]
      }
    },
    {
      name: "Kilii",
      img: "Kilii.PNG",
      opts: {
        setting: ["lila"],
        group: ["them"],
        notab: ["pop"]
      }
    },
    {
      name: "Kinet",
      img: "Kinet.PNG",
      opts: {
        setting: ["lila"],
        group: ["oress"],
        notab: []
      }
    },
    {
      name: "Kleigh",
      img: "Kleigh.PNG",
      opts: {
        setting: ["lila"],
        group: ["oress"],
        notab: ["rp"]
      }
    },
    {
      name: "Koa Kealoha",
      img: "Koa.PNG",
      opts: {
        setting: ["psu"],
        group: [],
        notab: []
      }
    },
    {
      name: "Kyona",
      img: "Kyona.PNG",
      opts: {
        setting: ["hell"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Lacie Chou",
      img: "Lacie.PNG",
      opts: {
        setting: ["psu"],
        group: ["antag"],
        notab: ["rp"]
      }
    },
    {
      name: "Lacio Fontana",
      img: "Lacio.PNG",
      opts: {
        setting: ["hell"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Laejizhar Adarez",
      img: "Laejizhar.PNG",
      opts: {
        setting: ["misc"],
        group: [],
        notab: ["pop", "tourn", "th", "rp"]
      }
    },
    {
      name: "Laguaro",
      img: "Laguaro.PNG",
      opts: {
        setting: ["mds"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Langelotte Haemondias",
      img: "Langelotte.png",
      opts: {
        setting: ["misc"],
        group: [],
        notab: ["th"]
      }
    },
    {
      name: "Langer Raton/Chillybro",
      img: "Langer.PNG",
      opts: {
        setting: ["lila", "asth"],
        group: [],
        notab: ["pop", "th", "rp"]
      }
    },
    {
      name: "Laphystia",
      img: "Laphystia.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "LaPlata Costina",
      img: "LaPlata.PNG",
      opts: {
        setting: ["asth"],
        group: [],
        notab: ["th"]
      }
    },
    {
      name: "Larya Tayl",
      img: "Larya.PNG",
      opts: {
        setting: ["misc"],
        group: ["meme"],
        notab: ["pop", "tourn", "th", "rp"]
      }
    },
    {
      name: "Lattea",
      img: "Lattea.PNG",
      opts: {
        setting: ["heav", "alt"],
        group: [],
        notab: []
      }
    },
    {
      name: "Lausac Pardes",
      img: "Lausac.PNG",
      opts: {
        setting: ["syol"],
        group: ["reps"],
        notab: ["pop", "tourn", "th", "rp"]
      }
    },
    {
      name: "Lazulum",
      img: "Lazulum.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: []
      }
    },
    {
      name: "LeFleuris de Floraize",
      img: "LeFleuris.PNG",
      opts: {
        setting: ["syol"],
        group: ["reps"],
        notab: ["pop", "tourn", "th", "rp"]
      }
    },
    {
      name: "Lenore Blackwood",
      img: "Lenore.PNG",
      opts: {
        setting: ["psu"],
        group: [],
        notab: ["pop", "rp", "plot"]
      }
    },
    {
      name: "Leonis",
      img: "Leonis.PNG",
      opts: {
        setting: ["side"],
        group: ["sidep"],
        notab: ["pop", "tourn", "rp"]
      }
    },
    {
      name: "Lesni",
      img: "Lesni.PNG",
      opts: {
        setting: ["lila"],
        group: ["oress"],
        notab: []
      }
    },
    {
      name: "Leviathan",
      img: "Leviathan.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: []
      }
    },
    {
      name: "Li Sao",
      img: "LiSao.png",
      opts: {
        setting: ["misc"],
        group: ["antag"],
        notab: []
      }
    },
    {
      name: "Librae",
      img: "Librae.PNG",
      opts: {
        setting: ["side"],
        group: ["sidep"],
        notab: ["pop", "rp", "plot"]
      }
    },
    {
      name: "Lielvevasse Aureole",
      img: "Liel.PNG",
      opts: {
        setting: ["asth"],
        group: [],
        notab: []
      }
    },
    {
      name: "Lil Strawberry",
      img: "LilStrawberry.PNG",
      opts: {
        setting: ["alt"],
        group: ["meme"],
        notab: ["pop", "tourn", "th", "rp"]
      }
    },
    {
      name: "Lilita Vilveise",
      img: "Lilita.PNG",
      opts: {
        setting: ["misc"],
        group: ["protag"],
        notab: []
      }
    },
    {
      name: "Lirna",
      img: "Lirna.PNG",
      opts: {
        setting: ["lila"],
        group: ["oress"],
        notab: ["rp"]
      }
    },
    {
      name: "Loligo Anuwau",
      img: "Loligo.PNG",
      opts: {
        setting: ["syol"],
        group: ["reps"],
        notab: ["pop", "th"]
      }
    },
    {
      name: "Lonia Arral",
      img: "Lonia.PNG",
      opts: {
        setting: ["misc"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Ludovica Violante",
      img: "Ludovica.PNG",
      opts: {
        setting: ["hell"],
        group: [],
        notab: ["th", "rp"]
      }
    },
    {
      name: "Lun",
      img: "Lun.PNG",
      opts: {
        setting: ["lila"],
        group: [],
        notab: ["pop", "tourn", "rp"]
      }
    },
    {
      name: "Lureus Ailswen",
      img: "Lureus.PNG",
      opts: {
        setting: ["hell"],
        group: ["ignis"],
        notab: ["pop", "tourn", "th", "rp"]
      }
    },
    {
      name: "Lycianthes",
      img: "Lycianthes.PNG",
      opts: {
        setting: ["side"],
        group: ["ignis"],
        notab: ["tourn", "rp"]
      }
    },
    {
      name: "Lysis Persenche",
      img: "Lysis.PNG",
      opts: {
        setting: ["cele"],
        group: [],
        notab: ["th"]
      }
    },
    {
      name: "Maiex",
      img: "Maiex.PNG",
      opts: {
        setting: ["lila"],
        group: ["oress"],
        notab: ["rp"]
      }
    },
    {
      name: "Majriti",
      img: "Majriti.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Mango",
      img: "Mango.PNG",
      opts: {
        setting: ["misc"],
        group: ["meme"],
        notab: ["rp"]
      }
    },
    {
      name: "Mariellu",
      img: "Mariellu.PNG",
      opts: {
        setting: ["syol"],
        group: ["reps"],
        notab: []
      }
    },
    {
      name: "Marin",
      img: "Marin.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Mariol",
      img: "Mariol.PNG",
      opts: {
        setting: ["lila"],
        group: [],
        notab: ["pop", "rp"]
      }
    },
    {
      name: "Mate Tagi",
      img: "Mate.PNG",
      opts: {
        setting: ["lila"],
        group: ["them"],
        notab: []
      }
    },
    {
      name: "Meil",
      img: "Meil.PNG",
      opts: {
        setting: ["lila"],
        group: ["them"],
        notab: ["pop", "rp"]
      }
    },
    {
      name: "Melibella Mirifica",
      img: "Melibella.PNG",
      opts: {
        setting: ["heav"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Memen",
      img: "Memen.PNG",
      opts: {
        setting: ["syol"],
        group: ["antag"],
        notab: ["pop", "tourn", "th", "rp"]
      }
    },
    {
      name: "Memera",
      img: "Memera.PNG",
      opts: {
        setting: ["hell"],
        group: ["meme"],
        notab: ["rp"]
      }
    },
    {
      name: "Merah Muda",
      img: "Merah.PNG",
      opts: {
        setting: ["syol"],
        group: ["reps"],
        notab: ["rp"]
      }
    },
    {
      name: "Meredith Ulydine",
      img: "Meredith.PNG",
      opts: {
        setting: ["asth"],
        group: [],
        notab: []
      }
    },
    {
      name: "Metatron",
      img: "Metatron.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: ["pop", "rp"]
      }
    },
    {
      name: "Methysta",
      img: "Methysta.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: []
      }
    },
    {
      name: "Michael",
      img: "Michael.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: []
      }
    },
    {
      name: "Mikimi",
      img: "Mikimi.PNG",
      opts: {
        setting: ["lila"],
        group: ["oress"],
        notab: ["antag"]
      }
    },
    {
      name: "Millicent Malaise",
      img: "Millicent.PNG",
      opts: {
        setting: ["hell"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Mirach",
      img: "Mirach.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Mollweide Robinson",
      img: "Mollweide.PNG",
      opts: {
        setting: ["misc"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Monacha Passerine",
      img: "Monacha.PNG",
      opts: {
        setting: ["heav"],
        group: [],
        notab: ["th", "rp"]
      }
    },
    {
      name: "Monaz",
      img: "Monaz.PNG",
      opts: {
        setting: ["syol"],
        group: [],
        notab: ["th", "rp"]
      }
    },
    {
      name: "Mr. Fish",
      img: "MrFish.PNG",
      opts: {
        setting: ["lila"],
        group: ["meme"],
        notab: ["rp"]
      }
    },
    {
      name: "Mr. Sharpe",
      img: "MrSharpe.PNG",
      opts: {
        setting: ["heav", "misc"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Mulapin",
      img: "Mulapin.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Muri",
      img: "Muri.PNG",
      opts: {
        setting: ["lila"],
        group: ["them"],
        notab: ["tourn", "th", "rp"]
      }
    },
    {
      name: "Mycena Chlorophos",
      img: "Mycena.PNG",
      opts: {
        setting: ["heav"],
        group: [],
        notab: ["th"]
      }
    },
    {
      name: "Nashira",
      img: "Nashira.PNG",
      opts: {
        setting: ["misc"],
        group: [],
        notab: ["th", "rp"]
      }
    },
    {
      name: "Neladi",
      img: "Neladi.PNG",
      opts: {
        setting: ["lila"],
        group: ["oress"],
        notab: ["rp"]
      }
    },
    {
      name: "Nembus",
      img: "Nembus.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Nemea",
      img: "Nemea.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: []
      }
    },
    {
      name: "Nephele Adesso",
      img: "Nephele.PNG",
      opts: {
        setting: ["psu"],
        group: [],
        notab: []
      }
    },
    {
      name: "Neren",
      img: "Neren.PNG",
      opts: {
        setting: ["lila"],
        group: ["them"],
        notab: ["pop", "rp"]
      }
    },
    {
      name: "Nerissa Vance",
      img: "Nerissa.PNG",
      opts: {
        setting: ["psu"],
        group: [],
        notab: []
      }
    },
    {
      name: "Ne2e",
      img: "Ne2e.PNG",
      opts: {
        setting: ["en2"],
        group: ["ignis"],
        notab: ["rp", "plot"]
      }
    },
    {
      name: "Nette",
      img: "Nette.PNG",
      opts: {
        setting: ["lila"],
        group: ["protag", "ignis"],
        notab: ["pop", "tourn", "rp"]
      }
    },
    {
      name: "Nevica",
      img: "Nevica.PNG",
      opts: {
        setting: ["hell"],
        group: [],
        notab: []
      }
    },
    {
      name: "Nezthael",
      img: "Nezthael.PNG",
      opts: {
        setting: ["asth"],
        group: [],
        notab: []
      }
    },
    {
      name: "Nika Elaxi",
      img: "Nika.PNG",
      opts: {
        setting: ["lila"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Noblezza Cabaletta",
      img: "Noblezza.PNG",
      opts: {
        setting: ["mds"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Nolan Feoluce",
      img: "Nolan.PNG",
      opts: {
        setting: ["asth"],
        group: ["protag"],
        notab: ["th", "rp"]
      }
    },
    {
      name: "Nyctea Scandiacus",
      img: "Nyctea.PNG",
      opts: {
        setting: ["heav"],
        group: [],
        notab: ["tourn", "th", "rp"]
      }
    },
    {
      name: "Ochotnik",
      img: "Ochotnik.PNG",
      opts: {
        setting: ["cele"],
        group: [],
        notab: ["th"]
      }
    },
    {
      name: "Odette Mirifica",
      img: "Odette.PNG",
      opts: {
        setting: ["misc"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Ola Kata",
      img: "Ola.PNG",
      opts: {
        setting: ["lila"],
        group: ["them"],
        notab: ["rp"]
      }
    },
    {
      name: "Onlarue",
      img: "Onlarue.PNG",
      opts: {
        setting: ["lila"],
        group: ["oress"],
        notab: ["rp", "plot"]
      }
    },
    {
      name: "Onyx",
      img: "Onyx.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: []
      }
    },
    {
      name: "Ophiel Riend",
      img: "Ophiel.PNG",
      opts: {
        setting: ["rpg"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Opine Frazil",
      img: "Opine.PNG",
      opts: {
        setting: ["lila"],
        group: ["antag", "them"],
        notab: ["pop", "tourn", "th", "rp", "plot"]
      }
    },
    {
      name: "Orange",
      img: "Orange.PNG",
      opts: {
        setting: ["syol"],
        group: ["protag"],
        notab: ["pop", "tourn", "th", "rp"]
      }
    },
    {
      name: "Orchid",
      img: "Orchid.PNG",
      opts: {
        setting: ["en2"],
        group: ["antag", "ignis", "dicro"],
        notab: ["pop", "tourn", "th", "rp", "plot"]
      }
    },
    {
      name: "Orion",
      img: "Orion.PNG",
      opts: {
        setting: ["side", "alt"],
        group: ["antag"],
        notab: ["pop", "rp"]
      }
    },
    {
      name: "Ostinato Marziale",
      img: "Ostinato.PNG",
      opts: {
        setting: ["mds"],
        group: ["antag"],
        notab: ["pop", "tourn", "rp"]
      }
    },
    {
      name: "Ouranos",
      img: "Ouranos.PNG",
      opts: {
        setting: ["hell"],
        group: [],
        notab: []
      }
    },
    {
      name: "Ouray Nerau",
      img: "Ouray.PNG",
      opts: {
        setting: ["asth"],
        group: ["dicro"],
        notab: ["tourn", "th", "rp"]
      }
    },
    {
      name: "Patricia",
      img: "Patricia.PNG",
      opts: {
        setting: ["misc"],
        group: ["meme"],
        notab: []
      }
    },
    {
      name: "Peridot",
      img: "Peridot.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Perihelion",
      img: "Perihelion.PNG",
      opts: {
        setting: ["misc"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Perita Lachesis",
      img: "Perita.PNG",
      opts: {
        setting: ["misc"],
        group: ["dicro"],
        notab: ["rp"]
      }
    },
    {
      name: "Perseus",
      img: "Perseus.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: ["pop", "rp"]
      }
    },
    {
      name: "Phoebe",
      img: "Phoebe.PNG",
      opts: {
        setting: ["hell"],
        group: ["meme"],
        notab: ["th"]
      }
    },
    {
      name: "Pienna Soave",
      img: "Pienna.PNG",
      opts: {
        setting: ["mds"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Pierre Ciar",
      img: "Pierre.PNG",
      opts: {
        setting: ["lila"],
        group: ["meme"],
        notab: ["rp"]
      }
    },
    {
      name: "Piove Fontana",
      img: "Piove.PNG",
      opts: {
        setting: ["hell"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Piragua Melancia",
      img: "Pira.PNG",
      opts: {
        setting: ["hell"],
        group: [],
        notab: ["th"]
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
      name: "Pleris",
      img: "Pleris.PNG",
      opts: {
        setting: ["hell"],
        group: [],
        notab: ["pop", "tourn", "th", "rp"]
      }
    },
    {
      name: "Poe Blackwood",
      img: "Poe.PNG",
      opts: {
        setting: ["hell"],
        group: ["ignis"],
        notab: ["pop", "tourn", "th", "rp", "plot"]
      }
    },
    {
      name: "Poice",
      img: "Poice.PNG",
      opts: {
        setting: ["lila"],
        group: ["oress", "them"],
        notab: ["pop", "tourn", "rp"]
      }
    },
    {
      name: "Porphyra Sigal",
      img: "Porphyra.png",
      opts: {
        setting: ["misc"],
        group: ["antag"],
        notab: ["th", "rp"]
      }
    },
    {
      name: "Praecipula Meissa",
      img: "Praecipula.PNG",
      opts: {
        setting: ["rpg"],
        group: [],
        notab: []
      }
    },
    {
      name: "Primula Blumenthal",
      img: "Primula.PNG",
      opts: {
        setting: ["psu"],
        group: [],
        notab: []
      }
    },
    {
      name: "Prince",
      img: "Prince.PNG",
      opts: {
        setting: ["hell"],
        group: [],
        notab: []
      }
    },
    {
      name: "Priste",
      img: "Priste.PNG",
      opts: {
        setting: ["lila"],
        group: ["oress"],
        notab: ["rp"]
      }
    },
    {
      name: "Psitta Cifora",
      img: "Psitta.PNG",
      opts: {
        setting: ["heav"],
        group: [],
        notab: ["th"]
      }
    },
    {
      name: "Puervus Mirifica",
      img: "Puervus.PNG",
      opts: {
        setting: ["misc"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Qamar",
      img: "Qamar.PNG",
      opts: {
        setting: ["misc"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Quasea",
      img: "Quasea.PNG",
      opts: {
        setting: ["lila"],
        group: ["oress"],
        notab: []
      }
    },
    {
      name: "Quenael",
      img: "Quenael.PNG",
      opts: {
        setting: ["asth"],
        group: ["antag"],
        notab: []
      }
    },
    {
      name: "Raguel",
      img: "Raguel.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Raine",
      img: "Raine.PNG",
      opts: {
        setting: ["lila", "misc"],
        group: [],
        notab: []
      }
    },
    {
      name: "Raphael",
      img: "Raphael.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: []
      }
    },
    {
      name: "Raziel",
      img: "Raziel.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: []
      }
    },
    {
      name: "Remaelius Opal",
      img: "Remaelius.PNG",
      opts: {
        setting: ["heav"],
        group: [],
        notab: ["th"]
      }
    },
    {
      name: "Rhiannon Blanchard",
      img: "Rhiannon.PNG",
      opts: {
        setting: ["psu"],
        group: ["protag"],
        notab: []
      }
    },
    {
      name: "Rigel",
      img: "Rigel.PNG",
      opts: {
        setting: ["side"],
        group: ["antag"],
        notab: ["pop", "tourn", "rp"]
      }
    },
    {
      name: "Rize",
      img: "Rize.PNG",
      opts: {
        setting: ["misc"],
        group: [],
        notab: ["th", "rp"]
      }
    },
    {
      name: "Rizelia Lancoste",
      img: "Rizelia.PNG",
      opts: {
        setting: ["mds"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Rochelle Gabbrostea",
      img: "Rochelle.PNG",
      opts: {
        setting: ["rpg", "hell"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Rubato Veloce",
      img: "Rubato.PNG",
      opts: {
        setting: ["mds"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Ruby",
      img: "Ruby.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: []
      }
    },
    {
      name: "Saffar",
      img: "Saffar.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: []
      }
    },
    {
      name: "Sagittaria",
      img: "Sagittaria.PNG",
      opts: {
        setting: ["side"],
        group: ["sidep"],
        notab: ["pop", "rp"]
      }
    },
    {
      name: "Salsalat",
      img: "Salsalat.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Samh",
      img: "Samh.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Sandalphon",
      img: "Sandalphon.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: ["pop", "rp", "plot"]
      }
    },
    {
      name: "Sapphica",
      img: "Sapphica.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: []
      }
    },
    {
      name: "Sapphire Smith",
      img: "Sapphire.PNG",
      opts: {
        setting: ["psu"],
        group: [],
        notab: []
      }
    },
    {
      name: "Sarende Celaenis",
      img: "Sarende.PNG",
      opts: {
        setting: ["heav"],
        group: [],
        notab: ["th"]
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
      name: "Seems Wright",
      img: "Seems.PNG",
      opts: {
        setting: ["asth"],
        group: [],
        notab: ["th"]
      }
    },
    {
      name: "Seiten",
      img: "Seiten.PNG",
      opts: {
        setting: ["syol"],
        group: ["meme"],
        notab: ["pop", "tourn", "rp"]
      }
    },
    {
      name: "Semil Lunaled",
      img: "Semil.PNG",
      opts: {
        setting: ["misc"],
        group: [],
        notab: ["th"]
      }
    },
    {
      name: "Septicemia",
      img: "Septicemia.PNG",
      opts: {
        setting: ["syol"],
        group: ["reps"],
        notab: ["pop", "th"]
      }
    },
    {
      name: "Seraye Phaelin",
      img: "Seraye.PNG",
      opts: {
        setting: ["lila"],
        group: ["them"],
        notab: ["pop", "th", "rp"]
      }
    },
    {
      name: "Serpentarius",
      img: "Serpentarius.PNG",
      opts: {
        setting: ["side"],
        group: ["sidep"],
        notab: ["pop", "rp"]
      }
    },
    {
      name: "Shan",
      img: "Shan.PNG",
      opts: {
        setting: ["lila"],
        group: ["antag", "oress"],
        notab: ["pop", "tourn", "rp"]
      }
    },
    {
      name: "Sinhal Chatoyant",
      img: "Sinhal.PNG",
      opts: {
        setting: ["vn"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Sitar",
      img: "Sitar.PNG",
      opts: {
        setting: ["al2"],
        group: [],
        notab: []
      }
    },
    {
      name: "Soleil",
      img: "Soleil.PNG",
      opts: {
        setting: ["lila"],
        group: [],
        notab: ["pop", "th", "rp"]
      }
    },
    {
      name: "Sophisticated Tombstone",
      img: "Sophisticated Tombstone.PNG",
      opts: {
        setting: ["lila"],
        group: ["meme", "them"],
        notab: ["rp"]
      }
    },
    {
      name: "Spades",
      img: "Spades.PNG",
      opts: {
        setting: ["lila"],
        group: ["protag", "them", "dicro"],
        notab: ["pop", "tourn", "rp", "plot"]
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
      name: "SPRINKLES",
      img: "SPRINKLES.png",
      opts: {
        setting: ["lila"],
        group: ["meme", "them"],
        notab: ["pop", "tourn", "rp"]
      }
    },
    {
      name: "Stan",
      img: "Stan.PNG",
      opts: {
        setting: ["lila"],
        group: ["them"],
        notab: ["pop", "tourn", "rp"]
      }
    },
    {
      name: "Stefan Faran",
      img: "Stefan.PNG",
      opts: {
        setting: ["misc"],
        group: ["protag"],
        notab: ["th", "rp"]
      }
    },
    {
      name: "Sytel",
      img: "Sytel.PNG",
      opts: {
        setting: ["lila"],
        group: ["oress"],
        notab: []
      }
    },
    {
      name: "Tagetes/The Haruspex",
      img: "Tagetes.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Tauri",
      img: "Tauri.PNG",
      opts: {
        setting: ["side"],
        group: ["sidep"],
        notab: ["pop", "rp"]
      }
    },
    {
      name: "Theocritus",
      img: "Theocritus.PNG",
      opts: {
        setting: ["misc"],
        group: ["protag"],
        notab: ["th", "rp"]
      }
    },
    {
      name: "Thyx",
      img: "Thyx.PNG",
      opts: {
        setting: ["lila"],
        group: ["meme", "oress"],
        notab: ["pop", "tourn", "th", "rp"]
      }
    },
    {
      name: "Tigel Smith",
      img: "Tigel.PNG",
      opts: {
        setting: ["asth"],
        group: ["protag"],
        notab: ["th"]
      }
    },
    {
      name: "Tintra Nekiri",
      img: "Tintra.PNG",
      opts: {
        setting: ["lila"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Tomomi Fukuda",
      img: "Tomomi.PNG",
      opts: {
        setting: ["hell"],
        group: [],
        notab: ["th", "rp"]
      }
    },
    {
      name: "Topaz",
      img: "Topaz.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: []
      }
    },
    {
      name: "Trepein",
      img: "Trepein.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Trigger",
      img: "Trigger.PNG",
      opts: {
        setting: ["syol", "misc"],
        group: ["antag"],
        notab: ["pop", "tourn", "rp", "plot"]
      }
    },
    {
      name: "Tsubame Ueno",
      img: "Tsubame.PNG",
      opts: {
        setting: ["heav"],
        group: [],
        notab: ["th", "rp"]
      }
    },
    {
      name: "Tulippa",
      img: "Tulippa.PNG",
      opts: {
        setting: ["heav"],
        group: [],
        notab: ["th"]
      }
    },
    {
      name: "Tzila",
      img: "Tzila.PNG",
      opts: {
        setting: ["lila", "misc"],
        group: ["antag"],
        notab: ["rp"]
      }
    },
    {
      name: "Umbra Tear",
      img: "Umbra.PNG",
      opts: {
        setting: ["lila"],
        group: ["protag", "antag"],
        notab: ["pop", "tourn", "th", "rp", "plot"]
      }
    },
    {
      name: "Unzeh",
      img: "Unzeh.PNG",
      opts: {
        setting: ["lila"],
        group: ["antag", "oress"],
        notab: ["rp"]
      }
    },
    {
      name: "Uriel",
      img: "Uriel.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Valence Polix",
      img: "Valence.PNG",
      opts: {
        setting: ["syol"],
        group: ["reps"],
        notab: ["rp"]
      }
    },
    {
      name: "Valeria Ibarra",
      img: "Valeria.PNG",
      opts: {
        setting: ["psu"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Vanadin Brighella",
      img: "Vanadin.PNG",
      opts: {
        setting: ["heav"],
        group: [],
        notab: ["th"]
      }
    },
    {
      name: "Velutia Aurore",
      img: "Velutia.PNG",
      opts: {
        setting: ["misc"],
        group: [],
        notab: ["th", "rp"]
      }
    },
    {
      name: "Venith Tobette",
      img: "Venith.PNG",
      opts: {
        setting: ["syol"],
        group: ["reps"],
        notab: ["pop", "th", "rp"]
      }
    },
    {
      name: "Veritate",
      img: "Veritate.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Verity",
      img: "Verity.PNG",
      opts: {
        setting: ["lila"],
        group: ["antag"],
        notab: ["pop"]
      }
    },
    {
      name: "Vermelhar",
      img: "Vermelhar.png",
      opts: {
        setting: ["cele"],
        group: [],
        notab: ["th", "rp"]
      }
    },
    {
      name: "Vesuvael",
      img: "Vesuvael.PNG",
      opts: {
        setting: ["asth"],
        group: [],
        notab: []
      }
    },
    {
      name: "Via Solenne",
      img: "Via.PNG",
      opts: {
        setting: ["mds"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Virginis",
      img: "Virginis.PNG",
      opts: {
        setting: ["side"],
        group: ["sidep"],
        notab: ["pop", "rp"]
      }
    },
    {
      name: "Vitara",
      img: "Viatara.PNG",
      opts: {
        setting: ["lila"],
        group: ["oress", "them"],
        notab: ["pop"]
      }
    },
    {
      name: "Vitrail Alkester",
      img: "Vitrail.PNG",
      opts: {
        setting: ["rpg"],
        group: ["protag"],
        notab: ["pop", "tourn", "rp"]
      }
    },
    {
      name: "Vivace Legato",
      img: "Vivace.PNG",
      opts: {
        setting: ["mds"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Vivienne Alkester",
      img: "Vivienne.PNG",
      opts: {
        setting: ["rpg"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Vixis",
      img: "Vixis.PNG",
      opts: {
        setting: ["lila"],
        group: ["oress"],
        notab: []
      }
    },
    {
      name: "Vizelia Viviendela",
      img: "Vizelia.PNG",
      opts: {
        setting: ["misc"],
        group: [],
        notab: []
      }
    },
    {
      name: "Waleria Blithe",
      img: "Waleria.PNG",
      opts: {
        setting: ["misc"],
        group: [],
        notab: ["th", "rp"]
      }
    },
    {
      name: "Wistel",
      img: "Wistel.PNG",
      opts: {
        setting: ["lila"],
        group: ["oress"],
        notab: []
      }
    },
    {
      name: "Xinphael",
      img: "Xinphael.PNG",
      opts: {
        setting: ["asth"],
        group: [],
        notab: []
      }
    },
    {
      name: "Yenzhal",
      img: "Yenzhal.PNG",
      opts: {
        setting: ["hell"],
        group: [],
        notab: ["th", "rp"]
      }
    },
    {
      name: "Yeonghui Song",
      img: "Yeonghui.PNG",
      opts: {
        setting: ["psu"],
        group: [],
        notab: []
      }
    },
    {
      name: "Yurael",
      img: "Yurael.PNG",
      opts: {
        setting: ["asth"],
        group: [],
        notab: []
      }
    },
    {
      name: "Yuudai",
      img: "Yuudai.PNG",
      opts: {
        setting: ["hell"],
        group: [],
        notab: ["th", "rp"]
      }
    },
    {
      name: "Zadkiel",
      img: "Zadkiel.PNG",
      opts: {
        setting: ["side"],
        group: [],
        notab: []
      }
    },
    {
      name: "Zaniah Lesath",
      img: "Zaniah.PNG",
      opts: {
        setting: ["rpg"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Zephanie Sucrose",
      img: "Zephanie.PNG",
      opts: {
        setting: ["hell", "heav"],
        group: [],
        notab: ["th"]
      }
    },
    {
      name: "Zhirael",
      img: "Zhirael.PNG",
      opts: {
        setting: ["asth"],
        group: [],
        notab: ["pop", "th", "rp"]
      }
    },
    {
      name: "Zoe Stone",
      img: "Zoe.PNG",
      opts: {
        setting: ["psu"],
        group: [],
        notab: ["rp"]
      }
    },
    {
      name: "Zosime Versephon",
      img: "Zosime.PNG",
      opts: {
        setting: ["cele"],
        group: [],
        notab: ["th", "rp"]
      }
    },
  ]

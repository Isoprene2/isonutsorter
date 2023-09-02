dataSetVersion = "2023-09-01"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter out characters",
      key: "erp",
      tooltip: "Check this to restrict stuff",
      checked: false,
      sub: [
        { name: "Interrobang", key: "anti" },
        { name: "NaNoWriMo", key: "nano" }
      ]
    }
  ];
  
  dataSet[dataSetVersion].characterData = [
    {
      name: "Aquari",
      img: "Aquari.PNG",
      opts: {
        erp: [ "anti"]
      }
    },
    {
      name: "Arachne",
      img: "Arachne.PNG",
      opts: {
        erp: [ "anti"]
      }
    },
    {
      name: "Arietis",
      img: "Arietis.PNG",
      opts: {
        erp: [ "anti"]
      }
    },
    {
      name: "Cancri",
      img: "Capricoris.PNG",
      opts: {
        erp: [ "anti"]
      }
    },
    {
      name: "Capricoris",
      img: "Capricoris.PNG",
      opts: {
        erp: [ "anti"]
      }
    },
    {
      name: "Cetia",
      img: "cetia.PNG",
      opts: {
        erp: [ "anti"]
      }
    },
    {
      name: "Geminorum",
      img: "Geminorum.PNG",
      opts: {
        erp: [ "anti"]
      }
    },
    {
      name: "Leonis",
      img: "Leonis.PNG",
      opts: {
        erp: [ "anti"]
      }
    },
    {
      name: "Librae",
      img: "Librae.PNG",
      opts: {
        erp: [ "anti"]
      }
    },
    {
      name: "Piscium",
      img: "Piscium.PNG",
      opts: {
        game: ["nano"]
      }
    },
    {
      name: "Sagittaria",
      img: "Sagittaria.PNG",
      opts: {
        game: ["nano"]
      }
    },
    {
      name: "Scorpius",
      img: "Scorpius.PNG",
      opts: {
        game: ["nano"]
      }
    },
    {
      name: "Serpentarius",
      img: "Serpentarius.PNG",
      opts: {
        erp: [ "anti"]
      }
    },
    {
      name: "Spes",
      img: "Spes.PNG",
      opts: {
        erp: [ "anti"]
      }
    },
    {
      name: "Tauri",
      img: "Tauri.PNG",
      opts: {
        erp: [ "anti"]
      }
    },
    {
      name: "Virginis",
      img: "Virginis.PNG",
      opts: {
        erp: [ "anti"]
      }
    }
  ]

const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());
//-------------------------------------------------------------------//
var data;
var Flag = false;
//-------------------------------------------------------------------//

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "chantiers",
});

// **************************      Début Ouvriers           ************************
app.post("/create", (req, res) => {
  console.log(req.body);
 
  const NomOuvrier = req.body.NomOuvrier;
  const PrenomOuvrier = req.body.PrenomOuvrier;
  const Email = req.body.Email;
  const TelephoneOuv = req.body.TelephoneOuv;
  const AdrOuvrier = req.body.AdrOuvrier;
  const DateNaiOuvrier = req.body.DateNaiOuvrier;
  const motdePasse = req.body.motdePasse;

  db.query(
    "INSERT INTO OUVRIERS ( NomOuvrier, PrenomOuvrier, DateNaiOuvrier, Email,  AdrOuvrier,TelephoneOuv, motdePasse) VALUES (?,?,?,?,?,?,?) ",
    [ NomOuvrier, PrenomOuvrier, DateNaiOuvrier, Email, AdrOuvrier, TelephoneOuv, motdePasse],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/ouvriers", (req, res) => {
  let sql = "SELECT idOuvrier, NomOuvrier, PrenomOuvrier FROM ouvriers";
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/ouvriers/:idOuvrier", (req, res) => {
  const idOuvrier = req.params.idOuvrier;
  let sql = "SELECT * FROM ouvriers where idOuvrier = ?";
  db.query(sql, idOuvrier, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/update", (req, res) => {
  const idOuvrier = req.body.idOuvrier;
  const Telephone = req.body.Telephone;
  db.query(
    "UPDATE OUVRIERS SET Telephone = ? WHERE idOuvrier = ?",
    [Telephone, idOuvrier],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:idOuvrier", (req, res) => {
  const idOuvrier = req.params.idOuvrier;
  db.query("DELETE FROM OUVRIERS WHERE idOuvrier = ?", idOuvrier, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// **************************      Fin Ouvriers          ************************
// **************************      Début Equipements           ************************
app.post("/createEquipement", (req, res) => {
  console.log(req.body);
  const idEquipement = req.body.idEquipement;
  const dateInstall = req.body.dateInstall;
  const Libelle = req.body.Libelle;
  const Prix = req.body.Prix;
  db.query(
    "INSERT INTO equipements (idEquipement, dateInstall, Libelle, Prix ) VALUES (?,?,?,?) ",
    [idEquipement, dateInstall, Libelle, Prix],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/equipements", (req, res) => {
  db.query("SELECT * FROM equipements", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/updateEquipement", (req, res) => {
  const idEquipement = req.body.idEquipement;
  const Libelle = req.body.Libelle;
  db.query(
    "UPDATE equipements SET Libelle = ? WHERE idEquipement = ?",
    [Libelle, idEquipement],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/deleteEquipement/:idEquipement", (req, res) => {
  const idEquipement = req.params.idEquipement;
  db.query("DELETE FROM equipements WHERE idEquipement = ?", idEquipement, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// **************************      Fin Equipemetns       ************************ 
// **************************      Début Clients          ************************
app.post("/AjouterClient", (req, res) => {
  console.log(req.body);
  const idClient = req.body.idClient;
  const NomClient = req.body.NomClient;
  const PreClient = req.body.PreClient;
  const DateNaiClient = req.body.DateNaiClient;
  const Email = req.body.Email;
  const TelClient = req.body.TelClient;
  const password = req.body.password;



  db.query(
    "INSERT INTO clients (idClient, idChantier, NomClient, PreClient, DateNaiClient,	Email,	TelClient	, password ) VALUES (?,?,?,?,?,?,?,?)",
    [idClient, idChantier, NomClient, PreClient, DateNaiClient, Email, TelClient, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});
// Selectionner les clientss qui se trouvent dans la base de donnees
app.get("/Clients", (req, res) => {
  db.query("SELECT * FROM clients", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/updateClient", (req, res) => {
  const idClient = req.body.idClient;
  const TelClient = req.body.TelClient;
  db.query(
    "UPDATE clients SET TelClient = ? WHERE idClient = ?",
    [TelClient, idClient],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/deleteClient/:idClient", (req, res) => {
  const idClient = req.params.idClient;
  db.query("DELETE FROM clients WHERE idClient = ?", idClient, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
// **************************      Fin Clients           ************************
// **************************       Taches              ************************
app.post("/AjouterTache", (req, res) => {
  console.log(req.body);
  const idTache = req.body.idTache;
  const DescTache = req.body.DescTache;
  const dureeTache = req.body.dureeTache;



  db.query(
    "INSERT INTO Taches (idTache, DescTache, dureeTache	 ) VALUES (?,?,?)",
    [idTache, DescTache, dureeTache],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});
// Selectionner les teches qui se trouvent dans la base de donnees
app.get("/Taches", (req, res) => {
  db.query("SELECT * FROM taches", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.put("/updateTache", (req, res) => {
  const idTache = req.body.idTache;
  const dureeTache = req.body.dureeTache;
  db.query(
    "UPDATE taches SET dureeTache = ? WHERE idTache = ?",
    [dureeTache, idTache],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/deleteTache/:idTache", (req, res) => {
  const idTache = req.params.idTache;
  db.query("DELETE FROM taches WHERE idClient = ?", idTache, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
// **************************       fin Taches              ************************

// **************************      Début Chantiers           ************************
app.post("/createChantier", (req, res) => {
  console.log(req.body);
  const idChantier = req.body.idChantier;
  const idResponsable = req.body.idResponsable;
  const DescChantier = req.body.DescChantier;

  db.query(
    "INSERT INTO chantiers (idChantier, idResponsable, DescChantier) VALUES (?,?,?)",
    [idChantier, idResponsable, DescChantier],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/Chantiers", (req, res) => {
  db.query("SELECT * FROM chantiers", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


app.get("/Chantiers/:idChantier", (req, res) => {
  const idChantier = req.params.idChantier;
  let sql = "SELECT NomOuvrier, DescChantier FROM  ouvriers, chantiers WHERE ouvriers.idOuvrier = chantiers.idResponsable AND  chantiers.idChantier=? ";
  db.query(sql, idChantier, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/updateChantier", (req, res) => {
  const idChantier = req.body.idChantier;
  const DescChantier = req.body.DescChantier;
  db.query(
    "UPDATE chantiers SET DescChantier = ? WHERE idChantier = ?",
    [DescChantier, idChantier],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/deleteChantier/:idChantiers", (req, res) => {
  const idChantier = req.params.idChantier;
  db.query("DELETE FROM chantiers WHERE idChantier = ?", idChantier, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
// **************************      Fin Chantiers           ************************
// **************************      Début LOGIN           ************************
app.post("/Login", (req, res) => {
  const Email = req.body.Email;
  const motdePasse = req.body.motdePasse;

  let sql = `SELECT * FROM Ouvriers WHERE Email= ? AND motdePasse = ?`;
  let query = db.query(sql, [Email, motdePasse],
    (err, result) => {
      data = result[0];

      var struct;
      if (data !== undefined) {
        Flag = true;
      } else {
        Flag = false;
      };

      app.get("/", (req, res) => {
        if (Flag) {
          res.send({ indicator: true, data });
        }
        else {
          res.send({ indicator: false });
        }
      });

    }
  );
});


//-----------------------------------------------------------------------------//
app.post('/', (req, res) => {
  if (Flag) {
    res.send({ indicator: true });
    Flag = false;
  }
});

// **************************      Fin LOGIN           ************************

app.put('/ouvrierInfo', (req, res) => {
  const data = req.body;
  console.log(data.NomOuvrier);
  let sql = `UPDATE ouvriers SET NomOuvrier = ? , PrenomOuvrier = ? , DateNaiOuvrier = ? , AdrOuvrier = ? WHERE idOuvrier = ?`;
  let query = db.query(sql, [data.NomOuvrier, data.PrenomOuvrier, data.DateNaiOuvrier, data.AdrOuvrier, data.idOuvrier], (err, result) => {
    res.send(result);
  })
});
app.put('/ChantierInfo', (req, res) => {
  const data = req.body;
  console.log(data.idChantier);
  let sql = `UPDATE chantiers SET  idResponsable = ? , DescChantier = ?  WHERE idChantier = ?`;
  let query = db.query(sql, [data.idResponsable, data.DescChantier, data.idChantier], (err, result) => {
    res.send(result);
  })
});
const port = 8000;
app.listen(port, () => {
  console.log("Yey, your server is running on port " + port);
});


var toSend;
app.post("/OuvrierSearch", (req, res) => {
  const data = req.body;


  let sql = `SELECT * FROM ouvriers WHERE  NomOuvrier LIKE "%${data.toSend}%" OR PrenomOuvrier LIKE "%${data.toSend}%"`;

  let query = db.query(sql, (err, result) => {
    toSend = result;

    app.get("/Search", (req, res) => {
      res.send(toSend);
    });
  });
});


app.post("/ChantierSearch", (req, res) => {
  const data = req.body;


  let sql = `SELECT * FROM chantiers, ouvriers WHERE chantiers.idResponsable = idOuvrier OR ( DescChantier LIKE "%${data.toSend}%" or NomOuvrier LIKE "%${data.toSend}%" OR PrenomOuvrier LIKE "%${data.toSend}%")`;

  let query = db.query(sql, (err, result) => {
    toSend = result;

    app.get("/Search", (req, res) => {
      res.send(toSend);
    });
  });
});
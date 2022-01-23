
CREATE TABLE OUVRIERS (
    idOuvrier int(11) DEFAULT NULL AUTO_INCREMENT,
    NomOuvrier varchar(255) DEFAULT NULL,
    PrenomOuvrier varchar(255) DEFAULT NULL,
    DateNaiOuvrier date,
    Email varchar(255) DEFAULT NULL UNIQUE,
    AdrOuvrier varchar(500),
    TelephoneOuv varchar(255) DEFAULT NULL UNIQUE,
    motdePasse varchar(50),

    primary key(idOuvrier)
) ;

CREATE TABLE CHANTIERS (
    idChantier int(11) DEFAULT NULL AUTO_INCREMENT,
    idResponsable int(11) DEFAULT NULL,
    DescChantier VARCHAR(500),
    PRIMARY KEY(idChantier),
    FOREIGN KEY(idResponsable) REFERENCES OUVRIERS(idOuvrier) ON UPDATE NO ACTION ON DELETE NO ACTION

) ;



CREATE TABLE CLIENTS (
    idClient int(11) DEFAULT NULL AUTO_INCREMENT,
    NomClient varchar(255) DEFAULT NULL,
    PrenomClient varchar(255) DEFAULT NULL,
    DateNaiClient date DEFAULT NULL,
    EmailClient varchar(255) DEFAULT NULL UNIQUE,
    Telephone varchar(255) DEFAULT NULL UNIQUE,
    password varchar(80),

    PRIMARY KEY(idClient)
) ;

CREATE TABLE EQUIPEMENTS (
    idEquipement int(11) DEFAULT NULL AUTO_INCREMENT,
    dateInstall date DEFAULT NULL,
    Libelle varchar(500) DEFAULT NULL,
    Prix int(11) DEFAULT NULL,
    primary key(idEquipement)
) ;


CREATE TABLE SPECIALITES (
    idSpecialite int(11) DEFAULT NULL  AUTO_INCREMENT,
    NomSpecialite varchar(80) DEFAULT NULL,
    DescSpec varchar(500) DEFAULT NULL,
    PRIMARY KEY(idSpecialite)
) ;

CREATE TABLE TACHES (
    idTache int(11) DEFAULT NULL AUTO_INCREMENT,
    DescTache varchar(500) DEFAULT NULL,
    dureeTache varchar(255) DEFAULT NULL,
    PRIMARY key(idTache)
) ;





CREATE TABLE POSSEDER (
    dateInstall date DEFAULT null,
    idEquip int(11) DEFAULT NULL,
    idChant int(11) DEFAULT null,
    PRIMARY key (idChant, idEquip),
    FOREIGN KEY (idEquip) REFERENCES EQUIPEMENTS(idEquipement) ON UPDATE NO ACTION ON DELETE NO ACTION,
    FOREIGN KEY (idChant) REFERENCES Chantiers(idChantier) ON UPDATE NO ACTION ON DELETE NO ACTION
) ;



CREATE TABLE DECOUPER (
   dureeRealis date DEFAULT null,
    idTach int(11) DEFAULT NULL,
    idChant int(11) DEFAULT null,
    PRIMARY key (idChant, idTach),
    FOREIGN KEY (idTach) REFERENCES TACHES(idTache) ON UPDATE NO ACTION ON DELETE NO ACTION,
    FOREIGN KEY (idChant) REFERENCES Chantiers(idChantier) ON UPDATE NO ACTION ON DELETE NO ACTION

) ;


CREATE TABLE INTERVENIR (
    dateIntervention datetime DEFAULT CURRENT_TIMESTAMP,
    dateFin datetime DEFAULT NULL,
    idChant int(11) DEFAULT NULL,
    idOuv int(11) DEFAULT NULL,
    primary KEY(idChant, idOuv, dateIntervention),
    FOREIGN KEY (idChant) REFERENCES Chantiers(idChantier) ON UPDATE NO ACTION ON DELETE NO ACTION,
    FOREIGN key (idOuv) REFERENCES Ouvriers(idOuvrier) ON UPDATE NO ACTION ON DELETE NO ACTION
) ;



CREATE TABLE AVOIR (
    idOuv int(11) DEFAULT NULL,
    idSpec int(11) DEFAULT NULL,
    PRIMARY key(idOuv, idSpec),
    FOREIGN key (idOuv) REFERENCES Ouvriers(idOuvrier) ON UPDATE NO ACTION ON DELETE NO ACTION,
    FOREIGN KEY (idSpec) REFERENCES Specialites(idSpecialite) ON UPDATE NO ACTION ON DELETE NO ACTION
);

CREATE TABLE Demander(
    idClt int(11) DEFAULT null,
    idChant int(11) DEFAULT null,
    PRIMARY key(idClt, idChant),
    FOREIGN key (idClt) REFERENCES Clients(idClient) ON UPDATE NO ACTION ON DELETE NO ACTION,
    FOREIGN KEY (idChant) REFERENCES Chantiers(idChantier) ON UPDATE NO ACTION ON DELETE NO ACTION
);

insert into intervenir(dateFin, idChant, idOuv) values
('2020-12-01 23:10:23',1,3),
('2018-12-01 23:10:23',1,6),
('2017-12-01 23:10:23',3,5),
('2016-12-01 23:10:23',3,7),
('2013-12-01 23:10:23',3,3),
('2018-12-01 23:10:23',3,1),
('2022-12-01 23:10:23',4,7),
('2021-12-01 23:10:23',4,4),
('2018-12-01 23:10:23',4,6),
('2019-12-01 23:10:23',6,5),
('2019-12-01 23:10:23',6,4),
('2021-12-01 23:10:23',2,5),
('2021-12-01 23:10:23',2,3);
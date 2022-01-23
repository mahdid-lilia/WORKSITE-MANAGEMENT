-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 01, 2022 at 11:47 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `GESTION_DES_CHANTIERS`
--

-- --------------------------------------------------------

--
-- Table structure for table `CHANTIERS`
--

CREATE TABLE `CHANTIERS` (
  `idCHANTIER` int(11) DEFAULT NULL,
  `Responsable` varchar(255) DEFAULT NULL,
  `NomClient` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `CLIENTS`
--

CREATE TABLE `CLIENTS` (
  `idClients` int(11) DEFAULT NULL,
  `NomClient` varchar(255) DEFAULT NULL,
  `PrenomClient` varchar(255) DEFAULT NULL,
  `EmailClient` varchar(255) DEFAULT NULL,
  `Telephonecl` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `EQUIPEMENTS`
--

CREATE TABLE `EQUIPEMENTS` (
  `idEQUIPEMETS` int(11) DEFAULT NULL,
  `Libelle` varchar(255) DEFAULT NULL,
  `Prix` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `OUVRIERS`
--

CREATE TABLE `OUVRIERS` (
  `idOuvrier` int(11) DEFAULT NULL,
  `NomOuvrier` varchar(255) DEFAULT NULL,
  `PrenomOuvrier` varchar(255) DEFAULT NULL,
  `EmailOuvrier` varchar(255) DEFAULT NULL,
  `TelephoneOuv` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `OUVRIERS`
--

INSERT INTO `OUVRIERS` (`idOuvrier`, `NomOuvrier`, `PrenomOuvrier`, `EmailOuvrier`, `TelephoneOuv`) VALUES
(9203480, '233erw', 'sfsfsdf', 'hawur@gmail.com', '0987654321'),
(3, 'MEZDOUR', 'CHEIMA', 'CHEIMA@GMAIL.COM', '098765214');

-- --------------------------------------------------------

--
-- Table structure for table `SPECIALITES`
--

CREATE TABLE `SPECIALITES` (
  `idSpecialite` int(11) DEFAULT NULL,
  `NomSpecialite` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `TACHES`
--

CREATE TABLE `TACHES` (
  `idTache` int(11) DEFAULT NULL,
  `Responsable` varchar(255) DEFAULT NULL,
  `DureeTache` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

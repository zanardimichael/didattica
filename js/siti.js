// Per aggiungere un sito, copia un blocco dentro "siti" di una categoria.
// Per aggiungere una categoria, copia un blocco di primo livello.
// colore (categoria): primary, success, danger, warning, info, secondary, dark
// sottotitolo (categoria): facoltativo, mostrato sotto il titolo della sezione
// icona: nome di un'icona Bootstrap senza "bi-" (es. "laptop"), vedi https://icons.getbootstrap.com
//        In alternativa si puo' usare "emoji". Se ci sono entrambe vince "icona".
// Ogni sito puo' avere un proprio "colore", "icona" o "emoji" per sovrascrivere quelli della categoria.
// autore: facoltativo ("A cura di ...")
// inLavorazione: true per mostrare la card come "In lavorazione" con pulsante "Prossimamente" (il link e' ignorato)
// immagine: percorso in img/ (800x450 consigliato); se vuoto appare un segnaposto con l'icona.
const CATEGORIE = [
	{
		nome: "Informatica",
		sottotitolo: "",
		icona: "laptop",
		colore: "primary",
		siti: [
			{
				titolo: "Informatica e Reti di Comunicazione",
				descrizione: "Cos'è l'informatica, rappresentazione dei dati in digitale, reti e introduzione alla programmazione.",
				materia: "Informatica",
				classe: "1ª",
				autore: "Prof. Giuseppe Privitera",
				immagine: "",
				link: "https://profprivi.github.io/info_reti_prima/"
			},
			{
				titolo: "Scienze e Tecnologie Applicate",
				descrizione: "Dai circuiti alla programmazione dei microcontrollori: trasformare i segnali fisici in codice e progettazione di dispositivi interattivi.",
				materia: "STA",
				classe: "2ª",
				autore: "Prof. Daniele Riva e del Prof. Giuseppe Privitera",
				immagine: "",
				link: "https://profprivi.github.io/appunti_sta/"
			},
			{
				titolo: "Informatica",
				descrizione: "Python, oggetti, ESP32 e web: un percorso progressivo con laboratori ed esercizi.",
				materia: "Informatica",
				classe: "3ª",
				autore: "Prof. Gennaro Malafronte",
				immagine: "img/info_terza.webp",
				link: "https://malafronte.dev/info-terza/"
			},
			{
				titolo: "Informatica",
				descrizione: "C# avanzato, database, API e app .NET MAUI, con Python e FastAPI per il backend.",
				materia: "Informatica",
				classe: "4ª",
				autore: "Prof. Gennaro Malafronte",
				immagine: "img/info_quarta.webp",
				link: "https://malafronte.dev/info-quarta/"
			},
			{
				titolo: "Web Development",
				descrizione: "Architetture web, ASP.NET, Docker, cloud, SQL e sicurezza per l’esame di Stato.",
				materia: "Informatica",
				classe: "5ª",
				autore: "Prof. Gennaro Malafronte",
				immagine: "img/info_quinta.svg",
				link: "https://github.com/malafronte/web-dev-quinte"
			}
		]
	},
	{
		nome: "TPS",
		sottotitolo: "Tecnologie e Progettazione di Sistemi Informatici e di Telecomunicazioni",
		icona: "motherboard",
		colore: "danger",
		siti: [
			{
				titolo: "TPS Terza",
				descrizione: "",
				materia: "TPS",
				classe: "3ª",
				autore: "",
				immagine: "",
				inLavorazione: true
			},
			{
				titolo: "TPS Quarta",
				descrizione: "",
				materia: "TPS",
				classe: "4ª",
				autore: "",
				immagine: "",
				inLavorazione: true
			},
			{
				titolo: "Web Development e Web Services",
				descrizione: "HTML, CSS, JavaScript e Node.js",
				materia: "TPS",
				classe: "5ª",
				autore: "Prof. Michael Zanardi",
				immagine: "img/tps_quinta.jpg",
				link: "https://tpsquinta.zanardimichael.it/"
			}
		]
	}, {
		nome: "Sistemi e Reti",
		icona: "hdd-network",
		colore: "success",
		siti: [
			{
				titolo: "Sistemi Operativi",
				descrizione: "Sistemi Operativi: come funzionano e come sono strutturati - Windows e Linux",
				materia: "Sistemi e Reti",
				classe: "3ª",
				autore: "",
				immagine: "",
				inLavorazione: true
			},
			{
				titolo: "Sistemi e Reti",
				descrizione: "ISO/OSI, TCP/IP, Ethernet, IP Subnetting e comandi CISCO",
				materia: "Sistemi e Reti",
				classe: "4ª",
				autore: "",
				immagine: "",
				inLavorazione: true
			},
			{
				titolo: "Sistemi e Reti",
				descrizione: "Crittografia, VLAN, VPN e reti strutturate",
				materia: "Sistemi e Reti",
				classe: "5ª",
				autore: "",
				immagine: "",
				inLavorazione: true
			},
		]
	}
];

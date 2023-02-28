var etatChargement = function() {};

etatChargement.prototype = {
	
	preload: function() {
		
		barreChargement(this);
		
		// Chargement des images pour les lutins
		this.load.image( "porte2", dossierRacine + "ressources/images/porte2_ph.png");
		this.load.image( 'lutin', dossierRacine + 'ressources/images/nikocs.png' );
		this.load.image('plaque', dossierRacine + 'ressources/images/plaque.png');
		this.load.image('boite', dossierRacine + 'ressources/images/boite.png');
		this.load.image('mur', dossierRacine + 'ressources/images/mur.png');
		this.load.image('porte', dossierRacine + 'ressources/images/porte_ph.png');
		this.load.image('porteouvert2', dossierRacine + 'ressources/images/porteouvert2_ph.png');
		this.load.image('porteouvert', dossierRacine + 'ressources/images/porteouvert_ph.png');
		this.load.audio('plaque', dossierRacine + 'ressources/audio/plate.wav');
		this.load.image("niv1", dossierRacine + 'ressources/images/niv1.png');
		this.load.image("but1", dossierRacine + 'ressources/images/but1.png');
		this.load.image("but2", dossierRacine + 'ressources/images/but2.png');
		this.load.image("texO", dossierRacine + 'ressources/images/O.png');
		this.load.image("texD", dossierRacine + 'ressources/images/D.png');
		this.load.image("texY", dossierRacine + 'ressources/images/Y.png');
		this.load.image("texT", dossierRacine + 'ressources/images/T.png');
		this.load.image("texE", dossierRacine + 'ressources/images/E.png');
		this.load.image("texK", dossierRacine + 'ressources/images/K.png');
		this.load.image("Plchold", dossierRacine + 'ressources/images/ph.png');
		this.load.image("boiteTexte", dossierRacine + 'ressources/images/txtbx.png');
		this.load.image("bg", dossierRacine + 'ressources/images/lazy.png')
		this.load.image("niv2", dossierRacine + 'ressources/images/niv2.png');
		this.load.image("niv3", dossierRacine + 'ressources/images/niv3.png');
		
		
		
		

	},

	create: function() {
		
		// Ne pas modifier la ligne suivante
		this.state.start('etatMenu');
		
	}
	
}
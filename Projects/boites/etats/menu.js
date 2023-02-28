var choisiNieveau
var etatMenu = function () {};

etatMenu.prototype = {

    create: function () {
        //menu par amelia
        this.version = "Version 1.0";
        this.nomJeu = "Boîtes";
        this.message = "But: Met tout les boites sur les plaques avant que le temps s'écoule!";

        var texte = jeu.add.text(100, 100, this.version, {
            font: "30px verdana",
            fill: "#888"
        });
        var texte = jeu.add.text(450, 100, this.message, {
            font: "30px verdana",
            fill: "#FFFFFF"
        });
        var texte = jeu.add.text(1700, 100, this.nomJeu, {
            font: "30px verdana",
            fill: "#888"
        })


        //choisir niveau 1  
        var texte = jeu.add.text(450, 350, "Niveau 1", {
            font: "25px verdana",
            fill: "#FFFFFF"
        });
        this.arr_plan = jeu.add.image(350, 400, "niv1");
        this.arr_plan = jeu.add.image(375, 750, "but1");
        this.arr_plan = jeu.add.image(500, 760, "texO");

        //choisir niveau 2
        var texte = jeu.add.text(900, 350, "Niveau 2", {
            font: "25px verdana",
            fill: "#FFFFFF"
        });
        this.arr_plan = jeu.add.image(800, 400, "niv2");
        this.arr_plan = jeu.add.image(825, 750, "but1");
        this.arr_plan = jeu.add.image(950, 760, "texD");

        //choisir niveau 3
        var texte = jeu.add.text(1350, 350, "Niveau 3", {
            font: "25px verdana",
            fill: "#FFFFFF"
        });
        this.arr_plan = jeu.add.image(1225, 400, "niv3");
        this.arr_plan = jeu.add.image(1275, 750, "but1");
        this.arr_plan = jeu.add.image(1400, 760, "texY");

        //bouton retour
        this.arr_plan = jeu.add.image(100, 150, "but2");
        this.arr_plan = jeu.add.image(225, 160, "texK");
        jeu.add.text(100, 250, "Retour au menu", {
            font: "25px verdana",
            fill: "#FFFFFF"
        });


        //pour choisir le niveau dans le menu principal
        joueurs[0].manette.bO.onDown.add(this.choisirNiv, this);
        joueurs[0].manette.bO.onDown.add(this.demarrer, this);
        joueurs[0].manette.bD.onDown.add(this.choisirNiv2, this);
        joueurs[0].manette.bD.onDown.add(this.demarrer, this);
        joueurs[0].manette.bY.onDown.add(this.choisirNiv3, this);
        joueurs[0].manette.bY.onDown.add(this.demarrer, this);

        //retour au menu FANCY
        joueurs[0].manette.bT.onDown.add(this.menuQuitte, this);
        joueurs[0].manette.bE.onDown.add(this.menuNon, this);
        joueurs[0].manette.bK.onDown.add(this.retourMenu, this);
        
        

        // Ne pas supprimer la ligne suivante
        //joueurs[0].manette.bT.onDown.add(this.demarrer, this);

    },


    //fonctions pour choisir le niveau
    choisirNiv: function () {
        choisiNieveau = 1
    },

    choisirNiv2: function () {
        choisiNieveau = 2
    },

    choisirNiv3: function () {
        choisiNieveau = 3
    },

    // cette fonction remett tous les ellements de le menu
    menuNon: function () {
        jeu.add.sprite(0, 0, "bg")
        jeu.add.text(100, 100, this.version, {
            font: "30px verdana",
            fill: "#888"
        });
        jeu.add.text(450, 100, this.message, {
            font: "30px verdana",
            fill: "#FFFFFF"
        });
        jeu.add.text(1700, 100, this.nomJeu, {
            font: "30px verdana",
            fill: "#888"
        })
        jeu.add.text(450, 350, "Niveau 1", {
            font: "25px verdana",
            fill: "#FFFFFF"
        });
        this.arr_plan = jeu.add.image(350, 400, "niv1");
        this.arr_plan = jeu.add.image(375, 750, "but1");
        this.arr_plan = jeu.add.image(500, 760, "texO");
        jeu.add.text(900, 350, "Niveau 2", {
            font: "25px verdana",
            fill: "#FFFFFF"
        });
        this.arr_plan = jeu.add.image(800, 400, "niv2");
        this.arr_plan = jeu.add.image(825, 750, "but1");
        this.arr_plan = jeu.add.image(950, 760, "texD");
        jeu.add.text(1350, 350, "Niveau 3", {
            font: "25px verdana",
            fill: "#FFFFFF"
        });
        this.arr_plan = jeu.add.image(1225, 400, "niv3");
        this.arr_plan = jeu.add.image(1275, 750, "but1");
        this.arr_plan = jeu.add.image(1400, 760, "texY");
        this.arr_plan = jeu.add.image(100, 150, "but2");
        this.arr_plan = jeu.add.image(225, 160, "texK");
        jeu.add.text(100, 250, "Retour au menu", {
            font: "25px verdana",
            fill: "#FFFFFF"
        });
    },

    //cette fonction met un prompt pour quitter
    retourMenu: function () {
        jeu.add.sprite(650, 300, "boiteTexte");
        jeu.add.text(725, 350, "Êtes vous sur de quitter?", {
            font: '35px verdana',
            fill: '#FFFFFF'
        });
        jeu.add.sprite(725, 450, "but2")
        jeu.add.sprite(975, 450, "but2")
        jeu.add.sprite(1100, 460, "texE")
        jeu.add.sprite(850, 460, "texT")
        jeu.add.text(750, 600, "Oui", {
            font: '25px verdana',
            fill: "#FFFFFF"
        });
        jeu.add.text(1000, 600, "Non", {
            font: '25px verdana',
            fill: '#FFFFFF'
        });
        
    },
    //cette fonction quitte le jeu
    menuQuitte: function (){
      this.state.start('etatRecords')
    },

    demarrer: function () {

        // Ne pas modifier la ligne suivante
        this.state.start('etatJeu');

    }

};
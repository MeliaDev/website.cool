var etatJeu = function () {};

etatJeu.prototype = {

    create: function () {

        //les variables locales
        var murCalc = 0;
        this.numPlaque = 0;
        this.numJeu;
        this.sonPlaque = jeu.add.audio("plaque")

        //Activer les physics du jeu
        jeu.physics.startSystem(Phaser.Physics.ARCADE);

        //Les groupes utilisé pour la collision
        this.murGRP = jeu.add.physicsGroup(Phaser.Physics.ARCADE);;
        this.swiGRP = jeu.add.physicsGroup(Phaser.Physics.ARCADE);;
        this.boiteGRP = jeu.add.physicsGroup(Phaser.Physics.ARCADE);;
        this.porteouvertGRP = jeu.add.physicsGroup(Phaser.Physics.ARCADE);;
        this.porteGRP = jeu.add.physicsGroup(Phaser.Physics.ARCADE);;
        this.joueursGRP = jeu.add.physicsGroup(Phaser.Physics.ARCADE);;

        var couleurs = [0xFFFFFF, 0xFF0000, 0x00FF00, 0x0000FF];

        //Niveau 1 (PAR AMELIA)
        if (choisiNieveau === 1) {
            this.numJeu = 5;

            for (var i = 0; i < joueurs.length; i++) {
                joueurs[i].lutin = jeu.add.sprite(1000, 750, 'lutin');
                joueurs[i].lutin.tint = couleurs[i];
                this.joueursGRP.add(joueurs[i].lutin);
                joueurs[i].vitesse = 250;
            };

            //les murs et le layout
            murCalc = (700);
            for (let i = 0; i < 5; i++) {
                murCalc = (murCalc + 50);
                this.mur = jeu.add.sprite(murCalc, 800, 'mur');
                this.murGRP.add(this.mur);
                this.mur.body.immovable = true;
                this.mur.body.moves = false;
            };
            murCalc = (850);
            for (let i = 0; i < 7; i++) {
                murCalc = (murCalc - 50);
                this.mur = jeu.add.sprite(750, murCalc, 'mur');
                this.murGRP.add(this.mur);
                this.mur.body.immovable = true;
                this.mur.body.moves = false;
            };
            murCalc = (700);
            for (let i = 0; i < 3; i++) {
                murCalc = (murCalc + 50);
                this.mur = jeu.add.sprite(murCalc, 450, 'mur');
                this.murGRP.add(this.mur);
                this.mur.body.immovable = true;
                this.mur.body.moves = false;
            };
            murCalc = (850);
            for (let i = 0; i < 4; i++) {
                murCalc = (murCalc - 50);
                this.mur = jeu.add.sprite(1100, murCalc, 'mur');
                this.murGRP.add(this.mur);
                this.mur.body.immovable = true;
                this.mur.body.moves = false;
            };
            murCalc = (700);
            for (let i = 0; i < 6; i++) {
                murCalc = (murCalc - 50);
                this.mur = jeu.add.sprite(1050, murCalc, 'mur');
                this.murGRP.add(this.mur);
                this.mur.body.immovable = true;
                this.mur.body.moves = false;
            };
            murCalc = (1050);
            for (let i = 0; i < 4; i++) {
                murCalc = (murCalc - 50);
                this.mur = jeu.add.sprite(murCalc, 400, 'mur');
                this.murGRP.add(this.mur);
                this.mur.body.immovable = true;
                this.mur.body.moves = false;
            };
            murCalc = (750);
            for (let i = 0; i < 2; i++) {
                murCalc = (murCalc + 50);
                this.mur = jeu.add.sprite(murCalc, 550, 'mur');
                this.murGRP.add(this.mur);
                this.mur.body.immovable = true;
                this.mur.body.moves = false;
            };
            murCalc = (550);
            for (let i = 0; i < 2; i++) {
                murCalc = (murCalc + 50);
                this.mur = jeu.add.sprite(850, murCalc, 'mur');
                this.murGRP.add(this.mur);
                this.mur.body.immovable = true;
                this.mur.body.moves = false;
            };
            this.mur = jeu.add.sprite(900, 600, 'mur');
            this.murGRP.add(this.mur);
            this.mur.body.immovable = true;
            this.mur.body.moves = false;

            //les boites and les plaques de pressions
            this.plaque = jeu.add.sprite(800, 500, "plaque");
            this.swiGRP.add(this.plaque);
            this.plaque.body.immovable = true;
            this.plaque.body.moves = false;

            this.plaque = jeu.add.sprite(800, 600, "plaque");
            this.swiGRP.add(this.plaque);
            this.plaque.body.immovable = true;
            this.plaque.body.moves = false;

            this.plaque = jeu.add.sprite(950, 750, "plaque");
            this.swiGRP.add(this.plaque);
            this.plaque.body.immovable = true;
            this.plaque.body.moves = false;

            this.plaque = jeu.add.sprite(900, 650, "plaque");
            this.swiGRP.add(this.plaque);
            this.plaque.body.immovable = true;
            this.plaque.body.moves = false;

            this.plaque = jeu.add.sprite(1000, 550, "plaque");
            this.swiGRP.add(this.plaque);
            this.plaque.body.immovable = true;
            this.plaque.body.moves = false;

            for (let i = 0; i < 2; i++) {
                this.boite = jeu.add.sprite(900, 500, "boite")
                this.boiteGRP.add(this.boite);
                this.boite.body.immovable = false;
                this.boite.body.moves = true;
            };

            for (let i = 0; i < 2; i++) {
                this.boite = jeu.add.sprite(800, 700, "boite")
                this.boiteGRP.add(this.boite);
                this.boite.body.immovable = false;
                this.boite.body.moves = true;
            };

            for (let i = 0; i < 2; i++) {
                this.boite = jeu.add.sprite(950, 700, "boite")
                this.boiteGRP.add(this.boite);
                this.boite.body.immovable = false;
                this.boite.body.moves = true;
            };

            for (let i = 0; i < 2; i++) {
                this.boite = jeu.add.sprite(950, 650, "boite")
                this.boiteGRP.add(this.boite);
                this.boite.body.immovable = false;
                this.boite.body.moves = true;
            };

            for (let i = 0; i < 2; i++) {
                this.boite = jeu.add.sprite(950, 550, "boite")
                this.boiteGRP.add(this.boite);
                this.boite.body.immovable = false;
                this.boite.body.moves = true;
            };

            //la porte
            this.porte = jeu.add.sprite(1000, 800, "porte2");
            this.porteGRP.add(this.porte);
            this.porte.body.immovable = true;
            this.porte.body.allowGravity = false;
            this.porteouvert = jeu.add.sprite(1000, 800, "porteouvert2");
            this.porteouvertGRP.add(this.porteouvert);

            //chronometre
            //partie du code par Jamie

            this.secondes = 60;
            this.tempsTXT = 'Temps restant: ';
    
            this.texte = jeu.add.text( 150, 200, this.tempsTXT + this.secondes, { font:"50px verdana", fill:"#FFF" } );
    
            jeu.time.events.loop( 1000, this.chronometre, this );
        };

        //Niveau 2 par Jamie
        if (choisiNieveau === 2) {

            this.numJeu = 12;

        //boucle pour commencer le jeu

            for (var i = 0; i < joueurs.length; i++) {
                joueurs[i].lutin = jeu.add.sprite(950, 315, 'lutin');
                joueurs[i].lutin.tint = couleurs[i];
                this.joueursGRP.add(joueurs[i].lutin);
                joueurs[i].vitesse = 250;
            };

            //Code pour tous les murs

                murCalc = (650);
                    for (let i = 0; i < 10; i++) {
                        murCalc = (murCalc + 50);
                        this.mur = jeu.add.sprite(murCalc, 865, 'mur');
                        this.murGRP.add(this.mur);
                        this.mur.body.immovable = true;
                        this.mur.body.moves = false;
                    };

                    murCalc = (650);
                    for (let i = 0; i < 4; i++) {
                        murCalc = (murCalc + 50);
                        this.mur = jeu.add.sprite(murCalc, 265, 'mur');
                        this.murGRP.add(this.mur);
                        this.mur.body.immovable = true;
                        this.mur.body.moves = false;
                    };

                    murCalc = (950);
                    for (let i = 0; i < 4; i++) {
                        murCalc = (murCalc + 50);
                        this.mur = jeu.add.sprite(murCalc, 265, 'mur');
                        this.murGRP.add(this.mur);
                        this.mur.body.immovable = true;
                        this.mur.body.moves = false;
                    };

                    murCalc = (915);
                    for (let i = 0; i < 13; i++) {
                        murCalc = (murCalc - 50);
                        this.mur = jeu.add.sprite(1200, murCalc, 'mur');
                        this.murGRP.add(this.mur);
                        this.mur.body.immovable = true;
                        this.mur.body.moves = false;
                    };

                    murCalc = (915);
                    for (let i = 0; i < 13; i++) {
                        murCalc = (murCalc - 50);
                        this.mur = jeu.add.sprite(650, murCalc, 'mur');
                        this.murGRP.add(this.mur);
                        this.mur.body.immovable = true;
                        this.mur.body.moves = false;
                    };

                    murCalc = (650);
                    for (let i = 0; i < 1; i++) {
                        murCalc = (murCalc + 50);
                        this.mur = jeu.add.sprite(murCalc, 465, 'mur');
                        this.murGRP.add(this.mur);
                        this.mur.body.immovable = true;
                        this.mur.body.moves = false;
                    };

                    murCalc = (1100);
                    for (let i = 0; i < 1; i++) {
                        murCalc = (murCalc + 50);
                        this.mur = jeu.add.sprite(murCalc, 465, 'mur');
                        this.murGRP.add(this.mur);
                        this.mur.body.immovable = true;
                        this.mur.body.moves = false;
                    };

                    murCalc = (865);
                    for (let i = 0; i < 3; i++) {
                        murCalc = (murCalc - 50);
                        this.mur = jeu.add.sprite(900, murCalc, 'mur');
                        this.murGRP.add(this.mur);
                        this.mur.body.immovable = true;
                        this.mur.body.moves = false;
                    };

                    murCalc = (865);
                    for (let i = 0; i < 3; i++) {
                        murCalc = (murCalc - 50);
                        this.mur = jeu.add.sprite(950, murCalc, 'mur');
                        this.murGRP.add(this.mur);
                        this.mur.body.immovable = true;
                        this.mur.body.moves = false;
                    };

            //code pour les plaques de pression
                
                //p1
                this.plaque = jeu.add.sprite(700, 365, "plaque");
                this.swiGRP.add(this.plaque);
                this.plaque.body.immovable = true;
                this.plaque.body.moves = false;

                //p2
                this.plaque = jeu.add.sprite(1150, 365, "plaque");
                this.swiGRP.add(this.plaque);
                this.plaque.body.immovable = true;
                this.plaque.body.moves = false;

                //p3
                this.plaque = jeu.add.sprite(750, 315, "plaque");
                this.swiGRP.add(this.plaque);
                this.plaque.body.immovable = true;
                this.plaque.body.moves = false;

                //p4
                this.plaque = jeu.add.sprite(1100, 315, "plaque");
                this.swiGRP.add(this.plaque);
                this.plaque.body.immovable = true;
                this.plaque.body.moves = false;

                //p5
                this.plaque = jeu.add.sprite(850, 315, "plaque");
                this.swiGRP.add(this.plaque);
                this.plaque.body.immovable = true;
                this.plaque.body.moves = false;
                
                //p6
                this.plaque = jeu.add.sprite(1000, 315, "plaque");
                this.swiGRP.add(this.plaque);
                this.plaque.body.immovable = true;
                this.plaque.body.moves = false;

                //p7
                this.plaque = jeu.add.sprite(1100, 815, "plaque");
                this.swiGRP.add(this.plaque);
                this.plaque.body.immovable = true;
                this.plaque.body.moves = false;

                //p8
                this.plaque = jeu.add.sprite(750, 815, "plaque");
                this.swiGRP.add(this.plaque);
                this.plaque.body.immovable = true;
                this.plaque.body.moves = false;

                //p9
                this.plaque = jeu.add.sprite(700, 765, "plaque");
                this.swiGRP.add(this.plaque);
                this.plaque.body.immovable = true;
                this.plaque.body.moves = false;

                //p10
                this.plaque = jeu.add.sprite(1150, 765, "plaque");
                this.swiGRP.add(this.plaque);
                this.plaque.body.immovable = true;
                this.plaque.body.moves = false;

                //p11
                this.plaque = jeu.add.sprite(700, 615, "plaque");
                this.swiGRP.add(this.plaque);
                this.plaque.body.immovable = true;
                this.plaque.body.moves = false;

                //p12
                this.plaque = jeu.add.sprite(1150, 615, "plaque");
                this.swiGRP.add(this.plaque);
                this.plaque.body.immovable = true;
                this.plaque.body.moves = false;

                
            //code pour tous les boites


                //b1
                for (let i = 0; i < 2; i++) {
                    this.boite = jeu.add.sprite(750, 365, "boite")
                    this.boiteGRP.add(this.boite);
                    this.boite.body.immovable = false;
                    this.boite.body.moves = true;
                };

                //b2
                for (let i = 0; i < 2; i++) {
                    this.boite = jeu.add.sprite(1100, 365, "boite")
                    this.boiteGRP.add(this.boite);
                    this.boite.body.immovable = false;
                    this.boite.body.moves = true;
                };

                //b3
                for (let i = 0; i < 2; i++) {
                    this.boite = jeu.add.sprite(750, 465, "boite")
                    this.boiteGRP.add(this.boite);
                    this.boite.body.immovable = false;
                    this.boite.body.moves = true;
                };

                //b4
                for (let i = 0; i < 2; i++) {
                    this.boite = jeu.add.sprite(1100, 465, "boite")
                    this.boiteGRP.add(this.boite);
                    this.boite.body.immovable = false;
                    this.boite.body.moves = true;
                };

                //b5
                for (let i = 0; i < 2; i++) {
                    this.boite = jeu.add.sprite(1100, 615, "boite")
                    this.boiteGRP.add(this.boite);
                    this.boite.body.immovable = false;
                    this.boite.body.moves = true;
                };

                //b6
                for (let i = 0; i < 2; i++) {
                    this.boite = jeu.add.sprite(750, 615, "boite")
                    this.boiteGRP.add(this.boite);
                    this.boite.body.immovable = false;
                    this.boite.body.moves = true;
                };

                //b7
                for (let i = 0; i < 2; i++) {
                    this.boite = jeu.add.sprite(850, 615, "boite")
                    this.boiteGRP.add(this.boite);
                    this.boite.body.immovable = false;
                    this.boite.body.moves = true;
                };

                //b8
                for (let i = 0; i < 2; i++) {
                    this.boite = jeu.add.sprite(1000, 615, "boite")
                    this.boiteGRP.add(this.boite);
                    this.boite.body.immovable = false;
                    this.boite.body.moves = true;
                };

                //b9
                for (let i = 0; i < 2; i++) {
                    this.boite = jeu.add.sprite(850, 765, "boite")
                    this.boiteGRP.add(this.boite);
                    this.boite.body.immovable = false;
                    this.boite.body.moves = true;
                };

                //b10
                for (let i = 0; i < 2; i++) {
                    this.boite = jeu.add.sprite(1000, 765, "boite")
                    this.boiteGRP.add(this.boite);
                    this.boite.body.immovable = false;
                    this.boite.body.moves = true;
                };

                //b11
                for (let i = 0; i < 2; i++) {
                    this.boite = jeu.add.sprite(750, 765, "boite")
                    this.boiteGRP.add(this.boite);
                    this.boite.body.immovable = false;
                    this.boite.body.moves = true;
                };

                //b12
                for (let i = 0; i < 2; i++) {
                    this.boite = jeu.add.sprite(1100, 765, "boite")
                    this.boiteGRP.add(this.boite);
                    this.boite.body.immovable = false;
                    this.boite.body.moves = true;
                };

            //Code pour la porte        

                this.porte = jeu.add.sprite(900, 265, "porte2");
                this.porteGRP.add(this.porte);

                this.porte.body.immovable = true;
                this.porte.body.allowGravity = false;

                this.porteouvert = jeu.add.sprite(900, 265, "porteouvert2");
                this.porteouvertGRP.add(this.porteouvert);

            //code pour le chronometre

                this.secondes = 60;
                this.tempsTXT = 'Temps restant: ';
        
                this.texte = jeu.add.text( 150, 200, this.tempsTXT + this.secondes, { font:"50px verdana", fill:"#FFF" } );
        
                jeu.time.events.loop( 1000, this.chronometre, this );

        };

        //Niveau 3 par Jamie    
        if (choisiNieveau === 3) {
            this.numJeu = 8;

            //boucle pour commencer le jeu
            for (var i = 0; i < joueurs.length; i++) {
                joueurs[i].lutin = jeu.add.sprite(1200, 365, 'lutin');
                joueurs[i].lutin.tint = couleurs[i];
                this.joueursGRP.add(joueurs[i].lutin);
                joueurs[i].vitesse = 250;
            };

                //tous les deplacements des murs
                murCalc = (650);
                for (let i = 0; i < 11; i++) {
                    murCalc = (murCalc + 50);
                    this.mur = jeu.add.sprite(murCalc, 915, 'mur');
                    this.murGRP.add(this.mur);
                    this.mur.body.immovable = true;
                    this.mur.body.moves = false;
                };

                murCalc = (650);
                for (let i = 0; i < 11; i++) {
                    murCalc = (murCalc + 50);
                    this.mur = jeu.add.sprite(murCalc, 315, 'mur');
                    this.murGRP.add(this.mur);
                    this.mur.body.immovable = true;
                    this.mur.body.moves = false;
                };

                murCalc = (965);
                for (let i = 0; i < 13; i++) {
                    murCalc = (murCalc - 50);
                    this.mur = jeu.add.sprite(650, murCalc, 'mur');
                    this.murGRP.add(this.mur);
                    this.mur.body.immovable = true;
                    this.mur.body.moves = false;
                };

                murCalc = (965);
                for (let i = 0; i < 13; i++) {
                    murCalc = (murCalc - 50);
                    this.mur = jeu.add.sprite(1350, murCalc, 'mur');
                    this.murGRP.add(this.mur);
                    this.mur.body.immovable = true;
                    this.mur.body.moves = false;
                };

                murCalc = (565);
                for (let i = 0; i < 5; i++) {
                    murCalc = (murCalc - 50);
                    this.mur = jeu.add.sprite(750, murCalc, 'mur');
                    this.murGRP.add(this.mur);
                    this.mur.body.immovable = true;
                    this.mur.body.moves = false;
                };

                murCalc = (1150);
                for (let i = 0; i < 1; i++) {
                    murCalc = (murCalc + 50);
                    this.mur = jeu.add.sprite(murCalc, 665, 'mur');
                    this.murGRP.add(this.mur);
                    this.mur.body.immovable = true;
                    this.mur.body.moves = false;
                };

                murCalc = (1200);
                for (let i = 0; i < 2; i++) {
                    murCalc = (murCalc + 50);
                    this.mur = jeu.add.sprite(murCalc, 765, 'mur');
                    this.murGRP.add(this.mur);
                    this.mur.body.immovable = true;
                    this.mur.body.moves = false;
                };

                murCalc = (915);
                for (let i = 0; i < 2; i++) {
                    murCalc = (murCalc - 50);
                    this.mur = jeu.add.sprite(1300, murCalc, 'mur');
                    this.murGRP.add(this.mur);
                    this.mur.body.immovable = true;
                    this.mur.body.moves = false;

                };

                murCalc = (1150);
                for (let i = 0; i < 3; i++) {
                    murCalc = (murCalc + 50);
                    this.mur = jeu.add.sprite(murCalc, 565, 'mur');
                    this.murGRP.add(this.mur);
                    this.mur.body.immovable = true;
                    this.mur.body.moves = false;
                };

                murCalc = (715);
                for (let i = 0; i < 3; i++) {
                    murCalc = (murCalc - 50);
                    this.mur = jeu.add.sprite(1100, murCalc, 'mur');
                    this.murGRP.add(this.mur);
                    this.mur.body.immovable = true;
                    this.mur.body.moves = false;

                };

                murCalc = (865);
                for (let i = 0; i < 3; i++) {
                    murCalc = (murCalc - 50);
                    this.mur = jeu.add.sprite(1100, murCalc, 'mur');
                    this.murGRP.add(this.mur);
                    this.mur.body.immovable = true;
                    this.mur.body.moves = false;

                };

                murCalc = (1065);
                for (let i = 0; i < 3; i++) {
                    murCalc = (murCalc - 50);
                    this.mur = jeu.add.sprite(1300, murCalc, 'mur');
                    this.murGRP.add(this.mur);
                    this.mur.body.immovable = true;
                    this.mur.body.moves = false;

                };

                murCalc = (1065);
                for (let i = 0; i < 3; i++) {
                    murCalc = (murCalc - 50);
                    this.mur = jeu.add.sprite(1200, murCalc, 'mur');
                    this.murGRP.add(this.mur);
                    this.mur.body.immovable = true;
                    this.mur.body.moves = false;

                };

                murCalc = (1150);
                for (let i = 0; i < 3; i++) {
                    murCalc = (murCalc + 50);
                    this.mur = jeu.add.sprite(murCalc, 1015, 'mur');
                    this.murGRP.add(this.mur);
                    this.mur.body.immovable = true;
                    this.mur.body.moves = false;
                };

                murCalc = (915);
                for (let i = 0; i < 4; i++) {
                    murCalc = (murCalc - 50);
                    this.mur = jeu.add.sprite(800, murCalc, 'mur');
                    this.murGRP.add(this.mur);
                    this.mur.body.immovable = true;
                    this.mur.body.moves = false;
                };

                murCalc = (915);
                for (let i = 0; i < 4; i++) {
                    murCalc = (murCalc - 50);
                    
                    this.mur = jeu.add.sprite(700, murCalc, 'mur');
                    this.murGRP.add(this.mur);

                    this.mur.body.immovable = true;
                    this.mur.body.moves = false;
                };

            //le code pour tous les plaques de pression

                //plaque1
                this.plaque = jeu.add.sprite(700, 365, "plaque");
                this.swiGRP.add(this.plaque);
                this.plaque.body.immovable = true;
                this.plaque.body.moves = false;

                //plaque2
                this.plaque = jeu.add.sprite(700, 565, "plaque");
                this.swiGRP.add(this.plaque);
                this.plaque.body.immovable = true;
                this.plaque.body.moves = false;

                //plaque3
                this.plaque = jeu.add.sprite(750, 865, "plaque");
                this.swiGRP.add(this.plaque);
                this.plaque.body.immovable = true;
                this.plaque.body.moves = false;

                //plaque4
                this.plaque = jeu.add.sprite(700, 665, "plaque");
                this.swiGRP.add(this.plaque);
                this.plaque.body.immovable = true;
                this.plaque.body.moves = false;

                //plaque5
                this.plaque = jeu.add.sprite(1150, 865, "plaque");
                this.swiGRP.add(this.plaque);
                this.plaque.body.immovable = true;
                this.plaque.body.moves = false;

                //plaque6
                this.plaque = jeu.add.sprite(1150, 615, "plaque");
                this.swiGRP.add(this.plaque);
                this.plaque.body.immovable = true;
                this.plaque.body.moves = false;

                //plaque7
                this.plaque = jeu.add.sprite(1250, 615, "plaque");
                this.swiGRP.add(this.plaque);
                this.plaque.body.immovable = true;
                this.plaque.body.moves = false;

                //plaque8
                this.plaque = jeu.add.sprite(1250, 965, "plaque");
                this.swiGRP.add(this.plaque);
                this.plaque.body.immovable = true;
                this.plaque.body.moves = false;

            //code pour tous les boites

                //boite1
                for (let i = 0; i < 2; i++) {
                    this.boite = jeu.add.sprite(800, 565, "boite")
                    this.boiteGRP.add(this.boite);
                    this.boite.body.immovable = false;
                    this.boite.body.moves = true;
                };

                //boite2
                for (let i = 0; i < 2; i++) {
                    this.boite = jeu.add.sprite(800, 665, "boite")
                    this.boiteGRP.add(this.boite);
                    this.boite.body.immovable = false;
                    this.boite.body.moves = true;
                };

                //boite3
                for (let i = 0; i < 2; i++) {
                    this.boite = jeu.add.sprite(750, 665, "boite")
                    this.boiteGRP.add(this.boite);
                    this.boite.body.immovable = false;
                    this.boite.body.moves = true;
                };

                //boite4
                for (let i = 0; i < 2; i++) {
                    this.boite = jeu.add.sprite(1250, 665, "boite")
                    this.boiteGRP.add(this.boite);
                    this.boite.body.immovable = false;
                    this.boite.body.moves = true;
                };

            //code du fonctionnement de la porte

                this.porte = jeu.add.sprite(1250, 315, "porte2");
                this.porteGRP.add(this.porte);

                this.porte.body.immovable = true;
                this.porte.body.allowGravity = false;

                this.porteouvert = jeu.add.sprite(1250, 315, "porteouvert2");
                this.porteouvertGRP.add(this.porteouvert);

            //code du chronometre

                this.secondes = 60;
                this.tempsTXT = 'Temps restant: ';
                this.texte = jeu.add.text( 150, 200, this.tempsTXT + this.secondes, { font:"50px verdana", fill:"#FFF" } );
                jeu.time.events.loop( 1000, this.chronometre, this );
            };
    },




    update: function () {
        //CODE PAR AMELIA
        //cela est juste pour faire la colision fonctioner
        jeu.physics.arcade.collide(this.joueursGRP, this.boiteGRP);
        jeu.physics.arcade.collide(this.joueursGRP, this.murGRP);
        jeu.physics.arcade.collide(this.boiteGRP, this.murGRP);
        jeu.physics.arcade.collide(this.joueursGRP, this.porteGRP);
        jeu.physics.arcade.collide(this.boiteGRP, this.porteGRP);
        jeu.physics.arcade.overlap(this.boiteGRP, this.swiGRP, this.detruirePorte, this.plateCount, this);
        jeu.physics.arcade.overlap(this.joueursGRP, this.porteouvertGRP, this.jeuFin, null, this);

        //les controles du joueur (code par Amelia)
        for (var i = 0; i < joueurs.length; i++) {

            joueurs[i].lutin.body.velocity.x = 0;

            if (joueurs[i].manette.gauche()) {

                joueurs[i].lutin.body.velocity.x = -joueurs[i].vitesse;

            }

            if (joueurs[i].manette.droite()) {

                joueurs[i].lutin.body.velocity.x = joueurs[i].vitesse;

            }

            joueurs[i].lutin.body.velocity.y = 0

            if (joueurs[i].manette.haut()) {

                joueurs[i].lutin.body.velocity.y = -joueurs[i].vitesse;

            }

            if (joueurs[i].manette.bas()) {

                joueurs[i].lutin.body.velocity.y = joueurs[i].vitesse;

            }

        }
    },

   

    //================================================================


    //Code du chronometre par Jamie
    //Cette fonction du chronometre va metre en place que le jeu se termine lorsque le temps se rends a 0
    chronometre: function(){

        if( this.secondes > 1 ){
            this.secondes --;
            this.texte.text = this.tempsTXT + this.secondes;
        } 
        
        else {
            this.state.start('etatRecords');
        }

    },


//============================================================


    //cette fonction compte combien de "pressure plates" est mis par boites
    //CODE PAR AMELIA
    plateCount: function (joueur, plate) {

        plate.destroy()
        this.sonPlaque.play()
        this.numPlaque++;
        console.log(this.numPlaque);

    },


//===============================================================


    //cette fonction est pour detruire la porte pour laisser le joueur ganger.
    //CODE PAR AMELIA
    detruirePorte: function (a, b) {
        if (this.numPlaque === this.numJeu) {
            this.porte.destroy();
            jeu.add.text(100, 300, "Tu as gagné!!", {
                font: "48px verdana",
                fill: "#FFFFFF"
            });
        }
    },


    //============================================================


    //cette fonction est supposer de finir le jeu.
    //CODE PAR AMELIA
    jeuFin: function (e, f) {
        this.state.start('etatRecords')
    },

};
//Créer deux classes avec constructeurs : un pour le journaliste et l’autre pour l’équipe.

$(function() {
    $("#form").on('submit',function(e) {
        e.preventDefault();
        afficherEquipe();
        soumettre();
        couleurDejaPresente();
        specialiteDejaPresente();
    });

});

    class journaliste {
        constructor(nom, bio, specialite, couleur) {
            this.nom = nom;
            this.bio = bio;
            this.specialite = specialite;
            this.couleur = couleur;
        }
        toString() {
            return `<div class="journaliste" style="background-color:${this.couleur}"><h2>${this.nom}</h2><p>${this.bio}</p><p>${this.specialite}</p></div>`;
        }
        deserialiser(obj) {
            Object.assign(this, obj);
        }
    }

    class equipe {
        constructor(tabJournalistes = []) {
            this.tabJournalistes = tabJournalistes;
            this.compteur = 0;
        }
        ajouterJournaliste(journaliste) {
            this.tabJournalistes[this.compteur] = journaliste;
            this.compteur++;
        }
        toString() {
            let chaine = "";
            for (let i = 0; i < this.tabJournalistes.length; i++) {
                chaine += this.tabJournalistes[i].toString();
            }
            return chaine;
        }
        deserialiser(obj) {
            Object.assign(this, obj);
            for (let i = 0; i < this.tabJournalistes.length; i++) {
                let journaliste = new journaliste();
                journaliste.deserialiser(this.tabJournalistes[i]);
                this.tabJournalistes[i] = journaliste;
            }
        }
    }
    const $equipe = new equipe();

    sessionStorage.setItem("equipe", JSON.stringify($equipe));
    $jsonObject = JSON.parse(sessionStorage.getItem("equipe"));
    const $equipe = new equipe();
    $equipe2.deserialiser($jsonObject);

    const journaliste4 = new journaliste($jsonObject.nom, $jsonObject.bio, $jsonObject.specialite, $jsonObject.couleur);
    $equipe.ajouterJournaliste(journaliste4);
    $("#equipe").html($equipe.toString());


function afficherEquipe() {
    $("#equipe").html($equipe.toString());
}

// function submeter
function soumettre() {
    const nom = $("#nom").val();
    const bio = $("#bio").val();
    const specialite = $("#specialite").val();
    const couleur = $("#couleur").val();
    const journaliste = new journaliste(nom, bio, specialite, couleur);
    $equipe2.ajouterJournaliste(journaliste);
    afficherEquipe();
}

// crier une autre méthode qui vérifie si une couleur donnée est déjà présente dans l’équipe.
function couleurDejaPresente(couleur) {
    for (let i = 0; i < $equipe2.tabJournalistes.length; i++) {
        if ($equipe2.tabJournalistes[i].couleur === couleur) {
            return true;
        }
    }
    return false;
}

// crier une méthode qui permet de vérifier si une spécialité donnée est déjà présente dans l’équipe;
function specialiteDejaPresente(specialite) {
    for (let i = 0; i < $equipe2.tabJournalistes.length; i++) {
        if ($equipe2.tabJournalistes[i].specialite === specialite) {
            return true;
        }
    }
    return false;
}












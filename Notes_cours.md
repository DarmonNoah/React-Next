# Notes Autres
Dom = Document Object Model est une interface de programmation normalisée par le W3C, qui permet à des scripts d'examiner et de modifier le contenu du navigateur web.  
Dans le dev Js (react ou next) on a tendance à utiliser comme page principale une page "index" en html, c'est celle qui est affiché en permanence.  
On appel ce type d'application des "SPA"(Single-page application) car tout ce passe dans une seule page web, tout est simulé par la partie JS pour limiter les intéractions avec le serveur, l'inconvénient principal est que c'est le navigateur qui va se charger de tout(l'app peut donc consommer beaucoup de RAM).  

# Partie React
## Intro
React est une bibliothèque JavaScript libre. Elle est maintenue par Meta ainsi que par une communauté de développeurs individuels et d'entreprises depuis 2013.

## Installation
npm create vite@latest my-react-app --template react  
cd my-react-app  
npm install  
npm run dev  

Vite sert a mettre en place son application, rapide et performant, il sert à faciliter le travail avec react.

## Infos et Voc en React
En react tous les composants sont des fonctions.  
Un composant est donc une fonction qui return du JSX.  
En React "<>" permet de rendre le DOM plu lisible.  
React mets à jour le DOM avec les hooks.  
Hook permet de gérer l'état et le cycle de vie des rendues.  
Ce sont des fonctions qui commencent par use (convention).  
On peut utiliser une fonction pour mettre a jour le states.  
Cette syntaxe "setName((prev)=>{return prev + "vite";})" est utile quand on veut mettre un state dont la valeur depend de la valeur précédente.  
Les composants React communiquent entre eux avec des props.  
Tous les composants peuvent recevoir en parametre des props. 
Ce sont des objets dont l'utilisation est similaire a celle des attributs html.  
Les props sont utile lorsqu'on veut passer d'enfant à parents, au dela ils deviennent dépassés.

# Consignes TP React:

- [ ] Créer un nouveau projet React avec vite
- [ ] Créer un composant `App`
- [ ] Créer un composant `Header`
- [ ] Créer un composant `Footer`
- [ ] Créer un composant `Main` qui affiche un profil utilisateur
- [ ] Utilisez un formulaire dont l'affichage est conditionné par un bouton
- [ ] Le fromulaire doit permettre de modifier le profil utilisateur
- [ ] utilisez les modules CSS
- [ ] Utilisez les props
- [ ] Utilisez les states
- [ ] L'application doit etre responsive (mobile first)

Partie 2:

- [ ] Creer un nouveau projet React avec Vite
- [ ] Cette fois ci l'application permettra de gerer les elements d'une liste a l'aide d'un formulaire
- [ ] Créer un composant `List` qui affiche une liste de profil utilisateur
- [ ] Creer un formulaire qui permet d'ajouter un profil utilisateur à la liste
- [ ] Trouvez un moyen de filtrer la liste des profils par annee de naissance par exemple
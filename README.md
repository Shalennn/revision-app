# README
[English version](#english-version)

- Bonjour.

Vous allez pouvoir retrouver ici toutes les informations concernant l'application :
son utilité mais aussi son fonctionnement.

Tout d'abord, voici un sommaire pour savoir ce qu'il en est, mais aussi pour pouvoir se déplacer dans ce fichier.

## Sommaire

* [Introduction](#introduction)
* [Pré-requis](#pré-requis)
* [Installation](#installation)
* [Personnalisation](#personnalisation)
* [Passage en APK](#passage-en-apk)
* [Installation APK](#installation-apk)

## Introduction

**revision-app** est une application de révision.
Vous allez retrouver :

* Une partie *Cours* (sélection de matières, listing de vos fiches de cours, détails de ces fiches)
* Une partie *Exercice*. Cette partie est basée sur la science des répétitions espacées (SRS).
  Lorsque vous répondez à une question, il vous est proposé de choisir comment vous avez trouvé la question (facile, normal, difficile).
  En choisissant *difficile*, cette question reviendra plus régulièrement. À l'inverse, si vous choisissez *facile*, elle reviendra moins souvent.

L'application a pour but de s'adapter à vos usages divers de révision.
Vous êtes libre de mettre ce que vous voulez en cours / exercices.

Avant de procéder à l'installation, il faut quelques prérequis :

## Pré-requis

1. Posséder un éditeur de code (Visual Studio Code par exemple)
2. Installer Node.js

### **Windows**

1. Aller sur [nodejs.org](https://nodejs.org)
2. Télécharger l'installeur "LTS" (Long-Term Support)
3. Exécuter l’installeur avec les options par défaut
4. Vérifier l’installation :

```bash
node -v
npm -v
```

### **Linux Arch**

```bash
sudo pacman -Syu nodejs npm
```

### **Linux Mint**

```bash
sudo apt install nodejs npm
```

3. Installer Git

\*/!\ Si vous avez des problèmes ici, veuillez consulter la documentation appropriée /!\\*

## Installation

* Option 1 : Cloner le dépôt. Aller dans votre dossier cible, ouvrez un terminal :

```bash
git clone https://github.com/Shalennn/revision-app.git
cd revision-app
```

* Option 2 : Télécharger le ZIP → décompresser l’archive dans le dossier de votre choix.

Une fois dans le dossier `revision-app`, dans le terminal bash, exécutez :

```bash
npm install
```

Puis :

```bash
npx expo start
```

Cette commande vous donnera différents éléments :

* QR code
* Liens internes pour le web

Vous pouvez télécharger l’application sur votre smartphone ([https://expo.dev/go](https://expo.dev/go)) et scanner le QR code.
Cette manipulation est utile pour effectuer vos tests et vérifier que tout fonctionne.

## Personnalisation

Cette partie explique où se situent les éléments importants dans le code permettant une modification selon vos besoins.

* [#Nom de l'application](#nom-de-lapplication)
* [#Icône](#icone)
* [#Cours](#cours)
* [#Exercice](#exercice)
* [#Phrase d'accueil](#phrase-daccueil)

### Nom de l'application

Fichier `app.json` → modifier la ligne :

```json
"name": "leNomDeVotreChoix",
```

### Icône

\**/!\ ATTENTION : les icônes doivent être en 1024x1024 et au format PNG /!\**

* Placer vos images dans le dossier `./assets`
* Fichier `app.json` → modifier la ligne :

```json
"icon": "./assets/votreIcone"
```

* Pour Android :

```json
"foregroundImage": "./assets/votreIconeAndroid"
```

### Cours

1. Supprimer les fichiers de cours que vous ne souhaitez pas
2. Créer un fichier JSON de cours (dans le dossier `./assets/cours`) avec cette structure :

```json
[
  {
    "id": "coursExemple",
    "titre": "Exemple Titre",
    "contenu": "Exemple de contenu",
    "matiere": "Exemple Matière",
    "tags": ["tag1", "Tag2", "tag3"]
  },
  {
    "id": "coursExemple2",
    "titre": "Exemple2 Titre",
    "contenu": "Exemple2 de contenu",
    "matiere": "Exemple2 Matière",
    "tags": ["tag1", "Tag2", "tag3"]
  }
]
```

3. Modifier le fichier `./src/data/loader.ts` et ajouter autant de lignes que vous avez de fichiers de cours :

```ts
cours1: require("../../assets/cours/cours1.json"),
cours2: require("../../assets/cours/cours2.json"),
```

### Exercice

1. Supprimer les fichiers d’exercices que vous ne souhaitez pas
2. Créer un fichier JSON d'exercices (dans le dossier `./assets/questions`) avec cette structure :

```json
[
  {
    "id": "question1",
    "question": "Exemple1 question",
    "reponses": ["reponse1", "reponse2", "reponse3", "reponse4"],
    "bonne_reponse": 1,
    "matiere": "exemple1 matiere",
    "niveau": 1,
    "dernierPassage": null
  },
  {
    "id": "question2",
    "question": "Exemple2 question",
    "reponses": ["reponse1", "reponse2", "reponse3", "reponse4"],
    "bonne_reponse": 2,
    "matiere": "exemple2 matiere",
    "niveau": 1,
    "dernierPassage": null
  }
]
```

*Vous n’avez pas besoin de modifier les lignes :*

```json
"niveau": 1,
"dernierPassage": null
```

3. Modifier le fichier `./src/data/importQuestion.ts` et ajouter autant de lignes que vous avez de fichiers de questions :

```ts
import question1 from "../../assets/questions/question1.json";
import question2 from "../../assets/questions/question2.json";
import question3 from "../../assets/questions/question3.json";

const FILES = [question1, question2, question3];
```

### Phrase d'accueil

Pour changer la phrase d’accueil, allez dans :
`./src/screens/HomeScreen.tsx`

```tsx
<Text style={styles.title}>Votre phrase d'accueil</Text>
```

## Passage en APK

Une fois toutes les modifications terminées, vous pouvez passer l’application en APK pour l’installer sur votre téléphone.

1. Créer un compte (si ce n’est pas déjà fait) sur : [https://expo.dev/](https://expo.dev/signup?redirect_uri=%2Fnew%2Fcreate-project)
2. Lier votre compte dans le terminal :

```bash
npx expo login
```

(connectez-vous avec vos identifiants expo.dev)

3. Activer EAS :

```bash
npx expo install eas-cli
npx eas build:configure
```

4. Lancer le build APK :

```bash
npx eas build --platform android --profile preview
```

5. Quand le build est terminé, vous aurez dans le terminal :

* Un QR code pour télécharger l’application sur votre smartphone
* Un lien vers le site expo.dev pour télécharger l’application sur votre ordinateur, puis la transférer sur votre smartphone

## Installation APK

Une fois le fichier `.apk` sur votre smartphone :

* Cliquez dessus
* Installez l’application
* Ouvrez-la


Bonne révision ! 

---
## English version

Hello.

Here you will find all the information related to the application:
its purpose as well as how it works.

First, here’s a table of contents to understand what’s in this file and to help navigate through it.

## Table of Contents

* [Introduction](#introduction)
* [Requirements](#requirements)
* [Installation](#installation)
* [Customization](#customization)
* [Build APK](#build-apk)
* [Install APK](#install-apk)

## Introduction

**revision-app** is a study/revision app.
You will find:

* A *Courses* section (select subjects, list your course notes, view course details)
* An *Exercise* section. This section is based on spaced repetition science (SRS).
  When answering a question, you’ll be asked how you found it (easy, normal, difficult).
  If you select *difficult*, that question will come back more frequently. Conversely, if you select *easy*, it will come back less often.

The app is designed to fit a variety of revision use cases.
You are free to add any content you want in courses or exercises.

Before installing, a few prerequisites are required:

## Requirements

1. A code editor (e.g. Visual Studio Code)
2. Node.js installed

### **Windows**

1. Go to [nodejs.org](https://nodejs.org)
2. Download the "LTS" installer (Long-Term Support)
3. Run the installer with default options
4. Check installation:

```bash
node -v
npm -v
```

### **Linux Arch**

```bash
sudo pacman -Syu nodejs npm
```

### **Linux Mint**

```bash
sudo apt install nodejs npm
```

3. Install Git

\**/!\ If you encounter issues here, please refer to the relevant documentation /!\**

## Installation

* Option 1: Clone the repository. Go to your target folder, open a terminal:

```bash
git clone https://github.com/Shalennn/revision-app.git
cd revision-app
```

* Option 2: Download the ZIP → extract the archive in a folder of your choice.

Once inside the `revision-app` folder, run the following in a terminal:

```bash
npm install
```

Then:

```bash
npx expo start
```

This command will give you several things:

* A QR code
* Internal web links

You can download the app on your smartphone ([https://expo.dev/go](https://expo.dev/go)) and scan the QR code.
This step helps you test the app and ensure everything works correctly.

## Customization

This section explains where the key elements are located in the code so that you can freely modify them.

* [#App Name](#app-name)
* [#Icon](#icon)
* [#Courses](#courses)
* [#Exercises](#exercises)
* [#Welcome Message](#welcome-message)

### App Name

In the `app.json` file → change the line:

```json
"name": "YourAppName",
```

### Icon

\**/!\ WARNING: Icons must be 1024x1024 PNG files /!\**

* Place your images inside the `./assets` folder
* `app.json` file → update the line:

```json
"icon": "./assets/yourIcon.png"
```

* For Android:

```json
"foregroundImage": "./assets/yourAndroidIcon.png"
```

### Courses

1. Delete the course files you don’t want
2. Create a new JSON file in `./assets/cours` with the following structure:

```json
[
  {
    "id": "exampleCourse",
    "titre": "Example Title",
    "contenu": "Example content",
    "matiere": "Example Subject",
    "tags": ["tag1", "tag2", "tag3"]
  },
  {
    "id": "exampleCourse2",
    "titre": "Example Title 2",
    "contenu": "Example content 2",
    "matiere": "Example Subject 2",
    "tags": ["tag1", "tag2", "tag3"]
  }
]
```

3. Update `loader.ts` to import as many courses as needed:

```ts
cours1: require("../../assets/cours/cours1.json"),
cours2: require("../../assets/cours/cours2.json"),
```

### Exercises

1. Delete the exercise files you don’t need
2. Create a new JSON file in `./assets/questions` with the following structure:

```json
[
  {
    "id": "question1",
    "question": "Example question 1",
    "reponses": ["answer1", "answer2", "answer3", "answer4"],
    "bonne_reponse": 1,
    "matiere": "example subject 1",
    "niveau": 1,
    "dernierPassage": null
  },
  {
    "id": "question2",
    "question": "Example question 2",
    "reponses": ["answer1", "answer2", "answer3", "answer4"],
    "bonne_reponse": 2,
    "matiere": "example subject 2",
    "niveau": 1,
    "dernierPassage": null
  }
]
```

*Do not change the following lines:*

```json
"niveau": 1,
"dernierPassage": null
```

3. Update `importQuestion.ts` and import each question file:

```ts
import question1 from "../../assets/questions/question1.json";
import question2 from "../../assets/questions/question2.json";
import question3 from "../../assets/questions/question3.json";

const FILES = [question1, question2, question3];
```

### Welcome Message

To change the welcome message, go to:
`./src/screens/HomeScreen.tsx`

```tsx
<Text style={styles.title}>Your welcome message</Text>
```

## Build APK

Once all modifications are done, you can build the app into an APK to install it on your phone.

1. Create an account (if not done already): [https://expo.dev/](https://expo.dev/signup?redirect_uri=%2Fnew%2Fcreate-project)
2. Link your account in the terminal:

```bash
npx expo login
```

(Login with your expo.dev credentials)

3. Enable EAS:

```bash
npx expo install eas-cli
npx eas build:configure
```

4. Launch the APK build:

```bash
npx eas build --platform android --profile preview
```

5. Once the build is complete, the terminal will show:

* A QR code to download the app on your smartphone
* A link to expo.dev to download the app on your computer and transfer it manually to your device

## Install APK

Once the `.apk` file is on your smartphone:

* Tap it
* Install the app
* Open it



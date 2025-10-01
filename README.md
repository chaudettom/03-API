TP API - Site de Blagues
Ce projet web permet d’afficher et de gérer une liste de blagues issues d’une API externe, avec une interface simple en HTML, CSS (Bootstrap) et JavaScript.

Fonctionnalités
Ajout de blagues aléatoires issues de l’API JokeAPI

Affichage des blagues dans un tableau avec leur catégorie

Possibilité de vider toute la liste

Suppression individuelle d’une blague du tableau

Interface responsive grâce à Bootstrap

Structure des fichiers
index.html : structure HTML de la page, liens Bootstrap, boutons pour gérer les blagues, et tableau d’affichage

script.js : logique JavaScript pour récupérer les blagues, gérer le DOM, et supprimer les lignes

Les blagues proviennent de l’endpoint :
https://v2.jokeapi.dev/joke/Any?lang=fr&blacklistFlags=nsfw,religious,political,racist,sexist,explicit
# Memory-Dogs

This is my subission for the TrueCoders Memory Card project. This app was built with React and TypeScript. It is an update of a Memory Game project that I previously completed when learning React.

## Technologies used

This project uses React.js, TypeScript, Tailwindcss, and Material Tailwind. I use the fetch api to get images from [DOG API](https://dog.ceo/dog-api/).

## Functionality

A player is first greeted by a welcome modal which lists the rules of the game while a grid of dog images populates the screen. Once the player clicks the start button, the modal disappears and the player can start the game. With each click of a dog image, the player either adds to their score if they haven't clicked that image yet, loses the game if they have clicked the image already, or adds to their score and wins the game if they have clicked on each image only once. A cat appears to congratulate the winner and the game starts over.

The player can use a hamburger menu in the header to choose the number of dog cards, and a switch to turn on dark mode.

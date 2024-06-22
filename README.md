# JavaScript-Projects

# Project: Memory Game

This JavaScript code creates a memory matching game with a grid of tiles. The objective is to find all pairs of matching colors.

## Key Components

- **HTML Elements**:
  - `tilesContainer`: Holds all the tile elements.

- **Color List**:
  - `colors`: An array of colors, each appearing twice in the game (`colorPickList`).

- **Game State**:
  - `revealedCount`: Tracks the number of correctly revealed tiles.
  - `activeTile`: The currently selected tile.
  - `awaitingEndofMove`: Prevents interaction until the current move is resolved.

## Functions

- **BuildTile(color)**:
  - Creates a tile with a specific color and a click event listener.
  - Handles the tile reveal logic and match checking.
  - Returns the created tile element.

## Initialization

- **Tile Creation and Shuffling**:
  - Tiles are shuffled and appended to the `tilesContainer`.

## Game Logic

1. **Tile Click Event**:
   - Ignores clicks if the game is awaiting the end of a move, the tile is already revealed, or it's the same as the active tile.
   - Reveals the tile's color and checks for matches.

2. **Match Checking**:
   - If tiles match, marks them as revealed and checks for a win condition.
   - If they don't match, hides both tiles after a brief delay.

## Win Condition

- Alerts the player when all pairs are matched and suggests refreshing the page to play again.




# Project: To-Do List Application

This JavaScript code creates a simple to-do list application that allows users to add, update, and store to-do items using `localStorage`.

## Key Components

- **HTML Elements**:
  - `itemsContainer`: The container for displaying the list of items.
  - `itemTemplate`: A template for creating new items.
  - `addItemBtn`: Button to add new items.

- **State Management**:
  - `items`: An array to hold the list of to-do items, retrieved from `localStorage`.

## Functions

- **getItems()**:
  - Retrieves the to-do items from `localStorage`.
  - Returns the items as a parsed JSON array.

- **setItems(items)**:
  - Converts the items array to a JSON string.
  - Stores the JSON string in `localStorage`.

- **addItem()**:
  - Adds a new item with an empty description and a `completed` status of `false` to the start of the items array.
  - Updates `localStorage` and refreshes the list display.

- **refreshList()**:
  - Sorts items: completed items go to the bottom, and then by description.
  - Clears the `itemsContainer`.
  - Iterates over each item to create and append item elements to the container.
  - Adds event listeners to the description and completed status inputs for real-time updates.

- **updateItem(item, key, value)**:
  - Updates the specified property (`key`) of an item with the new value.
  - Updates `localStorage` and refreshes the list display.

## Event Listeners

- **DOMContentLoaded**:
  - Initializes the application once the DOM content is fully loaded.
  - Sets up the initial list of items and attaches the click event listener to the `addItemBtn`.

- **addItemBtn Click**:
  - Calls the `addItem()` function to add a new item when the button is clicked.

This code ensures that the to-do list is persistent across page reloads by utilizing `localStorage` and provides a user-friendly interface for managing to-do items.





# Dynamic Wallpaper Generator

This JavaScript code creates a dynamic wallpaper generator using HTML Canvas. Users can input dimensions and colors to generate a wallpaper with linear and radial gradients.

## Key Components

- **HTML Elements**:
  - `wallpaper`: The canvas element where the wallpaper is drawn.
  - `inputWidth`: Input for setting the canvas width.
  - `inputHeight`: Input for setting the canvas height.
  - `inputLinearStartColor`: Input for the start color of the linear gradient.
  - `inputLinearEndColor`: Input for the end color of the linear gradient.
  - `inputRadialColor`: Input for the color of the radial gradient.
  - `btnGenerateWallpaper`: Button to generate the wallpaper based on user inputs.

## Functions

- **renderWallpaper(canvasElement, linearStartColor, linearEndColor, radialColor)**:
  - Gets the 2D drawing context from the canvas.
  - Creates linear and radial gradients.
  - Fills the canvas with the linear gradient.
  - Overlays the radial gradient on top of the linear gradient.

- **CreateLinearGradient(context, width, height)**:
  - Creates a linear gradient from the top-left to the bottom-right corner of the canvas.

- **CreateRadialGradient(context, width, height)**:
  - Generates random coordinates within a specified range for the radial gradient.
  - Creates a radial gradient with an inner circle and an outer circle.

- **getRandomNumber(min, max)**:
  - Generates a random number between `min` and `max` inclusive.

- **wallpaperInput()**:
  - Sets the canvas dimensions based on user inputs.
  - Calls `renderWallpaper` to draw the wallpaper on the canvas.

## Event Listeners

- **btnGenerateWallpaper Click**:
  - Calls `wallpaperInput` to update the canvas with new dimensions and colors when the button is clicked.

- **DOMContentLoaded**:
  - Initializes the wallpaper when the document content is fully loaded.

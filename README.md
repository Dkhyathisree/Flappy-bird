# Flappy-bird
This project is a browser-based Flappy Bird style game developed using the Phaser 3 game framework. The player controls a bird that must stay airborne while navigating through columns and avoiding collisions with obstacles and the ground.

The game demonstrates core game development concepts including physics, sprite animation, collision detection, input handling, and scene restarting.

## **Gameplay Overview**
---
Player controls a bird sprite

Gravity constantly pulls the bird downward

Press Spacebar to flap and stay airborne

Avoid:

Columns

Ground collision

Reach the right edge of the screen to win

Game auto-restarts after a crash


## **Technologies Used**
---
Phaser 3 Framework

JavaScript

HTML5

Arcade Physics Engine (Phaser built-in)


## **Core Concepts Implemented**
---
Phaser Scene lifecycle (preload, create, update)

Sprite sheets and animations

Arcade physics and gravity

Collision & overlap detection

Keyboard input handling

Game state flags:

Game start state

Collision detection state

Restart scheduling

Timed scene restart using delayedCall


## **Game Controls**
---
Key	Action
Spacebar	Start game
Spacebar	Flap / Move upward
🗂️ Project Structure
project-folder/
│
├── index.html        → Main HTML loader file
├── app.js            → Game logic and Phaser scene
└── assets/
    ├── background.png
    ├── road.png
    ├── column.png
    └── bird.png

## **Features**
---
✅ Gravity-based physics

✅ Obstacle collision detection

✅ Start instruction system

✅ Crash detection & auto restart

✅ Win condition logic

✅ Sprite scaling

✅ Static obstacle groups

✅ Text-based player feedback

## **Game Flow**
---
Load Assets
   ↓
Create Scene
   ↓
Show Instructions
   ↓
Player Presses Space
   ↓
Bird Moves Forward
   ↓
Avoid Obstacles
   ↓
Win or Crash
   ↓
Auto Restart


## **Learning Outcomes**
---
This project helps understand:

Phaser game architecture

Real-time physics updates

Input event handling

Game state management

Collision mechanics

Scene lifecycle control


## **Possible Future Improvements**
---
Add a scoring system

Add sound effects

Add animated bird wings

Add increasing difficulty

Random column gaps

Mobile touch controls

Pause / Resume feature

Leaderboard system

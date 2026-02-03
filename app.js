let config = {
  renderer: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 300 },
        debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

let game = new Phaser.Game(config);
let bird;
let hasLanded = false;
let cursors;
let hasBumped = false;

let isGameStarted = false;
let messageToPlayer;

let isRestartScheduled = false;
let spaceKey;

function preload () {
  this.load.image('background', 'assets/background.png');
  this.load.image('road', 'assets/road.png');
  this.load.image('column', 'assets/column.png');
  this.load.spritesheet('bird', 'assets/bird.png', { frameWidth: 64, frameHeight: 96 });
}

function create () {
  hasLanded = false;
hasBumped = false;
isGameStarted = false;
isRestartScheduled = false;

  const background = this.add.image(0, 0, 'background').setOrigin(0, 0);
  const roads = this.physics.add.staticGroup();
  const topColumns = this.physics.add.staticGroup({
    key: 'column',
    repeat: 1,
    setXY: {x: 200, y: 0, stepX: 300}
  })

  const bottomColumns = this.physics.add.staticGroup({
    key: 'column',
    repeat: 1,
    setXY: { x: 350, y: 400, stepX: 300 },
  });
  const road = roads.create(400, 568, 'road').setScale(2).refreshBody();


  bird = this.physics.add.sprite(0, 50, 'bird').setScale(2);
  bird.setBounce(0.2);
  bird.setCollideWorldBounds(true);
 
  this.physics.add.overlap(bird, road, () => hasLanded = true, null, this);
  this.physics.add.collider(bird, road);

  this.physics.add.overlap(bird, topColumns, ()=>hasBumped=true,null, this);
  this.physics.add.overlap(bird, bottomColumns, ()=>hasBumped=true,null, this);
  this.physics.add.collider(bird, topColumns);
  this.physics.add.collider(bird, bottomColumns);
  
  cursors = this.input.keyboard.createCursorKeys();
  cursors = this.input.keyboard.createCursorKeys();
spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

  messageToPlayer = this.add.text(0, 0, 'Instructions: Press space bar to start', { fontFamily: '"Comic Sans MS", Times, serif', fontSize: "20px", color: "black", backgroundColor: "white" });
  Phaser.Display.Align.In.BottomCenter(messageToPlayer, background, 0, 50);
}

function update () {
  if(cursors.space.isDown && !isGameStarted) {
    isGameStarted = true;
    messageToPlayer.text = 'Instructions: Press the "SpaceBar" key to stay upright\nAnd don\'t hit the columns or ground';
  }

  if(!isGameStarted) {
    bird.setVelocityY(-160);
  }

  if(spaceKey.isDown && !hasLanded && !hasBumped) {
    bird.setVelocityY(-160);
  }

  if(isGameStarted && (!hasLanded || !hasBumped)) {
    bird.body.velocity.x = 50;
  } else {
    bird.body.velocity.x = 0;
  }

  if ((hasLanded || hasBumped) && !isRestartScheduled) {
  messageToPlayer.text = 'Oh no! You crashed! Restarting...';
  isRestartScheduled = true;

  this.time.delayedCall(2000, () => {
    this.scene.restart();
  });
  }


  if(bird.x > 750) {
    bird.setVelocityY(40);
    messageToPlayer.text = 'Congrats! You won!'
  }
}
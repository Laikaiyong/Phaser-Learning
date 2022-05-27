// create a new scene
let gameScene = new Phaser.Scene('Game');

// Load assets
gameScene.preload = function() {
    // Load images
    this.load.image('background', 'assets/background.png');
    this.load.image('player', 'assets/player.png');
    this.load.image('enemy', 'assets/dragon.png');
};

// called once after preload
gameScene.create = function() {
    // create bg sprite
    let bg = this.add.sprite(0, 0, 'background');

    // change the origin to the top-left corner
    // bg.setOrigin(0, 0)

    //  place sprite in the center
    bg.setPosition(640/2, 360/2);

    let gameW = this.sys.game.config.width;
    let gameH = this.sys.game.config.height;

    // create player sprite
    this.player = this.add.sprite(70, 360/2, 'player');
    this.player.X = 50;

    this.player.setScale(0.5);

    // create enemy
    this.enemy = this.add.sprite(250, 180, 'enemy');
    this.enemy.depth = 1;
    this.enemy.scaleX = 0.5;
    this.enemy.scaleY = 0.5;
    this.enemy.flipX = true;
    // enemy.angle = 45;
    // enemy.rotation = Math.PI / 4;

    // enemy.setAngle(-45);
    // enemy.setRotation(Math.PI / 4);
}

// game updates 60 times per second
gameScene.update = function() {
    // this.enemy.x += 1;
    // this.enemy.angle += 1;

    if (this.player.scaleX <= 2)
    {
        // grow player
        this.player.scaleX += 0.01;
        this.player.scaleY += 0.01;
    }
};

//  set the configuration of the game
let config = {
    type: Phaser.AUTO, // WebGL or Canvas automatically
    width: 640,
    height: 360,
    scene: gameScene
};

// create a new game, pass the configuration
let game = new Phaser.Game(config);
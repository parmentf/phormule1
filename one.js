/*jshint indent:2, browser:true */
/*global Phaser */
window.onload = function () {
  'use strict';

  var game;
  var cursors;
  var car;

  /***********************************************************/
  var preload = function () {
    // TODO: see phaser-examples/examples/assets/games/f1/
    //       or phaser-examples/examples/assets/sprites/car90.png
    game.load.image('car', 'images/car90.png');
  };

  /***********************************************************/
  var create = function () {
    game.stage.backgroundColor = '#00bc72';
    game.physics.startSystem(Phaser.Physics.ARCADE);

    car = game.add.sprite(game.world.centerX, game.world.centerY, 'car');
    car.anchor.setTo(0.5, 0.5);
    game.physics.enable(car, Phaser.Physics.ARCADE);
    car.angle = 0;

    cursors = game.input.keyboard.createCursorKeys();
  };

  /***********************************************************/
  var update = function () {
    car.body.velocity.x = 0;
    car.body.velocity.y = 0;
    car.body.angularVelocity = 0;

    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      car.body.angularVelocity = -200;
    } else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      car.body.angularVelocity = +200;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
      game.physics.arcade.velocityFromAngle(car.angle, 300, car.body.velocity);
    }
    console.log(car.angle, car.x, car.y);
  };

  /***********************************************************/
  var render = function () {
/*
    game.debug.spriteInfo(car, 32, 32);
*/
  };

  /***********************************************************/
  game = new Phaser.Game(800, 600, Phaser.AUTO, '',
    {
      preload: preload,
      create: create,
      update: update,
      render: render
    });

};

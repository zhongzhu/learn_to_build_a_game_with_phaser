var MyGame = MyGame || {};

MyGame.YouWin = function () {};

MyGame.YouWin.prototype = {
  preload: function () {
  },

  create: function() {
    var me = this;

    me.add.image(Math.round(me.game.width/2), Math.round(me.game.height/2), 
      'texture-atlas', 'youwin_bg').anchor.set(0.5);

    me.add.button(Math.round(me.game.width/2), Math.round(me.game.height/2) + 70, 
      'texture-atlas', me.onShare, me, 'share', 'share', 'share', 'share').anchor.set(0.5);
    me.add.button(Math.round(me.game.width/2), Math.round(me.game.height/2) + 160, 
      'texture-atlas', me.onMainMenu, me, 'menu', 'menu', 'menu', 'menu').anchor.set(0.5);    

    me.input.keyboard.addKey(Phaser.KeyCode.UP).onDown.add(me.onMainMenu, me);
  },

  onShare: function() {
    this.state.start('MainMenu');
  },

  onMainMenu: function() {
    this.state.start('MainMenu');
  }
};

GamePlayManager = {
    init: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
    },
    preload: function() {
		var me=this;
        me.load.image('background',"assets/images/montaña.png");
		me.load.spritesheet("terodactilo","assets/images/terodactilo.png",97,120);
		me.load.spritesheet("dinosaurio","assets/images/dinosaurio.png",69,174);
		
    },
    create: function() {
		var me=this;
        me.game.add.sprite(0, 0, 'background');

		me.terodactilo= me.game.add.sprite(150,100,"terodactilo");
		me.terodactilo.animations.add("right",[0,1,2,3],8,true);
		me.terodactilo.animations.add("left",[4,5,6,7],8,true);
		me.terodactilo.animations.play("right");
		
		me.dinosaurio=me.game.add.sprite(100,350,"dinosaurio");
		me.dinosaurio.animations.add("right",[0,1,2,3],10,true);
		me.dinosaurio.animations.add("left",[15,14,13,12,11,10,9,8],10,true);
		me.game.cursores=me.input.keyboard.createCursorKeys();
		me.game.physics.startSystem(Phaser.Physics.ARCADE);
		me.dinosaurio.animations.play("right");
    },
    update: function() {
		var me=this;
		me.terodactilo.x+=2;
		me.dinosaurio.x+=1;
		if(me.terodactilo.x>=me.game.world.width){
			me.terodactilo.x=-100;
			}
		if(me.dinosaurio.x>=me.game.world.width){
			me.dinosaurio.x=-100;
			}
		
        
    }
}

var game = new Phaser.Game(1136, 640, Phaser.CANVAS);
    
game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");
class Game{
constructor(){}

  gameState(){
      var gameStateRef = database.ref('gameState');
      gameStateRef.on("value", function(data){
      gameState = data.val();
      })
  }

update(state){
    database.ref('/').update({
      gameState: state
    });
}
stat(){
    if(gameState === 0){
    player=new Player();
    player.getCount();
    form=new Form();
    form.dispaly();
    }
}

}
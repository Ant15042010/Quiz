class Player {
  constructor(){}

  update(name){
    database.ref('Player').set({
      name:name
    });
  }
}

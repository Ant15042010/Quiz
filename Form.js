class Form {
  constructor() {
    
  }

  display(){
    var title = createElement('h1');
    title.html("Ancient Egypt- Trivia Quiz");
    title.position(displayWidth/2-150, 0);

    var title2 = createElement('h1');
    title2.html("Thanks for Playing!");
    title2.position(displayWidth/2-150, 0);
    title2.hide();
    
    var input = createInput("Enter Name Here");
    var button = createButton('Start');
    var button2 = createButton('Submit');
    
    input.position(displayWidth/2-150, 160);
    button.position(displayWidth/2-150, 200);
    button2.position(displayWidth/2-150, 760);
    button2.hide();


    button.mousePressed(function(){
      input.hide();
      button.hide();
      button2.show();

      var name = input.value();
      
      player.update(name);
      var greeting = createElement('h3');
      greeting.html("Hello, " + name+"!" );
      greeting.position(displayWidth/2-150, 60);
      
      var q1 = createElement('h5');
      q1.html("T/F-Egypt has the most pyramids compared to any other countries.");
      q1.position(displayWidth/2-150, 180);

        var checkbox = createCheckbox('True', false);
        checkbox.position(displayWidth/2-150,220);

        var checkbox2 = createCheckbox('False', false);
        checkbox2.position(displayWidth/2-100,220);
      

        var q2 = createElement('h5');
          q2.html("The great pyramid of ___ is in Egypt");
          q2.position(displayWidth/2-150, 260);

        var checkbox3 = createCheckbox('Giza', false);
        checkbox3.position(displayWidth/2-150,320);

        var checkbox4 = createCheckbox('Indiana Jones', false);
        checkbox4.position(displayWidth/2-100,320);
      
        var q3 = createElement('h5');
      q3.html("A ruler was called a _____");
      q3.position(displayWidth/2-150, 360);

        var checkbox5 = createCheckbox('Pharaoh', false);
        checkbox5.position(displayWidth/2-150,420);

        var checkbox6 = createCheckbox('Phareoah', false);
        checkbox6.position(displayWidth/2-80,420);

        var q4 = createElement('h5');
      q4.html("Who found King Tutankhamun's tomb?");
      q4.position(displayWidth/2-150, 460);

        var checkbox7 = createCheckbox('Howard Carter', false);
        checkbox7.position(displayWidth/2-35,520);

        var checkbox8 = createCheckbox('Taylor Swift', false);
        checkbox8.position(displayWidth/2-150,520);

        var q5 = createElement('h5');
      q5.html("Who was the first woman ruler of egypt?");
      q5.position(displayWidth/2-150, 560);

        var checkbox9 = createCheckbox('Hatshepsut', false);
        checkbox9.position(displayWidth/2-150,620);

        var checkbox10 = createCheckbox('Cleopatra', false);
        checkbox10.position(displayWidth/2-60,620);

        var q6 = createElement('h5');
      q6.html("Cleopatra got bitten by a snake called an ____");
      q6.position(displayWidth/2-150, 660);

        var checkbox11 = createCheckbox('Cobra', false);
        checkbox11.position(displayWidth/2-150,720);

        var checkbox12 = createCheckbox('Asp', false);
        checkbox12.position(displayWidth/2-60,720);
        
      
    });
      button2.mousePressed(function(){

      title2.show();

      title.hide();

      
    });


  }

   myCheckedEvent() {
    if (this.checked()) {
      console.log('Checking!');
    } else {
      console.log('Unchecking!');
    }
  }
}
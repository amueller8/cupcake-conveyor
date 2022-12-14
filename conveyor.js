int SQUARE_DIMENSION = 63;

cupcake[] theCupcakes = new cupcake[8];
Plate[] thePlates = new plates[8];
boolean[] show = new boolean[8];
boolean[][] cupcake_iced = new boolean[8][5];


//pink, teal, purple, none
color[] frosting_colors = {color(255, 192, 203), color(53, 252, 219), color(159, 53, 252), color(255,255,255)};
int num_colors = 4;

int num_mouse_presses = 0;
int num_frosting_changes = 0;

color frosting_color = frosting_colors[0];
int curr_cupcake = 0;
boolean running = false;
boolean decoratingMode = false;
boolean frostingMode = false;
boolean sprinklesMode = false;

ArrayList<PVector> listMousePositions = new ArrayList<PVector>();
ArrayList<PVector> sprinklesPos = new ArrayList<PVector>();

void setup() {

	size(500, 500, P2D);
	frameRate(30);

}

void mousePressed() {
	num_mouse_presses += 1;

	if (running && !decoratingMode) {
		fill(55);
		rect(250, 100, 275, 200);
		if (mouseX > 250 && mouseX < 275 && mouseY > 100 && mouseY < 150) {
			num_frosting_changes += 1;
			frosting_color = frosting_colors[num_frosting_changes % num_colors];
		

		}
	
	} 
	
	
}


void keyPressed() {

	if(!decoratingMode){
	if (keyCode == '66' || keyCode == 66) {
		show[curr_cupcake] = true;
		if (curr_cupcake + 1 < 8) {
			curr_cupcake += 1;
		}

	}

	if (keyCode == 83) {
		noLoop();
		setTimeout(loop, 3000);

	}
		
	if(keyCode == 88){
		decoratingMode = !decoratingMode; //toggle
	}

	for (int k = 0; k < 8; k++) {
		if (keyCode == (49 + k) && show[k] == true) {
			
				cupcake_iced[k] = [true, false, false, false, false];
				int bit_set = num_frosting_changes % num_colors;
				cupcake_iced[k][bit_set+1] = true;
		
		}

	}
		
	}  else {
	//else if decorating 
		if(keyCode == 88){
		decoratingMode = !decoratingMode; //toggle
		}
		
		if(keyCode == 70){ //f = frost
			frostingMode = true;
		} 
		if(keyCode ==  85){ //u = unfrost
			 frostingMode = false;
			}
		
		//d for sprinkles
		if(keyCode == 68){
			sprinklesMode = !sprinklesMode;
		}
		if(sprinklesMode){
			if(keyCode == 49){
					sprinklesPos.add(new PVector(mouseX, mouseY));
	
			}
		}
		

	}
}


//https://bjango.com/articles/processingperfectloops/ 
float timeLoop(float totalframes, float offset) {
	return (frameCount + offset) % totalframes / totalframes;
}

class cupcake {
	private float x;
	private float y;
	private int index;

	private PApplet canvas;
	private color frostingOnCreation;

	cupcake(PApplet canvas, float x, float y, int curr) {
		this.canvas = canvas;
		this.x = x;
		this.y = y;
		this.index = curr;

		this.frostingOnCreation = color(255, 192, 203);

	}


	void move() {
		//this.canvas.stroke(50,50,50);
		noStroke();
		float offset = (7.5 * min(index, 7));

		//wrapper
		fill(204, 204, 255);
		quad(timeLoop(60, offset) * width, y, timeLoop(60, offset) * width + 30, y, timeLoop(60, offset) * width + 25, y + 20, timeLoop(60, offset) * width + 5, y + 20);

		//cake
		fill(237, 209, 149);
		ellipse(timeLoop(60, offset) * width + 15, y, 30, 15);

		//frosting
		
		if(!cupcake_iced[index][0]){
			fill(frostingOnCreation);
			ellipse(timeLoop(60, offset) * width + 15, y - 5, 30, 10);
	
		}
		
		if (cupcake_iced[index][0] && cupcake_iced[index][1]) {
			fill(frosting_colors[0]);
			ellipse(timeLoop(60, offset) * width + 15, y - 5, 30, 10);
		}
		else if (cupcake_iced[index][0] && cupcake_iced[index][2]) {
			fill(frosting_colors[1]);
			ellipse(timeLoop(60, offset) * width + 15, y - 5, 30, 10);
		}
		else if (cupcake_iced[index][0] && cupcake_iced[index][3]) {
			fill(frosting_colors[2]);
			ellipse(timeLoop(60, offset) * width + 15, y - 5, 30, 10);
		}
		else if (cupcake_iced[index][0] && cupcake_iced[index][3]) {
			fill(frosting_colors[3]);
			ellipse(timeLoop(60, offset) * width + 15, y - 5, 30, 10);
			//fill(frosting_colors[2]);
		}

		

	}



}

class Plate {

	private float x;
	private float y;
	private int index;


	private PApplet canvas;
	Plate(PApplet canvas, float x, float y, int curr) {
		this.canvas = canvas;
		// Store x and y.
		this.x = x;
		this.y = y;
		this.index = curr;

	}

	void drawPlate() {
		this.canvas.fill(255, 255, 255);
		this.canvas.stroke(211, 211, 211);

		this.canvas.ellipse(x, y, 40, 30);
		this.canvas.ellipse(x, y, 30, 20);

	}

	void move() {
		offset = (7.5 * min(index, 7));

		this.canvas.fill(255, 255, 255);
		this.canvas.stroke(211, 211, 211);

		this.canvas.ellipse(timeLoop(60, offset) * width + 15, y, 40, 30);
		this.canvas.ellipse(timeLoop(60, offset) * width + 15, y, 30, 20);

	}


}

class pipingBag {
	private float x;
	private float y;

	private PApplet canvas;

	pipingBag(PApplet canvas, float x, float y) {
		this.canvas = canvas;

		// Store x and y.
		this.x = x;
		this.y = y;
	}

	void draw() {

		fill(211, 211, 211);

		//rect(x, y, x+40, y+5);
		//fill(frosting_color[0], frosting_color[1], frosting_color[2]);
		fill(frosting_color);
		quad(x, y, x + 40, y, x + 35, y + 50, x + 5, y + 50);

		fill(100, 100, 100);
		triangle(x + 5, y + 50, x + 35, y + 50, x + 20, y + 60);

		fill(50, 50, 50);
		triangle(x + 15, y + 55, x + 25, y + 55, x + 20, y + 68);

		textSize(8);
		string s = "frosting";
		fill(255, 255, 255);
		text(s, x + 5, y + 10);

	}


}
class batterBowl {

}

class conveyorBelt {

	private float x;
	private float y;

	private PApplet canvas;


	conveyorBelt(PApplet canvas, float x, float y) {
		this.canvas = canvas;

		// Store x and y.
		this.x = x;
		this.y = y;

		this.canvas.fill(211, 211, 211);
		this.canvas.stroke(173, 173, 173);
		this.canvas.rect(x, y, SQUARE_DIMENSION, SQUARE_DIMENSION);
		this.canvas.rect(timeLoop(60, 0) * width, y, SQUARE_DIMENSION, SQUARE_DIMENSION);
		this.canvas.rect(timeLoop(60, 7.5) * width, y, SQUARE_DIMENSION, SQUARE_DIMENSION);
		this.canvas.rect(timeLoop(60, 15) * width, y, SQUARE_DIMENSION, SQUARE_DIMENSION);
		this.canvas.rect(timeLoop(60, 22.5) * width, y, SQUARE_DIMENSION, SQUARE_DIMENSION);
		this.canvas.rect(timeLoop(60, 30) * width, y, SQUARE_DIMENSION, SQUARE_DIMENSION);
		this.canvas.rect(timeLoop(60, 37.5) * width, y, SQUARE_DIMENSION, SQUARE_DIMENSION);
		this.canvas.rect(timeLoop(60, 45) * width, y, SQUARE_DIMENSION, SQUARE_DIMENSION);
		this.canvas.rect(timeLoop(60, 52.5) * width, y, SQUARE_DIMENSION, SQUARE_DIMENSION);


	}

}


void draw() {
	background(255);
	


	if(num_mouse_presses == 0){
	textSize(30);
	string s = "Welcome to the cupcake factory! You can design cupcakes by following the instructions.";
	strng s2 = "There is a twist, though- the cupcakes are coming on a conveyor belt, so you must click deliberately! Click to get started.";
	fill(200);
	text(s, 50, 50, 450, 200);
	text(s2, 50, 250, 450, 200);
	}
	
	if (num_mouse_presses >= 1 && !decoratingMode) {
		running = true;

		background(255);

		fill(196, 164, 132);
		noStroke();
		rect(0, 250, width, 250);

		//instructions on top of rect.
		//
		string i1 = "Key instructions:";
		string i2 = "b- bake a new cupcake";
		string i3 = "keys 1-8, frost that number cupcake";
		string i4 = "click icing bag- toggle icing color";
		string i5 = "s- stop belt for 3 seconds so you can screenshot";
		string i6 = "x - enter custom decorating mode";

		textSize(12);
		fill(255);
		text(i1, 10, 350);
		text(i2, 10, 375);
		text(i3, 10, 400);
		text(i4, 10, 425);
		text(i5, 10, 450);
		text(i6, 10, 475);

		conveyorBelt cb = new conveyorBelt(this, 0, 250);
		//cupcake height is 20 + some for frosting, 

		//create the cupcakes and plates
		for (int i = 0; i < 8; i++) {
			theCupcakes[i] = new cupcake(this, 10, 255, i);
			thePlates[i] = new Plate(this, 25, 275, i);
		}
	
		pipingBag pipe = new pipingBag(this, 250, 100);
		pipe.draw();

		for (int j = 0; j < 8; j++) {
			if (show[j] == true) {
				thePlates[j].move();
				theCupcakes[j].move();


			}
		}


	} 
	
	//else??
	
	if(decoratingMode){
		background(255);
		
		textSize(12);
		fill(0);
		
		string si = "f - to frost";
		string sii = "u- to stop frosting";
		string siii = "x- go back to conveyor belt mode";
		string s4 = "d- enter and exit sprinkles mode!";
		string s5 = "while in sprinkles mode, hit 1 to place a sprinkle at your mouse";
		text(si, 10, 300);
		text(sii, 10, 325);
		text(siii, 10, 350);
		text(s4, 10, 375);
		text(s5, 10, 400);

			//big cupcake
			//wrapper
			//30 -> 200 -> 6.66 scale
		fill(204, 204, 255);
		quad(50, 100, 250, 100, 216, 100 + 133,  50+33, 100+133);

			//cake
		fill(237, 209, 149);
		ellipse(50 + 15*6.5, 100, 200, 40); 

		noStroke();
		fill(frosting_colors[0]);

		if (frostingMode){
			ellipse(mouseX, mouseY, 20,20);

			//mouse pos = https://discourse.processing.org/t/how-to-save-a-previous-mouse-position/24434/2
			if(mouseX != pmouseX){
					listMousePositions.add(new PVector(mouseX, mouseY));
			}
			for(PVector pv : listMousePositions ) {

			 ellipse(pv.x,pv.y, 20, 20); 

			}
			
		} else {
			
			
			for(PVector pv : listMousePositions ) {

			 ellipse(pv.x,pv.y, 20, 20); 

			}
			
			for(PVector pv : sprinklesPos ) {
			 fill(random(0,255), random(0,255), random(0,255));
			 ellipse(pv.x,pv.y, 5, 5); 
			 fill(frosting_colors[0]);

			}
			
		}
		
		

		
		//}
	
	
		
		
	}

}

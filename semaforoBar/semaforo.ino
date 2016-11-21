int red = 13;
int green = 12;
int yellow = 11;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(red, OUTPUT);
  pinMode(green, OUTPUT);
  pinMode(yellow, OUTPUT);
}

void loop() {
  if (Serial.available() > 0) { 
    //int input = Serial.parseInt();
    byte input = Serial.read();
    if(input == '0'){
      digitalWrite(red, HIGH);
    }
    else if(input == '1'){
      digitalWrite(red, LOW);
    }
    if(input == '2'){
      digitalWrite(green, HIGH);
    }
    else if(input == '3'){
      digitalWrite(green, LOW);
    }
    if(input == '4'){
      digitalWrite(yellow, HIGH);
    }
    else if(input == '5'){
      digitalWrite(yellow, LOW);
    }
  }
}

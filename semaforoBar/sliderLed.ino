int red = 9;
//int input = 0;
void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(red, OUTPUT);
  //analogWrite(red, input);
}

void loop() {
  if (Serial.available()) { 
    int input = Serial.read();
      analogWrite(red, input); 
      Serial.print(input);
  }
}


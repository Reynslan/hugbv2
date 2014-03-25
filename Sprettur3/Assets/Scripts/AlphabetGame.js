#pragma strict

var DroppedLetter : GameObject;
var DroppedData = new Array();
var initialPos : Vector2;
var AlphabetObj : Alphabet;
var NumCorrectLetters : int;
var LettersLeftInRnd : int;
var LettersPerRnd : int;
var SpawnCTRL : SpawnController;
var LettersSoFar : TextMesh;

public var NextCorrectLetter : String;

function Awake () {
	AlphabetObj = GameObject.Find("Alphabet").GetComponent(Alphabet);
	SpawnCTRL = GameObject.Find("Spawn Controller").GetComponent(SpawnController);
	LettersSoFar = GameObject.Find("AlphabetSoFar").GetComponent(TextMesh);
	
	NotificationCenter.DefaultCenter().AddObserver(this, "Dropped");
}

function Start () {
	LettersPerRnd = SpawnCTRL.spawns.length;
	LettersLeftInRnd = LettersPerRnd;
	NextCorrectLetter = "A";
	NumCorrectLetters = 0;
	LettersSoFar.text = "";
}

function Dropped (note:Notification) {
	DroppedData = note.data;
	DroppedLetter = DroppedData[0];
	initialPos = DroppedData[1];

	if (DroppedLetter.GetComponent(TextMesh).text == NextCorrectLetter) {
		LettersSoFar.text += NextCorrectLetter;
		Destroy(DroppedLetter);
		NumCorrectLetters++;
		
		if (NumCorrectLetters == AlphabetObj.alphabet.length) {
			Debug.Log("ALPHABET COMPLETED");
			NotificationCenter.DefaultCenter().PostNotification(this, "GameOver");
		}
		else {
			NextCorrectLetter = AlphabetObj.alphabet[NumCorrectLetters].ToString();
			LettersLeftInRnd--;
		
			if (LettersLeftInRnd == 0) {
				LettersLeftInRnd = LettersPerRnd;
				NotificationCenter.DefaultCenter().PostNotification(this, "SpawnLetters");
			}
		}
	}
	else {
		// Wrong answer
		DroppedLetter.transform.position = initialPos;
	}
}
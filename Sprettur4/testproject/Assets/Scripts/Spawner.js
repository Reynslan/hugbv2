#pragma strict

var letterObject : GameObject;
var AlphabetObj : Alphabet;
var GameOverBtn : GameObject;

function Awake () {
	AlphabetObj = GameObject.Find("Alphabet").GetComponent(Alphabet);
}

function SpawnLetter () {
	letterObject.GetComponent(TextMesh).text = AlphabetObj.remainingLetters[0].ToString();
	Instantiate(letterObject, transform.position, transform.rotation);
	// Remove spawned letter from remaining letters of alphabet
	NotificationCenter.DefaultCenter().PostNotification(this, "removeLetter", 0);
}

function SpawnGameOverBtn () {
	Instantiate(GameOverBtn, transform.position, transform.rotation);
}

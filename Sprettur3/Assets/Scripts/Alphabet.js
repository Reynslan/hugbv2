#pragma strict

public var alphabet : String;
public var remainingLetters : String;

function Awake () {
	NotificationCenter.DefaultCenter().AddObserver(this, "removeLetter");

	alphabet = "AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ";
	remainingLetters = alphabet;
}

function removeLetter (note:Notification) {
	var tempSplitAlphabet : Array = remainingLetters.Split(remainingLetters[note.data]);
	remainingLetters = tempSplitAlphabet.join("");
	
}

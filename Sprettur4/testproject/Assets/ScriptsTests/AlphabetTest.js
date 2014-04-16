#pragma strict

import SharpUnit;

class AlphabetTest extends TestCase {

	var alphabet : String;
	var remainingLetters : String;

    /** Setup test resources, called before each test. */
    function SetUp() {
        alphabet = "AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ";
		remainingLetters = alphabet;
    }

    /** Dispose of test resources, called after each test */
    function TearDown() {
	    alphabet = null;
		remainingLetters = null;
    }
    
    @UnitTest
    function AlphabetAwake() {
        Assert.Equal (alphabet, "AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ");
        Assert.Equal (alphabet, remainingLetters);
    }
    
    @UnitTest
    function RemoveLetterTest() {
        Assert.Equal (remainingLetters, "AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ");
        removeLetter();
        Assert.Equal (remainingLetters, "ÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ");
    }
}

function removeLetter () {
	var tempSplitAlphabet : Array = remainingLetters.Split(remainingLetters[0]);
	remainingLetters = tempSplitAlphabet.join("");
	
}
#pragma strict

import SharpUnit;

class SpawnerTest extends TestCase {
	var AlphabetObj : Alphabet;
	
    /** Setup test resources, called before each test. */
    function SetUp() {
        AlphabetObj = GameObject.Find("Alphabet").GetComponent(Alphabet);
    }

    /** Dispose of test resources, called after each test */
    function TearDown() {
    	AlphabetObj = null;
    }
    
    @UnitTest
    function GettingAlphabet() {
        Assert.Equal (AlphabetObj.remainingLetters[0].ToString(), "A");
    }
    
}


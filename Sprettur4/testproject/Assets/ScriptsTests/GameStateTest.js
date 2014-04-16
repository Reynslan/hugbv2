#pragma strict

import SharpUnit;

class GameStateTest extends TestCase {

	var GameOverObj : GameObject;

    /** Setup test resources, called before each test. */
    function SetUp() {
        GameOverObj = GameObject.Find("GameOver");
    }
    
    /** Dispose of test resources, called after each test */
    function TearDown() {
	    GameOverObj = null;
    }
    
    @UnitTest
    function GameOverObjExists() {
        Assert.NotNull (GameOverObj);
    }
}
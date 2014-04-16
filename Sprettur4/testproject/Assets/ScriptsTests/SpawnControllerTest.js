#pragma strict

import SharpUnit;

class SpawnControllerTest extends TestCase {

	var spawns : GameObject[];

    /** Setup test resources, called before each test. */
    function SetUp() {
        spawns = GameObject.FindGameObjectsWithTag("Spawn");
    }
    
    /** Dispose of test resources, called after each test */
    function TearDown() {
	    spawns = null;
    }
    
    @UnitTest
    function SpawnsExist() {
        Assert.NotNull (spawns);
    }
}
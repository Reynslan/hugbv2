#pragma strict

import SharpUnit;

function Start () {
	var suite: TestSuite = new TestSuite();
	suite.AddAll(AlphabetTest());
	suite.AddAll(SpawnerTest());
	suite.AddAll(GameStateTest());
	suite.AddAll(SpawnControllerTest());
	var res: TestResult = suite.Run(null);
	var reporter: Unity3D_TestReporter = new Unity3D_TestReporter();
    reporter.LogResults(res);
}

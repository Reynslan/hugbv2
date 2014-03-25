#pragma strict

var GameOverObj : GameObject;

function Awake () {
	NotificationCenter.DefaultCenter().AddObserver(this, "GameOver");
	
	GameOverObj = GameObject.Find("GameOver");

}

function GameOver () {
	GameOverObj.GetComponent(Spawner).SpawnGameOverBtn();
}
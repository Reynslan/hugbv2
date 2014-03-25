#pragma strict

var spawns : GameObject[];
var randomSpawn : int;
var IdOfSpawn : Array;

function Awake () {
	spawns = GameObject.FindGameObjectsWithTag("Spawn");

	NotificationCenter.DefaultCenter().AddObserver(this, "SpawnLetters");
}

function Start() {
	SpawnLetters();
}

function SpawnLetters() {
	IdOfSpawn = [];
	
	for (var i = 0; i < spawns.length; i++) {
		IdOfSpawn.push(i);
	}
	
	while (IdOfSpawn.length > 0) {
		randomSpawn = Random.Range(0, IdOfSpawn.length);
		spawns[IdOfSpawn[randomSpawn]].GetComponent(Spawner).SpawnLetter();
		IdOfSpawn.splice(randomSpawn, 1);
	}
}
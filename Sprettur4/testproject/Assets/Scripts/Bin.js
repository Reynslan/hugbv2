#pragma strict

private var initialPos : Vector2;
var DraggedData = new Array();

function Awake () {
	NotificationCenter.DefaultCenter().AddObserver(this, "Dragged");
}
	
function OnTriggerEnter2D(other: Collider2D) {
	DraggedData.Add(other.gameObject);
	DraggedData.Add(initialPos);
	NotificationCenter.DefaultCenter().PostNotification(this, "Dropped", DraggedData);
	DraggedData = [];
}

function Dragged (note:Notification) {
	initialPos = note.data;
}
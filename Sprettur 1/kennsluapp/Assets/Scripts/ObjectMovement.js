#pragma strict

function Start () {

}

// Moves object according to finger movement on the screen
var speed : float = 0.1;
function Update () {
		if (Input.touchCount > 0 && 
		  Input.GetTouch(0).phase == TouchPhase.Moved) {
		
			// Get movement of the finger since last frame
			var touchDeltaPosition:Vector2 = Input.GetTouch(0).deltaPosition;
			
			// Move object across XY plane
			transform.Translate (-touchDeltaPosition.x * speed, 
						-touchDeltaPosition.y * speed, 0);
		}
	}
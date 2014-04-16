﻿#pragma strict

private var thing : Transform;	// The thing we will move.
private var offSet : Vector2;	// The things position relative to the mouse position.
private var initialPos : Vector2;
private var hit : RaycastHit2D;

//var DraggedData = new Array();
var firstClick : boolean = true;

function Start () {

}

function Update () {
	if (Input.GetButtonDown ("Fire1")) {

	    hit = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);

	    if(hit.collider != null)
	    {
	    	if(hit.collider.tag == "Drag")
			{
		        thing = hit.transform;	// If we hit something dragable, hold on to it and remember pos.
		        if (firstClick) {
		        	firstClick = false;
		        	initialPos = thing.position;
		        	/*DraggedData.Add(thing.root.gameObject);
					DraggedData.Add(initialPos);*/
					NotificationCenter.DefaultCenter().PostNotification(this, "Dragged", initialPos);
		        }
            	offSet = thing.position-Camera.main.ScreenToWorldPoint(Input.mousePosition);	// So its center does not align with mouse position
	        }

	    }
	}
	else if (Input.GetButtonUp ("Fire1") && thing != null) {
	
		hit = Physics2D.Raycast(thing.position, -Vector3.up);
		
		/*if(hit.collider != null)
	    {
	    	if(hit.collider.tag == "Drop" && thing.tag == "Drag")
			{
				DraggedData.Add(thing.root.gameObject);
				DraggedData.Add(initialPos);
				NotificationCenter.DefaultCenter().PostNotification(this, "Dropped", DraggedData);
			}
			
		}*/
		//DraggedData = [];
		thing = null;	// Let go
	}
	firstClick = true;
	if (thing) {
		thing.position = Vector2(Camera.main.ScreenToWorldPoint(Input.mousePosition).x+offSet.x, Camera.main.ScreenToWorldPoint(Input.mousePosition).y+offSet.y);	// Move the thing
	}
}
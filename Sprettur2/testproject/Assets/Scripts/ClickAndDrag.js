#pragma strict

private var thing : Transform;	// The thing we will move.
private var offSet : Vector2;	// The things position relative to the mouse position.
private var hit : RaycastHit2D;

function Start () {

}

function Update () {
	if (Input.GetButtonDown ("Fire1")) {

	    hit = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);

	 

	    if(hit.collider != null)
	    {
	    	if(hit.collider.tag == "DRAG" || hit.collider.tag == "LETTER")
			{
		        Debug.Log("object clicked: "+hit.collider.tag);
		        thing = hit.transform;	// If we hit something dragable, hold on to it.
            	offSet = thing.position-Camera.main.ScreenToWorldPoint(Input.mousePosition);	// So its center does not align with mouse position

	        }

	    }
		else {
			Debug.Log("I am looking at nothing!");
		}
	}
	else if (Input.GetButtonUp ("Fire1") && thing != null) {
	
		hit = Physics2D.Raycast(thing.position, -Vector3.up);
		
		if(hit.collider != null)
	    {
	    	
	    	Debug.Log("object hit: "+hit.collider.tag);
	    	
	    	if(hit.collider.tag == "DRAG" && thing.tag == "LETTER")
			{
				Debug.Log("Letter dropped on drag me thingy");
				Destroy(thing.root.gameObject);		// Destroy letters dropped on "Drag me"
			}
			
		}
		
		thing = null;	// Let go
	}
	
	if (thing) {
		thing.position = Vector2(Camera.main.ScreenToWorldPoint(Input.mousePosition).x+offSet.x, Camera.main.ScreenToWorldPoint(Input.mousePosition).y+offSet.y);	// Move the thing
	}
}
#pragma strict

public var nextScene : String;

function Update () {
	if (Input.GetButtonDown ("Fire1")) {

	    var hit : RaycastHit2D = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);

	    if(hit.collider != null)
	    {
	    	if(hit.collider.tag == "SceneSwitcher")
			{
		        Application.LoadLevel (nextScene);
	        }

	    }
	}
}
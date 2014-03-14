#pragma strict

function Start () {

}

function Update () {
	if (Input.GetButtonDown ("Fire1")) {

	    var hit : RaycastHit2D = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);

	    if(hit.collider != null)
	    {
	    	if(hit.collider.tag == "OK")
			{
		        Debug.Log("object clicked: "+hit.collider.tag);
		        Application.LoadLevel ("test_scn");
	        }

	    }
		else {
			Debug.Log("I am looking at nothing!");
		}
	}
}
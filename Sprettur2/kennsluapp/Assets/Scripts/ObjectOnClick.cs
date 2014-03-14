using UnityEngine;
using System.Collections;

public class ObjectOnClick : MonoBehaviour {

	// Use this for initialization
	private Animator animator;
	private bool hasBeenClicked;

	void Start () {
		animator = this.GetComponent<Animator>();
		hasBeenClicked = false;
	}
	void OnMouseDown()
	{
		if (Input.GetMouseButtonDown (0)) {
			Debug.Log("Pressed left click.");
			hasBeenClicked = !hasBeenClicked;
			animator.SetBool("Clicked", hasBeenClicked);
			StartCoroutine(Waiting(0.99F));
			}
	}

	IEnumerator Waiting(float delay)	
	{
		
		// wait the delay time...
		yield return new WaitForSeconds(delay);
		// then load the level:
		Application.LoadLevel("hangman");
		
	}
}

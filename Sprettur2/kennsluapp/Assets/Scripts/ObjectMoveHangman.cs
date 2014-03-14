using UnityEngine;
using System.Collections;

public class ObjectMoveHangman : MonoBehaviour {

	// Use this for initialization
	private Animator animator;
	private int counter;

	void Start () {
		animator = this.GetComponent<Animator>();
		counter = 0;
	}
	
	// Update is called once per frame
	void Update () {
		if (Input.GetMouseButtonDown (0)) {
			animator.SetInteger ("transition", (++counter) % 6);
		}
	}
}

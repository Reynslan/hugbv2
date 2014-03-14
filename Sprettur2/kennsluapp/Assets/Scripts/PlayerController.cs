using UnityEngine;
using System.Collections;

public class PlayerController : MonoBehaviour
{
	
	private Animator animator;
	private float moveSpeed;
	
	// Use this for initialization
	void Start()
	{
		animator = this.GetComponent<Animator>();
		moveSpeed = 1F;
	}
	
	// Update is called once per frame
	void Update()
	{
		
		var horizontal = Input.GetAxis("Horizontal");

		if(horizontal == 0 && animator.GetBool("FaceRight") == true)
		{
			animator.SetInteger("Direction", 4);
		}
		else if(horizontal == 0 && animator.GetBool("FaceRight") == false)
		{
			animator.SetInteger("Direction",0);
		}
		else if (horizontal > 0)
		{
			animator.SetInteger("Direction", 2);
			animator.rigidbody2D.transform.Translate(0.01F*moveSpeed, 0, 0);
			animator.SetBool("FaceRight",true);
		}
		else if (horizontal < 0)
		{
			animator.SetInteger("Direction", 1);
			animator.rigidbody2D.transform.Translate(-0.01F*moveSpeed, 0, 0);
			animator.SetBool("FaceRight",false);
		}
	}
}

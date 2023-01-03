#pragma strict
var Blocks1 : GameObject;
var Blocks2 : GameObject;
var Blocks3 : GameObject;
var Blocks4 : GameObject;
var Blocks5 : GameObject;
var Blocks6 : GameObject;
var Blocks7 : GameObject;
var Blocks : int;

function Start () {
	PlayerPrefs.SetInt("Score", 0);

}

function Update () {
	if(Input.GetMouseButtonDown(0)) {
		var hit: RaycastHit;
        var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
        Blocks += 1;
        if(Physics.Raycast(ray, hit)){
        	var dingus = ray.GetPoint(10);
        	var random = Random.Range(1,8);
        	if(random == 1) {
        		Instantiate(Blocks1, dingus, Quaternion.Euler(0, 0, 180));
        	}else if(random == 2) {
        		Instantiate(Blocks2, dingus, Quaternion.Euler(0, 0, 180));
        	}else if(random == 3) {
        		Instantiate(Blocks3, dingus, Quaternion.Euler(0, 0, 180));
        	}else if(random == 4) {
        		Instantiate(Blocks4, dingus, Quaternion.Euler(0, 0, 180));
        	}else if(random == 5) {
        		Instantiate(Blocks5, dingus, Quaternion.Euler(0, 0, 180));
        	}else if(random == 6) {
        		Instantiate(Blocks6, dingus, Quaternion.Euler(0, 0, 180));
        	}else if(random == 7) {
        		Instantiate(Blocks7, dingus, Quaternion.Euler(0, 0, 180));
        	}
        }
	}
	if (PlayerPrefs.GetInt("Best") <= PlayerPrefs.GetInt("Score")) {
       	PlayerPrefs.SetInt("Best", PlayerPrefs.GetInt("Score"));
    }
    //camera
		transform.position.y = PlayerPrefs.GetInt("Score");
}

function OnGUI () {
	GUI.skin.box.fontSize = Screen.width/80;
	 //Boxes
	GUI.Box (new Rect (Screen.width-(Screen.width*.12), 0, Screen.width/8, Screen.height/16), "Current Score: " + PlayerPrefs.GetInt("Score"));
	GUI.Box (new Rect (0, 0, Screen.width/8, Screen.height/16), "Blocks Used: " + Blocks);
	GUI.Box (new Rect ((Screen.width/8) + 20 + (Screen.width/8), 0, Screen.width/6, Screen.height/16), "Current Time: " + Time.timeSinceLevelLoad);
	if(0 >= PlayerPrefs.GetInt("Best")){
		GUI.Box (new Rect ((Screen.width/8) + (Screen.width/8) + (Screen.width/6) + 30, 0, Screen.width/6, Screen.height/16), "No High Score!!!");
	}
	else if(0 <= PlayerPrefs.GetInt("Best")){
		GUI.Box (new Rect ((Screen.width/8) + (Screen.width/8) + (Screen.width/6) + 30, 0, Screen.width/6, Screen.height/16), "High Score: " + PlayerPrefs.GetInt("Best"));
	}
}
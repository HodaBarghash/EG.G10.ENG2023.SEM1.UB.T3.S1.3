function ExecuteScript(strId)
{
  switch (strId)
  {
      case "675DGrC7Egx":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbwZ4NmrAy0MlR1xTKgxToLQPbmghN4LEhkXRocU-6pACTJAHVkgDPK_HZWTFWxscg9W/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v18q1attempts:player.GetVar("v18q1attempts"),v18q1answeredcorrect:player.GetVar("v18q1answeredcorrect"),v18q2attempts:player.GetVar("v18q2attempts"),v18q2answeredcorrect:player.GetVar("v18q2answeredcorrect"),v18q3attempts:player.GetVar("v18q3attempts"),v18q3answeredcorrect:player.GetVar("v18q3answeredcorrect")})
	}
	)
}


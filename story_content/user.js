function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6RHww8PSFSc":
        Script1();
        break;
  }
}

function Script1()
{
  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    getValues(this);
  }
};
xhttp.open("GET", "values.xml", true);
xhttp.send();

function getValues(xml) {
  var player = GetPlayer();
  var xmlDoc = xml.responseXML;
  var x = xmlDoc.getElementsByTagName('db');
  player.SetVar("Value1", x[0].getAttribute('value'));
  player.SetVar("Value2", x[1].getAttribute('value'));
  player.SetVar("Value3", x[2].getAttribute('value'));
}
}


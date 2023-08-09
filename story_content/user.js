function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5jF3VQmuL6E":
        Script1();
        break;
      case "6KZqb3CgadF":
        Script2();
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

function Script2()
{
  
var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
    getValues(this);
  }
 };
 xhttp.open("PUT", "update_endpoint", true); // Replace with your server endpoint
      xhttp.setRequestHeader("Content-Type", "application/xml");
      var xmlData = `
        <?xml version="1.0" encoding="utf-8"?>
        <data>
          <value>Updated Value</value>
        </data>
      `;
      xhttp.send(xmlData);
}


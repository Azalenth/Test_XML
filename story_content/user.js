function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5a3IlvpEsta":
        Script1();
        break;
      case "6EaPEovu8m5":
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
  var fso = new ActiveXObject("Scripting.FileSystemObject");
var s = fso.OpenTextFile("C:\\Test.txt", 8, true, 0);
var name = player.GetVar("TextEntry");
var email = player.GetVar("TextEntry1");
s.WriteLine("Email: " + email);
s.WriteLine("Name: " + name);
s.WriteLine("==========");
s.Close();
}


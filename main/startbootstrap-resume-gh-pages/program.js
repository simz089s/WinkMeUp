function readJSON(path) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.responseType = 'blob';
    xhr.onload = function(e) { 
      if (this.status == 200) {
          var file = new File([this.response], 'temp');
          var fileReader = new FileReader();
          fileReader.addEventListener('load', function(){
               //do stuff with fileReader.result
          });
          fileReader.readAsText(file);
      } 
    }
    xhr.send();
}

function client(name,IDName,password)
{
    var obj =
    {
    pName: name,
    id:IDName,
    friends: new Array(10),
    music: new Array(10),
    alarm: null
    };
    return obj
}

function addClient()
{
    var nM = client("Jean-Kevin Coutu","Kevdu18","Life is good");
    var toJSON=JSON.stringify(nM);
    var fs = require("fs");
    fs.appendFile("Data.JSON",toJSON, (error) => {});
}

function removeClient()
{

}

function addFriend()
{

}

function removeFriend()
{

}

function addMusic()
{
    
}

function removeMusic()
{

}
function setAlarm()
{

}
function readJson()
{
    var values = readJSON("Data.JSON");
}
//addClient();
readJson();

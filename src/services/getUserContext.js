var GlobalUrl = 'http://127.0.0.1:8000/'

var $ = window.jQuery = require('jquery');

export async function GetApiRequest(objectName) {

    var objects = await $.ajax(GlobalUrl+objectName)
    return objects
  }

  export async function PostApiRequest(objectName,data) {
    var url = (GlobalUrl+objectName+"/")
    var objects = await $.ajax({
        url:url,
        method: "POST",
        data:JSON.stringify(data)
    })
    return objects
  }

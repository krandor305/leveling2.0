var GlobalUrl = process.env.VUE_APP_BACKENDURL
var $ = window.jQuery = require('jquery');

export async function GetApiRequest(objectName) {
    let url = (GlobalUrl+objectName)
    let ajaxObj = {url:url}
    
    if(localStorage.getItem("token"))
    {
      ajaxObj.beforeSend = function (xhr) {
        xhr.setRequestHeader ("Authorization", "Token " + localStorage.getItem("token"));
      }
    }
    
    var objects = await $.ajax(ajaxObj)
    return objects
  }

  export async function PostApiRequest(objectName,data) {
    var url = (GlobalUrl+objectName+"/")
    let ajaxObj = {
      url:url,
      method: "POST",
      data:JSON.stringify(data)
    }
    if(localStorage.getItem("token"))
    {
      ajaxObj.beforeSend = function (xhr) {
        xhr.setRequestHeader ("Authorization", "Token " + localStorage.getItem("token"));
      }
    }

    var objects = await $.ajax(ajaxObj)
    return objects
  }

  export async function DeleteApiRequest(objectName,id) {
    var url = (GlobalUrl+objectName+"/"+id)
    let ajaxObj = {
      url:url,
      method: "DELETE"
    }

    if(localStorage.getItem("token"))
    {
      ajaxObj.beforeSend = function (xhr) {
        xhr.setRequestHeader ("Authorization", "Token " + localStorage.getItem("token"));
      }
    }

    var objects = await $.ajax(ajaxObj)
    return objects
  }

var valueArray = [];

$(document).ready(function(){
  $("button").click(function(){
    valueArray = ($("form").serializeArray());
    CheckPassword(valueArray[7].value);
    testValue(valueArray[0].value,valueArray[0].name);
    testValue(valueArray[1].name,valueArray[1].name);
    testValue(valueArray[4].name,valueArray[4].name);
    testCP(valueArray[3].name,valueArray[3].name)
  });
});


function CheckPassword(password) 
{ 
    var passw=  /^[A-Z][a-z]*[0-9]*$/;
    if(passw.test(password)) 
    { 
        return true;
    }
    else
    { 
        alert('mot de passe non valide')
        return false;
    }
}

function testValue(value,name)
{ 
    var expr=  /^[a-zA-Z\-]+$/;
    if(expr.test(value)) 
    { 
        return true;
    }
    else
    { 
        alert(name+' non valide')
        return false;
    }
}

function testCP(value,name)
{ 
    var expr=  /^[0-9]$/;
    if(expr.test(value)) 
    { 
        return true;
    }
    else
    { 
        alert(name+' non valide')
        return false;
    }
}



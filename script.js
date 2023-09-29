function validation()
          {
               
               var username=document.getElementById("uname")
               var password=document.getElementById("pass")

               if(username.value.trim()==""){
                    alert("Blank username")
                    return false
               }
               else if(password.value.trim()==""){
                    alert("Blank password")
                    return false
               }
              else if(password.value.trim().length<8){
                    alert("password is too short")
                    return false
               }
               else{
                    return true
               }
          }
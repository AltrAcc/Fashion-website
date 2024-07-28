let menuList = document.getElementById("menuList")
       menuList.style.maxHeight = "0px";

       function toggleMenu(){
           if(menuList.style.maxHeight == "0px")
           {
               menuList.style.maxHeight = "400px";
               menuList.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.3)";
           }
           else{
               menuList.style.maxHeight = "0px";
               menuList.style.boxShadow = "none";
           }
       }


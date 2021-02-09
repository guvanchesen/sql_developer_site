window.onload = function(){
    $(".btn1").click(function(){
             $("#image")
                 .fadeOut("slow", function() {
                      $('#image').attr('src','background.jpg');
                 })
                 .fadeIn("slow");
              
             });
         $(".btn2").click(function(){
                 $("#image")
                     .fadeOut("slow", function() {
                          $('#image').attr('src','background1.jpg');
                     })
                     .fadeIn("slow");
                  
                 });

         $(".btn3").click(function(){
                     $("#image")
                         .fadeOut("slow", function() {
                              $('#image').attr('src','background2.jpg');
                         })
                         .fadeIn("slow");
                      
                     });
   
         mybutton = document.getElementById("myBtn");
         window.onscroll = function() {scrollFunction()};
         
         function scrollFunction() {
           if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
             mybutton.style.display = "block";
           } else {
             mybutton.style.display = "none";
           }
         }

icerik = document.getElementById("icindekiler");

baslik = document.createElement("h2");
baslik.innerText="Içindekiler";
icerik.appendChild(baslik);

listeUl = document.createElement("ul");    

basliklar = document.getElementsByTagName("h3");

for (i = 0; i < basliklar.length; i++){
 
  isim = "h"+i;
  basliklar[i].id=isim;
 
  listeLi = document.createElement("li");

  baslikLink = document.createElement("a");
  baslikLink.setAttribute("href","#"+isim);
  baslikLink.innerText=basliklar[i].innerText;
 
  listeLi.appendChild(baslikLink);
  listeUl.appendChild(listeLi);
}
icerik.appendChild(listeUl);
        };
        
  
function yukari() {
     document.body.scrollTop = 0; 
     document.documentElement.scrollTop = 0; 
          };
function pageRedirect() {
  window.open("https://www.oracle.com/tr/database/what-is-autonomous-database.html", "_blank");
};

function isimAlert() {
          
  var isim = document.getElementById("kAdi").value;
  var sifre = document.getElementById("sifre").value;
  if (isim === "admin" && sifre === "12345") {
    
     window.location.href="ders1.html";
     alert("Merhaba " + isim + " Hoşgeldiniz!!!");
    console.log("hey");
  }
  else if (isim === "" || sifre === "") {
    alert("Kullanıcı adı veya şifre boş bırakılamaz");
  }
  
  else alert ("Kullanıcı adı veya şifre hatalı!");
};

function gonder(){
  var ad = document.getElementById("isim").value;
  alert("Sayın "+ad+" Mesajınızı alındı. Bizimle iletişime geçtiğiniz için teşekkür ederiz!")
}





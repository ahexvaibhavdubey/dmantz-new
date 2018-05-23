
// code for google maps

// function myMap() {
//     var mapCanvas = document.getElementById("ContactUsLocationMap");
//     var mapOptions = {
//         center: new google.maps.LatLng(17.449863, 78.394732), zoom: 100
//     };
//     var map = new google.maps.Map(mapCanvas, mapOptions);
// }

// end of the google maps code.





window.onscroll=function() {scrollFunction()};
function scrollFunction() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    }
    else {
        document.getElementById("myBtn").style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}





function myDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}



/* function contactdisplay()
{
    var element = document.getElementById("ContactUsModal");
    element.style.display = "block";
    //document.getElementById("Contact_Section1").style.display= "block";
    console.log("hello");
} */
function resetform1()
{
    console.log("resetform1 clicked.Line no-1.");
    //document.getElementById("Fname_text_box").value="";
    //document.getElementById("cLname_box").value="";
    //document.getElementById("cEmail_box").value="";
    //document.getElementById("Country_box").value="";
    //document.getElementById("Subject_box").value="";
    document.getElementById("contact").reset();
    console.log("resetform1 clicked.Line no-2.");
}
function ContactSection()
{
    var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
    var cfname = document.getElementById("Fname_text_box").value;
    var clname = document.getElementById("cLname_box").value;
    var cfemail = document.getElementById("cEmail_box").value;
    var country = document.getElementById("Country_box").value;
    var Subject = document.getElementById("Subject_box").value;

        if (cfname == "") {
            document.getElementById("cerrorBox1").innerHTML = "Please enter the first name";
            return false;
        }
        else if (clname == "") {
            document.getElementById("cerrorBox2").innerHTML = "Pleas enter the last name";

            return false;
        }

        else if (cfemail == "") {
            document.getElementById("cerrorBox3").innerHTML = "Please enter the email";
            return false;
        }
        else if (!emailRegex.test(cfemail)) {
            document.getElementById("cerrorBox").innerHTML = "Please enter the valid email";
            return false;
        }
        else if (country == "") {
            document.getElementById("cerrorBox").innerHTML = "Please select one country";
            return false;
        }
        else if (Subject == "") {
            document.getElementById("cerrorBox").innerHTML = "Please enter the the text";
            return false;
        }
        /*else if (!(Subject == "")) {
            document.getElementById("cerrorBox").innerHTML = "";
            return false;
        }*/
         else
        {
        var xhttp = new XMLHttpRequest();
        var url = "http://localhost:3000/Contact_Section";
        var registerReq = {
            firstname: document.getElementById("Fname_text_box").value,
            lastname: document.getElementById("cLname_box").value,
            email: document.getElementById("cEmail_box").value,
            country: document.getElementById("Country_box").value,
            subject: document.getElementById("Subject_box").value
        };

        /*var registerReq={firstname: "teja",
            lastname: "golusula",
            email: "teja1@gmail.com",
            password: "Teja@22",
        };*/
        var params = JSON.stringify(registerReq);
        console.log(params);
        var params = "inputJsonStr" + "=" + params;
        xhttp.open("POST", url, true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.onreadystatechange = function () {
            if ((this.readyState == 4) && (this.status == 200)) {
                console.log("after getting response" + xhttp.responseText);
                var jsonresponse = JSON.parse(this.responseText);
            }
        };
        xhttp.send(params);
    }

}






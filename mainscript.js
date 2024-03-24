// let loginbtn=document.getElementById("submit");
// loginbtn.addEventListener("click",function(){
//     var loginoption=documnet.getElementById("removelogin");
//     loginoption.parentNode.removeChild(loginoption);
// });
// document.getElementById("submit").addEventListener("submit",function(event){
//     event.preventDefault();
//         window.location.href="./PBLmain.html";
// });
document.addEventListener("DOMContentLoaded", function() {
    // Get the form and submit button
    const form = document.getElementById("loginForm");
    const submitButton = document.getElementById("submit");
    

    // Add event listener to the form submit event
    form.addEventListener("submit", function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();
       

        // Redirect to the home page (replace "home.html" with your actual home page URL)
        window.location.href = "index2.html";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Check if the flag indicating to remove the login paragraph is set
    const shouldRemoveLoginParagraph = localStorage.getItem("removeLoginParagraph");

    // Check if the flag exists and is set to true
    if (shouldRemoveLoginParagraph === "true") {
        // Get the login paragraph element
        const loginParagraph = document.getElementById("loginParagraph");
        
        // Check if the login paragraph element exists
        if (loginParagraph) {
            // Remove the login paragraph element
            loginParagraph.remove();
            
            // Remove the flag to ensure it's not removed again on subsequent page loads
            localStorage.removeItem("removeLoginParagraph");
        }
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // Get the form and submit button
    const form = document.getElementById("signupform");
    const submitButton = document.getElementById("submit");
    

    // Add event listener to the form submit event
    form.addEventListener("submit", function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();
       

        // Redirect to the home page (replace "home.html" with your actual home page URL)
        window.location.href = "login.html";
    });
});




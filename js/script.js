/*
-	Protfolio "AlishaBeg"
-	Designed by Alisha Beg
-	All Righst Reserved Alisha Beg
-	Developed by AlishaBeg and MayankDevil
-   js/script.js
*/
try
{
    

    document.getElementById('theme-btn').onclick = () => {

        let element = document.body;

        element.classList.toggle('dark')
    }   
}
catch(error)
{
    console.log(error)
}
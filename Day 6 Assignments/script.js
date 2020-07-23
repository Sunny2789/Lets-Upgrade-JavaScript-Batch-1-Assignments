
name = prompt("Enter Your Name: ")

welcome = document.getElementById("demo").innerHTML = "| | | Welcome " + name + " | | |";


function button() {
    body.classList.add('darkMode')
    
}

function button2() {
    body.classList.remove('darkMode')
}
function tbutton() {
    document.getElementById("demo2").innerHTML = "Now The Time Is: <br>" + Date();
}

time = document.getElementById("demo2").innerHTML = "Now The Time Is: <br>" + Date();

arr = [1,2,3,4,5,6,7,8,9,10]
user_num = prompt("Enter A Number Whose Table Want And See It In The Console Log :: ")


function table_r() {
    console.log("The Table Of Your Number", user_num, "Is Written Below: ")
    arr.forEach(element => {
        ans = element*user_num;
        n = element*1
        console.log(user_num, "x", n, "=", ans);
        re = (user_num, "x", n, "=", ans);
        document.getElementById("table").innerHTML = re;
})
}

point = document.getElementById("table").innerHTML = "Sir I Tryed TO Print The Table In WebPage But It Is Showing : <br>" + table_r();

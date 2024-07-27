// 1

var a=b=3

console.log(a,"a variable")
console.log(b, "b variable")

// 2.

var a={}
b={key : "b"}
c={key:"c"}

a[b]=123
console.log(a)


// 3.

function data(){
    console.log("username"+" "+username);   //undefined
    console.log("emailaddress"+" "+emailaddress) //can't access before the initialisation
    
    var username="verru"
    const emailaddress="sainath@gmail.com"
}
data()

// 4.

// here it will consider the i as var i;
for(var i=0;i<3;i++){
    setTimeout(() => {
        console.log(i)
    }, 5);
}

// 4 four times
for(let i=0;i<3;i++){
    setTimeout(() => {
        console.log(i)
    }, 5);
}

// 0,1,2,3
var a = [10,20,30,40,50,60]

//push

function myPush(array,value){
    let length=array.length;
    console.log(length);
    array[length]=value;
    return array;
}
a=myPush(a,80);
console.log(a);

//slice

function slice(array,start,end) {
    let length = array.length;
    console.log(length);

    let c = [];
    let j = 0;
    for (let i = start; i < end; i++) {
        c[j] = array[i]
        j++;
        
    }
    return c;
}
a = slice(a,0,2);
console.log(a);

//pop

function myPop(array){
    let length=array.length;
    console.log(length);
    var b=[];
    console.log(b);
    for(let i=0;i<length-1;i++){
        b[i]=array[i];
    }
    return b;
}
a=myPop(a);
console.log(a);

//reverse

function myReverse() {
    let length = a.length;
    var c = [];
    var index = 0;
    for (let i = length-1; i>=0 ; i--) {
        c[index] = a[i];
        index++;
    }
    return c;
}
a=myReverse();
console.log(a);

//join

function myShift(array) {
    let length = a.length;
    var k = [];
    var index = 0;
    for (let i = 1; i<length; i++) {
        k[index] = array[i];
        index++
    }
    return k;
}
a=myShift(a);
console.log(a);
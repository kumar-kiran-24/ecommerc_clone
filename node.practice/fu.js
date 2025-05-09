sumof=function(a,b){
    return a+b
}

divison=function(a,b){
    return a/b
}

sub=function(a,b){
    return a-b
}
productof=function(a,b){
    return a*b
}
e=function(a,b,operator){
    return operator(a,b)
}
a=e(5,2,productof)
console.log(a)
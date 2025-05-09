marks=[
    {"name":"abc","sci":90,"math":99,"os":56},
    {"name":"def","sci":98,"math":67,"os":81},
    {"name":"gh","sci":9,"math":45,"os":76},
    {"name":"xyz","sci":23,"math":45,"os":88},
    {"name":"xyz","sci":80,"math":45,"os":76},
    

]
l=marks.length

for(i=0;i<l;i++){
    if(marks[i]["sci"]<35 || marks[i]["math"]<35 || marks[i]["os"]<35){
        console.log("student",marks[i]['name'],"is","F")
    }
    else{
    total=marks[i]["sci"]+marks[i]["math"]+marks[i]["os"]
    average=Math.ceil(total/3)

    if(average<60){
        console.log(marks[i]['name'],"C")
    }
    else if(average<80){ 
        console.log(marks[i]['name'],"B")

    }
    else{
        console.log(marks[i]['name'],"A")
    }

    }
}
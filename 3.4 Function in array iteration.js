//Array iterations using forEach

var foods = ["Cake","Ice Cream","Chocolates","Bread"];
var numbers= [1,32,31,2];

//1st parameter : Item  
//2nd parameter : Index
// 3rd parameter : whole array
let printeverything = function(item,i,abc){
    
    console.log(`Index :${i} and item: ${item}`); 
    //prints Index :0 and item: Cake

    console.log(abc);
    //prints  ["Cake", "Ice Cream", "Chocolates", "Bread"]
}
foods.forEach(printeverything);



//Array iteration using mapping 

var foods2 = ["Cake","Ice Cream","Chocolates","Bread"];
var numbers2= [1,32,31,2];

function addsomething(item){
    return `${item} is a food`
}

let arr_res = foods.map(addsomething);

console.log(arr_res);
//prints ["Cake is a food", "Ice Cream is a food", "Chocolates is a food", "Bread is a food"]


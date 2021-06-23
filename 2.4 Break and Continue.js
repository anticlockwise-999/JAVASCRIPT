// break

for(var i=1 ; i<=5; i++) {
    if (i==3) {
        break; //breaks after getting 1,2
    }
    console.log(i);
}

//continue or skip
for (var i=1; i<=5 ; i++){
    if(i==4){
        continue; //skips 4
    }
    console.log(i);
}

//finding odd number using continue
for (var i=1; i<=10 ; i++){
    if(i % 2==1){
        continue; //skips values with remainder 1
    }
    console.log(i);
    
}
 
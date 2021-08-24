function add(num1,num2 = 0){  //eikhane num2 = 0 deoa hoiche cz jkn ei parameter er value na deoa hole eita default parameter e set kore deoa hoi
    // option 1
    // num2 = num2 || 0; 

    // option 2
    // if(num2 == undefined){
    //     num2 =   0;
    // }
    const total = num1 + num2;
    return total;
}
const result = add(12,13);
console.log(result);
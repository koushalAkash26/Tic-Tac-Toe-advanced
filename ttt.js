const b1_div=document.getElementById("b00")
const b2_div=document.getElementById("b01")
const b3_div=document.getElementById("b02")
const b4_div=document.getElementById("b10")
const b5_div=document.getElementById("b11")
const b6_div=document.getElementById("b12")
const b7_div=document.getElementById("b20")
const b8_div=document.getElementById("b21")
const b9_div=document.getElementById("b22")
let result_p=document.getElementById("notify")
const big_div=document.getElementById("bb")
const button_div=document.getElementById("btn")
let count=0;
let storageArray= new Array(3)
let validationArray=["00","01","02","10","11","12","20","21","22"]
for(let i=0;i<3;i++){
    storageArray[i]=new Array(3)

}
for(let i=0;i<3;i++){
    for (let j=0;j<3;j++){
        storageArray[i][j]="_"
    }
}
function restart(){
    window.location.reload(true)
    
}
function checkResult_u(){
    let x=((storageArray[0][0]==="x"&& storageArray[0][1]==="x"&& storageArray[0][2]==="x")||(storageArray[1][0]==="x"&& storageArray[1][1]==="x"&& storageArray[1][2]==="x" )||( storageArray[2][0]==="x"&&storageArray[2][1]==="x"&&storageArray[2][2]==="x"))
    let y=((storageArray[0][0]==="x"&&storageArray[1][0]==="x"&&storageArray[2][0]==="x") || (storageArray[0][1]==="x"&&storageArray[1][1]==="x"&&storageArray[2][1]==="x" )|| (storageArray[0][2]==="x"&&storageArray[1][2]==="x"&&storageArray[2][2]==="x"))
    let z=((storageArray[0][0]==="x"&&storageArray[1][1]==="x"&&storageArray[2][2]==="x" )|| (storageArray[2][0]==="x"&&storageArray[1][1]==="x"&&storageArray[0][2]==="x"))
  
    if(x||y||z){
        result_p.innerHTML="you won 🔥"
        
        //setTimeout(()=>window.location.reload(true),400)
        big_div.classList.add('shade')
        button_div.classList.remove('btn1')
        button_div.classList.add('btn')
        return "won"
    }
    else{
        //console.log("better luck")
    }

}
function checkResult_c(){
    let x=((storageArray[0][0]==="o"&& storageArray[0][1]==="o"&& storageArray[0][2]==="o")||(storageArray[1][0]==="o"&& storageArray[1][1]==="o"&& storageArray[1][2]==="o" )||( storageArray[2][0]==="o"&&storageArray[2][1]==="o"&&storageArray[2][2]==="o"))
    let y=((storageArray[0][0]==="o"&&storageArray[1][0]==="o"&&storageArray[2][0]==="o") || (storageArray[0][1]==="o"&&storageArray[1][1]==="o"&&storageArray[2][1]==="o" )|| (storageArray[0][2]==="o"&&storageArray[1][2]==="o"&&storageArray[2][2]==="o"))
    let z=((storageArray[0][0]==="o"&&storageArray[1][1]==="o"&&storageArray[2][2]==="o" )|| (storageArray[2][0]==="o"&&storageArray[1][1]==="o"&&storageArray[0][2]==="o"))
    
   
    if(x ||y||z){
        setTimeout(()=>result_p.innerHTML="you lose 💩",800)
        //setTimeout(()=>window.location.reload(true),1000)
        setTimeout(function()
        {
            big_div.classList.add('shade')
            button_div.classList.remove('btn1')
            button_div.classList.add('btn')
        },800)
        
    }
    else{
        //console.log("better luck")
    }

}
function checkResult_d(){
    let x=((storageArray[0][0]==="x"&& storageArray[0][1]==="x"&& storageArray[0][2]==="x")||(storageArray[1][0]==="x"&& storageArray[1][1]==="x"&& storageArray[1][2]==="x" )||( storageArray[2][0]==="x"&&storageArray[2][1]==="x"&&storageArray[2][2]=="x"))
    let y=((storageArray[0][0]==="x"&&storageArray[1][0]==="x"&&storageArray[2][0]==="x") || (storageArray[0][1]==="x"&&storageArray[1][1]==="x"&&storageArray[2][1]==="x" )|| (storageArray[0][2]==="x"&&storageArray[1][2]==="x"&&storageArray[2][2]=="x"))
    let z=((storageArray[0][0]==="x"&&storageArray[1][1]==="x"&&storageArray[2][2]==="x" )|| (storageArray[2][0]==="x"&&storageArray[1][1]==="x"&&storageArray[0][2]==="x"))
    //console.log(storageArray[0][0]==="x"&&storageArray[1][0]==="x"&&storageArray[2][0]==="x")
    if(!(x||y||z)){
        result_p.innerHTML="Match Draw🙂"
        //setTimeout(()=>window.location.reload(true),1200)
        big_div.classList.add('shade')
        button_div.classList.remove('btn1')
        button_div.classList.add('btn')
    }
    else{
        //console.log("better luck")
    }
    

}
function computerCalc(pos1,pos2){
    if(storageArray[0][0]==="o"&&storageArray[0][1]==="o"&&storageArray[0][2]==="_"){
        return "02"
    }
    else if(storageArray[0][0]==="o"&&storageArray[0][2]==="o"&&storageArray[0][1]==="_"){
        return "01"
    }
    else if(storageArray[0][2]==="o"&&storageArray[0][1]==="o"&&storageArray[0][0]==="_"){
        return "00"
    }
    else if(storageArray[1][0]==="o"&&storageArray[1][1]==="o"&&storageArray[1][2]==="_"){
        return "12"
    }
    else if(storageArray[1][0]==="o"&&storageArray[1][2]==="o"&&storageArray[1][1]==="_"){
        return "11"
    }
    else if(storageArray[1][1]==="o"&&storageArray[1][2]==="o"&&storageArray[1][0]==="_"){
        return "10"
    }
    else if(storageArray[2][0]==="o"&&storageArray[2][1]==="o"&&storageArray[2][2]==="_"){
        return "22"
    }
    else if(storageArray[2][0]==="o"&&storageArray[2][2]==="o"&&storageArray[2][1]==="_"){
        return "21"
    }
    else if(storageArray[2][1]==="o"&&storageArray[2][2]==="o"&&storageArray[2][0]==="_"){
        return "20"
    }
    else if(storageArray[0][0]==="o"&&storageArray[1][0]==="o"&&storageArray[2][0]==="_"){
        return "20"
    }
    else if(storageArray[0][0]==="o"&&storageArray[2][0]==="o"&&storageArray[1][0]==="_"){
        return "10"
    }
    else if(storageArray[1][0]==="o"&&storageArray[2][0]==="o"&&storageArray[0][0]==="_"){
        return "00"
    }
    else if(storageArray[0][1]==="o"&&storageArray[1][1]==="o"&&storageArray[2][1]==="_"){
        return "21"
    }
    else if(storageArray[0][1]==="o"&&storageArray[2][1]==="o"&&storageArray[1][1]==="_"){
        return "11"
    }
    else if(storageArray[1][1]==="o"&&storageArray[2][1]==="o"&&storageArray[0][1]==="_"){
        return "01"
    }
    else if(storageArray[0][2]==="o"&&storageArray[1][2]==="o"&&storageArray[2][2]==="_"){
        return "22"
    }
    else if(storageArray[0][2]==="o"&&storageArray[2][2]==="o"&&storageArray[1][2]==="_"){
        return "12"
    }
    else if(storageArray[1][2]==="o"&&storageArray[2][2]==="o"&&storageArray[0][2]==="_"){
        return "02"
    }
    else if(storageArray[0][0]==="o"&&storageArray[1][1]==="o"&&storageArray[2][2]==="_"){
        return "22"
    }
    else if(storageArray[0][0]==="o"&&storageArray[2][2]==="o"&&storageArray[1][1]==="_"){
        return "11"
    }
    else if(storageArray[1][1]==="o"&&storageArray[2][2]==="o"&&storageArray[0][0]==="_"){
        return "00"
    }
    else if(storageArray[0][2]==="o"&&storageArray[1][1]==="o"&&storageArray[2][0]==="_"){
        return "20"
    }
    else if(storageArray[0][2]==="o"&&storageArray[2][0]==="o"&&storageArray[1][1]==="_"){
        return "11"
    }
    else if(storageArray[1][1]==="o"&&storageArray[2][0]==="o"&&storageArray[0][2]==="_"){
        return "02"
    }


    else if(pos1===0 && pos2===0){
        if(storageArray[0][1]==="x"&& storageArray[0][2]==="_"){
            return "02"

        }
        else if(storageArray[0][2]==="x"&& storageArray[0][1]==="_"){
            return "01"
        }
        else if(storageArray[2][2]==="x"&&storageArray[1][1]==="_"){
            return "11"
        }
        else if(storageArray[1][1]==="x"&&storageArray[2][2]==="_"){
            return "22"
        }
        else if(storageArray[1][0]==="x"&&storageArray[2][0]==="_"){
            return "20"
        }
        else if(storageArray[2][0]==="x"&&storageArray[1][0]==="_"){
            return "10"
        }
        else{
            let stoArray=[storageArray[0][1],storageArray[1][0],storageArray[1][1]]
            let stoArray1=[]
            for(let i=0;i<3;i++){
                if(stoArray[i]==="_"){
                    if(i===0){
                        stoArray1.push("01")
                    }
                    if(i===1){
                        stoArray1.push("10")
                    }
                    if(i===2){
                        stoArray1.push("11")
                    }
                    

                }
            }
            let selected=stoArray1[Math.floor(Math.random()*stoArray1.length)];
            
            return selected
        }
    }
    else if(pos1===0 && pos2===1){
        if(storageArray[0][0]==="x"&& storageArray[0][2]==="_"){
            return "02"

        }
        else if(storageArray[0][2]==="x"&& storageArray[0][0]==="_"){
            return "00"
        }
        else if(storageArray[1][1]==="x"&&storageArray[2][1]==="_"){
            return "21"
        }
        else if(storageArray[2][1]==="x"&&storageArray[1][1]==="_"){
            return "11"
        }
        
        else{
            let stoArray=[storageArray[0][0],storageArray[0][2],storageArray[1][1]]
            let stoArray1=[]
            for(let i=0;i<3;i++){
                if(stoArray[i]==="_"){
                    if(i===0){
                        stoArray1.push("00")
                    }
                    if(i===1){
                        stoArray1.push("02")
                    }
                    if(i===2){
                        stoArray1.push("11")
                    }
                    

                }
            }
            let selected=stoArray1[Math.floor(Math.random()*stoArray1.length)];
            console.log(stoArray1)
            console.log(selected)
            return selected
        }
    }
    else if(pos1===0 && pos2===2){
        if(storageArray[0][0]==="x"&& storageArray[0][1]==="_"){
            return "01"

        }
        else if(storageArray[0][1]==="x"&& storageArray[0][0]==="_"){
            return "00"
        }
        else if(storageArray[1][1]==="x"&&storageArray[2][0]==="_"){
            return "20"
        }
        else if(storageArray[2][0]==="x"&&storageArray[1][1]==="_"){
            return "11"
        }
        else if(storageArray[1][2]==="x"&&storageArray[2][2]==="_"){
            return "22"
        }
        else if(storageArray[2][2]==="x"&&storageArray[1][2]==="_"){
            return "12"
        }
        else{
            let stoArray=[storageArray[0][1],storageArray[1][1],storageArray[1][2]]
            let stoArray1=[]
            for(let i=0;i<3;i++){
                if(stoArray[i]==="_"){
                    if(i===0){
                        stoArray1.push("01")
                    }
                    if(i===1){
                        stoArray1.push("11")
                    }
                    if(i===2){
                        stoArray1.push("12")
                    }
                    

                }
            }
            let selected=stoArray1[Math.floor(Math.random()*stoArray1.length)];
            console.log(stoArray1)
            console.log(selected)
            return selected
        }
    }
    else if(pos1===1 && pos2===0){
        if(storageArray[0][0]==="x"&& storageArray[2][0]==="_"){
            return "20"

        }
        else if(storageArray[2][0]==="x"&& storageArray[0][0]==="_"){
            return "00"
        }
        else if(storageArray[1][1]==="x"&&storageArray[1][2]==="_"){
            return "12"
        }
        else if(storageArray[1][2]==="x"&&storageArray[1][1]==="_"){
            return "11"
        }
        
        else{
            let stoArray=[storageArray[0][0],storageArray[1][1],storageArray[2][0]]
            let stoArray1=[]
            for(let i=0;i<3;i++){
                if(stoArray[i]==="_"){
                    if(i===0){
                        stoArray1.push("00")
                    }
                    if(i===1){
                        stoArray1.push("11")
                    }
                    if(i===2){
                        stoArray1.push("20")
                    }
                    

                }
            }
            let selected=stoArray1[Math.floor(Math.random()*stoArray1.length)];
            console.log(stoArray1)
            console.log(selected)
            return selected
        }
    }
    else if(pos1===1 && pos2===1){
        if(storageArray[0][1]==="x"&& storageArray[2][1]==="_"){
            return "21"

        }
        else if(storageArray[2][1]==="x"&& storageArray[0][1]==="_"){
            return "01"
        }
        else if(storageArray[1][0]==="x"&&storageArray[1][2]==="_"){
            return "12"
        }
        else if(storageArray[1][2]==="x"&&storageArray[1][0]==="_"){
            return "10"
        }
        else if(storageArray[0][0]==="x"&&storageArray[2][2]==="_"){
            return "22"
        }
        else if(storageArray[2][2]==="x"&&storageArray[0][0]==="_"){
            return "00"
        }
        else if(storageArray[0][2]==="x"&&storageArray[2][0]==="_"){
            return "20"
        }
        else if(storageArray[2][0]==="x"&&storageArray[0][2]==="_"){
            return "02"
        }
        else{
            let stoArray=[storageArray[0][0],storageArray[0][1],storageArray[0][2],storageArray[1][0],storageArray[1][2],storageArray[2][0],storageArray[2][1],storageArray[2][2]]
            let stoArray1=[]
            for(let i=0;i<8;i++){
                if(stoArray[i]==="_"){
                    if(i===0){
                        stoArray1.push("00")
                    }
                    if(i===1){
                        stoArray1.push("01")
                    }
                    if(i===2){
                        stoArray1.push("02")
                    }
                    if(i===3){
                        stoArray1.push("10")
                    }
                    if(i===4){
                        stoArray1.push("12")
                    }
                    if(i===5){
                        stoArray1.push("20")
                    }
                    if(i===6){
                        stoArray1.push("21")
                    }
                    if(i===7){
                        stoArray1.push("22")
                    }
                    

                }
            }
            let selected=stoArray1[Math.floor(Math.random()*stoArray1.length)];
            console.log(stoArray1)
            console.log(selected)
            return selected
        }
    }
    else if(pos1===1 && pos2===2){
        if(storageArray[0][2]==="x"&& storageArray[2][2]==="_"){
            return "22"

        }
        else if(storageArray[2][2]==="x"&& storageArray[0][2]==="_"){
            return "02"
        }
        else if(storageArray[1][0]==="x"&&storageArray[1][1]==="_"){
            return "11"
        }
        else if(storageArray[1][1]==="x"&&storageArray[1][0]==="_"){
            return "10"
        }
        
        else{
            let stoArray=[storageArray[0][2],storageArray[1][1],storageArray[2][2]]
            let stoArray1=[]
            for(let i=0;i<3;i++){
                if(stoArray[i]==="_"){
                    if(i===0){
                        stoArray1.push("02")
                    }
                    if(i===1){
                        stoArray1.push("11")
                    }
                    if(i===2){
                        stoArray1.push("22")
                    }
                    

                }
            }
            let selected=stoArray1[Math.floor(Math.random()*stoArray1.length)];
            console.log(stoArray1)
            console.log(selected)
            return selected
        }
    }
    else if(pos1===2 && pos2===0){
        if(storageArray[0][0]==="x"&& storageArray[1][0]==="_"){
            return "10"

        }
        else if(storageArray[1][0]==="x"&& storageArray[0][0]==="_"){
            return "00"
        }
        else if(storageArray[1][1]==="x"&&storageArray[0][2]==="_"){
            return "02"
        }
        else if(storageArray[0][2]==="x"&&storageArray[1][1]==="_"){
            return "11"
        }
        else if(storageArray[2][1]==="x"&&storageArray[2][2]==="_"){
            return "22"
        }
        else if(storageArray[2][2]==="x"&&storageArray[2][1]==="_"){
            return "21"
        }
        else{
            let stoArray=[storageArray[1][0],storageArray[1][1],storageArray[2][1]]
            let stoArray1=[]
            for(let i=0;i<3;i++){
                if(stoArray[i]==="_"){
                    if(i===0){
                        stoArray1.push("01")
                    }
                    if(i===1){
                        stoArray1.push("11")
                    }
                    if(i===2){
                        stoArray1.push("21")
                    }
                    

                }
            }
            let selected=stoArray1[Math.floor(Math.random()*stoArray1.length)];
            console.log(stoArray1)
            console.log(selected)
            return selected
        }
    }
    else if(pos1===2 && pos2===1){
        if(storageArray[2][0]==="x"&& storageArray[2][2]==="_"){
            return "22"

        }
        else if(storageArray[2][2]==="x"&& storageArray[2][0]==="_"){
            return "20"
        }
        else if(storageArray[0][1]==="x"&&storageArray[1][1]==="_"){
            return "11"
        }
        else if(storageArray[1][1]==="x"&&storageArray[0][1]==="_"){
            return "01"
        }
        else{
            let stoArray=[storageArray[1][1],storageArray[2][0],storageArray[2][2]]
            let stoArray1=[]
            for(let i=0;i<3;i++){
                if(stoArray[i]==="_"){
                    if(i===0){
                        stoArray1.push("11")
                    }
                    if(i===1){
                        stoArray1.push("20")
                    }
                    if(i===2){
                        stoArray1.push("22")
                    }
                    

                }
            }
            let selected=stoArray1[Math.floor(Math.random()*stoArray1.length)];
            console.log(stoArray1)
            console.log(selected)
            return selected
        }
    }
    if(pos1===2 && pos2===2){
        if(storageArray[0][2]==="x"&& storageArray[1][2]==="_"){
            return "12"

        }
        else if(storageArray[1][2]==="x"&& storageArray[0][2]==="_"){
            return "02"
        }
        else if(storageArray[0][0]==="x"&&storageArray[1][1]==="_"){
            return "11"
        }
        else if(storageArray[1][1]==="x"&&storageArray[0][0]==="_"){
            return "00"
        }
        else if(storageArray[2][0]==="x"&&storageArray[2][1]==="_"){
            return "21"
        }
        else if(storageArray[2][1]==="x"&&storageArray[2][0]==="_"){
            return "20"
        }
        else{
            let stoArray=[storageArray[1][1],storageArray[1][2],storageArray[2][1]]
            let stoArray1=[]
            for(let i=0;i<3;i++){
                if(stoArray[i]==="_"){
                    if(i===0){
                        stoArray1.push("11")
                    }
                    if(i===1){
                        stoArray1.push("12")
                    }
                    if(i===2){
                        stoArray1.push("21")
                    }
                    

                }
            }
            let selected=stoArray1[Math.floor(Math.random()*stoArray1.length)];
            console.log(stoArray1)
            console.log(selected)
            return selected
        }
    }
}
function computerMove(pos){
    setTimeout(function(){
        document.getElementById(pos).src="o-1.png"
    },590)
}
function computerChoice(pos1,pos2){
    
    var position=computerCalc(pos1,pos2)
    let a=parseInt(position[0])
    let b=parseInt(position[1])
    if(ValidityState(a,b)){
    storageArray[a][b]="o"
    computerMove(position)
    checkResult_c()
    }
    else{
        result_p.innerHTML="Please click at the valid Position"
    }

}
function signDisplay(a,b){
    let picpre=a.toString()
    let picsu=b.toString()
    let pic=picpre+picsu
    document.getElementById(pic).src="x_2.png"
    var index=validationArray.indexOf(pic)
    validationArray.splice(index,1)
    
}
function ValidityState(num1,num2){
    if(storageArray[num1][num2]==="x"||storageArray[num1][num2]==="o"){
        return false
    }
    else{
        return true
    }
}
function entry(positionString){
    let a=parseInt(positionString[1])
    let b=parseInt(positionString[2])
    if(ValidityState(a,b)){
        result_p.innerHTML=" "
        count=count+1
        if(count===5){
            storageArray[a][b]="x"
            signDisplay(a,b)
            checkResult_u()
            checkResult_d()

        }
        else{
        storageArray[a][b]="x"
    
        signDisplay(a,b)
        let res=checkResult_u()
        if(res!="won"){
        computerChoice(a,b)
        }
        
        }

    }
    else{
        console.log(a)
        console.log(b)
        console.log(storageArray[a][b])
        console.log(storageArray)
        result_p.innerHTML=' "Please click at the valid Position🙂 !!" '
    }
    
}

b1_div.addEventListener('click',()=>entry("b00"));
b2_div.addEventListener('click',()=>entry("b01"));
b3_div.addEventListener('click',()=>entry("b02"));
b4_div.addEventListener('click',()=>entry("b10"));
b5_div.addEventListener('click',()=>entry("b11"));
b6_div.addEventListener('click',()=>entry("b12"));
b7_div.addEventListener('click',()=>entry("b20"));
b8_div.addEventListener('click',()=>entry("b21"));
b9_div.addEventListener('click',()=>entry("b22"));
button_div.addEventListener('click',()=>restart());
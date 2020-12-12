let numInput = "";//現在の入力値
let numTotal = 0;//合計値
let checkFlg = 1;//一個前に入力したものが1:演算子0:数字と仮定する。
let culcration = "+";//合計値と現在の演算子

//画面表示 
function numValue(num){
    checkFlg = 0;
    numInput += num;
    document.calcForm.resultLine.value = numInput;
}

//演算
function numCalc(operator){
    if(checkFlg == 0){
        checkFlg = 1;
        const numWork = numTotal+culcration+numInput;
        numTotal = eval(numWork);
        numInput = "";
        document.calcForm.resultLine.value = numTotal;
    }
    if(operator=='='){
        numTotal = 0;
        culcration = "+";
    }else{
            culcration = operator;
        }
    }

function clearButton(){
    numTotal = "0";
    numInput = "";
    culcration = "+";
    document.calcForm.resultLine.value = numTotal;
}
    

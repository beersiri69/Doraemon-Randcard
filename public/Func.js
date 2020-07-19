const card = ['JC','JD','JH','JS','QC','QD','QH','QS','KC','KD','KH','KS','AC','AD','AH','AS',
'C2','C3','C4','C5','C6','C7','C8','C9','C10',
'D2','D3','D4','D5','D6','D7','D8','D9','D10',
'H2','H3','H4','H5','H6','H7','H8','H9','H10',
'S2','S3','S4','S5','S6','S7','S8','S9','S10']

const imgElem = document.querySelector('img');
var Cardleft = 52;
var card_used = [];
var Randnum_Used = [];



window.onload=function(){
        
}


function Randmath(){
    return Math.floor(Math.random() * card.length);
}

function RandomValue(){
    if(Cardleft==0){
        alert("Card Not Enough!!");
        return
    }
    Index_Randnum_Used = 0;
    Randnum = Randmath();        
    while( Index_Randnum_Used < Randnum_Used.length ) {            
        if(Randnum_Used[Index_Randnum_Used] == Randnum){
            Randnum = Randmath();               
            Index_Randnum_Used= -1 ;   
        }
        Index_Randnum_Used++;
    }        
    Randnum_Used.push(Randnum); 
           
    //console.log(Randnum_Used);
    Update_Card();
}


function Update_Card(){   
    Cardleft--;  
    document.getElementById("Cardleft").innerHTML = Cardleft;
    imgElem.src = "PNG/"+ card[Randnum] +".jpg";
    //console.log("PNG/"+ card[Randnum] +".jpg");
}


function Resetall(){
    Randnum_Used = []
    Cardleft = 52;
    document.getElementById("Cardleft").innerHTML = Cardleft;
    imgElem.src = "PNG/red_back.jpg"    
    //location.reload();
    alert("Reset!!");
    //console.log(Randnum_Used);
}

document.getElementById("RandBtn").addEventListener("click", RandomValue);
document.getElementById("ResetBtn").addEventListener("click", Resetall);


// card no input onchange 
document.getElementById('card').addEventListener('input',(e)=>{
    let card2 = document.querySelector('#card2')
    let card1 = document.querySelector('#card1')
    card2.style.display = 'none'
    card1.style.display = 'block'
    let card = document.getElementById('cardno')
    card.innerText = '•••• •••• •••• ••••'
    let cardValue = ['•','•','•','•','•','•','•','•','•','•','•','•','•','•','•','•']
          let ele = e.target.value.toString()
          if(ele.length > 16){
             for(let i=0;i<16;i++){
                 cardValue[i]= ele[i];
             }
             let str = cardValue[0];
             for(let j=1;j<cardValue.length;j++){
                 if((j+1)%4 == 0){
                     str+=cardValue[j]
                     str+=' ';
                 }
                 else{
                     str+=cardValue[j]
                 }
             }
             card.innerText = str;
             e.target.value = Number(ele.substring(0, ele.length-1))
            return  alert('Card no length is not more than 16')
          }
          for(let i=0;i<ele.length;i++){
                 cardValue[i]= ele[i];
             }
             let str = cardValue[0];
             for(let j=1;j<cardValue.length;j++){
                 if((j+1)%4 == 0){
                     str+=cardValue[j]
                     str+=' ';
                 }
                 else{
                     str+=cardValue[j]
                 }
             }
             card.innerText = str
 })


 /// name input onchange 


 document.getElementById('name').addEventListener('input',(e)=>{
    let card2 = document.querySelector('#card2')
    let card1 = document.querySelector('#card1')
    card2.style.display = 'none'
    card1.style.display = 'block'
    let name = document.getElementById('holdername')
   let ele = e.target.value;
    if(ele.length ==0){
        name.innerText = 'Card Holder Name'
    }
    else{
        name.innerText =  ele
    }
    
 })


//  month input change 
 document.getElementById('month').addEventListener('input',(e)=>{
    let card2 = document.querySelector('#card2')
    let card1 = document.querySelector('#card1')
    card2.style.display = 'none'
    card1.style.display = 'block'
    let month = document.getElementById('Emonth')
   let ele = e.target.value;
    if(ele.length>2){
        alert('Month length is no more than 2')
        month.innerText = ele[0]+ele[1]+'/'
    }
     else if(ele.length == 2){
        month.innerText = ele[0]+ele[1]+'/'
    }
    else if(ele.length == 0){
        month.innerText = null
    }
    
 })

 document.getElementById('year').addEventListener('input',(e)=>{
    let card2 = document.querySelector('#card2')
    let card1 = document.querySelector('#card1')
    card2.style.display = 'none'
    card1.style.display = 'block'
    let year = document.getElementById('Eyear');
   let ele = e.target.value;
    if(ele.length>2){
        alert('Only enter last 2 cahracter of year no more than 2')
        year.innerText =ele[0]+ele[1];
    }
    else{
        year.innerText = ele
    }
 })

 document.getElementById('cvv').addEventListener('input',(e)=>{
    let card2 = document.querySelector('#card2')
    let card1 = document.querySelector('#card1')
    card2.style.display = 'block'
    card1.style.display = 'none'
    let cvv = document.getElementById('cvvno');
   let ele = e.target.value.toString();
    if(ele.length>3){
        alert('cvv no is more than 3 latter')
        cvv.innerText = ele[0]+ele[1]+ele[2]
    }
     else{
        cvv.innerText = ele
    }
   
 })


 function pagechange(){
    let name = document.getElementById('name').value.toString()
    let card = document.getElementById('card').value.toString()
    let month = document.getElementById('month').value.toString()
    let year = document.getElementById('year').value.toString()
    let cvv = document.getElementById('cvv').value.toString()

    if(name !=='' && card.length == 16 && month.length == 2 && month!=='00' && month !=='0' && Number(month) < 13 && Number(year)>22 && year.length == 2 && cvv.length==3 ){
        window.location.href = '/otp.html'

    }
    else{
        alert('please enter correct details')
    }

 }
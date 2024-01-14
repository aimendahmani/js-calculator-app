function calculate(){
bill = parseFloat(document.querySelector('#bill').value);
tip = parseFloat(document.querySelector('#tip').value);
total = bill + (bill*tip/100);
console.log(bill+" "+tip+" "+total);
document.querySelector('#total').innerHTML=total;
}

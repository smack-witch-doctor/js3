/*var x="Lorem ipsum", 
    y= 2345,
    z="2345",
    q=false,
    w=null;

x+='3' + 1;
var baaa= "b"+ "a" + + "a"+ "a";
console.log(baaa);

console.log(typeof w);*/
/*var myString= "ovo je moj \"string\"";*/

/*------*/
var myString= "  Lorem ipsum dolor sit amet ipsum  ";
console.log(myString);
var duljina= myString.length;
console.log('Duljina teksta je: ' + duljina + ' znakova');

console.log('Znak na 12. mjestu je: ' + myString.charAt(12));
console.log(myString.trim());
console.log(myString.indexOf('ipsum')); /*for petlja da trazi vise ipsum rijeci*/
console.log(myString.replaceAll('ipsum', 'novi moj string')); /*replace all zamjenjuje i jedan i drugi*/
console.log(myString.toUpperCase()); /* sve velika slova*/
console.log(myString.substring(12, 10));/*izdvoji tekst koji trebamo*/
var myNiz = myString.split(' ');
console.log('kraj'); 
/*------*/
/*var x="Lorem ipsum", 
    y= 2345,
    z="2345",
    q=false,
    w=true;

var trueFalse= q;

if(trueFalse){

    console.log('q= ' + trueFalse);
}
else if(trueFalse!==true) {
    console.log('q= ' + trueFalse);
}

if (q && w){    

    console.log('q i w su true'); moraju oba bit true da ude u ovu
}
else{
    console.log('jedan od q ili q nije true');
}


console.log('ostatak pri cjelobrojnom dijeljenju je: '+ (9%3));
console.log('ostatak pri cjelobrojnom dijeljenju je: '+ (5%2));
if (9%2===0 && 5%2===0){
    console.log('ostatak pri cjelobrojnom dijeljenju je 0);
}
else{
    console.log('ostatak pri cjelobrojnom dijeljenju NIJE 0);
}


*/
$( document ).ready(function() {

$("#myonoffswitch").change(function(){cambiarreglas();});
$("#bfila1").click(function(){cambiafila1();actualizanumeros();test();});
$("#bfila2").click(function(){cambiafila2();actualizanumeros();test();});
$("#bfila3").click(function(){cambiafila3();actualizanumeros();test();});
$("#bfila4").click(function(){cambiafila4();actualizanumeros();test();});
$("#bcolumna1").click(function(){cambiacolumna1();actualizanumeros();test();});
$("#bcolumna2").click(function(){cambiacolumna2();actualizanumeros();test();});
$("#bcolumna3").click(function(){cambiacolumna3();actualizanumeros();test();});
$("#bcolumna4").click(function(){cambiacolumna4();actualizanumeros();test();});
$("#bdiagonalA1").click(function(){cambiadiagonalA1();actualizanumeros();test();});
$("#bdiagonalA2").click(function(){cambiadiagonalA2();actualizanumeros();test();});
$("#bdiagonalA3").click(function(){cambiadiagonalA3();actualizanumeros();test();});
$("#bdiagonalA4").click(function(){cambiadiagonalA4();actualizanumeros();test();});
$("#bdiagonalA5").click(function(){cambiadiagonalA5();actualizanumeros();test();});
$("#bdiagonalA6").click(function(){cambiadiagonalA6();actualizanumeros();test();});
$("#bdiagonalA7").click(function(){cambiadiagonalA7();actualizanumeros();test();});
$("#bdiagonalB1").click(function(){cambiadiagonalB1();actualizanumeros();test();});
$("#bdiagonalB2").click(function(){cambiadiagonalB2();actualizanumeros();test();});
$("#bdiagonalB3").click(function(){cambiadiagonalB3();actualizanumeros();test();});
$("#bdiagonalB4").click(function(){cambiadiagonalB4();actualizanumeros();test();});
$("#bdiagonalB5").click(function(){cambiadiagonalB5();actualizanumeros();test();});
$("#bdiagonalB6").click(function(){cambiadiagonalB6();actualizanumeros();test();});
$("#bdiagonalB7").click(function(){cambiadiagonalB7();actualizanumeros();test();});

$("#sitA").click(function(){$('.interior').html(1);$('#2').html(-1);$('#10').html(-1);$('#15').html(-1);actualizacolores();});
$("#sitB").click(function(){$('.interior').html(1);$('#2').html(-1);$('#9').html(-1);$('#15').html(-1);actualizacolores();});
$("#todo1s").click(function(){$('.interior').html(1);actualizacolores();});
$( '#tiempo' ).change(function(){clearInterval( myTimer ); if ($('#tiempo').val()>=10) myTimer = setInterval(function(){$('.bcambio:visible').eq(Math.floor((Math.random() * 10))).trigger( "click" );actualizanumeros();},$('#tiempo').val());});
actualizacolores();
actualizanumeros();
$("#sitB").click();
$('#tiempo').val(200)
$('#myonoffswitch').prop('checked', false);
myTimer = setInterval(function(){$('.bcambio:visible').eq(Math.floor((Math.random() * 10))).trigger( "click" );actualizanumeros();},$('#tiempo').val());
});

function actualizanumeros(){
$('#num').html($(".interior").filter(function() {return $(this).text() == '-1';}).length);
numero=parseInt($('#num').html());
if (numero%2 == 0)
		$('#parimpar').html("Par");
	else
		$('#parimpar').html("Impar");
$('#num2').html($("#2,#3,#5,#8,#9,#12,#14,#15").filter(function() {return $(this).text() == '-1';}).length);
numero=parseInt($('#num2').html());
if (numero%2 == 0)
		$('#parimpar2').html("Par");
	else
		$('#parimpar2').html("Impar");
}
function test() {actualizacolores(); if ($('.cell').text()==='1111111111111111') actualizacolores();}
function cambiavalor(elem) {if ( elem.innerHTML === "1" )elem.innerHTML="-1";else elem.innerHTML="1";}
function actualizacolores(){$(".interior").each(function(){if ( this.innerHTML === "1" ) $(this).addClass("verde");else $(this).removeClass("verde"); });}
function cambiarreglas() {
$('#bdiagonalA1').toggle(400);
$('#bdiagonalA2').toggle(400);
$('#bdiagonalA3').toggle(400);
$('#bdiagonalA5').toggle(400);
$('#bdiagonalA6').toggle(400);
$('#bdiagonalA7').toggle(400);
$('#bdiagonalB1').toggle(400);
$('#bdiagonalB2').toggle(400);
$('#bdiagonalB3').toggle(400);
$('#bdiagonalB5').toggle(400);
$('#bdiagonalB6').toggle(400);
$('#bdiagonalB7').toggle(400);
}


function cambiafila1() {$('.fil1').each(function() {cambiavalor(this)});}
function cambiafila2() {$('.fil2').each(function() {cambiavalor(this)});}
function cambiafila3() {$('.fil3').each(function() {cambiavalor(this)});}
function cambiafila4() {$('.fil4').each(function() {cambiavalor(this)});}
function cambiacolumna1() {$('.col1').each(function() {cambiavalor(this)});}
function cambiacolumna2() {$('.col2').each(function() {cambiavalor(this)});}
function cambiacolumna3() {$('.col3').each(function() {cambiavalor(this)});}
function cambiacolumna4() {$('.col4').each(function() {cambiavalor(this)});}
function cambiadiagonalA1() {cambiavalor(document.getElementById("13"));}
function cambiadiagonalA2() {cambiavalor(document.getElementById("9"));cambiavalor(document.getElementById("14"));}
function cambiadiagonalA3() {cambiavalor(document.getElementById("5"));cambiavalor(document.getElementById("10"));cambiavalor(document.getElementById("15"));}
function cambiadiagonalA4() {cambiavalor(document.getElementById("1"));cambiavalor(document.getElementById("6"));cambiavalor(document.getElementById("11"));cambiavalor(document.getElementById("16"));}
function cambiadiagonalA5() {cambiavalor(document.getElementById("2"));cambiavalor(document.getElementById("7"));cambiavalor(document.getElementById("12"));}
function cambiadiagonalA6() {cambiavalor(document.getElementById("3"));cambiavalor(document.getElementById("8"));}
function cambiadiagonalA7() {cambiavalor(document.getElementById("4"));}
function cambiadiagonalB1() {cambiavalor(document.getElementById("1"));}
function cambiadiagonalB2() {cambiavalor(document.getElementById("5"));cambiavalor(document.getElementById("2"));}
function cambiadiagonalB3() {cambiavalor(document.getElementById("9"));cambiavalor(document.getElementById("6"));cambiavalor(document.getElementById("3"));}
function cambiadiagonalB4() {cambiavalor(document.getElementById("13"));cambiavalor(document.getElementById("10"));cambiavalor(document.getElementById("7"));cambiavalor(document.getElementById("4"));}
function cambiadiagonalB5() {cambiavalor(document.getElementById("14"));cambiavalor(document.getElementById("11"));cambiavalor(document.getElementById("8"));}
function cambiadiagonalB6() {cambiavalor(document.getElementById("15"));cambiavalor(document.getElementById("12"));}
function cambiadiagonalB7() {cambiavalor(document.getElementById("16"));}
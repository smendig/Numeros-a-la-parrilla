$(document).ready(function() {
    $('#bdiagonalA1').toggle(0);
    $('#bdiagonalA2').toggle(0);
    $('#bdiagonalA3').toggle(0);
    $('#bdiagonalA5').toggle(0);
    $('#bdiagonalA6').toggle(0);
    $('#bdiagonalA7').toggle(0);
    $('#bdiagonalB1').toggle(0);
    $('#bdiagonalB2').toggle(0);
    $('#bdiagonalB3').toggle(0);
    $('#bdiagonalB5').toggle(0);
    $('#bdiagonalB6').toggle(0);
    $('#bdiagonalB7').toggle(0);

    $("#myonoffswitch").change(function() { cambiarreglas(); });
    $("#bfila1").click(function() { cambiafila1();
        test(); });
    $("#bfila2").click(function() { cambiafila2();
        test(); });
    $("#bfila3").click(function() { cambiafila3();
        test(); });
    $("#bfila4").click(function() { cambiafila4();
        test(); });
    $("#bcolumna1").click(function() { cambiacolumna1();
        test(); });
    $("#bcolumna2").click(function() { cambiacolumna2();
        test(); });
    $("#bcolumna3").click(function() { cambiacolumna3();
        test(); });
    $("#bcolumna4").click(function() { cambiacolumna4();
        test(); });
    $("#bdiagonalA1").click(function() { cambiadiagonalA1();
        test(); });
    $("#bdiagonalA2").click(function() { cambiadiagonalA2();
        test(); });
    $("#bdiagonalA3").click(function() { cambiadiagonalA3();
        test(); });
    $("#bdiagonalA4").click(function() { cambiadiagonalA4();
        test(); });
    $("#bdiagonalA5").click(function() { cambiadiagonalA5();
        test(); });
    $("#bdiagonalA6").click(function() { cambiadiagonalA6();
        test(); });
    $("#bdiagonalA7").click(function() { cambiadiagonalA7();
        test(); });
    $("#bdiagonalB1").click(function() { cambiadiagonalB1();
        test(); });
    $("#bdiagonalB2").click(function() { cambiadiagonalB2();
        test(); });
    $("#bdiagonalB3").click(function() { cambiadiagonalB3();
        test(); });
    $("#bdiagonalB4").click(function() { cambiadiagonalB4();
        test(); });
    $("#bdiagonalB5").click(function() { cambiadiagonalB5();
        test(); });
    $("#bdiagonalB6").click(function() { cambiadiagonalB6();
        test(); });
    $("#bdiagonalB7").click(function() { cambiadiagonalB7();
        test(); });

    $("#sitA").click(function() { $('.interior').html(1);
        $('#2').html(-1);
        $('#10').html(-1);
        $('#15').html(-1);
        actualizacolores(); });
    $("#sitB").click(function() { $('.interior').html(1);
        $('#2').html(-1);
        $('#9').html(-1);
        $('#15').html(-1);
        actualizacolores(); });
    $("#todo1s").click(function() { $('.interior').html(1);
        actualizacolores(); });
    $('#myonoffswitch').prop('checked', true);
    actualizacolores();
});

function test() { actualizacolores(); if ($('.cell').text() === '1111111111111111') actualizacolores(); }

function cambiavalor(elem) { if (elem.innerHTML === "1") elem.innerHTML = "-1";
    else elem.innerHTML = "1"; }

function actualizacolores() { $(".interior").each(function() { if (this.innerHTML === "1") $(this).addClass("verde");
        else $(this).removeClass("verde"); }); }

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


function cambiafila1() { $('.fil1').each(function() { cambiavalor(this) }); }

function cambiafila2() { $('.fil2').each(function() { cambiavalor(this) }); }

function cambiafila3() { $('.fil3').each(function() { cambiavalor(this) }); }

function cambiafila4() { $('.fil4').each(function() { cambiavalor(this) }); }

function cambiacolumna1() { $('.col1').each(function() { cambiavalor(this) }); }

function cambiacolumna2() { $('.col2').each(function() { cambiavalor(this) }); }

function cambiacolumna3() { $('.col3').each(function() { cambiavalor(this) }); }

function cambiacolumna4() { $('.col4').each(function() { cambiavalor(this) }); }

function cambiadiagonalA1() { cambiavalor(document.getElementById("13")); }

function cambiadiagonalA2() { cambiavalor(document.getElementById("9"));
    cambiavalor(document.getElementById("14")); }

function cambiadiagonalA3() { cambiavalor(document.getElementById("5"));
    cambiavalor(document.getElementById("10"));
    cambiavalor(document.getElementById("15")); }

function cambiadiagonalA4() { cambiavalor(document.getElementById("1"));
    cambiavalor(document.getElementById("6"));
    cambiavalor(document.getElementById("11"));
    cambiavalor(document.getElementById("16")); }

function cambiadiagonalA5() { cambiavalor(document.getElementById("2"));
    cambiavalor(document.getElementById("7"));
    cambiavalor(document.getElementById("12")); }

function cambiadiagonalA6() { cambiavalor(document.getElementById("3"));
    cambiavalor(document.getElementById("8")); }

function cambiadiagonalA7() { cambiavalor(document.getElementById("4")); }

function cambiadiagonalB1() { cambiavalor(document.getElementById("1")); }

function cambiadiagonalB2() { cambiavalor(document.getElementById("5"));
    cambiavalor(document.getElementById("2")); }

function cambiadiagonalB3() { cambiavalor(document.getElementById("9"));
    cambiavalor(document.getElementById("6"));
    cambiavalor(document.getElementById("3")); }

function cambiadiagonalB4() { cambiavalor(document.getElementById("13"));
    cambiavalor(document.getElementById("10"));
    cambiavalor(document.getElementById("7"));
    cambiavalor(document.getElementById("4")); }

function cambiadiagonalB5() { cambiavalor(document.getElementById("14"));
    cambiavalor(document.getElementById("11"));
    cambiavalor(document.getElementById("8")); }

function cambiadiagonalB6() { cambiavalor(document.getElementById("15"));
    cambiavalor(document.getElementById("12")); }

function cambiadiagonalB7() { cambiavalor(document.getElementById("16")); }

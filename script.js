

/*$("#bold").click(function() {
    $("#paragraph").css('font-weight', 'bold');
});*/
$("#bold").click(function(){
    $("#paragraph").css('font-weight','bold');
})
function Italic()
{
    document.getElementById("paragraph").style.fontStyle = "italic";
}
function underlined()
{
    document.getElementById("paragraph").style.textDecoration = "underline";
}

function font1()
{
    document.getElementById("paragraph").style.fontFamily = "'Roboto', sans-serif";
}
function font2()
{
    document.getElementById("paragraph").style.fontFamily = "'Felipa', cursive";
}
function font3()
{
    document.getElementById("paragraph").style.fontFamily = "'Coiny', cursive";
}
function font4()
{
    document.getElementById("paragraph").style.fontFamily = "'ZCOOL QingKe HuangYou', cursive";
}

function size1()
{
    document.getElementById("paragraph").style.fontSize = "10px";
}
function size2()
{
    document.getElementById("paragraph").style.fontSize = "20px";
}
function size3()
{
    document.getElementById("paragraph").style.fontSize = "30px";
}
function size4()
{
    document.getElementById("paragraph").style.fontSize = "40px";
}
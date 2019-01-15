$( ".spells" ).click(function() {
    string=this.id+"SpellsFull"
    $("#"+string).show()
    $(".spells").hide()
    $(".charms").hide()
});
$(".spellsFull").click(function(){
    $("#"+this.id).hide()
    $(".spells").show()
    $(".charms").show()
})
$( ".charms" ).click(function() {
    string=this.id+"charmFull"
    $("#charmFullList").show()
    $("#"+string).show()
    $(".charms").hide()
    $(".spells").hide()
});
$(".charmFull").click(function(){
    $("#"+this.id).hide()
    $(".charms").show()
    $(".spells").show()
})
$(".btnAdd").click(function(){
    var type=this.id
    type=type.slice(3,12)
    if(type==="Charm"){
        addNewCharm()
    }
    else{
        addNewSpell()
    }
})
var cntSpells=0
var cntCharms=0
function addNewCharm(){
    var charmName = prompt("Please enter the charm name", "");
    var charmFull
    if(charmName!==null){
        charmFull= prompt("please enter the charm explanation","")
        if(charmFull!==null){
            cntCharms++
            $("#charmsList").append("<div id=\"c10\" class=\"charms\" >"+charmName+"</div>")
           $("#charmFullList").append("<div id=\"c10charmFull\" class=\"charmFull\" >"+charmName+"</div>") 
        }
    }
}
window.onload= function(){
    var spells=$(".spells")
    var charms=$(".charms")
    cntCharms=charms.length-1;
    cntSpells=spells.length-1;
}
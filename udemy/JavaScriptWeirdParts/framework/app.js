$('#signin').click(function(){
    var g = G$('Jesse', 'James');
    $('#information').hide();
    g.setLang($('#lng').val()).HTMLGreeting('#greeting', true).log();
});

$('.navItem').css('color', 'white');

$('#nav').css('background-color', '#145');

let wholeList = $('#contentContainer ul');
let list = wholeList.children();
$(list).even().css('background-color', '#ccc')
$(list).odd().css('background-color', '#aaa')

$('input').val('Kutler Brown');
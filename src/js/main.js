import $ from './lib/lib';


$('button').on('click', function() {
  $(this).toggleClass('active');
});
$('button').addAttribute('button-data');
$('button').toggleAttr('button-data');

$('div').click(function(){
  console.log($(this).index())
});

console.log($('div').eq(2).find('.some'));


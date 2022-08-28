import $ from './lib/lib';


$('button').on('click', function() {
  $(this).toggleClass('active');
});
$('button').addAttribute('button-data');
$('button').toggleAttr('button-data');

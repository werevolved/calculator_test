$(document).ready(function(){
$('#total').keyup(calculate_tax);
$('#calculate_tip').click(calculate_tip);
});

function calculate_tax(){
var total,tax;
total = $('#total').val();
tax = total * 0.13;
tax = tax.toFixed(2);
$('#tax').val(tax);
}
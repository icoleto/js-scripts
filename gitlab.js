function getCommits() {
var total = 0;
$('rect.user-contrib-cell').each(function() {
text = $(this)[0].outerHTML.split('data-original-title="')[1].split(" ")[0];
total += $.isNumeric(text) ? parseInt(text) : 0;
});
return total;
}
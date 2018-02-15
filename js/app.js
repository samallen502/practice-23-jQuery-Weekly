const $odd = $('a:odd');
//$odd.hide(); <-- EXAMPLE ONLY, COMMENTED OUT ... this will block all a elements that are 1, 3, 5.  Remember, the first a counts as 0. No for loop necessary! This is the beauty of jQuery. It loops on its own.
const $secureLinks = $('a[href^="https://"]'); /* On the right, jQuery is used to target links that "start with" (^) "https", then that gets stored in the variable $secureLinks */
// This is just a quick way to test that $secureLinks targets Lines 12 & 14-15, as it should ... preview should HTTPS links hidden, as it should ... commenting out afterwards as, again, it's just a quick method to test.
//$secureLinks.hide();
const $pdfs = $('a[href$=".pdf"]'); /* On the right, jQuery is used to target links that "end with" ($) ".pdf", then that gets stored in the variable $pdfs */
//$pdfs.hide(); <-- This was just a quick test to see if above code works. It does.
//Created variable below to ensure my JavaScript was unobtrusive, meaning that if JS fails to work for any reason, this link won't be hanging around in HTML.
const $pdfCheckbox = $('<label><input type="checkbox"> Allow PDF downloads</label>');

//Use jQuery's attribute method to target $secureLinks' target attribute and change the target attribute to _blank...
$secureLinks.attr('target', '_blank');

//Use jQuery's attribute method to target $pdfs download attribute and have the browser download the PDF upon the link getting clicked
$pdfs.attr('download', true);

//Use jQuery's CSS method to change every odd link to gray
//$odd.css('backgroundColor', 'lightgrey');
// Note: If this were CSS, you'd instead use 'background-color" ... this rarely will be used in actual practice, so it's just a quirky example

//Use jQuery's addClass method to associate $secureLinks with the "secure" class as defined in CSS, which will place a green "safe" flag next to ever HTTPS link
$secureLinks.addClass('secure');

//Use jQuery's addClass method to associate $pdfs with the "a.pdf:after" class in CSS ... this will place a red "LOCKED" flag per CSS
$pdfs.addClass('pdf');

//Use jQuery's "on" method
$pdfs.on('click', function (event){
    //check if checkbox has been checked
    //if zero checkboxes are checked (one check = length+1)
    if ($(':checked').length === 0) {
        //prevent download of document (by overruling browser's default behavior)
        event.preventDefault();
        //alert the user
        alert('Please check the box to allow PDF downloads.');
    }        
});

//Append $pdfCheckbox to the #links container from HTML to ensure unobtrusive JavaScript (if JS disabled, checkbox serves no purpose, therefore no need to show this warning).
$('#links').append($pdfCheckbox);

// JUST AN EXAMPLE OF ANOTHER jQUERY TOOL: this each function can get all of the anchor tags on the page ... loop through each of the anchor tags ... and call a function on each anchor tag ... 
$('a').each(function(index, link){
    const url = $(link).attr('href');
    $(link).parent().append(`(${url})`); /* I have no idea what this syntax is but it's something new, called STRING INTERPOLATION: https://teamtreehouse.com/library/string-interpolation-2 */
});
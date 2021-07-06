String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

function generate(len) {
    var result = '';
    var charater = 'abcdef0123456789';
    var charLen = charater.length;
    
    for(var i = 0; i < len; i++){
        result += charater.charAt(Math.floor(Math.random() * charLen));
    }
    
    return result;
}

$(document).ready(function(){
    
    $('.hex').on('input change', function(){
        var value = $(this).val();
        var defval = "ffffff";
        
        var len = value.length;
        var color = "#"+defval.replaceAt(0, value)
        $('.container').css('background-color' , color);
        
        console.log(color);
        
        /*if(value.length == 6){
            var color = '#'+value;
            $('.container').css('background-color' , color);
            console.log(color);
        }*/
    })
    
    $('.generate').click(function(){
        var hex = generate(6);
        $('.hex').val(hex);
        $('.container').css('background-color' , '#'+hex);
    })
    
})


$(document).ready(function(){

    $('#email').blur(function() {
        if($(this).val() != '') {
            var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if(pattern.test($(this).val())){
                $(this).css({'border' : '1px solid #569b44'});
                $('#valid').text('Ви ввели коректний e-mail!').css('color','#78C009');;
            } else {
                $(this).css({'border' : '1px solid #ff0000'});
                $('#valid').text('Ви ввели некоректний e-mail!').css('color','#FF0000');;
            }
        } else {
            $(this).css({'border' : '1px solid #ff0000'});
            $('#valid').text('Поле email не должно быть пустым');
        }
    });

    $('.inner_link_container').not('.active').click(function(){
        var index = $(this).index();
        var content = $('.form_content').eq(index);
        $(this).addClass('active').siblings().removeClass('active');
        $('.form_content').css('display', 'none').eq(index).css('display', 'block');
    })
    $('.inner_link_container:first').addClass('active');
    $('.form_content:first').css('display', 'block');


    $('body').on('click', '.change_btn', function(event){
        event.preventDefault();
        var parrent = $(this).parent();
        if ($(parrent).find('input').attr('type') == 'password'){
            $(parrent).find('i').addClass('fa-eye-slash').removeClass('fa-eye');
            $(parrent).find('input').attr('type', 'text');
        } else {
            $(parrent).find('i').addClass('fa-eye').removeClass('fa-eye-slash');
            $(parrent).find('input').attr('type', 'password');
        }
    });


    $('.new-password').keyup(function(event){
        event.preventDefault();
        var pswd = $(this).val();
        var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
        var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
        var enoughRegex = new RegExp("(?=.{6,}).*", "g");
        if ( pswd.length > 0 && pswd.length < 6){
            $('#scale').removeClass('weak').removeClass('average').removeClass('strong');
            $(".filling_scale_title").text('Мінімальна кількість символів 6').css('color','#FF0000');
        } else if ( pswd.length >= 6 && pswd.length < 8 ) {
            $('#scale').addClass('weak').removeClass('average').removeClass('strong');
            $(".filling_scale_title").text('Слабкий').css('color','#FF0000');
        } else if (strongRegex.test($(this).val())){
            $('#scale').addClass('strong').removeClass('weak').removeClass('average');
            $(".filling_scale_title").text('Сильний').css('color','#78C009');
        } else if (mediumRegex.test($(this).val())){
            $('#scale').addClass('average').removeClass('weak').removeClass('strong');
            $(".filling_scale_title").text('Середній').css('color','#FFB800');
        } else if (pswd =='') {
            $('#scale').removeClass('weak').removeClass('average').removeClass('strong');
            $(".filling_scale_title").css('color','transparent');
        }
    });


    $('#repeat-password').on('keydown input', function(){
        var passNew = $('#new-password'),
            passRep = $(this);
        if(passRep.val() == passNew.val()){
            passRep.parent()
            $(this).css({'border' : '1px solid #569b44'});
            $('#equality').text('Паролі співпадають!').css('color', '#78C009');
        } else{
            passNew.parent()
            $(this).css({'border' : '1px solid #ff0000'});
            $('#equality').text('Паролі не співпадають!').css('color','#FF0000');
        }
    });

});
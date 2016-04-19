/**
 * Created by CXJ on 2016/4/3.
 */
$(function(){
    var pass1 = $('#password_1'),
        pass2 = $('#password_2'),
        email = $('#email'),
        form = $('#main form'),
        arrow = $('#main .arrow');

    $('#main .row input').val('');

    form.on('submit',function(e){
        //alert($('#main .row.success').length);    正确时为3，错误时为2
        if($('#main .row.success').length == $('#main .row').length){
            alert("注册成功");
            e.preventDefault();   //提交后保留数据
        }
        else{
            e.preventDefault();
        }
    });

    email.on('blur',function(){
        if (!/^\S+@\S+\.\S+$/.test(email.val())){
            email.parent().addClass('error').removeClass('success');
        }
        else{
            email.parent().removeClass('error').addClass('success');
        }
    });

    pass1.complexify({minimumChars:6, strengthScaleFactor:0.7}, function(valid, complexity){
        if(valid){
            pass2.removeAttr('disabled');
            pass1.parent()
                .removeClass('error')
                .addClass('success');
        }
        else{
            pass2.attr('disabled','true');
            pass1.parent()
                .removeClass('success')
                .addClass('error');
        }
        var calculated = (complexity/100)*268 - 134;
        var prop = 'rotate('+(calculated)+'deg)';
        arrow.css({
            '-moz-transform':prop,
            '-webkit-transform':prop,
            '-o-transform':prop,
            '-ms-transform':prop,
            'transform':prop
        });
    });

    pass2.on('keydown input',function(){
        if(pass2.val() == pass1.val()){
            pass2.parent()
                .removeClass('error')
                .addClass('success');
        }
        else{
            pass2.parent()
                .removeClass('success')
                .addClass('error');
        }
    });
})


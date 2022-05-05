
function Validator(options){
    const form = document.querySelector(options.form);
    if (form){ 
        options.rules.forEach(function(rule){
            var inputElement = form.querySelector(rule.selector)
            var errorElement = inputElement.parentElement.querySelector('.error')
            inputElement.onblur = function(event){
                var value = event.target.value;
                var error = rule.error(value);
                if (error){
                    errorElement.innerHTML = error;
                } else {
                    errorElement.innerHTML = '';
                }
            }
        })
    }
}

Validator.isRequired = function(selector){
    return {
        selector: selector,
        error: function(value){
            return value.length == 7 ? undefined : value.trim() == 0 ? 'Vui lòng nhập mã sinh diên' : 'Vui lòng nhập đủ 7 ký tự';
        }
    }
}

Validator.isEmail = function(selector){
    return{
        selector: selector,
        error : function(value){
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return value.length == 0 ? 'Vui lòng nhập email' : regex.test(value) ? undefined : 'Email không hợp lệ';
        }
    }
}

Validator.isName = function(selector){
    return{
        selector: selector,
        error: function(value){
            return value.length > 30 ? 'Họ tên tối đa 30 ký tự' : value.trim() ? undefined : 'Vui lòng nhập họ và tên';
        }
    }
}
$(document).on('click', '#btn-submit', function(e) {
    let email = document.getElementById('exampleInputEmail1').value;
    let pass = document.getElementById('passIngreso').value;
    e.preventDefault();
    if (email == 'admin@correo.com' && pass == "12345") {
        swal({
            title: 'Sus Datos han sido confirmados',
            input: 'checkbox',
            icon: "success",
            text: "¡Bienvenido!",
            inputValue: 0,
            inputPlaceholder: ' I agree with the Terms',
            confirmButtonText: 'Continue',
            inputValidator: function (result) {
                return new Promise(function (resolve, reject) {
                    if (result) {
                        resolve();
                    } else {
                        reject('You need to agree with the Terms');
                    }
                })
            }
        }).then(function (result) {
            $('#myForm').submit();
        });
    } else {
        swal({
            title: 'Sus datos son Erroneos',
            input: 'checkbox',
            icon: "warning",
            text: "¡Por favor, vuelva a ingresar los datos!",
        });
    }
});
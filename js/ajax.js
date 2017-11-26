$('.form__nofill').on('click', function() {
    $('.form__nofill-wrapper').css('display', 'none');

})

$('#order-form').on('submit', function(e) {
    e.preventDefault();
    let checkForm = true;
    if ($('#order__name')[0].value == '') { checkForm = false };
    if ($('#order__tel')[0].value == '') { checkForm = false };
    if ($('#order__street')[0].value == '') { checkForm = false };
    if ($('#order__house')[0].value == '') { checkForm = false };
    if ($('#order__korpus')[0].value == '') { checkForm = false };
    if ($('#order__floor')[0].value == '') { checkForm = false };
    if ($('#order__flat')[0].value == '') { checkForm = false };
    if ($('#order__comment')[0].value == '') { checkForm = false };
    if (($('#payments')[0].checked === false) && ($('#payments2')[0].checked === false)) { checkForm = false };
    // if ($('#payments2')[0].checked === false) { checkForm = false };
    if ($('.form-checkbox')[0].checked === false) { checkForm = false };

    if (checkForm == false) {
        $('.form__nofill-wrapper').css('display', 'block');
        return
    }
    // Все поля заполнены

    $.ajax('http://burger/php/ajax.php', {
        type: "GET",
        data: $(this).serialize(),
        dataType: "Text",
        success: function(data) {
            alert('Ваша заявка отправлена, мы скоро с Вами свяжемся!');
            $('#order-form').trigger("reset");
        }

    })
})
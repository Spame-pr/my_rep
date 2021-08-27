$(document).ready(function () {
    function getid() {
        return 1 + Math.floor(Math.random() * 100000);
    }


    function calculator() {
        let sum = '',
            inputVal = document.getElementById('input'),
            len;
        $('#input').html(0);

        $('.num').on('click', function () {
            let num = $(this).attr('value');
            sum += num;
            $('#input').html(sum);
            len = inputVal.innerHTML.split('');
        });


        $('.operator').on('click', function (e) {
            e.preventDefault();
            let ops = $(this).attr('value');
            sum += ops;

            $('#input').html(sum);
            len = inputVal.innerHTML;
            if (/(?=(\D{2}))/g.test(sum)) {
                sum = len.substring(0, len.length - 1);
                $('#input').html(sum);
            }
        });

        $('#equal').on('click', function () {
            let total = eval(sum); 
            if (total === Infinity) {
                $('#input').css('color', 'red')
                $('#input').html('ERROR')
            } else {
                let n = getid()
                let totalL = total % 1 !== 0 ? total.toFixed(2) : total
                $('#input').css('color', 'black')
                $('#input').html(totalL);
                $('<div/>', { id: `${n}` }).appendTo('#rus');
                $('<button/>', { 'class': 'circle', id: 'circle' }).appendTo(`#${n}`);
                $('<div/>', { text: `${sum} = ${totalL}` }).appendTo(`#${n}`);
                $('<button/>', { text: 'x', 'class': 'del-butt' }).appendTo(`#${n}`);
            }
        });
        $('#circle').click(function () {
            $('#circle').css('background-color', 'red');
        });

        $('html').on('click', '.del-butt', function () {
            $(this).parent().remove();
        });


        $('#clear').on('click', function () {
            $('#input').css('color', 'black')
            sum = '';
            $('#input').html(0);
        });
    }
    calculator()

})


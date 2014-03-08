$(document).ready(function(){
    $('.datepicker').pickadate({
        format: 'mmm dd, yyyy',
        formatSubmit: 'mm/dd/yyyy',
        selectYears: true,
        selectMonths: true,
        min: true
    });

    $('.timepicker').pickatime({
        formatSubmit: 'H:i'
    });

    $('.ui.form')
        .form({
            eventName: {
                identifier  : 'eventname',
                rules: [
                    {
                        type   : 'empty',
                        prompt : 'Please enter your event name'
                    }
                ]
            },
            datePicker: {
                identifier  : 'datepicker',
                rules: [
                    {
                        type   : 'empty',
                        prompt : 'Please pick a date'
                    }
                ]
            },
            timePicker: {
                identifier : 'timepicker',
                rules: [
                    {
                        type   : 'empty',
                        prompt : 'Please pick a time'
                    }
                ]
            }
        });

    $('.reset .ui.tiny.button').click(function(){
        window.location.replace('/');
    });

    if ($('.hidden')) {
        var days, hours, minutes, seconds;
        var date = $('.date').text();
        var time = $('.time').text();
        var target_date = new Date(date + ' ' + time).getTime();

        var countDown = function () {
            var current_date = new Date().getTime();
            var seconds_left = (target_date - current_date) / 1000;
            days = parseInt(seconds_left / 86400);
            seconds_left = seconds_left % 86400;

            hours = parseInt(seconds_left / 3600);
            seconds_left = seconds_left % 3600;

            minutes = parseInt(seconds_left / 60);
            seconds = parseInt(seconds_left % 60);

            if (days >= 0 && hours >= 0 && minutes >= 0 && seconds >= 0) {
                $("#days").html(days);
                $("#hours").html(hours);
                $("#min").html(minutes);
                $("#sec").html(seconds);
            } else  {
                clearInterval(myTimer);
                setTimeout(function(){
                    $('.modal')
                        .modal('show');
                },1000);
            }
        };

        var myTimer = setInterval(countDown, 1000);
    }
});
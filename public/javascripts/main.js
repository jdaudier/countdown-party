$(document).ready(function(){
    $('.datepicker').pickadate({
        format: 'mmm dd, yyyy',
        formatSubmit: 'mm/dd/yyyy'
    });

    $('.timepicker').pickatime();


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
});

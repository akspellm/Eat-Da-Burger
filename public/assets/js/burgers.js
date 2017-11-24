$(function() {
    $('.devour').on('click', function(event) {
        let id = $(this).data('id');
        console.log('clicked')
        let eatenNow = {
            devoured: true
        };

        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: eatenNow
        }).then(    
            function() {
                console.log('Devoured changed to true');
                location.reload();
            }
        )
    });

    $('.create-form').on('submit', function(event) {
        event.preventDefault();

        let burger_name = $('#burger').val().trim();

        var newBurger = {
            burger_name: burger_name,
            devoured: false
        };

        console.log(newBurger)

        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(
            function() {
                console.log('created new burger');

                location.reload();
            });
    });
})
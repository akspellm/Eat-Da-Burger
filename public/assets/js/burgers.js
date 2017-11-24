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
    })
})
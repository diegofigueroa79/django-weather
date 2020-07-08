$(document).ready(function(){

    // ajax function for adding city
    $('#formButton').click(function(){
        let serialData = $('#form').serialize();
		let addUrl = $(this).data('url');
        $.ajax({
            'url': addUrl,
            'data': serialData,
            'type': 'post',
            'success': function(response) {
                $('#taskList').append(
                    `<ul class="list-group">
						<div class="media">
							<img src="http://openweathermap.org/img/w/${response['city']['icon']}.png" alt="" class="mr-3">
							<div class="media-body">
								<h5 class="mt-0">
									${response['city']['name']}, ${response['city']['country']}
								</h5>
								<p>
									${response['city']['temp']}<span>&#176;</span>F</li>
								</p>
								<p>
									${response['city']['description']}
								</p>
							</div>
						</div>
						<a href="{% url 'weather:delete' city.name %}" class="close" role="button">
							<span aria-hidden="true">&times;</span>
						</a>
					</ul>`
                );
            }
        });
    });

});
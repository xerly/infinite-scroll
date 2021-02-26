/* Scripts */

$(document).ready(function () {

    if (window.location.href.indexOf('index') > -1) {
        $('.slider').bxSlider({
            mode: 'fade',
            captions: false,
            responsive: true,
            pager: true
        });
    }
    // Slider


    // Posts
    if (window.location.href.indexOf('index') > -1) {
        var posts = [
            {
                title: 'Prueba de título 1',
                date: 'Publicado el ' + moment().format("dddd") + ' ' + moment().date() + ' de ' + moment().format("MMMM") + ' del año ' + moment().format("YYYY"),
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.'
            },
            {
                title: 'Prueba de título 2',
                date: 'Publicado el ' + moment().format("dddd") + ' ' + moment().date() + ' de ' + moment().format("MMMM") + ' del año ' + moment().format("YYYY"),
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.'
            },
            {
                title: 'Prueba de título 3',
                date: 'Publicado el ' + moment().format("dddd") + ' ' + moment().date() + ' de ' + moment().format("MMMM") + ' del año ' + moment().format("YYYY"),
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.'
            },
            {
                title: 'Prueba de título 4',
                date: 'Publicado el ' + moment().format("dddd") + ' ' + moment().date() + ' de ' + moment().format("MMMM") + ' del año ' + moment().format("YYYY"),
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.'
            },
            {
                title: 'Prueba de título 5',
                date: 'Publicado el ' + moment().format("dddd") + ' ' + moment().date() + ' de ' + moment().format("MMMM") + ' del año ' + moment().format("YYYY"),
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.'
            }
        ];
        posts.forEach((item, index) => {
            var post = ` 
        <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>${item.content}</p>
                <a href="#" class="button-more">Leer más &rsaquo;&rsaquo;</a>
            </article>
        `;
            $('#posts').append(post);
        });
    }
    // Selector de Theme y flechas scroll
    var theme = $('#theme');
    var theme_green = $('#to-green');
    var theme_red = $('#to-red');
    var theme_blue = $('#to-blue');

    var flechaverde = $('#flecha-verde');
    var flecharoja = $('#flecha-roja');
    var flechaazul = $('#flecha-azul');

    theme_green.click(function () {
        theme.attr('href', 'css/green.css');
    });
    theme_green.click(function () {
        flechaverde.css('display', 'block');
        flecharoja.css('display', 'none');
        flechaazul.css('display', 'none');
    });
    theme_red.click(function () {
        theme.attr('href', 'css/red.css');
    });
    theme_red.click(function () {
        flecharoja.css('display', 'block');
        flechaverde.css('display', 'none');
        flechaazul.css('display', 'none');
    });
    theme_blue.click(function () {
        theme.attr('href', 'css/blue.css');
    });
    theme_blue.click(function () {
        flechaazul.css('display', 'block');
        flecharoja.css('display', 'none');
        flechaverde.css('display', 'none');
    });

    // Scroll arriba de la web
    $('.subir').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);

        return false;
    });

    // Login formulario
    $('#login form').submit(function () {
        var form_name = $('#form_name').val();
        localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name");
    if (form_name != null && form_name != 'undefined') {
        var about_parrafo = $('#about p');
        about_parrafo.html("<strong>Bienvenido, " + form_name + "&nbsp;&nbsp;</strong>");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sessión</a>");
        $('#login').hide();

        $('#logout').click(function () {
            localStorage.clear();
            location.reload();
        });
    }

    // Acordeón
    if (window.location.href.indexOf('about') > -1) {
        $('#acordeon').accordion();
    }

    // Reloj dinámico
    if (window.location.href.indexOf('reloj') > -1) {
        setInterval(function () {
            var reloj = moment().format('h:mm:ss');
            $('#reloj').html(reloj);
        }, 1000);
    }

    // Formulario de contacto - Validación
    if (window.location.href.indexOf('contact') > -1) {
        $("form input[name='date'").datepicker();
    }


});
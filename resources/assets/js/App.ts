export class App {

    init() {
        $('.message .close').on('click', function () {
            $(this).closest('.message').transition('fade');
        });

        $('.ui.dropdown').dropdown();
    }

}

/**
 * Init By itself... temporarily
 */
new App().init()

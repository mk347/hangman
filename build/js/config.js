require.config({
    baseUrl: 'js',
    shim: {
        domReady: [
            'requirejs'
        ],
        hangman: [
            'jquery'
        ]
    },
    paths: {
        requirejs: 'lib/requirejs/require',
        jquery: 'https://code.jquery.com/jquery-3.5.1.min',
        domReady: 'lib/requirejs/domReady'
    },
    packages: [

    ],
    deps: [

    ]
});

require.config({
    baseUrl: 'js',
    shim: {
        domReady: [
          'requirejs'
        ],
        hangman: [
          'jquery',
          'words'
        ]
    },
    paths: {
        requirejs: 'lib/requirejs/require',
        jquery: 'https://code.jquery.com/jquery-3.5.1.min',
        domReady: 'lib/requirejs/domReady',
        words: 'words'
    },
    packages: [

    ],
    deps: [

    ]
});

CKEDITOR.editorConfig = function (config) {

    config.toolbar = [
        { name: 'undo', items: ['Undo', 'Redo'] },
        { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline'] },
        {
            name: 'paragraph',
            groups: ['list', 'indent', 'blocks', 'align'],
            items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']
        },
        { name: 'styles', items: ['Format', 'FontSize', 'lineheight'] },
        { name: 'insert', items: ['Table'] }
    ];

    // Set the most common block elements.
    config.format_tags = 'p;h1;h2;h3;pre';

    // Simplify the dialog windows.
    config.removeDialogTabs = 'image:advanced;link:advanced';

    // Enabling extra plugins, available in the standard-all preset: http://ckeditor.com/presets-all
    config.extraPlugins = 'tplaceholder, tplaceholder2';

    config.stylesSet = [
        /* Object Styles */
        {
            name: 'Compact table',
            element: 'table',
            attributes: {
                cellpadding: '5',
                cellspacing: '0',
                border: '1',
                bordercolor: '#ccc'
            },
            styles: {
                'border-collapse': 'collapse'
            }
        },
        { name: 'Borderless Table', element: 'table', styles: { 'border-style': 'hidden' } }
    ]
};

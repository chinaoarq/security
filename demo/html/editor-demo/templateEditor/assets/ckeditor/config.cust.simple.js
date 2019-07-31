CKEDITOR.editorConfig = function (config) {

    config.toolbar = [
        { name: 'undo', items: ['Undo', 'Redo'] },
        { name: 'basicstyles', items: ['Bold', 'Italic'] },
        {
            name: 'paragraph',
            groups: ['list', 'indent', 'blocks', 'align'],
            items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']
        },
        { name: 'styles', items: ['Format', 'FontSize', 'lineheight'] },
        { name: 'insert', items: ['Image', 'Table'] },
        { name: 'document', items: ['Preview'] }
    ];

    // Set the most common block elements.
    config.format_tags = 'p;h1;h2;h3;pre';

    // Simplify the dialog windows.
    config.removeDialogTabs = 'image:advanced;link:advanced';

    // Enabling extra plugins, available in the standard-all preset: http://ckeditor.com/presets-all
    config.extraPlugins = 'imageUploader';

    config.uploadUrl = 'upload?command=QuickUpload&type=Images';

    config.enterMode = CKEDITOR.ENTER_BR;
};

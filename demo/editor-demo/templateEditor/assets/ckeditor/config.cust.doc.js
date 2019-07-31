/**
 * 
 */
CKEDITOR.editorConfig = function (config) {
    
    /**
     *  toolbar配置参考
     *  https://ckeditor.com/latest/samples/toolbarconfigurator/index.html#basic
     */
   config.toolbar = [
       { name: 'undo', items: ['Undo', 'Redo'] },
       { 
           name: 'basicstyles', 
           groups: ['basicstyles', 'cleanup'], 
           items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'CopyFormatting', 'RemoveFormat'] 
        },
       { 
            name: 'paragraph', 
            groups: ['list', 'indent', 'blocks', 'align'], 
            items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'] 
        },
        { name: 'styles', items: ['Styles', 'Format', 'Font', 'FontSize', 'lineheight'] },
       { name: 'links', items: ['Link', 'Unlink']},
       { name: 'insert', items: ['Image', 'Flash', 'Table', 'HorizontalRule', 'SpecialChar', 'PageBreak'] },
        { name: 'document', items: ['Preview', 'Print'] }
    ];

    // Set the most common block elements.
    config.format_tags = 'p;h1;h2;h3;pre';

    // Simplify the dialog windows.
    config.removeDialogTabs = 'image:advanced;link:advanced';

    // Enabling extra plugins, available in the standard-all preset: http://ckeditor.com/presets-all
    config.extraPlugins = 'imageUploader';

    config.uploadUrl = 'upload?command=QuickUpload&type=Images';
};

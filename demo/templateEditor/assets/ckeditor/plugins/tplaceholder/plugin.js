CKEDITOR.plugins.add('tplaceholder', {
    requires: 'widget',

    init: function (editor) {
        editor.widgets.add('tplaceholder', {
            allowedContent: 'span(!t-placeholder)',
            requiredContent: 'span(t-placeholder)',
            pathName: 'tplaceholder',
            draggable: false,

            upcast: function (el) {
                return el.name == 'span' && el.hasClass('t-placeholder');
            }
        });

        // This feature does not have a button, so it needs to be registered manually.
        editor.addFeature(editor.widgets.registered.tplaceholder);

        // Handle dropping a contact by transforming the contact object into HTML.
        // Note: All pasted and dropped content is handled in one event - editor#paste.
        editor.on('paste', function (evt) {
            var holder = evt.data.dataTransfer.getData('tplaceholder');
            if (!holder) {
                return;
            }

            evt.data.dataValue = '<span class="t-placeholder">' + holder.name + '</span>';
        });
    }
});
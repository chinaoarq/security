CKEDITOR.plugins.add('tplaceholder2', {
    requires: 'widget,dialog',
    lang: 'zh-cn',

    init: function (editor) {
        // Register dialog.
        CKEDITOR.dialog.add('tplaceholder2', this.path + 'dialogs/tplaceholder2.js');

        editor.widgets.add('tplaceholder2', {
            dialog: 'tplaceholder2',
            allowedContent: 'span[class,title,data-holderid](!t-placeholder2)',
            requiredContent: 'span(t-placeholder2)',
            pathName: 'tplaceholder2',
            draggable: false,

            upcast: function (el) {
                return el.name == 'span' && el.hasClass('t-placeholder2');
            },

            init: function () {
                this.setData('text', this.element.getText());
            },

            data: function(){
                this.element.setText(this.data.text);
            }
        });

        // This feature does not have a button, so it needs to be registered manually.
        editor.addFeature(editor.widgets.registered.tplaceholder2);

        // Handle dropping a contact by transforming the contact object into HTML.
        // Note: All pasted and dropped content is handled in one event - editor#paste.
        editor.on('paste', function (evt) {
            var holder = evt.data.dataTransfer.getData('tplaceholder2');
            if (!holder) {
                return;
            }

            evt.data.dataValue = '<span class="t-placeholder2" title="点击设置日期格式" data-holderid="' + holder.id + '">' + holder.defaultformat + '</span>';
        });
    }
});
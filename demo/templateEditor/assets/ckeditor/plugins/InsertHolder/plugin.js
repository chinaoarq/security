CKEDITOR.plugins.add('insertHolder', {
    requires: 'richcombo',

    init: function (editor) {

        var config = editor.config;

        editor.ui.addRichCombo('InsertHolder', {
            label: config.templateHolder_name,
            title: config.templateHolder_name,
            toolbar: 'insert,20',

            panel: {
                css: [CKEDITOR.skin.getPath('editor')].concat(config.contentsCss),
                multiSelect: false,
                attributes: { 'aria-label': config.templateHolder_name }
            },

            init: function () {
                this.startGroup(config.templateHolder_name);

                for (var index = 0; index < config.templateHolders.length; index++) {
                    const holder = config.templateHolders[index];
                    // Add the holder entry to the panel list.
                    this.add(holder.key, holder.label, holder.label);
                }
            },

            onClick: function (value) {
                editor.focus();
                editor.fire('saveSnapshot');

                editor.insertText(value);

                setTimeout(function () {
                    editor.fire('saveSnapshot');
                }, 0);
            },

            onRender: function () {
                editor.on('selectionChange', function (ev) {

                    var that = this;
                    setTimeout(() => {
                        var currentHolder = that.getValue(),
                            elementContent = ev.data.path.lastElement.$.innerText;

                        for (var index = 0; index < config.templateHolders.length; index++) {
                            const holder = config.templateHolders[index];
                            if (elementContent.indexOf(holder.key) != -1) {
                                if (holder.key != currentHolder)
                                    that.setValue(holder.key, holder.label);
                                return;
                            }
                        }

                        // If no styles match, just empty it.
                        that.setValue('');
                    }, 100);
                    
                }, this);
            },

            onOpen: function () {
                this.showAll();
            }
        });
    }
});

CKEDITOR.config.templateHolder_name = '占位符';

CKEDITOR.config.templateHolders = [
    { label: '姓名', key: '[[displayName]]' }, 
    { label: '性别', key: '[[gender]]' },
    { label: '出生年月', key: '[[birthday]]' }, 
    { label: '身份证号', key: '[[ID]]' }, 
    { label: '培养层次', key: '[[studyLevel]]' }, 
    { label: '专业', key: '[[major]]' }, 
    { label: '班级', key: '[[class]]' }, 
    { label: '学号', key: '[[studentNum]]' }, 
    { label: '家庭通信地址', key: '[[address]]' }, 
    { label: '邮箱', key: '[[email]]' }, 
    { label: '电话', key: '[[phone]]' }, 
    { label: '照片', key: '[[photo]]' }
];
'use strict';

CKEDITOR.dialog.add('tplaceholder2', function (editor) {
    var lang = editor.lang.tplaceholder2,
        generalLabel = editor.lang.common.generalTab;

    return {
        title: lang.title,
        minWidth: 300,
        minHeight: 80,
        contents: [
            {
                id: 'info',
                label: generalLabel,
                title: generalLabel,
                elements: [
                    {
                        type: 'radio',
                        id: 'format',
                        label: '设置日期格式',
                        items: [['1900年01月01日', 'YYYY年MM月dd日'], 
                            ['1900-01-01', 'YYYY-MM-dd'], 
                            ['1900/01/01', 'YYYY/MM/dd'],
                            ['1900年01月', 'YYYY年MM月'],
                            ['1900年01月 至 1900年01月', 'YYYY年MM月 至 YYYY年MM月']],
                        style: 'color: green',
                        'default': 'YYYY年MM月dd日',
                        required: true,
                        validate: CKEDITOR.dialog.validate.notEmpty('请选择日期格式!'),
                        setup: function (widget) {
                            console.log(widget.data.text);
                            this.setValue(widget.data.text);
                        },
                        commit: function (widget) {
                            widget.setData('text', this.getValue());
                        }
                    }
                ]
            }
        ]
    };
});
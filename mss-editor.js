import blockPlugin from './blockPlugin.js';
import ko from './ko.js';
const editor = grapesjs.init({
    // Indicate where to init the editor. You can also pass an HTMLElement
    container: '#gjs',
    allowScripts: 1,
    canvas: {
        scripts: [
            "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"
        ]
    },
    //canvasCss:`.gjs-selected {outline: 2px solid #606165 !important;} .gjs-highlighter-sel {outline: 2px solid #606165 !important} .gjs-toolbar{ background-color: #606165}`,
    fromElement: true,
    // Size of the editor
    height: '100vh',
    width: 'auto',
    // Disable the storage manager for the moment
    storageManager: {
        type: 'local',
        autosave: true,
        autoload: true,
        stepsBeforeSave: 1,
    },
    i18n: {
        locale: 'ko', // default locale
        detectLocale: true, // by default, the editor will detect the language
        localeFallback: 'ko', // default fallback
        messages: { ko },
    },
    plugins: [blockPlugin],
    blockManager: {
        appendTo: '.blocks-container',
        blocks: [
            {
                id: '텍스트',
                label: 'text',
                category: '요소',
                content : '<div data-gjs-type="text" style="padding: 10px;">텍스트 삽입</div>'
            }
        ]
        
     },
    layerManager: {
        appendTo: '.layers-container'
    },
    // We define a default panel as a sidebar to contain layers
    panels: {
        defaults: [
            {
                id: 'layers',
                el: '.panel__right',
                // Make the panel resizable
                resizable: {
                    maxDim: 350,
                    minDim: 200,
                    tc: 0, // Top handler
                    cl: 1, // Left handler
                    cr: 0, // Right handler
                    bc: 0, // Bottom handler
                    // Being a flex child we need to change `flex-basis` property
                    // instead of the `width` (default)
                    keyWidth: 'flex-basis',
                }
            },
            {
                id: 'panel-switcher',
                el: '.panel__switcher',
                buttons: [{
                    id: 'show-layers',
                    active: true,
                    label: '레이어',
                    command: 'show-layers',
                    // Once activated disable the possibility to turn it off
                    togglable: false,
                }, {
                    id: 'show-style',
                    active: true,
                    label: 'Styles',
                    command: 'show-styles',
                    togglable: false,
                }, {
                    id: 'show-blocks',
                    active: true,
                    label: 'Blocks',
                    command: 'show-blocks',
                    togglable: false
                }],
            },

        ]
    },

    styleManager: {
        appendTo: '.styles-container',
        sectors: [{
            name: 'Dimension',
            open: false,
            // Use built-in properties
            buildProps: ['width', 'height', 'min-height', 'padding', 'margin'],
            // Use `properties` to define/override single property
            properties: [
                {
                    // Type of the input,
                    // options: integer | radio | select | color | slider | file | composite | stack
                    type: 'integer',
                    name: 'The width', // Label for the property
                    property: 'width', // CSS property (if buildProps contains it will be extended)
                    units: ['px', '%'], // Units, available only for 'integer' types
                    defaults: 'auto', // Default value
                    min: 0, // Min value, available only for 'integer' types
                },
                {
                    type: 'slider',
                    name: 'The Height',
                    property: 'height',
                    units: ['px', '%'],
                    defaults: 'auto',
                    min: 0,
                }
            ]
        }, {
            name: 'Extra',
            open: false,
            buildProps: ['background-color', 'box-shadow', 'custom-prop'],
            properties: [
                {
                    id: 'custom-prop',
                    name: 'Custom Label',
                    property: 'font-size',
                    type: 'select',
                    defaults: '32px',
                    // List of options, available only for 'select' and 'radio'  types
                    options: [
                        { value: '12px', name: 'Tiny' },
                        { value: '18px', name: 'Medium' },
                        { value: '32px', name: 'Big' },
                    ],
                }
            ]
        },
        {
            name: 'Typography',
            open: false,
            buildProps: ['font-family'],
            properties: [
                {
                    id: 'font',
                    name: 'Font',
                    property: 'font-family',
                    //type: 'select',
                    //defaults: 'Arial, sans-serif',
                    options: [
                        { value: 'laundry', name: 'laundry' },
                        { value: 'Arial, Helvetica, sans-serif', name: 'Arial' }
                    ],
                },
            ],
        }

        ]
    },


    // Avoid any default panel

});


editor.Panels.addPanel({
    id: 'panel-top',
    el: '.panel__top',
});

editor.Panels.addPanel({
    id: 'basic-actions',
    el: '.panel__basic-actions',
    buttons: [
        {
            id: 'visibility',
            active: true, // active by default
            className: 'btn-toggle-borders',
            label: '<u>B</u>',
            command: 'sw-visibility', // Built-in command
        }, {
            id: 'export',
            className: 'btn-open-export',
            label: 'Exp',
            command: 'export-template',
            context: 'export-template', // For grouping context of buttons from the same panel
        }, {
            id: 'show-json',
            className: 'btn-show-json',
            label: 'JSON',
            context: 'show-json',
            command(editor) {
                editor.Modal.setTitle('Components JSON')
                    .setContent(`<textarea style="width:100%; height: 250px;">
    ${JSON.stringify(editor.getComponents())}
  </textarea>`)
                    .open();
            },
        }
    ],
});
// Define commands
editor.Commands.add('show-layers', {
    getRowEl(editor) { return editor.getContainer().closest('.editor-row'); },
    getLayersEl(row) { return row.querySelector('.layers-container') },

    run(editor, sender) {
        const lmEl = this.getLayersEl(this.getRowEl(editor));
        lmEl.style.display = '';
    },
    stop(editor, sender) {
        const lmEl = this.getLayersEl(this.getRowEl(editor));
        lmEl.style.display = 'none';
    },
});
editor.Commands.add('show-styles', {
    getRowEl(editor) { return editor.getContainer().closest('.editor-row'); },
    getStyleEl(row) { return row.querySelector('.styles-container') },

    run(editor, sender) {
        const smEl = this.getStyleEl(this.getRowEl(editor));
        smEl.style.display = '';
    },
    stop(editor, sender) {
        const smEl = this.getStyleEl(this.getRowEl(editor));
        smEl.style.display = 'none';
    },
});

editor.Commands.add('show-blocks', {
    getRowEl(editor) { return editor.getContainer().closest('.editor-row'); },
    getStyleEl(row) { return row.querySelector('.blocks-container') },

    run(editor, sender) {
        const smEl = this.getStyleEl(this.getRowEl(editor));
        smEl.style.display = '';
    },
    stop(editor, sender) {
        const smEl = this.getStyleEl(this.getRowEl(editor));
        smEl.style.display = 'none';
    },
});

//blockPlugin(editor)


function fn_arrow() {

}
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("gjs").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("gjs").style.marginLeft = "0";
}


// blockPlugin(editor);
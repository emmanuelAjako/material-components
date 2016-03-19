import Component from 'vue-class-component';
import docInputFields from './input-fields';
import docInputIconFields from './input-icon-fields';
import docTextareas from './textareas';
import docSnippet from '../snippet';

var template = require('./forms.html');

@Component({
    template: template,
    components: {
        docInputFields,
        docInputIconFields,
        docTextareas,
        docSnippet
    }
})
export default class Forms {
    data() {
        return {
            inputFieldsSnippet: require('./input-fields/input.snippet.html'),
            inputIconFieldsSnippet: require('./input-icon-fields/input-icon.snippet.html'),
            textareasSnippet: require('./textareas/textarea.snippet.html')
        }
    }
}
import Component from 'vue-class-component';

import mdInput from '../../../components/form/input';

import field from '../../../directives/field';

var template = require('./input-icon.html');

@Component({
    template: template,
    directives: {
        field
    },
    components: {
        mdInput
    }
})
export default class InputIconFileds {
}


import Component from 'vue-class-component';

import components from '../../../components';

@Component({
    components,
    template: require('./default.html')
})
export default class DefaultChip {
    data() {
        return {
            closed: false
        }
    }
}


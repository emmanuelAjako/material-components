import Component from 'vue-class-component';

import mdChip from '../../components/chip';
import docToasts from './toasts';
import docTooltips from './tooltips';

@Component({
    components: {
        mdChip,
        docToasts,
        docTooltips
    },
    template: require('./dialogs.html')
})
export default class Dialogs {
    data() {
        return {
            api: [
                {
                    name: 'Toast',
                    api: require('../../mixins/toast/toast-api.json')
                },
                {
                    name: 'Tooltip',
                    api: require('../../mixins/tooltip/tooltip-api.json')
                }
            ],
            snippets: {
                toasts: require('./toasts/toasts.snippet.html'),
                tooltips: require('./tooltips/tooltips.snippet.html')
            },
            src: [
                {
                    name: 'Toast',
                    script: require("!!html!highlightjs?lang=ts!../../mixins/toast/index.ts")
                },
                {
                    name: 'Tooltip',
                    script: require("!!html!highlightjs?lang=ts!../../mixins/tooltip/index.ts")
                }
            ]
        }
    }
}
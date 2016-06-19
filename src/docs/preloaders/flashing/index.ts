import Component from 'vue-class-component';

import mdCircularPreloader from '../../../components/circular-preloader';

@Component({
    components: {
        mdCircularPreloader
    },
    template: require('./flashing.html')
})
export default class FlashingPreloader {
}


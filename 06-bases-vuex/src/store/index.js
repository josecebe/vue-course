import {createStore} from 'vuex';
import counterStore from '@/store/counter';

export default createStore({
    modules: {
        counter: counterStore
    }
});

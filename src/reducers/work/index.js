import { WORK_LOADED } from '../../actions';

const initialState = {
    loaded: false,
    data: []
};

const work = (state = initialState, action) => {
    switch (action.type) {
        case WORK_LOADED:
            return {
                data: action.data,
                loaded: true
            };

        default:
            return state;
    }
}

export default work;

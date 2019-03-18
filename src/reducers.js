import Food from './food.json';

const initialState = {
    food: Food,
    searchTerm: '',
};

export default function reducers(state = initialState, actions) {
    switch (actions.type) {
        case 'SEARCH_INPUT_CHANGED':
            const { searchTerm } = actions.payload;
            return {
                ...state,
                searchTerm: searchTerm,
                food: searchTerm
                    ? Food.filter(food => food.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)
                    : Food,
            };
        default:
            return state;
    }
}



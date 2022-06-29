import * as types from './types';

const reducer = (state, action) => {
	switch (action.type) {
		case types.LOGIN: {
			return { ...action.payload };
		}

		case types.LOGOUT: {
			return null;
		}
	}

	return state;
};

export default reducer;

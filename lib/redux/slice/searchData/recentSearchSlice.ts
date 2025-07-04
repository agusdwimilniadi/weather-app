import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchItem {
    city: string;
    cityCode: number;
    timestamp: number;
}

interface RecentSearchState {
    searches: SearchItem[];
    city: string;
}


const initialState: RecentSearchState = {
    searches: [],
    city: 'jakarta',
}
const recentSearchSlice = createSlice({
    name: 'recentSearch',
    initialState,
    reducers: {
        addSearch: (state, action: PayloadAction<{ city: string, cityCode: number }>) => {
            const newSearchData = {
                city: action.payload.city,
                cityCode: action.payload.cityCode,
                timestamp: Date.now()
            };

            console.log('Adding search:', newSearchData);

            const checkCityIndex = state.searches.findIndex((item) => item.cityCode.toString() === action.payload.cityCode.toString());

            if (checkCityIndex !== -1) {
                const updatedSearches = state.searches.filter((item, index) => index !== checkCityIndex);
                state.searches = [newSearchData, ...updatedSearches];
            } else {
                state.searches = [newSearchData, ...state.searches];
            }

            console.log('Updated searches:', state.searches);

            if (state.searches.length > 10) {
                state.searches.pop();
            }

            console.log('Final searches:', state.searches);
        },

        removeSearch: (state, action: PayloadAction<{ cityCode: number }>) => {
            state.searches = state.searches.filter((item) => item.cityCode.toString() !== action.payload.cityCode.toString());

        },
        clearSearches: (state) => {
            state.searches = [];

        },
        setCityRoot: (state, action: PayloadAction<string>) => {
            state.city = action.payload;
        },
        updateFullData: (state, action: PayloadAction<SearchItem[]>) => {
            state.searches = action.payload

        }
    }
})

export const { addSearch, removeSearch, clearSearches, setCityRoot, updateFullData } = recentSearchSlice.actions;
export default recentSearchSlice.reducer;
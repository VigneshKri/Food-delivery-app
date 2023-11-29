import React, { useEffect, useReducer } from 'react';
import { getAll, search } from '../../../services/foodService';
import Thumbnails from '../../Thumbnails/Thumbnails';
import { useParams } from 'react-router-dom';
import Search from '../../Search/Search';

const initialState = { foods: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case 'FOODS_LOADED':
      return { ...state, foods: action.payload };
    default:
      return state;
  }
};

export default function Homepage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { foods } = state;
  const { searchTerm } = useParams();

  useEffect(() => {
    const loadFoods = async () => {
      try {
        const fetchedFoods = searchTerm ? await search(searchTerm) : await getAll();
        dispatch({ type: 'FOODS_LOADED', payload: fetchedFoods });
      } catch (error) {
        // Handle errors
        console.error('Error fetching foods:', error);
      }
    };

    loadFoods();
  }, [searchTerm]);

  return (
    <>
      <Search />
      <Thumbnails foods={foods} />
    </>
  );
}

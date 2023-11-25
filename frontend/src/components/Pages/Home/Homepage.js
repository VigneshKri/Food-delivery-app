import React, { useEffect, useReducer } from 'react'
import { getAll } from '../../../services/foodService';
import Thumbnails from '../../Thumbnails/Thumbnails';
const intitialstate={foods:[]};
const reducer=(state,action)=>{
    switch(action.type){
        case 'FOODS_LOADED':
            return {...state,foods:action.payload};
        default:
            return state;
    }
};
export default function Homepage() { 
    const [state,dispatch]=useReducer(reducer,intitialstate);
    const {foods}=state;
    useEffect( ()=>{
        getAll().then(foods=>dispatch({type:'FOODS_LOADED',payoad:foods}));
    },[]);

  return <>
  <Thumbnails  foods={foods}/>
  </>
}

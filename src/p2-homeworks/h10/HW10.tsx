import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";

function HW10() {
    // useSelector, useDispatch

    let loading = useSelector<AppStoreType, { isLoading: boolean }>(state => state.loading)
    const dispatch = useDispatch()


    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 5000)
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {loading.isLoading
                ? <div>
                    <img style={{width:'300px'}} src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt="hi"/>
                </div>
                : <div>
                    <SuperButton onClick={setLoading}>set loading...</SuperButton>
                </div>}

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10

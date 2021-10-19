import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from 'react-router-dom';

function Detalhes(){
    const h = useHistory();
    const dispatch = useDispatch();
    const voltar = ()=>{
        h.push('/')
        dispatch({
            type:'yes',
            payload:{cond:false}
        })
    }
    const condição = useSelector(state=>state.usuario.cond)
    useEffect(()=>{
        if(!condição){
            h.push('/');
            dispatch({
                type:'yes',
                payload:{cond:false}
            })
        }
    })
    return<>
    <div className='detalheContainer'>
        <img className='img_detalhes' alt=''/>
        <div className='dados'>
        
            <div className='name'></div>
            <div className='appearance'>
                <div className='gender'>gender: </div>
                <div className='race'>race:</div>
            </div>
            <div className='biography'>
                <div className='publisher'>publisher:</div>
                <div className='alignment'>alignment:</div>
            </div>
            <div className='connections'>

                <div className='relatives'>relatives:</div>
            </div>
            <div className='work'>
                <div className='occupation'>occupation:</div>
            </div>
            <div className='voltar' onClick={voltar}>{"<"}voltar</div>
            <div></div>
        </div>
    </div>

    </>
}
export default Detalhes;
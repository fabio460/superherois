const inicial = {
    cond:false
}
const UsuarioReducer = (state=inicial,action)=>{
switch (action.type) {
        case 'yes':
            return {...state,cond:action.payload.cond}
        default:
            break;
    }
    return state
}
export default UsuarioReducer;

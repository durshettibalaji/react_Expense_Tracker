import {ActionConstants} from "../Constants/actionsConstants"
const initialState={
    obj:{title:"",amount:"",date:"",id:0,type:""},
    array:[],
    edit:null,
    Basic_needs:0,
    luxury:0,
    self_development:0,
    undef:0,
    total:0,
}
export const changeDateTitleAmount=(state=initialState,{type,payload})=>
{
    switch(type){
        case ActionConstants.CHANGE_DATE:
            return{...state,obj:{...state.obj,date:payload}}
        case ActionConstants.CHANGE_AMOUNT:
            return{...state,obj:{...state.obj,amount:payload}}
        case ActionConstants.CHANGE_TITLE:
            return{...state,obj:{...state.obj,title:payload}}
        case ActionConstants.TYPE_UPDATE:
            return{...state,obj:{...state.obj,type:payload}}
        case ActionConstants.SUBMIT_OBJ:
            if(state.edit===null)
            return {...state,obj:{title:"",amount:"",date:"",id:state.obj.id+1},array:[...state.array,{...state.obj,id:state.obj.id,type:state.obj.type}]}  
            else
            {
            let arr=[...state.array]
            arr[state.edit]={...state.obj,id:arr[state.edit].id};
            return {...state,edit:null,array:arr,obj:{title:"",amount:"",date:"",id:state.obj.id},type:state.type}
            }
        case ActionConstants.CLEAROBJ:
            return {...state,obj:{title:"",amount:"",date:"",id:state.obj.id}}
        case ActionConstants.UPDATE_TITLE:
            // console.log(payload);
            return {...state,obj:{...state.array[payload],id:state.obj.id},edit:payload}
        case ActionConstants.DELETE_RECORD:
            return{...state,array:payload}
        case ActionConstants.UPDATE_ALL:
            return{...state,Basic_needs:payload.basic,luxury:payload.luxury,self_development:payload.self,total:payload.total,undef:payload.undef}
        
                
        default:
            return state;
    }
}
export const addobj=(state=initialState,{type,payload})=>
{
    switch(type){
        case ActionConstants.SUBMIT_OBJ:
            return {...state,array:[...state.array,{...state.obj}],obj:{title:"",amount:"",date:""}}      
    }
}
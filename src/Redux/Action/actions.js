import {ActionConstants} from'../Constants/actionsConstants'
export const SetEnteredDate=(date)=>
{
    return {
        type: ActionConstants.CHANGE_DATE,
        payload:date,
    }
}

export const SetEnteredAmount=(amount)=>
{
    return {
        type:ActionConstants.CHANGE_AMOUNT,
        payload:amount,
    }
}

export const setEnteredTitle=(title)=>
{
    return {
        type:ActionConstants.CHANGE_TITLE,
        payload:title,
    }
}

export const SubmitObj=(obj)=>
{
    return{
        type:ActionConstants.SUBMIT_OBJ,
        payload:obj,
    }
}

export const clearobj=(obj)=>
{
    return{
        type:ActionConstants.CLEAROBJ,

    }
}

export const changeTitile=(id)=>
{
    return{
        type:ActionConstants.UPDATE_TITLE,
        payload:id,
    }
}

export const deleterecord=(array)=>
{
    return{
        type:ActionConstants.DELETE_RECORD,
        payload:array,
    }
}

export const typeUpdate=(type)=>
{
    return{
        type:ActionConstants.TYPE_UPDATE,
        payload:type,
    }
}


export const updateallvar=(obj)=>
{
    return {
        type:ActionConstants.UPDATE_ALL,
        payload:obj,
    }
} 
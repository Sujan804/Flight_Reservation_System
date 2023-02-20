import { ADD_BOOKING, REMOVE_BOOKING } from "./actionType"

const addBooking = (bookingValue)=>{
    return {
        type: ADD_BOOKING,
        payload: bookingValue,
    }
}
const removeBooking = (bookingId)=>{
    return{
        type: REMOVE_BOOKING,
        payload: bookingId,
    }
}

export { addBooking, removeBooking }


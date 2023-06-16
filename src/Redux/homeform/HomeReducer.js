import * as types from './HomeActionTypes';

const initial = {
  pickupLocation: '',
  viaLocation: [],
  dropLocation: '',
  pickupDateTime: '',
  passengersCount: '',
  isReturn: false,
  returnDateTime: '',
  loading: false,
  error: '',
};



const HomeReducer = (state = initial, action) => {
  switch (action.type) {
    case types.PickupLocation_Req:
      return {
        ...state,
        pickupLocation: action.payload,
      };
    case types.DropLocation_Req:
      return {
        ...state,
        dropLocation: action.payload,
      };

      case types.ViaLocation_Req :
        return {
          ...state,
          viaLocation: [...state.viaLocation,  action.payload]
        };
        case types.ViaLocation_Req_Remove:
           const updatedViaLocations = [...state.viaLocation];
           updatedViaLocations.splice(action.payload, 1);
           
          return {
            ...state,
            viaLocation: updatedViaLocations,
          };

          case types.ToggleIsReturn:
            return {
              ...state,
              isReturn: !state.isReturn
            }
    default:
      return state;
  }
};

export default HomeReducer;

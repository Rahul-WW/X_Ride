import * as types from './HomeActionTypes';

const initial = {
  pickupLocation: '',
  viaLocation: [],
  dropLocation: '',
  pickupDateTime: 'Yes',
  passengersCount: '',
  isReturn: false,
  returnDateTime: '',
  loading: false,
  error: '',
  origin:"",
  destination:""
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
            case types.PickupDateTime_Req:
             
              return {
                ...state,
                pickupDateTime: action.payload
              }

              case types.ReturnDateTime_Req:
                return {
                  ...state,
                  returnDateTime: action.payload
                }
                case types.PickupPlaceId_Req:
                  return {
                    ...state, 
                    origin: action.payload
                  }
                  case types.DropPlaceId_Req:
                    return {
                      ...state,
                      destination: action.payload
                    }
    default:
      return state;
  }
};

export default HomeReducer;

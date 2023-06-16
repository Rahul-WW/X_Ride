
import axios from "axios";

import { PickupLocation_Req } from "./HomeActionTypes";
import {DropLocation_Req} from "./HomeActionTypes"
import { ViaLocation_Req } from "./HomeActionTypes";
import { ViaLocation_Req_Remove } from "./HomeActionTypes";
import { ToggleIsReturn } from "./HomeActionTypes";

export const PickupLocationReq=(payload)=>{
    return {
      type: PickupLocation_Req,
      payload: payload,
    };
}

export const DropLocationReq=(payload)=>{
    return {
        type: DropLocation_Req,
        payload: payload
    }
}


export const ViaLocationReq=(payload)=>{
    return {
        type: ViaLocation_Req,
        payload: payload
    }
}

export const ViaLocationReqRemove = index => {
  return {
    type: ViaLocation_Req_Remove,
    payload: index,
  };
};

export const ToggleIsReturnJourney = () => {
  return {
    type: ToggleIsReturn,
  };
};


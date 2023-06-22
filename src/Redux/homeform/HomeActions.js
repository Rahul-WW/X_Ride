
import axios from "axios";

import { PickupLocation_Req } from "./HomeActionTypes";
import {DropLocation_Req} from "./HomeActionTypes"
import { ViaLocation_Req } from "./HomeActionTypes";
import { ViaLocation_Req_Remove } from "./HomeActionTypes";
import { ToggleIsReturn } from "./HomeActionTypes";
import { PickupDateTime_Req } from "./HomeActionTypes";
import { ReturnDateTime_Req } from "./HomeActionTypes";
import { PickupPlaceId_Req } from "./HomeActionTypes";
import { DropPlaceId_Req } from "./HomeActionTypes";

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


export const PickupDateTimeReq=(payload)=>{
  
  return {
    type: PickupDateTime_Req,
    payload: payload
  }
}

export const ReturnDateTimeReq=(payload)=>{
  return {
    type: ReturnDateTime_Req,
    payload: payload
  }
}


export const PickupPlaceIdReq=(payload)=>{
  return {
    type: PickupPlaceId_Req,
    payload: payload
  }
}

export const DropPlaceIdReq=(payload)=>{
  return {
    type: DropPlaceId_Req,
    payload: payload
  }
}
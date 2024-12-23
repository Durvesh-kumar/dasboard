type DashboardDataTypes = {
    id:string;
    clientName:string;
    date: string;
    state: string
    totalAmount: number; 
    orderType: string;
    delivered: string;
    rtoDelivered: string;
    modeofpayment:string;
    shippingAddress:string;
    trackingUrl:string;
    poc:string;
}

type StateType = {
    name: string,
    id: string
}

type NinetyDaysDataType ={
    date: string;
    alternateContactNumber: number;
    cancelled:string;
    contactNumber:number;
    contactNumber2:string;
    orderNo: string;
    poc:string;
    poc2:string;
    trackingStatus:string;
}

type SevenDaysType ={
    date: string;
    cancelled:string;
    orderNo: string;
    order:number;
    poc:string;
    RTODelivered:string;
}

type MonthDataType ={
    date: string;
    cancelled:string;
    orderNo: string;
    poc:string;
    RTODelivered:string;
}

type T1OrderType ={
    date: string;
    cancelled:string;
    orderNo: string;
    poc:string;
    RTODelivered:string;
}

type MDTDype ={
    date: string;
    orderNo:string;
    poc:string;
    contactNumber:number;
    alternateContactNumber:number;
    cancelled:string;
    trackingStatus:string
}

type Delivered15To45Type ={
    date: string;
    orderNo:string;
    delivered:string;
    poc:string;
    cod:string;
    prepaid:string;
    contactNumber:number;
    alternateContactNumber:number;
    cancelled:string;
    trackingStatus:string
}

type ThirtyDaysType ={
    date: string;
    orderNo:string;
    amount:number;
    delivered:string;
    poc:string;
    cod:string;
    contactNumber:number;
    alternateContactNumber:number;
    cancelled:string;
    trackingStatus:string
    predad:string;
}

type getDataType ={
    name: string,
    totalOrder:number;
    totaltRevenu:number;
    totaltRevenuAv:string;
    RTOStats:number;
    pripaid:string;
}
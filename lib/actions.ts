import axios from "axios"

export const getDelivered15t045Data = async ()=>{
    const res = await axios.get('https://script.google.com/macros/s/AKfycbzifS3mP9Tx_kaZkZX7RxdoTkZVrdgCgpQpcDyo405EQhTQXVneCdCOOdiYm2qTgxJ7/exec');
    return  await res.data;
}

export const getMdtData = async ()=>{
    const res = await axios.get("https://script.google.com/macros/s/AKfycbz0ZED9dTwQ14ThtjZBerh85MNNUa8UYkrHRGcbv4M1hH0Pg3Zy6yGJs08DIA9jfRk9/exec");
    return  await res.data;
};

export const getT1Orders = async ()=>{
    const res = await axios.get("https://script.google.com/macros/s/AKfycbwj0xgDL8H1P8ekkQGE07VSZhqGqyUKmDgFzLU78Hd-HRyIUAQFPw9Q0AeeoVvgW6tq/exec");
    return  await res.data;
};

export const getSevenDaysVs30Average = async ()=>{
    const res = await axios.get('https://script.google.com/macros/s/AKfycbyUHW9bdthIILuroGGLbTWv6daAwSA_p3PMAHd578defmowWaSigQGdiriR5Ql6RY4/exec');
    return  await res.data;
};

// export const get30DataAverage = async ()=>{
//     const res = await axios.get('https://script.google.com/macros/s/AKfycbzFYgUPufc6RQsJElSUNijm-B0d1Dw8hLQoCWTWT2agPHdiOKHAZyJl06m2HQvs2_Tu/exec');
//     console.log(await res.data);
    
//     return  await res.data;
// }

export const getSevenDaysData = async ()=>{
    const res = await axios.get('https://script.google.com/macros/s/AKfycbzYdJp9X1hb3HO6xQLi4ijUBUala27sG13XKXF19Q7y-yI8WpxDSN5uXILBzFu_aMb6/exec');
    return  await res.data;
};

export const getLastMonthData = async ()=>{
    const res = await axios.get("https://script.google.com/macros/s/AKfycbxU4TBn2k__gaWzFqWLwOM0FKCGBumqvSB6UNEDt1jF7bgnQ0A_3v2xCgNVAi4h1rGk/exec");
    return  await res.data;
};
// export const getLastMonthDataAverage = async ()=>{
//     const res = await axios.get("https://script.google.com/macros/s/AKfycbyWGSU5ZuAxddK05dBWo-8yUtzGlKeUTVeI7eyFhF0D32wQZRfUmIVDsUMeHnXQ01QI/exec");
//     return  await res.data;
// };

export const getDashboardPageData = async ()=>{
    const res = await axios.get('https://script.google.com/macros/s/AKfycbwkqXutpjBwWS0CXNO3xUzkvcGl_uj68W5Z5FWMSqrmNeX0TyQhPh6US33ASaMVTVLJ/exec');
    return  await res.data;
}

export const get30daysData = async()=>{
    const res = await axios.get('https://script.google.com/macros/s/AKfycbz15yRpjDkfKE2ONDVbVtXiLnaL0EcoWLwbv_EkE6kZFfgm3HzE70etaZwA8tqbm17Z/exec')
    return await res.data;
}

export const getAverage = async ()=>{
    const res = await axios.get("https://script.google.com/macros/s/AKfycbwHAlVFrvYiOEao3j5WLkFObqM-R8vp8SdgdMGOW42Y4NzV4aJGjQ7P_dUHqKgxyRlx/exec");
    return  await res.data;
};
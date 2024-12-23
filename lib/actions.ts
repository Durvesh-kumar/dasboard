import axios from "axios"

export const getDelivered15t045Data = async ()=>{
    const res = await axios.get('https://script.google.com/macros/s/AKfycbzifS3mP9Tx_kaZkZX7RxdoTkZVrdgCgpQpcDyo405EQhTQXVneCdCOOdiYm2qTgxJ7/exec');
    return  await res.data;
}

export const getMdtData = async ()=>{
    const res = await axios.get(
        "https://script.google.com/macros/s/AKfycbz0ZED9dTwQ14ThtjZBerh85MNNUa8UYkrHRGcbv4M1hH0Pg3Zy6yGJs08DIA9jfRk9/exec"
        );
    return  await res.data;
};

export const getT1Orders = async ()=>{
    const res = await axios.get("https://script.google.com/macros/s/AKfycbyNBX9cUay66SAvmQeZdy4F2AwWAb5nclE1onwMnpW_vS6rkpbf4jG0donJw5C7km0G/exec");
    console.log(await res.data);
    
    return  await res.data;
};

// export const getSevenDaysData = async ()=>{
//     const res = await axios.get('https://script.google.com/macros/s/AKfycbwQmrX_U-PYtmuFQOcKVU-6uxnkdn_mQ89W9CComRk9jFkT7GM3eSRMlLbdWLM9c05A/exec');
//     return  await res.data;
// };

// export const getLastMonthData = async ()=>{
//     const res = await axios.get("https://script.google.com/macros/s/AKfycbxU4TBn2k__gaWzFqWLwOM0FKCGBumqvSB6UNEDt1jF7bgnQ0A_3v2xCgNVAi4h1rGk/exec");
//     return  await res.data;
// }

export const getSevenDaysData = async ()=>{
    const res = await axios.get('https://script.google.com/macros/s/AKfycbwQmrX_U-PYtmuFQOcKVU-6uxnkdn_mQ89W9CComRk9jFkT7GM3eSRMlLbdWLM9c05A/exec');
    return  await res.data;
};

export const getLastMonthData = async ()=>{
    const res = await axios.get("https://script.google.com/macros/s/AKfycbxU4TBn2k__gaWzFqWLwOM0FKCGBumqvSB6UNEDt1jF7bgnQ0A_3v2xCgNVAi4h1rGk/exec");
    return  await res.data;
};

export const getDashboardPageData = async ()=>{
    const res = await axios.get('https://script.googleusercontent.com/macros/echo?user_content_key=IkAcxTYgeNE2yrNsh1RAI-UGh2xm6_PYIBpbWDq9TgDwArTqicsvwvaAmkGyFh3R7cVXAqBteiSwK8eYslyJKPHWuY_5GdNzm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnMP4QGV3b40dSixAg4fE-DrbpaV4m8xEchnslc6dwWzoaGZzwPw5nYEaGUwbZ65mhOgd3qnnVAmqKHMsqAFnqcWBnNJmKQ0qkA&lib=MIUq3NeSHX4rSPV7SIRxSx7_cs2Tzvz2N');
    return  await res.data;
}

export const get30daysData = async()=>{
    const res = await axios.get('https://script.google.com/macros/s/AKfycbz15yRpjDkfKE2ONDVbVtXiLnaL0EcoWLwbv_EkE6kZFfgm3HzE70etaZwA8tqbm17Z/exec')
    return await res.data;
}
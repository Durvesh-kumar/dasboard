import { Headset, LayoutDashboard, MapPinHouse, ShoppingBag, UsersRound } from "lucide-react";

const nevLinks = [
    {
        lable: "Dashboard",
        url: "/",
        icon:  <LayoutDashboard/>
    },
    {
        lable: "Poc",
        url: "/poc",
        icon: <Headset/>
    },
    {
        lable: "Orders",
        url: "/orders",
        icon: <ShoppingBag/>
    },
    {
        lable: "States",
        url: "/states",
        icon: <MapPinHouse />
    },
    {
        lable: "Performsnce",
        url: "/performsnce",
        icon: <UsersRound />
    }
    
]
export default nevLinks;
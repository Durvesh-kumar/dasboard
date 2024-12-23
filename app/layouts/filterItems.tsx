import { Button } from "@/components/ui/button";
import { ChevronDown, ListFilter } from "lucide-react";
import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { States } from "../helpers/States";
import { OrderType } from "../helpers/OrderType";
import { pocName } from "../helpers/PocName";
import { Checkbox } from "@/components/ui/checkbox";

interface DashboardDataProps {
  getData?: DashboardDataTypes[];
  getAllData: DashboardDataTypes[];
  setGetAllData: (value: React.SetStateAction<DashboardDataTypes[]>) => void;
  setGetData: (value: React.SetStateAction<DashboardDataTypes[]>) => void;
}

const FilterItems: React.FC<DashboardDataProps> = ({
  getAllData,
  setGetAllData,
  setGetData,
  getData,
}) => {
  const [state, setState] = useState<StateType[]>([]);
  const [orderType, setOrderType] = useState<[string]>(["All"]);
  const [isOpenDate, setIsOpenDate] = useState(false);
  const [isOpenPoc, setIsOpenPoc] = useState(false);
  const [isOpenOrderType, setIsOpenOrderType] = useState(false);
  const [isOpenState, setIsOpenState] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelectDate = (date: any) => {
    let filterData:any = getAllData?.filter((item:DashboardDataTypes)=> {
        let dataDate = new Date(item.date);
        return(
            dataDate >= date.selection.startDate
            &&
            dataDate <= date.selection.endDate
        )
    })
    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
    setGetData(filterData);
    
  };

  const stateHandleChange = (event:any)=>{
    const {checked, value} = event.target

     if(checked){
      setState([...state, value])
     }
     setState([...state.filter((item)=> item.id != value)])
     
  }
  console.log(state);
  

  return (
    <div className="min-w-64 relative flex flex-col gap-10 border-r-2 border-separate py-5 px-2 max-lg:hidden">
      <div className="flex flex-col items-center mt-5">
        <h1 className="text-center text-2xl font-bold">BY POC</h1>
        <div className="w-full flex items-center justify-between rounded-2xl p-2 mt-1 border-2 border-primary h-12">
          <Button
            onClick={() => {
              setIsOpenPoc(!isOpenPoc),
                setIsOpenDate(false),
                setIsOpenState(false),
                setIsOpenOrderType(false);
            }}
            variant={"outline"}
            className="p-3 rounded-full"
          >
            <ListFilter />
          </Button>
          <div>POC</div>
          <Button
            onClick={() => {
              setIsOpenPoc(!isOpenPoc),
                setIsOpenDate(false),
                setIsOpenState(false),
                setIsOpenOrderType(false);
            }}
            variant={"outline"}
            className="p-3"
          >
            All
            <ChevronDown />
          </Button>
          {
            isOpenPoc && (
              <div className="dark:text-foreground absolute top-20 left-10 text-muted-foreground h-96  z-50 w-72 rounded-lg
           bg-primary/5 dark:bg-secondary p-4">
            <div className="flex items-center justify-end">
              <Button onClick={()=> setIsOpenPoc(!isOpenPoc)} variant={"outline"}>X</Button>
            </div>
            <div className="overflow-y-auto scrollbar-hide h-80">
            {
                  pocName.map((item)=>(
                    <div key={item.id}>{item.name}</div>
                  ))
                }
            </div>
                
              </div>
            )
          }
        </div>
      </div>

      <div>
        <h1 className="text-center text-2xl font-bold">BY DATE</h1>
        <div className="w-full flex items-center justify-between rounded-2xl p-2 mt-1 border-2 border-primary h-12">
          <Button
            onClick={() => {
              setIsOpenDate(!isOpenDate),
                setIsOpenPoc(false),
                setIsOpenState(false),
                setIsOpenOrderType(false);
            }}
            variant={"outline"}
            className="p-3 rounded-full"
          >
            <ListFilter />
          </Button>
          <div>DATE</div>
          <Button
            onClick={() => {
                setIsOpenDate(!isOpenDate),
                setIsOpenPoc(false),
                setIsOpenState(false),
                setIsOpenOrderType(false);
            }}
            variant={"outline"}
            className="p-3"
          >
            All
            <ChevronDown />
          </Button>
          {isOpenDate && (
            <div className="absolute top-20 left-0 bg-background p-2 z-50 bg-white rounded-lg border-primary">
              <DateRangePicker
               className="bg-background text-muted-foreground"
                ranges={[selectionRange]}
                editableDateInputs={true}
                onChange={handleSelectDate}
              />
              <span className="flex items-center justify-end"><Button onClick={()=> setIsOpenDate(false)}>close</Button></span>
            </div>
          )}
        </div>
      </div>

      <div>
        <h1 className="text-center text-2xl font-bold">BY STATE</h1>
        <div className="w-full flex items-center justify-between rounded-2xl p-2 mt-1 border-2 border-primary h-12">
          <Button
            onClick={() => {
              setIsOpenState(!isOpenState),
                setIsOpenDate(false),
                setIsOpenPoc(false),
                setIsOpenOrderType(false);
            }}
            variant={"outline"}
            className="p-3 rounded-full"
          >
            <ListFilter />
          </Button>
          <div>STATE</div>
          <Button
            onClick={() => {
              setIsOpenState(!isOpenState),
                setIsOpenDate(false),
                setIsOpenPoc(false),
                setIsOpenOrderType(false);
            }}
            variant={"outline"}
            className="p-3"
          >
            All
            <ChevronDown />
          </Button>
          {
            isOpenState && (
              <div className="dark:text-foreground absolute top-20 left-10 text-muted-foreground h-96  z-50 w-72 rounded-lg
           bg-primary/5 dark:bg-secondary p-4">
            <div className="flex items-center justify-end">
              <Button onClick={()=> setIsOpenState(!isOpenState)} variant={"outline"}>X</Button>
            </div>
            <div className="overflow-y-auto flex flex-col gap-4 scrollbar-hide h-80">
            {
                  States.map((item)=>(
                    <div className="flex items-center gap-1" key={item.id}>
                      <Checkbox id={item.id} name={item.name} onClick={stateHandleChange} value={item.id} />
                    {/* <input onChange={stateHandleChange} type="checkbox" id={item.id} name={item.name} /> */}
                    <label
                      htmlFor={item.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {item.name}
                    </label>
                  </div>
                  ))
                }
            </div>
                
              </div>
            )
          }
        </div>
      </div>

      <div>
        <h1 className="text-center text-2xl font-bold">BY ORDER TYPE</h1>
        <div className="w-full flex items-center justify-between rounded-2xl p-2 mt-1 border-2 border-primary h-12">
          <Button
            onClick={() => {
              setIsOpenOrderType(!isOpenOrderType),
                setIsOpenState(false),
                setIsOpenDate(false),
                setIsOpenPoc(false);
            }}
            variant={"outline"}
            className="p-3 rounded-full"
          >
            <ListFilter />
          </Button>
          <div>ORDER TYPE</div>
          <Button
            onClick={() => {
              setIsOpenOrderType(!isOpenOrderType),
                setIsOpenState(false),
                setIsOpenDate(false),
                setIsOpenPoc(false);
            }}
            variant={"outline"}
            className="px-2 py-0"
          >
            All
            <ChevronDown />
          </Button>
          {
            isOpenOrderType && (
              <div className="dark:text-foreground absolute top-20 left-10 text-muted-foreground h-96  z-50 w-72 rounded-lg
           bg-primary/5 dark:bg-secondary p-4">
            <div className="flex items-center justify-end">
              <Button onClick={()=> setIsOpenOrderType(!isOpenOrderType)} variant={"outline"}>X</Button>
            </div>
            <div className="overflow-y-auto scrollbar-hide h-80">
            {
                  OrderType.map((item)=>(
                    <div key={item.id}>{item.name}</div>
                  ))
                }
            </div>
                
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};
export default FilterItems;

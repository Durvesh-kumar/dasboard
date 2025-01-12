import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown, ListFilter } from "lucide-react";
import React, { useEffect, useState } from "react";

interface Props {
  isOpenOrderType: boolean;
  filterData:any;
  setIsOpenOrderType: (value: React.SetStateAction<boolean>) => void;
  setIsOpenState: (value: React.SetStateAction<boolean>) => void;
  setIsOpenPoc: (value: React.SetStateAction<boolean>) => void;
  setIsOpenDate: (value: React.SetStateAction<boolean>) => void;
  allData?:DashboardDataTypes[]
  setFilterData: (value?: React.SetStateAction<DashboardDataTypes[]>) => void;
}
type arrayStateType = {
  name: string;
  totalOrder: number;
};

const OrderType: React.FC<Props> = ({
  setIsOpenDate,
  isOpenOrderType,
  filterData,
  setIsOpenPoc,
  setIsOpenState,
  setIsOpenOrderType,
  setFilterData,
  allData
}) => {
  const filterState = allData?.filter((item) => item.orderType);
  const filterStates:any = filterState
    ?.map((item) => item.orderType)
    ?.filter((value, index, item) => item.indexOf(value) == index);

  const arrayOrderType:arrayStateType[] = [];

  if(allData){
  for (var i of filterStates) {
    const totalOrdersLength = allData.filter(
      (item) => item.orderType === i
    ).length;
    arrayOrderType.push({
      totalOrder: totalOrdersLength,
      name: i,
    });
  }
}

useEffect(()=>{
  setOtype(arrayOrderType.map((item)=> item.name))
}, [arrayOrderType.map((item)=> item.name).length > 0])
const [otype, setOtype] = useState<string[]>([]);


const handleChangeAllSelect = (event: any) => {
  const { name } = event.target;
  if(name === 'allSelect'){
    setOtype(arrayOrderType.map((item)=> item.name));
    for(var i of otype){
    setFilterData(allData?.filter((item)=> item.state !== i))
    }
  }
};

  return (
    <div className="flex relative top-5 flex-col items-center mt-5">
      <h1 className="text-center text-2xl font-bold">BY ORDER TYPE</h1>
      <div className="w-full flex items-center justify-between rounded-2xl p-2 mt-1 border-2 border-primary h-12">
        <Button
          onClick={() => {
            setIsOpenPoc(false),
              setIsOpenState(false),
              setIsOpenOrderType(!isOpenOrderType),
              setIsOpenDate(false);
          }}
          variant={"outline"}
          className="p-3 rounded-full"
        >
          <ListFilter />
        </Button>
        <div>ORDER TYPE</div>
        <Button
          onClick={() => {
            setIsOpenPoc(false),
              setIsOpenState(false),
              setIsOpenOrderType(!isOpenOrderType),
              setIsOpenDate(false);
          }}
          variant={"outline"}
          size={"icon"}
        >
          <div className="flex items-center mx-2">
            All
            <ChevronDown />
          </div>
        </Button>
        {isOpenOrderType && (
          <div
            className="dark:text-foreground absolute top-20 left-0 text-muted-foreground h-96  z-50 w-60 rounded-lg
           bg-white dark:bg-secondary p-4"
          >
            <div className="flex items-center justify-end">
              <Button
                onClick={() => setIsOpenOrderType(!isOpenOrderType)}
                variant={"outline"}
              >
                X
              </Button>
            </div>
            <div className="overflow-y-auto flex flex-col gap-4 scrollbar-hide h-80">
            <div className="flex items-center gap-1">
                <input
                  type="checkbox"
                  checked={
                    otype.map((item: any) => item).length ===
                    arrayOrderType.map((item) => item.name).length
                  }
                  onChange={handleChangeAllSelect}
                  id="allSelect"
                  name="allSelect"
                />
                <label
                    htmlFor='allSelect'
                    className="text-sm font-medium cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    All select
                  </label>
              </div>
              {arrayOrderType?.map((item: arrayStateType) => (
                <div className="flex items-center gap-1" key={item.name}>
                  <Checkbox
                    id={item.name}
                    checked={otype?.includes(item.name)}
                    onCheckedChange={(checked) => {
                      if (!checked) {
                        setOtype(otype.filter((items: string) => items !== item.name));
                        setFilterData(filterData?.filter((items:DashboardDataTypes)=> items.orderType !== item.name))
                        
                      }

                      if (checked) {
                        const data = allData?.filter((items)=> items.orderType === item.name)
                        setFilterData(filterData.concat(data))
                        setOtype([...otype, item.name]);
                      }
                    }}
                  />
                  <label
                    htmlFor={item.name}
                    className="text-sm font-medium cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {item.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default OrderType;

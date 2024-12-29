import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, ListFilter } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

interface Props {
  isOpenState: boolean;
  allData?: DashboardDataTypes[];
  filterData?: DashboardDataTypes[];
  setIsOpenState: (value: React.SetStateAction<boolean>) => void;
  setIsOpenPoc: (value: React.SetStateAction<boolean>) => void;
  setIsOpenOrderType: (value: React.SetStateAction<boolean>) => void;
  setIsOpenDate: (value: React.SetStateAction<boolean>) => void;
  setFilterData: (value?: React.SetStateAction<DashboardDataTypes[]>) => void;
}
type arrayStateType = {
  name: string;
  totalOrder: number;
};
const State: React.FC<Props> = ({
  setFilterData,
  setIsOpenDate,
  setIsOpenOrderType,
  setIsOpenPoc,
  isOpenState,
  allData,
  filterData,
  setIsOpenState,
}) => {
  const stateDatas = allData?.filter((item) => item.state.length > 1);
  const filterState = stateDatas?.filter((item) => item.state);
  const filterStates: any = filterState
    ?.map((item) => item.state)
    ?.filter((value, index, item) => item.indexOf(value) == index);

  const arrayState: arrayStateType[] = [];
  if (allData) {
    for (var i of filterStates) {
      const totalOrdersLength = allData.filter(
        (item) => item.state === i
      ).length;
      arrayState.push({
        totalOrder: totalOrdersLength,
        name: i,
      });
    }
  }

  const [stateData, setStateData] = useState<any>([]);

  const [queary, setQueary] = useState("");
  const [findItem, setFindItem] = useState<arrayStateType[]>(arrayState);

  useEffect(() => {
    searchQuery(queary);
  }, [queary]);

  useEffect(() => {
    setStateData(arrayState.map((item) => item.name));
  }, []);

  const searchQuery = (queary: string) => {
    let filterData = arrayState;

    if (queary) {
      filterData = arrayState.filter((item: any) =>
        item.name.toLowerCase().includes(queary.toLowerCase())
      );
      setFindItem(stateData);
    }
  };


  const handleChangeAllSelect = (event: any) => {
    const { name } = event.target;
    if(name === 'allSelect'){
      setStateData(arrayState.map((item)=> item.name));
      for(var i of stateData){
      setFilterData(allData?.filter((item)=> item.state !== i))
      }
    }
  };

  return (
    <div>
      <h1 className="text-center text-2xl font-bold">BY STATE</h1>
      <div className="w-full flex items-center justify-between rounded-2xl p-2 mt-1 border-2 border-primary h-12">
        <Button
          onClick={() => {
            setIsOpenState(!isOpenState),
              setIsOpenDate(false),
              setIsOpenOrderType(false),
              setIsOpenPoc(false);
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
              setIsOpenOrderType(false),
              setIsOpenPoc(false);
          }}
          variant={"outline"}
          size={"icon"}
        >
          <div className="mx-2 flex items-center">
            All
            <ChevronDown />
          </div>
        </Button>
        {isOpenState && (
          <div
            className="dark:text-foreground absolute top-1 left-5 text-muted-foreground h-[650px] overflow-hidden  z-50 w-60 rounded-lg
           bg-white dark:bg-secondary p-4"
          >
            <div className="flex items-center justify-between gap-2 mb-5">
              <Input
                placeholder="Search...."
                value={queary}
                onChange={(e) => setQueary(e.target.value)}
              />
              <Button
                onClick={() => setIsOpenState(!isOpenState)}
                variant={"outline"}
              >
                X
              </Button>
            </div>
            <div className="overflow-y-auto flex flex-col gap-4 scrollbar-hide h-[600px]">
              
              {findItem.map((item: arrayStateType) => (
                <div className="flex items-center gap-1" key={item.name}>
                  <Checkbox
                    id={item.name}
                    checked={stateData?.includes(item.name)}
                    onCheckedChange={(checked) => {
                      if (!checked) {
                        setStateData(stateData.filter((items: string) => items !== item.name));
                        for(var i of stateData){
                          setFilterData(allData?.filter((item)=> item.state === i))
                        }
                        
                      }

                      if (checked) {
                        setStateData([...stateData, item.name]);
                        for(var i of stateData){
                          setFilterData(allData?.filter((item)=> item.state === i))
                        }
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

export default State;

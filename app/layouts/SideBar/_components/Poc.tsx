import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { ChevronDown, ListFilter } from "lucide-react";
import React, { useEffect, useState } from "react";

interface Props {
  allData?: DashboardDataTypes[];
  isOpenPoc: boolean;
  filterData: any;
  setIsOpenState: (value: React.SetStateAction<boolean>) => void;
  setIsOpenOrderType: (value: React.SetStateAction<boolean>) => void;
  setIsOpenPoc: (value: React.SetStateAction<boolean>) => void;
  setIsOpenDate: (value: React.SetStateAction<boolean>) => void;
  setFilterData: any;
}
type arrayStateType = {
  name: string;
  totalOrder: number;
};

const Poc: React.FC<Props> = ({
  setIsOpenOrderType,
  isOpenPoc,
  setIsOpenDate,
  setIsOpenState,
  setIsOpenPoc,
  setFilterData,
  allData,
  filterData,
}) => {
  const filterState = allData?.filter((item) => item.poc);
  const filterStates: any = filterState
    ?.map((item) => item.poc)
    ?.filter((value, index, item) => item.indexOf(value) == index);
  const arraySPoc: arrayStateType[] = [];

  if (allData) {
    for (var i of filterStates) {
      const totalOrdersLength = allData?.filter(
        (item) => item.poc === i
      ).length;
      arraySPoc.push({
        totalOrder: totalOrdersLength,
        name: i,
      });
    }
  }

  const [pocData, setPocData] = useState<string[]>([]);

  useEffect(() => {
    setPocData(arraySPoc.map((item: any) => item.name));
    setFindItem(arraySPoc);
  }, [arraySPoc.map((item) => item.name).length > 0]);

  const [queary, setQueary] = useState("");
  const [findItem, setFindItem] = useState<arrayStateType[]>();

  useEffect(() => {
    searchQuery(queary);
  }, [queary]);

  const searchQuery = (queary: string) => {
    let filterData = arraySPoc;

    if (queary) {
      filterData = arraySPoc.filter((item: any) =>
        item.name.toLowerCase().includes(queary.toLowerCase())
      );
      setFindItem(filterData);
    } else {
      setFindItem(arraySPoc);
    }
  };

  const handleChangeAllSelect = (event: any) => {
    const { name } = event.target;
    if (name === "allSelect") {
      setPocData(arraySPoc.map((item: any) => item.name));
      for (var i of pocData) {
        setFilterData(allData?.filter((item) => item.poc !== i));
      }
    }
  };

  return (
    <div className="flex relative top-5 flex-col items-center mt-5">
      <h1 className="text-center text-2xl font-bold">BY POC</h1>
      <div className="w-full flex items-center justify-between rounded-2xl p-2 mt-1 border-2 border-primary h-12">
        <Button
          onClick={() => {
            setIsOpenPoc(!isOpenPoc),
              setIsOpenState(false),
              setIsOpenOrderType(false),
              setIsOpenDate(false);
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
              setIsOpenState(false),
              setIsOpenOrderType(false),
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
        {isOpenPoc && (
          <div
            className="dark:text-foreground absolute top-[-250px] left-0 text-muted-foreground h-[650px]  z-50 w-60 rounded-lg
           bg-white dark:bg-secondary p-4"
          >
            <div className="flex items-center justify-between gap-2 mb-5">
              <Input
                placeholder="Search......."
                value={queary}
                onChange={(e) => setQueary(e.target.value)}
              />
              <Button
                onClick={() => setIsOpenPoc(!isOpenPoc)}
                variant={"outline"}
              >
                X
              </Button>
            </div>
            <div className="overflow-y-auto flex flex-col gap-4 scrollbar-hide h-[600px]">
              <div className="flex items-center gap-1">
                <input
                  type="checkbox"
                  checked={
                    pocData.map((item) => item).length ===
                    arraySPoc.map((item) => item.name).length
                  }
                  onChange={handleChangeAllSelect}
                  id="allSelect"
                  name="allSelect"
                />
                <label
                  htmlFor="allSelect"
                  className="text-sm font-medium cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  All select
                </label>
              </div>
              {findItem?.map((item, index: number) => (
                <div className="flex items-center gap-1" key={index}>
                  <Checkbox
                    id={item.name}
                    checked={pocData?.includes(item.name)}
                    onCheckedChange={(checked) => {
                      if (!checked) {
                        setPocData(
                          pocData.filter((items: string) => items !== item.name)
                        );
                        setFilterData(
                          filterData?.filter(
                            (items: DashboardDataTypes) =>
                              items.poc !== item.name
                          )
                        );
                      }

                      if (checked) {
                        const data = allData?.filter(
                          (items) => items.poc === item.name
                        );
                        setFilterData(filterData.concat(data));
                        setPocData([...pocData, item.name]);
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

export default Poc;

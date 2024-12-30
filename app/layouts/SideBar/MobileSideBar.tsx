import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { DateRangePicker } from "react-date-range";
import { ChevronDown, ListFilter, MenuIcon } from "lucide-react";
import State from "./_components/State";
import Poc from "./_components/Poc";
import OrderType from "./_components/OrderType";

interface Props {
  allData?: DashboardDataTypes[];
  filterData?: DashboardDataTypes[];
  setFilterData: (value?: DashboardDataTypes[] | any) => void;
}
const MobileSideBar: React.FC<Props> = ({
  filterData,
  setFilterData,
  allData,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenState, setIsOpenState] = useState(false);
  const [isOpenPoc, setIsOpenPoc] = useState(false);
  const [isOpenOrderType, setIsOpenOrderType] = useState(false);
  const [isOpenDate, setIsOpenDate] = useState(false);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelectDate = (date: any) => {
    let dateFilterData = allData?.filter((item: DashboardDataTypes) => {
      let dataDate = new Date(item.date);
      return (
        dataDate >= date.selection.startDate &&
        dataDate <= date.selection.endDate
      );
    });
    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
    setFilterData(dateFilterData);
  };
  return (
    <div className="block border-separate bg-background lg:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant={"outline"} size={"icon"}>
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent
          className="w-[350px] sm:w-[500px] space-y-4"
          side={"left"}
        >
          <div className="flex flex-col flex-1 gap-10 px-5 mt-10">
          <State
            allData={allData}
            isOpenState={isOpenState}
            setIsOpenState={setIsOpenState}
            setIsOpenDate={setIsOpenDate}
            setIsOpenOrderType={setIsOpenOrderType}
            setIsOpenPoc={setIsOpenPoc}
            filterData={filterData}
            setFilterData={setFilterData}          />
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
                size={'icon'}
              >
                <div className="mx-2 flex items-center">
                All
                <ChevronDown />
                </div>
                
              </Button>
              {isOpenDate && (
                <div className="absolute top-20 left-0 bg-background p-2 z-50 bg-white rounded-lg border-primary border-separate border-2">
                  <DateRangePicker
                    className="bg-background text-muted-foreground"
                    ranges={[selectionRange]}
                    editableDateInputs={true}
                    onChange={handleSelectDate}
                  />
                  <span className="flex items-center justify-end">
                    <Button onClick={() => setIsOpenDate(false)}>close</Button>
                  </span>
                </div>
              )}
            </div>
          </div>
          <Poc
            isOpenPoc={isOpenPoc}
            allData={allData}
            setIsOpenPoc={setIsOpenPoc}
            setIsOpenOrderType={setIsOpenOrderType}
            setIsOpenState={setIsOpenState}
            setIsOpenDate={setIsOpenDate}
            setFilterData={setFilterData}
            filterData={filterData}
          />
          <OrderType
            isOpenOrderType={isOpenOrderType}
            setIsOpenState={setIsOpenState}
            setIsOpenPoc={setIsOpenPoc}
            setIsOpenDate={setIsOpenDate}
            setIsOpenOrderType={setIsOpenOrderType}
            setFilterData={setFilterData}
            filterData={filterData}
            allData={allData}

          />
        </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
export default MobileSideBar;

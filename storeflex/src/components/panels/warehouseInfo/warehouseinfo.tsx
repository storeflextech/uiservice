import React from "react";
import { ACTIONS_TYPE } from "../../../utils/Constants";
import AddWarehouse from "./AddWarehouse";
import ViewWarehouse from "./ViewWarehouse";
import EditWarehouse from "./EditWarehouse";

interface WarehouseInfoProps {
  onSave?(isSaved: boolean): void;
  action?: string;
}

const WarehouseInfo = (props: WarehouseInfoProps) => {
  if (ACTIONS_TYPE.add === props?.action) {
    return (
      <div>
        <AddWarehouse />
      </div>
    );
  } else if (ACTIONS_TYPE.edit === props?.action) {
    return (
      <div>
        <EditWarehouse />
      </div>
    );
  } else {
    return (
      <div>
        <ViewWarehouse />
      </div>
    );
  }
};

export default WarehouseInfo;

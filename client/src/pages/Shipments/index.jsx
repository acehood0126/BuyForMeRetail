import { Tabs } from "flowbite-react";
import AllShipments from "./AllShipments";

const Shipments = () => {
  return (
    <div className="w-full min-h-screen bg-specwhite p-[20px]">
      <Tabs.Group aria-label="Tabs with underline" style="underline">
        <Tabs.Item title="All Shipments">
          <AllShipments />
        </Tabs.Item>
        <Tabs.Item active={true} title="Payments">
          Dashboard content
        </Tabs.Item>
        <Tabs.Item title="Archived">Settings content</Tabs.Item>
      </Tabs.Group>
    </div>
  );
};
export default Shipments;

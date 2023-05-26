import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import orderCoverImg from "../../assets/shop/order.jpg";
import Cover from "../shared/cover/Cover";
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import FoodCard from "../../components/foodcard/FoodCard";
import OrderTab from "./orderTab/OrderTab";

const Order = () => {
    const [tabIndex, setTabIndex] = useState();
    const [menu] = useMenu();
    const dessert = menu.filter((item) => item.category === "dessert");
    const pizza = menu.filter((item) => item.category === "pizza");
    const soup = menu.filter((item) => item.category === "soup");
    const salad = menu.filter((item) => item.category === "salad");
    const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Cover
        img={orderCoverImg}
        title={"OUR SHOP"}
        description={"Would you like to try a dish?"}
      />
      <div className="text-center mt-12 mb-8">
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>SALAD</Tab>
    <Tab>PIZZA</Tab>
    <Tab>SOUP</Tab>
    <Tab>DESSERTS</Tab>
    <Tab>DRINKS</Tab>
  </TabList>
  <TabPanel>
    <OrderTab items={salad}/>
  </TabPanel>
  <TabPanel>
  <OrderTab items={pizza}/>
  </TabPanel>
  <TabPanel>
  <OrderTab items={soup}/>
  </TabPanel>
  <TabPanel>
  <OrderTab items={dessert}/>
  </TabPanel>
  <TabPanel>
    <OrderTab items={drinks}/>
  </TabPanel>
</Tabs>
      </div>
    </div>
  );
};

export default Order;

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import orderCoverImg from "../../assets/shop/order.jpg";
import Cover from "../shared/cover/Cover";
import { useState } from "react";
import useMenu from "../../hooks/useMenu";

import OrderTab from "./orderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {

  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
  const { category } = useParams();
  // console.log(category);
  const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Order - Bistro Boss</title>
      </Helmet>
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
            <Tab>Get Offer</Tab>
          </TabList>
          <TabPanel>
            <OrderTab items={salad} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={soup} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={dessert} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={offered} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;

import { Helmet } from "react-helmet-async";
import Cover from "../shared/cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertsIMG from "../../assets/menu/dessert-bg.jpeg";
import pizzaIMG from "../../assets/menu/pizza-bg.jpg";
import saladIMG from "../../assets/menu/salad-bg.jpg";
import soupIMG from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/sectionTitle/sectionTitle";
import MenuCategory from "./menuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter((item) => item.category === "dessert");
    const pizza = menu.filter((item) => item.category === "pizza");
    const soup = menu.filter((item) => item.category === "soup");
    const salad = menu.filter((item) => item.category === "salad");
    const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Our Menu - Bistro Boss</title>
      </Helmet>
      {/* Our Menu */}
      <Cover
        img={menuImg}
        title={"OUR MENU"}
        description={"Would you like to try a dish?"}
      />
      <SectionTitle
      subHeading={"---Don't miss---"}
      heading={"TODAY'S OFFER"}
      />
      {/* offered menu */}
<MenuCategory className=""  items={offered}/>

      {/* 2 dessert*/}
      {/* <div className="mb-12">
      <Cover
        img={dessertsIMG}
        title={"DESSERTS"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      </div> */}
      <MenuCategory  title="dessert" description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} img={pizzaIMG} items={pizza}/>
      {/* 3 */}
     {/* <div className="mb-12">
     <Cover
        img={pizzaIMG}
        title={"PIZZA"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
     </div> */}
      <MenuCategory  title="pizza" description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} img={dessertsIMG} items={dessert}/>
      {/* 4 */}
      {/* <div className="mb-12">
      <Cover 
        img={saladIMG}
        title={"SALADS"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      </div> */}
     <MenuCategory  title="salad" description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} img={saladIMG} items={salad}/>
      {/* 5 */}
      {/* <div className="mb-12">
      <Cover
        img={soupIMG}
        title={"SOUPS"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      </div> */}
      <MenuCategory  title="soup" description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} img={soupIMG} items={soup}/>
    </div>
  );
};

export default Menu;

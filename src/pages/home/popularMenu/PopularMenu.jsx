import SectionTitle from "../../../components/sectionTitle/sectionTitle";

import MenuItem from "../../shared/menuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-12">
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-8">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <button className="btn btn-outline border-0 w-[12%] mx-auto border-b-4 flex my-8 justify-center">
        View Full Menu
      </button>
    </section>
  );
};

export default PopularMenu;

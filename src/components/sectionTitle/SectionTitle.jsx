const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="my-8 w-4/12 mx-auto text-center">
      <p className="text-center text-xl font-semibold italic text-amber-400">
        {subHeading}
      </p>
      <h3 className="text-center text-4xl border-y-4 py-4 mt-4">{heading}</h3>
    </div>
  );
};

export default SectionTitle;

const Section = ({ title, children }) => (
    <section className="p-5 w-4/5 my-4 bg-gray-100 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold">{title}</h2>
      {children}
    </section>
  );
  
  export default Section;
  
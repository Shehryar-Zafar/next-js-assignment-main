import ShowList from "./components/showList/page";
const Home = () => {
  return (
    <div>
      <h1 className="font-bold text-5xl py-5 px-5 capitalize">
        Welcome to <span className="country">Country</span> Details app
      </h1>
      <ShowList />
      {/* <img
        width="50%"
        className="absolute top-1/2 translate-y-[-50%] px-5 rounded-[50px] overflow-hidden"
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgCOc2TpA_TrUAAlUodS8rePSoEtnNB2v4vGKe1wA9BJRmKQ6SO4XAjCOYEf5w4If3FSEGDrbCs9mpJcyucOf3eMmvPe3VuA4fj8L3epmqbiiVETwpDfqQe0www6LOxaTafR5N3yKJgu84/s1600/all_country_flags_with_names.jpg"
        alt=""
      /> */}
    </div>
  );
};
export default Home;

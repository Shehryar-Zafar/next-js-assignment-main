import ShowList from "../components/showList/page";
function country() {
  return (
    <div>
      <h1 className="font-bold text-4xl text-center py-5">
        Welcome to <span>Country</span> Page
      </h1>
      {/* <div className="listOfCountry my-8 ml-4">
        <h2 className="font-extrabold text-xl underline">
          This are the list of countries that we have in our app :
        </h2>
        <ul className="mt-4 text-xl">
          <li>Pakistan</li>
          <li>India</li>
          <li>China</li>
          <li>America</li>
          <li>Japan</li>
        </ul>
      </div> */}
      <ShowList />
    </div>
  );
}

export default country;

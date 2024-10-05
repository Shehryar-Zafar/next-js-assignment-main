import ShowList from "@/app/components/showList/page";
import Link from "next/link";

export default function country({
  params,
}: {
  params: { country_name: string };
}) {
  const country = [
    {
      name: "pakistan",
      capital: "Islamabad",
      population: 216565317,
      flag: "https://www.worldometers.info/img/flags/pk-flag.gif",
      languages: ["Punjabi, ", "English, ", "Urdu, "],
      currency: "PKR",
      religion: "Islam",
    },
    {
      name: "india",
      capital: "Delhi",
      population: 1380004385,
      flag: "https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg",
      languages: ["English, ", "Hindi, ", "Bengali, "],
      currency: "INR",
      religion: "Hinduism",
    },
    {
      name: "america",
      capital: "Washington, D.C.",
      population: 332639000,
      flag: "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg",
      languages: ["English, ", "Spanish, ", "Chinese, "],
      currency: "USD",
      religion: "Christianity",
    },
    {
      name: "china",
      capital: "Beijing",
      population: 1409517397,
      flag: "https://cdn.britannica.com/90/7490-050-5D33348F/Flag-China.jpg",
      languages: ["Mandarin, ", "English, ", "Hindi, "],
      currency: "CNY",
      religion: "Buddhism",
    },
    {
      name: "japan",
      capital: "Tokyo",
      population: 127817277,
      flag: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuUmUFiGW_0PYx6kcHWmHTipcZ6P_u32LOEA&s",
      languages: ["Japanese, ", "English, "],
      currency: "JPY",
      religion: "Shintoism",
    },
  ];
  const countryData = country.find((data) => data.name === params.country_name);
  console.log(countryData);

  return (
    <div>
      <Link href="/">
        <button className="bg-slate-800 py-2 px-4 rounded-xl mt-5 ">
          Back to Home page
        </button>
      </Link>
      <div className="absolute w-full top-[30%]">
        <ShowList />
      </div>
      <h1 className="font-extrabold uppercase text-5xl text-center py-5 tracking-widest underline">
        {params.country_name}
      </h1>
      <div className="content absolute top-[20%] left-[10%]">
        <h2 className="capitalize">
          <span>Capital :</span> &nbsp;&nbsp;{countryData?.capital}
        </h2>
        <h2 className="capitalize">
          <span>Population :</span> &nbsp;&nbsp;{countryData?.population}
        </h2>
        <h2 className="capitalize">
          <span>Languages :</span> &nbsp;&nbsp;{countryData?.languages}
        </h2>
        <h2 className="capitalize">
          <span>Currency :</span> &nbsp;&nbsp;{countryData?.currency}
        </h2>
        <h2 className="capitalize">
          <span>Religion (Most Followed) :</span> &nbsp;&nbsp;
          {countryData?.religion}
        </h2>
        <h1 className="uppercase text-3xl relative font-bold mt-5 text-slate-400 mb-5">
          Flag of {params.country_name}
        </h1>
        <img src={countryData?.flag} width={300} alt="" />
      </div>
    </div>
  );
}

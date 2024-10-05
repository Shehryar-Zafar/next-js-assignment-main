import Link from "next/link";

export default function ShowList() {
  return (
    <div className="showList absolute right-[5%]">
      <h2 className="font-extrabold text-2xl">List of Countries in My App</h2>
      <ul className="text-center">
        <Link href="/country/pakistan">
          <li className="mt-5 text-xl underline">Pakistan</li>
        </Link>
        <Link href="/country/india">
          <li className=" text-xl underline">India</li>
        </Link>
        <Link href={"/country/china"}>
          <li className=" text-xl underline">China</li>
        </Link>
        <Link href={"/country/america"}>
          <li className=" text-xl underline">America</li>
        </Link>
        <Link href={"/country/japan"}>
          <li className=" text-xl underline">Japan</li>
        </Link>
      </ul>
    </div>
  );
}

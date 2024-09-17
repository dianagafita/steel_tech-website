import { MAIN_PAGE_PROP } from "@/constants";

export default function QualitiesComponent() {
  return (
    <ul className="md:justify-center py-10 bg-[#2B2A27] flex w-[100vw] overflow-x-auto ">
      {MAIN_PAGE_PROP.map((item) => (
        <li
          key={item.title}
          className="items-center max-w-[400px] max-w-[400px] w-full flex flex-col bg-white text-[rgba(252,186,3)] rounded-lg py-10 px-5 m-5"
        >
          {item.icon}
          <span className="text-[13px] text-[var(--second-color)]">
            {item.title}
          </span>
        </li>
      ))}
    </ul>
  );
}

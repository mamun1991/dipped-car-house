import Image from "next/image";
const card = ({ img, title, subTitle, date, category }) => {
  return (
    <div>
      <Image
        className="rounded w-full transform transition duration-500 hover:scale-90"
        src={img}
        alt={title}
      />
      <div className="flex gap-y-5 mt-8 flex-col">
        <h3 className="text-xl">{title}</h3>
        <p className="text-base opacity-80">{subTitle}</p>
        {/* <p className="text-base font-normal">{data}</p> */}
        <div className="flex justify-between items-center">
          <p className="text-base">{category}</p>
          <p className="text-base">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default card;

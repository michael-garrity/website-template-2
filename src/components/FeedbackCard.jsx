import quotes from "../assets/quotes.svg";


const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col bg-card px-10 py-12 lg:max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card md:w-full">
    <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
    <p className="font-montserrat font-normal text-[18px] leading-[32.4px] text-secondary my-10">
      {content}
    </p>

    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[48px] h-[48px] border-secondary border-2 rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className="font-montserrat font-semibold text-[20px] leading-[32px] text-secondary">
          {name}
        </h4>
        <p className="font-montserrat font-normal text-[16px] leading-[24px] text-secondary">
          {title}
        </p>
      </div>
    </div>
  </div>
);


export default FeedbackCard;
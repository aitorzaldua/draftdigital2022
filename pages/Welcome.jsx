import Image from "next/image";
import WelcomeImg from "../images/welcome/compas16.png";

export default function Welcome() {
  return (
    <div className="flex w-full justify-center items-center 2xl:px-40 md:pb-0 pb-8">
      <div className="flex md:flex-row tablet:flex-col flex-col items-start justify-between  md:py-24 py-12 md:p-20 ">
        <div className="flex tablet:flex md:hidden flex-initial  justify-center md:w-[32rem] w-[24rem] items-center md:pt-2 2xl:pt-0 md:pr-4 2xl:pr-0">
          <Image src={WelcomeImg} alt="WelcomeImg" className="imgWelcome" />
        </div>
        {/* Left side */}
        <div className="flex flex-1 justify-start flex-col md:mr-10">
          <p className="md:text-6xl text-3xl text-gradient md:pt-24 pt-10 md:px-16 px-6 font-light">
            Smart contract security services for EVM Blockchains
          </p>

          <p className="md:flex tablet:hidden hidden text-md text-[#8db9e2] pt-12 px-16 font-light">
            We provide smart contract security analysis services, studying
            potential breaches and overseeing the implementation of secure smart
            contract protocols.
          </p>
        </div>
        {/* End of the Left side */}

        {/* Rigth side */}
        <div className="md:flex tablet:hidden hidden flex-initial  justify-center md:w-[32rem] items-center md:pt-2 2xl:pt-0 md:pr-4 2xl:pr-0">
          <Image src={WelcomeImg} alt="WelcomeImg" className="imgWelcome" />
        </div>
      </div>
    </div>
  );
}

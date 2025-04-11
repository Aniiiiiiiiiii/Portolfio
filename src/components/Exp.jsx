export default function Exp(){

    const exps = [
        { head:"Krold IT Solutions",time:"September 2024 - Present",role:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta ullam hic quis adipisci quo praesentium odit earum reiciendis eum inventore!" },
        { head:"Technosoft Academy",time:"February 2024 - July 2024",role:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta ullam hic quis adipisci quo praesentium odit earumreiciendis eum inventore!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta ullam hic quis adipisci quo praesentium odit earum reiciendis eum inventore!" },
        
      ];
     
      const ExpBox = ({ head, time , role }) => {
        return (
          <div className="col-12 d-flex flex-col mb-5 justify-content-center align-items-center">
            <div className="exp-box w-100 py-3 px-4 ">
                <div className="row justify-content-between">
                    <h4 className="text-white fw-bold d-inline w-fit">{head}</h4>
                    <p className="text-white d-inline w-fit">{time}</p>
                </div>
                <p className="text-white text-justify nunito-exlight">{role}</p>
            </div>
          </div>
        );
      };


    return (
        <>
        <section className="container-fluid mt-5 px-0 bg-dark">
            <div className="container pt-5">
                <h2 className="text-white text-center mb-5 nunito-bold sec-head">My Experience</h2>
                <div className="row">
                    {exps.map((exp,index) => (
                    <ExpBox key={index} head={exp.head} time={exp.time} role={exp.role} />
                    ))}
                </div>
            </div>
        </section>
        </>
    )
}
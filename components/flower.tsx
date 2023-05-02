'use client';
import { Planet } from 'react-planet';

function Center() {
  return <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16" style={{height: "50px"}}>
  <h1 className="h1 mb-4 text-orange-300" data-aos="fade-up">CHAINALITY</h1>
  <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">Your future Tokenized Assets Exchange</p>
</div>
}

function Items(props : any) {
  let style : any = props.left? {position: "absolute", right: "180px", top: "10px", textAlign: "right", width: "200px", display: "none"} : {position: "absolute", left: "180px", top: "10px", width: "200px", display: "none"}
  return <div style={style} className='data'>
    <ul>
      {props.items.map((item : string, index : number) => {
        return <li id={"_" + index}>{item}</li>
      })}
    </ul>
  </div>
}

function Petal(props : any) {
  return <div style={{
    backgroundColor: props.color,
    borderColor: props.color
    }} className="hex">
      <div style={{marginTop: "30px", textAlign: "center", fontSize: "24px", fontWeight: "bold"}}>
      {props.title}
      </div>
      <Items left={props.left} items={props.items}/>
    </div>
}

function MyFlower() {
	return (
    <div style={{width: "320px", height: "320px", margin: "auto"}}>
      <Planet
			centerContent={
				<Center />
			}
			hideOrbit
      orbitRadius={250}
      open
      >
      <Petal title="Identity" color="#0097B2" left items={["KYC", "Country based access", "Social recovery"]}/>
      <Petal title="DeFi" color="#8C52FF" left items={["Blockchain compatibility", "Shared crypto standards", "Governance"]}/>
      <Petal title="Exchange" color="#FF914D" left items={["Liquid and illiquid assets", "Globalized", "Safe"]}/>
      <Petal title="Incorporation" color="#87095E" items={["Online management", "Fast execution", "DAO compatible"]}/>
      <Petal title="Tokenization" color="#FFBD59" items={["Digital asset crafting", "Custom functionality", "Unferlying asset claiming"]}/>
      <Petal title="Compliance" color="#CB6CE6" items={["Paper trail", "Legal framework", "AML"]}/>
		
		  </Planet>
    </div>
	);
}

export default function Flower() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6" style={{}}>
        <div className="py-12 md:py-20">
          <MyFlower/>
        </div>
        
      </div>
    </section>
  )
}

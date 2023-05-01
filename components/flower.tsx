'use client';
import { Planet } from 'react-planet';

function Center() {
  return <div style={{
      height: 100,
      width: 200,
      textAlign: 'center',
      fontSize: '2.2rem'
    }}>
    Chainality Ecosystem
    </div>
}

function Petal(props : any) {
  return <div style={{
    backgroundColor: "red",
    borderColor: "red",
    transform: 'scale(1.7)'
    }} className="hex">
    </div>
}

function MyFlower() {
	return (
		<Planet
			centerContent={
				<Center />
			}
			hideOrbit
      orbitRadius={200}
      open
		>
    <Petal title="Identity"/>
    <Petal title="DeFi"/>
    <Petal title="Exchange"/>
    <Petal title="Incorporation"/>
    <Petal title="Tokenization"/>
    <Petal title="Compliance"/>
		
		</Planet>
	);
}

export default function Flower() {
  return (
    <section>
      <div className="mx-auto" style={{}}>
        <MyFlower />
      </div>
    </section>
  )
}

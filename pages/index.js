import Head from "next/head"
import { Card, CardTitle } from "../components/elements"
import { Navbar } from '../components/layout'

const feature = [
	{title: 'mudah digunakan', content: 'tentu saja'},
	{title: 'indah', content: `If you're new to Next.js we recommend that you start with the learn course.`},
	{title: 'ringan', content: 'tentu saja'},
	{title: 'responsif', content: 'tentu saja'},
	{title: 'keren', content: 'tentu saja'},
	{title: 'konten', content: 'tentu saja'}
]

const Index = () => {
	return (
		<>
			<Head>
				<title>Next.js with Tailwind CSS</title>
			</Head>
			<Navbar/>
			<div className="container mx-auto">
				<div className="w-full pt-20 px-4">
					<div className="text-center">
						<h1 className="font-extrabold font-sans text-center text-6xl mb-5">
							Next.js with Tailwind CSS
						</h1>
						<p className="text-3xl">
							You are ready to code :D
						</p>
					</div>
					<div className="grid grid-rows-2 grid-cols-3 gap-3 m-4">
						{feature.map(item => (
							<Card key={item.title}>
								<CardTitle title={item.title}/>
								<p>{item.content}</p>
							</Card>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default Index

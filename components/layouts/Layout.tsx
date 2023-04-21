import Head from "next/head"
import path from "path"
import { FC } from "react"
import Navbar from "../ui/Navbar";


interface Props {
    children: React.ReactNode;
    title?:string;
  }
export const Layouts: FC<Props> = ({ children,title }) => {
    return(
        <>
        <Head>
            <title>{title || 'Pokemon App'}</title>
            <meta name="author" content="Luisfer Rojas" />
            <meta name="description" content={`Informacion sobre el pokemon ${title}`} />
            <meta name="Keywords" content={`${title}, pokemon, pokedex`}/>
        </Head>
        <Navbar/>
        <main style={{
            padding:'0px 20px'
        }}>
            {children}
        </main>
        </>
    )
}
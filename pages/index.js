import { supabase } from "../lib/supabse";


export default function Home({ data }) {

  return (
    <div className="bg-gray-900 min-h-screen flex items-center">
      <div className="p-10 w-11/12 text-center mx-auto rounded ">
        <p className=" text-white text-3xl " >
          {data[0].com}
        </p>
      </div></div>
  )
}


export async function getServerSideProps(context) {
  const num = Math.floor(Math.random() * 2);
  const val = num ? "Marketing" : "Coding"

  const { data, error } = await supabase
    .from('com')
    .insert([
      { com: val },
    ])

  return {
    props: { data }, // will be passed to the page component as props
  }
}
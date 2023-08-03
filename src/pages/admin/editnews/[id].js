import Layout from "@/components/Admin/News/Edit/Layout";
import GoBackBtn from "@/components/Utility/AdminUtilities/GoBackBtn/GoBackBtn";


const editnews = ({news}) => {
 return (
  <main className="adminPagesLayout">
   <GoBackBtn />
   <Layout />
  </main>
 )
}

export default editnews;

export async function getServerSideProps(context){
 const {params} = context
 const response = await fetch(`http://localhost:4000/activity/${params.id}`)
 const data = await response.json()
 return {
  props: {
   news: data
  }
 }
}
import GoBackBtn from "@/components/Utility/AdminUtilities/GoBackBtn/GoBackBtn";
import globalStyles from "@/components/Admin/adminGlobalstyles.module.css"
import Layout from "@/components/Admin/Activity/Edit/Layout";

const editactivity = ({activity}) => {
 return (
  <main className="adminPagesLayout">
   <GoBackBtn />
   <Layout 
     name={activity.title}
   />
  </main>
 )
}

export default editactivity;

export async function getServerSideProps(context){
 const {params} = context
 const response = await fetch(`http://localhost:4000/activity/${params.id}`)
 const data = await response.json()
 return {
  props: {
   activity: data
  }
 }
}
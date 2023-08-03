const { default: GoBackBtn } = require("@/components/Utility/AdminUtilities/GoBackBtn/GoBackBtn")
import globalStyles from "@/components/Admin/adminGlobalstyles.module.css"
import ListBox from "@/components/Utility/AdminUtilities/ListBox/ListBox";


const ActivitiesLists = ({activites}) => {
 return (
  <main className="adminPagesLayout">
   <GoBackBtn />
   <h3 className={`${globalStyles.header}`}>Edit Activity</h3>
   <div className="mt-6">
    {
     activites.map((each) => {
      return <ListBox 
              key={each.id}
              title={each.title}
              href={`editactivity/${each.id}`}
            />
     })
    }
   </div>
  </main>
 )
}

export default ActivitiesLists;

export async function getServerSideProps(){
 const response = await fetch('http://localhost:4000/activity')
 const data = await response.json()
 
 return {
  props: {
   activites: data
  }
 }
}
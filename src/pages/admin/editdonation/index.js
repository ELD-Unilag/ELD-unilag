const { default: GoBackBtn } = require("@/components/Utility/AdminUtilities/GoBackBtn/GoBackBtn")
import globalStyles from "@/components/Admin/adminGlobalstyles.module.css"
import ListBox from "@/components/Utility/AdminUtilities/ListBox/ListBox";


const DonationssLists = ({donations}) => {
 return (
  <main className="adminPagesLayout">
   <GoBackBtn />
   <h3 className={`${globalStyles.header}`}>Edit Donations</h3>
   <div className="mt-6">
    {
     donations.map((each) => {
      return <ListBox 
              key={each.id}
              title={each.title}
              href={`editdonation/${each.id}`}
            />
     })
    }
   </div>
  </main>
 )
}

export default DonationssLists;

export async function getServerSideProps(){
 const response = await fetch('http://localhost:4000/activity')
 const data = await response.json()
 
 return {
  props: {
   donations: data
  }
 }
}
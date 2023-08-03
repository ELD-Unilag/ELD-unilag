const { default: GoBackBtn } = require("@/components/Utility/AdminUtilities/GoBackBtn/GoBackBtn")
import globalStyles from "@/components/Admin/adminGlobalstyles.module.css"
import ListBox from "@/components/Utility/AdminUtilities/ListBox/ListBox";


const NewsLists = ({news}) => {
 return (
  <main className="adminPagesLayout">
   <GoBackBtn />
   <h3 className={`${globalStyles.header}`}>Edit News</h3>
   <div className="mt-6">
    {
     news.map((each) => {
      return <ListBox 
              key={each.id}
              title={each.title}
              href={`editnews/${each.id}`}
            />
     })
    }
   </div>
  </main>
 )
}

export default NewsLists;

export async function getServerSideProps(){
 const response = await fetch('http://localhost:4000/activity')
 const data = await response.json()
 
 return {
  props: {
   news: data
  }
 }
}
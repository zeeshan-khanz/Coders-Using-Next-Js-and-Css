import Navbar from "../../components/Navbar"

function MyApp({Component, pageProps}){
  return<>
  <div>
    <Navbar/>
  </div>
  <Component{...pageProps}/>
  </>
}
export default MyApp
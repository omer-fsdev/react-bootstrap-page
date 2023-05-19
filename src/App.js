import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import data from "./data";
import CourseCard from "./components/CourseCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <MyNavbar />
      <CourseCard data={data} />
      <Footer />
    </div>
  );
}

export default App;

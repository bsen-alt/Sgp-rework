import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Singup.jsx";
import Preloader from "./components/Preloader.jsx";
import ScreensaverOverlay from "./components/ScreensaverOverlay.jsx";
import Construction from "./pages/Construction.jsx";
import ConstructionPlans from "./pages/ConstructionPlans.jsx";
import ReadyMadeDoors from "./pages/ReadyMadeDoors.jsx";
import ReadyMadeWindows from "./pages/ReadyMadeWindows.jsx";
import ConcreteStones from "./pages/ConcreteStones.jsx";
import HousePlans from "./pages/construction_plans/HousePlans.jsx";
import CabanaPlans from "./pages/construction_plans/CabanaPlans.jsx";
import FactoryPlans from "./pages/construction_plans/CabanaPlans.jsx";
import GaragePlans from "./pages/construction_plans/FactoryPlans.jsx";
import GuardRoomPlans from "./pages/construction_plans/GuardRoomPlans.jsx";
import RestaurantPlans from "./pages/construction_plans/RestaurantPlans.jsx";
import ShopPlans from "./pages/construction_plans/ShopPlans.jsx";
import WarehousePlans from "./pages/construction_plans/WarehousePlans.jsx";
import MainLayout from "./components/MainLayout.jsx";

function App() {
  const renderTopBar = () => {
    return <Navbar />;
  };
  const renderFooter = () => {
    return <Footer />;
  };

  return (
    <BrowserRouter>
      <ScreensaverOverlay />
      <Routes>
        {/* Splash Screen */}
        <Route path="/" element={<Preloader />} />

        <Route
          path="/home"
          element={
            <>
              {renderTopBar()}
              <HomePage />
              {renderFooter()}
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              {renderTopBar()}
              <AboutPage />
              {renderFooter()}
            </>
          }
        />

        <Route
          path="/services"
          element={
            <>
              {renderTopBar()}
              <ServicesPage />
              {renderFooter()}
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              {renderTopBar()}
              <ContactPage />
              {renderFooter()}
            </>
          }
        />

        <Route path="/main-login" element={<MainLayout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/services/construction"
          element={
            <>
              {renderTopBar()}
              <Construction />
              {renderFooter()}
            </>
          }
        />
        <Route
          path="/services/construction-plans"
          element={
            <>
              {renderTopBar()}
              <ConstructionPlans />
              {renderFooter()}
            </>
          }
        />

        <Route
          path="/services/ready-made-doors"
          element={
            <>
              {renderTopBar()}
              <ReadyMadeDoors />
              {renderFooter()}
            </>
          }
        />
        <Route
          path="/services/ready-made-windows"
          element={
            <>
              {renderTopBar()}
              <ReadyMadeWindows />
              {renderFooter()}
            </>
          }
        />
        <Route
          path="/services/concrete-stones"
          element={
            <>
              {renderTopBar()}
              <ConcreteStones />
              {renderFooter()}
            </>
          }
        />

        {/* Dynamically render respective plan categories */}
        <Route
          path="/services/construction-plans/house-plans"
          element={
            <>
              {renderTopBar()}
              <HousePlans />
              {renderFooter()}
            </>
          }
        />
        <Route
          path="/services/construction-plans/cabana-plans"
          element={
            <>
              {renderTopBar()}
              <CabanaPlans />
              {renderFooter()}
            </>
          }
        />
        <Route
          path="/services/construction-plans/factory-plans"
          element={
            <>
              {renderTopBar()}
              <FactoryPlans />
              {renderFooter()}
            </>
          }
        />
        <Route
          path="/services/construction-plans/garage-plans"
          element={
            <>
              {renderTopBar()}
              <GaragePlans />
              {renderFooter()}
            </>
          }
        />
        <Route
          path="/services/construction-plans/guardroom-plans"
          element={
            <>
              {renderTopBar()}
              <GuardRoomPlans />
              {renderFooter()}
            </>
          }
        />
        <Route
          path="/services/construction-plans/restaurant-plans"
          element={
            <>
              {renderTopBar()}
              <RestaurantPlans />
              {renderFooter()}
            </>
          }
        />
        <Route
          path="/services/construction-plans/shop-plans"
          element={
            <>
              {renderTopBar()}
              <ShopPlans />
              {renderFooter()}
            </>
          }
        />
        <Route
          path="/services/construction-plans/warehouse-plans"
          element={
            <>
              {renderTopBar()}
              <WarehousePlans />
              {renderFooter()}
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

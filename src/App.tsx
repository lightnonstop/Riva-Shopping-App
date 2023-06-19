import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About, Blog, Cart, Checkout, CompareProduct, Contact, ForgotPassword, Home, Layout, Login, OurStore, PrivacyPolicy, RefundPolicy, ResetPassword, ShippingPolicy, Signup, SingleBlog, SingleProduct, TermAndConditions, Wishlist } from '.';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}> 
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='product' element={<OurStore />} />
            <Route path='/product/:id' element={<SingleProduct />} />
            <Route path='blogs' element={<Blog />} />
            <Route path='blog/:id' element={<SingleBlog />} />
            <Route path='cart' element={<Cart />} />
            <Route path='checkout' element={<Checkout/>} />
            <Route path='compare-product' element={<CompareProduct />} />
            <Route path='wishlist' element={<Wishlist />} />
            <Route path='login' element={<Login />} />
            <Route path='forgot-password' element={<ForgotPassword />} />
            <Route path='signup' element={<Signup />} />
            <Route path='reset-password' element={<ResetPassword />} />
            <Route path='privacy-policy' element={<PrivacyPolicy />} />
            <Route path='refund-policy' element={<RefundPolicy />} />
            <Route path='shipping-policy' element={<ShippingPolicy />} />
            <Route path='terms-conditions' element={<TermAndConditions />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

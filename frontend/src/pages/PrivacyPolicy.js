import React from 'react';
import '../CSS/PrivacyPolicy.css'; // Import the CSS for styling
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div>
    <div>
        <Navbar/>
        <br/>
        <br/>
        <br/>
    <div className="privacy-policy-container">
      <h1 className="policy-title">Privacy Policy</h1>
      <div className="policy-content">
        <p className="policy-text">
          Your privacy is important to us. This privacy policy explains the
          information we collect and how we use it.
        </p>
        <h3 className="policy-subheading">1. Information We Collect</h3>
        <p className="policy-text">
          We collect personal information when you sign up or use our services.
        </p>

        <h3 className="policy-subheading">2. How We Use Your Information</h3>
        <p className="policy-text">
          The information we collect is used to provide, maintain, and improve our services.
        </p>

        <h3 className="policy-subheading">3. Data Security</h3>
        <p className="policy-text">
          We take appropriate measures to secure your data, including using encryption where applicable.
        </p>

        <h3 className="policy-subheading">4. Your Rights</h3>
        <p className="policy-text">
          You have the right to access, update, or delete your personal information at any time.
        </p>

        <h3 className="policy-subheading">5. Contact Us</h3>
        <p className="policy-text">
          If you have any questions about this policy, feel free to contact us at support@wordplay.com.
        </p>
      </div>
    </div>
    </div>
    <Footer/>
    </div>
  );
};

export default PrivacyPolicy;

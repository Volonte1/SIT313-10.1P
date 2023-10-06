import React from 'react';

function SignupSection() {
  return (
    <form method="post" className="email-registration-form" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="email-registration-container">
        <div className="email-registration-content" style={{ textAlign: 'center' }}>
          <p className="email-registration-text">SIGN UP FOR OUR DAILY INSIDER</p>
          <input type="email" id="email-input-id" name="email" className="form-control" />
          <button type="submit" className="btn-primary">Subscribe</button>
        </div>
      </div>
    </form>
  );
}

export default SignupSection;


'use client';
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const CountrySelect = () => {
  const [phone, setPhone] = useState("");

  return (
    <section className="pt-5 pb-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 mt-5 mb-5">
            <div className="form-area">
              <div className="form-inner">
                <form>
                  <div className="form-group">
                    <PhoneInput
                      country={"in"} // default India
                      value={phone}
                      onChange={(phone) => setPhone(phone)}
                      enableSearch={true} // searchable dropdown
                      countryCodeEditable={false}
                      inputClass="form-control"
                      buttonClass="country-dropdown"
                      dropdownClass="country-dropdown-menu"
                      placeholder="Enter phone number"
                    />
                  </div>
                  <p className="mt-3">
                    <strong>Selected Phone:</strong> {phone}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountrySelect;

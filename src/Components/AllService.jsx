import React from "react";
import SectionHeader from "./SectionHeader";
import websiteIcon from "../assets/images/coding.png";
import Service from "./Service";

const AllService = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div>
          <SectionHeader
            startTitle={"Best Services"}
            title={"Our Business Consultation Factory."}
            subTitle={"Provied Service"}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-8 mt-5 md:mt-8">
          <Service
            serviceImg={websiteIcon}
            serviceTitle={" Website Development"}
            serviceDescription={
              "We take pride fighting for tre not big insurance companies refu changing faster."
            }
          />
          <Service
            serviceImg={websiteIcon}
            serviceTitle={" App Development"}
            serviceDescription={
              "We take pride fighting for tre not big insurance companies refu changing faster."
            }
          />
          <Service
            serviceImg={websiteIcon}
            serviceTitle={"E-Commerce Solutions"}
            serviceDescription={
              "We take pride fighting for tre not big insurance companies refu changing faster."
            }
          />
          <Service
            serviceImg={websiteIcon}
            serviceTitle={"Online Training Programs"}
            serviceDescription={
              "We take pride fighting for tre not big insurance companies refu changing faster."
            }
          />
          <Service
            serviceImg={websiteIcon}
            serviceTitle={"Business Investment Opportunities"}
            serviceDescription={
              "We take pride fighting for tre not big insurance companies refu changing faster."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default AllService;

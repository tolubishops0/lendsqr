import React, { useState, useEffect } from "react";
import Image from "next/image";
import { DataDetails } from "../../types/type";
import { divericn } from "../../lib/lib";

interface DataProps {
  userData: DataDetails[];
}
function UserBioData({ userData }: DataProps) {
  const [data, setData] = useState<DataDetails | null>(null);

  useEffect(() => {
    if (userData) {
      setData(userData[0]);
    }
  }, [userData]);

  return (
    <div className="bio-data-container">
      <div className="bio-data">
        <div className="bio-data-sect">
          <p className="bio-data-header">Personal Information</p>
          <div className="bio-data-section">
            <div className="bio-key-value">
              <p className="bio-key">FULL NAME</p>
              <p className="bio-value">
                {` ${data?.firstName} ${data?.lastName}`}
              </p>
            </div>

            <div className="bio-key-value">
              <p className="bio-key">Phone Number</p>
              <p className="bio-value">0{data?.phoneNumber}</p>
            </div>
            <div className="bio-key-value">
              <p className="bio-key">Email Address</p>
              <p className="bio-value">
                {data?.firstName?.toLocaleLowerCase()}@gmail.com
              </p>
            </div>
            <div className="bio-key-value">
              <p className="bio-key">Bvn</p>
              <p className="bio-value">{data?.bvn}</p>
            </div>
            <div className="bio-key-value">
              <p className="bio-key">Gender</p>
              <p className="bio-value">Female</p>
            </div>
            <div className="bio-key-value">
              <p className="bio-key">Marital status</p>
              <p className="bio-value">{data?.maritalStatus}</p>
            </div>
            <div className="bio-key-value">
              <p className="bio-key">Children</p>
              <p className="bio-value">{data?.children}</p>
            </div>
            <div className="bio-key-value">
              <p className="bio-key">Type of residence</p>
              <p className="bio-value">{data?.residence}</p>
            </div>
          </div>
        </div>
        <Image src={divericn} alt="divider-icon" className="line" />
        <div className="bio-data-sect ">
          <p className="bio-data-header">Education and Employment</p>
          <div className="education">
            <div className="bio-key-value edu">
              <p className="bio-key">level of education</p>
              <p className="bio-value">{data?.educationLevel}</p>
            </div>

            <div className="bio-key-value edu">
              <p className="bio-key">employment status</p>
              <p className="bio-value">Employed</p>
            </div>
            <div className="bio-key-value edu">
              <p className="bio-key">sector of employment</p>
              <p className="bio-value">{data?.employmentSector}</p>
            </div>
            <div className="bio-key-value edu">
              <p className="bio-key">Duration of employment</p>
              <p className="bio-value">{data?.bvn}</p>
            </div>
            <div className="bio-key-value edu">
              <p className="bio-key">office email</p>
              <p className="bio-value">
                {" "}
                {data?.firstName?.toLocaleLowerCase()}@gmail.com
              </p>
            </div>
            <div className="bio-key-value edu">
              <p className="bio-key">Monthly income</p>
              <p className="bio-value">{data?.monthlyIncome}</p>
            </div>
            <div className="bio-key-value edu">
              <p className="bio-key">loan repayment</p>
              <p className="bio-value">{data?.loanRepayment}</p>
            </div>
          </div>
        </div>
        <Image src={divericn} alt="divider-icon" className="line" />
        <div className="bio-data-sect">
          <p className="bio-data-header">Socials</p>
          <div className=" education">
            <div className="bio-key-value edu">
              <p className="bio-key">Twitter</p>
              <p className="bio-value">{`@${data?.firstName
                .trim()
                .toLowerCase()}_${data?.lastName
                .trim()
                .toLowerCase()}`}</p>{" "}
            </div>

            <div className="bio-key-value edu">
              <p className="bio-key">facebook</p>
              <p className="bio-value">{`${data?.firstName.toLowerCase()}${data?.lastName.toLowerCase()}`}</p>
            </div>
            <div className="bio-key-value edu">
              <p className="bio-key">instagram</p>
              <p className="bio-value">{`@${data?.firstName
                .trim()
                .toLowerCase()}_${data?.lastName.trim().toLowerCase()}`}</p>
            </div>
          </div>
        </div>
        <Image src={divericn} alt="divider-icon" className="line" />
        <div className="bio-data-sect ">
          <p className="bio-data-header">Guarantor</p>
          <div className=" education">
            <div className="bio-key-value edu">
              <p className="bio-key">full Name</p>
              <p className="bio-value">
                {`${data?.guarantorFirstName} ${data?.guarantorLastName}`}
              </p>
            </div>

            <div className="bio-key-value edu">
              <p className="bio-key">Phone Number</p>
              <p className="bio-value">0{data?.guarantorNumber}</p>
            </div>
            <div className="bio-key-value edu">
              <p className="bio-key">Email Address</p>
              <p className="bio-value">
                {`${data?.guarantorFirstName.toLowerCase()}@yahoo.com`}
              </p>
            </div>
            <div className="bio-key-value edu">
              <p className="bio-key">Relationship</p>
              <p className="bio-value">{data?.guarantorRel}</p>
            </div>
          </div>
        </div>
        <Image src={divericn} alt="divider-icon" className="line" />
        <div className="bio-data-sect-last">
          <div className=" education">
            <div className="bio-key-value edu">
              <p className="bio-key">full Name</p>
              <p className="bio-value">
                {`${data?.guarantorFirstName} ${data?.guarantorLastName}`}
              </p>
            </div>

            <div className="bio-key-value edu">
              <p className="bio-key">Phone Number</p>
              <p className="bio-value">0{data?.guarantorNumber}</p>
            </div>
            <div className="bio-key-value edu">
              <p className="bio-key">Email Address</p>
              <p className="bio-value">
                {`${data?.guarantorFirstName.toLowerCase()}@yahoo.com`}
              </p>
            </div>
            <div className="bio-key-value edu">
              <p className="bio-key">Relationship</p>
              <p className="bio-value">{data?.guarantorRel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserBioData;

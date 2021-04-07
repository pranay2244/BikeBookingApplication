package com.example.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
@Entity
@Table(name="company")
public class CompanyModel {
  
  @Id
  @GeneratedValue
  @Column(name="company_id")
  private int companyId;
  @Column(name="admin_id")
  private int adminId;
  @Column(name="company_image_url")
  private String companyImageURL;
  @Column(name="company_name")
  private String companyName;
  @Column(name="company_address")
  private String companyAddress;
  @Column(name="mobile_number")
  private String mobileNumber;

  public int getCompanyId() {
    return companyId;
  }
  public void setCompanyId(int companyId) {
    this.companyId = companyId;
  }
  public String getCompanyImageURL() {
    return companyImageURL;
  }
  public void setCompanyImageURL(String companyImageURL) {
    this.companyImageURL = companyImageURL;
  }
  public String getCompanyName() {
    return companyName;
  }
  public void setCompanyName(String companyName) {
    this.companyName = companyName;
  }
  public String getCompanyAddress() {
    return companyAddress;
  }
  public void setCompanyAddress(String companyAddress) {
    this.companyAddress = companyAddress;
  }
  public String getMobileNumber() {
    return mobileNumber;
  }
  public void setMobileNumber(String mobileNumber) {
    this.mobileNumber = mobileNumber;
  }
  public int getAdminId() {
    return adminId;
  }
  public void setAdminId(int adminId) {
    this.adminId = adminId;
  }
}

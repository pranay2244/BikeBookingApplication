package com.example.models;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="admin")
public class AdminModel {
  @Id
  @GeneratedValue
  @Column(name="admin_id")
  private int adminId;
  @Column(name="email",unique = true,nullable =  false)
  private String email;
  @Column(name="password")
  private String password;
  @Column(name="mobile_number",unique = true,nullable = false)
  private String mobileNumber;
  @Column(name="seller_name")
  private String sellerName;
  @Column(name="user_role")
  private String userRole;
  @Column(name="company_name")
  private String companyName;
  @Column(name="company_image_url")
  private String companyImageURL;
  @Column(name="company_address")
  private String companyAddress;
  @Column(name="earnings")
  private int earnings;
  public int getAdminId() {
    return adminId;
  }
  public void setAdminId(int adminId) {
    this.adminId = adminId;
  }
  public String getEmail() {
    return email;
  }
  public void setEmail(String email) {
    this.email = email;
  }
  public String getPassword() {
    return password;
  }
  public void setPassword(String password) {
    this.password = password;
  }
  public String getMobileNumber() {
    return mobileNumber;
  }
  public void setMobileNumber(String mobileNumber) {
    this.mobileNumber = mobileNumber;
  }
  public String getSellerName() {
    return sellerName;
  }
  public void setSellerName(String sellerName) {
    this.sellerName = sellerName;
  }
  public String getUserRole() {
    return userRole;
  }
  public void setUserRole(String userRole) {
    this.userRole = userRole;
  }
  public String getCompanyName() {
    return companyName;
  }
  public void setCompanyName(String companyName) {
    this.companyName = companyName;
  }
  public String getCompanyImageURL() {
    return companyImageURL;
  }
  public void setCompanyImageURL(String companyImageURL) {
    this.companyImageURL = companyImageURL;
  }
  public String getCompanyAddress() {
    return companyAddress;
  }
  public void setCompanyAddress(String companyAddress) {
    this.companyAddress = companyAddress;
  }
  public int getEarnings() {
    return earnings;
  }
  public void setEarnings(int earnings) {
    this.earnings = earnings;
  }
  @Override
  public int hashCode() {
    final int prime = 31;
    int result = 1;
    result = prime * result + adminId;
    return result;
  }
  @Override
  public boolean equals(Object obj) {
    if (this == obj)
      return true;
    if (obj == null)
      return false;
    if (getClass() != obj.getClass())
      return false;
    AdminModel other = (AdminModel) obj;
    if (adminId != other.adminId)
      return false;
    return true;
  }  
  
  
}

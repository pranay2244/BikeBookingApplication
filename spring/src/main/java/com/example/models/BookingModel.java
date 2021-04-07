package com.example.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="booking")
public class BookingModel {
  @Id
  @GeneratedValue
  @Column(name="booking_id")
  private int BookingId;
  @Column(name="admin_id")
  private int adminId;
  @Column(name="user_id")
  private int userId;
  @Column(name="company_name")
  private String companyName;
  @Column(name="bike_model")
  private String bikeModel;
  @Column(name="rent")
  private String rent;
  @Column(name="days")
  private String days;
  @Column(name="total_price")
  private String totalPrice;
  public int getBookingId() {
    return BookingId;
  }
  public void setBookingId(int BookingId) {
    this.BookingId = BookingId;
  }
  public int getAdminId() {
    return adminId;
  }
  public void setAdminId(int AdminId) {
    this.adminId = AdminId;
  }
  public String getCompanyName() {
    return companyName;
  }
  public void setCompanyName(String companyName) {
    this.companyName = companyName;
  }
  public String getBikeModel() {
    return bikeModel;
  }
  public void setBikeModel(String bikeModel) {
    this.bikeModel = bikeModel;
  }
  public String getRent() {
    return rent;
  }
  public void setRent(String rent) {
    this.rent = rent;
  }
  public String getDays() {
    return days;
  }
  public void setDays(String days) {
    this.days = days;
  }
  public String getTotalPrice() {
    return totalPrice;
  }
  public void setTotalPrice(String totalPrice) {
    this.totalPrice = totalPrice;
  }
  public int getUserId() {
    return userId;
  }
  public void setUserId(int userId) {
    this.userId = userId;
  }
  

}

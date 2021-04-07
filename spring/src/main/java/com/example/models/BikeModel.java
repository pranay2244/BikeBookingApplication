package com.example.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="bike")
public class BikeModel {
  @Id
  @GeneratedValue
  @Column(name="bike_id")
  private int bikeID;
  @Column(name="bike_no")
  private String bikeNo;
  @Column(name="admin_id")
  private String adminID;
  @Column(name="status")
  private String status;
  private String price;
  private String type;

  BikeModel(){

  }

  public String getBikeNo() {
    return bikeNo;
  }

  public void setBikeNo(String bikeNo) {
    this.bikeNo = bikeNo;
  }

  public String getAdminID() {
    return adminID;
  }

  public void setAdminID(String adminID) {
    this.adminID = adminID;
  }

  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

  public String getPrice() {
    return price;
  }

  public void setPrice(String price) {
    this.price = price;
  }

  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }

  public int getBikeID() {
    return bikeID;
  }

  public void setBikeID(int bikeID) {
    this.bikeID = bikeID;
  }

  
}

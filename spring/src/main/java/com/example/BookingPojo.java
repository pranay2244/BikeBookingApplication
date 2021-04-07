package com.example;

public class BookingPojo {
  private String userId;
  private String bikeId;
  
  public BookingPojo(String userId, String bikeId) {
    this.userId = userId;
    this.bikeId = bikeId;
  }
  public String getUserId() {
    return userId;
  }
  public void setUserId(String userId) {
    this.userId = userId;
  }
  public String getBikeId() {
    return bikeId;
  }
  public void setBikeId(String bikeId) {
    this.bikeId = bikeId;
  }
  
}

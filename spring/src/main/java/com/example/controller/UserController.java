package com.example.controller;

import java.util.List;

import com.example.BookingPojo;
import com.example.models.BikeModel;
import com.example.models.UserModel;
import com.example.models.BookingModel;
import com.example.repository.AdminRepository;
import com.example.repository.BikeRepository;
import com.example.repository.UserRepository;
import com.example.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
  @Autowired
  UserRepository userRep;

  @Autowired
  BikeRepository bikeRep;

  @Autowired
  private AdminRepository adminRep; 

  @Autowired
  private BookingRepository bookRep;
  @RequestMapping(value="user/bookBike",method=RequestMethod.POST)
  public String userBookBike(@RequestBody BookingPojo bp)
  {
      try
      {
        BikeModel bike= bikeRep.findById(Integer.parseInt(bp.getBikeId())).orElse(null);
        if(bike.getStatus().equals("Booked"))
        return "Booking Failed";
        BookingModel bm=new BookingModel();
        bm.setUserId(Integer.parseInt(bp.getUserId()));
        String id= bikeRep.findAdminIdByBikeId(Integer.parseInt(bp.getBikeId()));
        bm.setAdminId(Integer.parseInt(id));
        String cname= adminRep.findCompanyNameByAdminId(id);
        bm.setCompanyName(cname);
        bm.setBikeModel(bike.getBikeNo());
        bm.setRent("Rent");
        bike.setStatus("Booked");
        bm.setDays("1");
        bm.setTotalPrice(bike.getPrice());
        bookRep.save(bm);
        return "Bike Booked";
      }
      catch(Exception e)
      {
        e.printStackTrace();
        return "Booking failed";
      }
  }

  @RequestMapping(value="user/bookings",method=RequestMethod.POST)
  public List<BookingModel> userGetBookings(@RequestBody String UserId)
  {
    String arr[]=UserId.split(":");
		int i=arr[1].indexOf('"');
		int j=arr[1].lastIndexOf('"');
		String s=arr[1].substring(i+1,j);
      return bookRep.findAllByUserId(Integer.parseInt(s));
  }

  @RequestMapping(value = "user/getProfile", method = RequestMethod.POST)
	public UserModel getProfile(@RequestBody String userId) {
		String arr[]=userId.split(":");
		int i=arr[1].indexOf('"');
		int j=arr[1].lastIndexOf('"');
		String s=arr[1].substring(i+1,j);
		return userRep.findByUserId(Integer.parseInt(s));
	}
  
  @RequestMapping(value = "user/editProfile", method = RequestMethod.POST)
	public String editUserProfile(@RequestBody UserModel user) {
    //System.out.println(user.getUsername());
		UserModel um=userRep.findByUserId(user.getUserID());
    um.setUsername(user.getUsername());
    um.setMobileNumber(user.getMobileNumber());
    um.setPassword(user.getPassword());
    um.setEmail(user.getEmail());
    um.setAge(user.getAge());
		userRep.save(um);
		return "User Edited";
	}

}

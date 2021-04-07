package com.example.controller;

import com.example.models.AdminModel;
import com.example.repository.AdminRepository;
import com.example.repository.UserRepository;
import com.example.models.BookingModel;
import com.example.repository.BookingRepository;
import com.example.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@RestController
public class AdminController{
  @Autowired
	AdminRepository adminRep;

	@Autowired
	UserRepository userRep;

	@Autowired
	BookingRepository bookRep;

	@Autowired
	CompanyRepository compRep;
	
	@RequestMapping(value = "admin/profile", method = RequestMethod.POST)
	public AdminModel getProfile(@RequestBody String adminId) {
		String arr[]=adminId.split(":");
		int i=arr[1].indexOf('"');
		int j=arr[1].lastIndexOf('"');
		String s=arr[1].substring(i+1,j);
		return adminRep.findById(Integer.parseInt(s)).orElse(null);
	}
	@RequestMapping(value = "admin/editProfile", method = RequestMethod.POST)
	public String editAdmin(@RequestBody AdminModel adminModel) {
		AdminModel am=adminRep.getOne(adminModel.getAdminId());
		am.setEmail(adminModel.getEmail());
		am.setPassword(adminModel.getPassword());
		am.setMobileNumber(adminModel.getMobileNumber());
		am.setSellerName(adminModel.getSellerName());
		am.setUserRole(adminModel.getUserRole());
		am.setCompanyName(adminModel.getCompanyName());
		am.setCompanyAddress(adminModel.getCompanyAddress());
		am.setCompanyImageURL(adminModel.getCompanyImageURL());
		am.setEarnings(adminModel.getEarnings());
		adminRep.save(am);
		return "Profile Updated";
	}

	@RequestMapping(value="super/deleteAdmin",method=RequestMethod.POST)
	public String deleteAdmin(@RequestBody String emailId)
	{
		//System.out.println(emailId);
		String arr[]=emailId.split(":");
		int i=arr[1].indexOf('"');
		int j=arr[1].lastIndexOf('"');
		String s=arr[1].substring(i+1,j);
		int id = Integer.parseInt(adminRep.findIdByEmail(s));
		compRep.deleteByAdminId(id);
		adminRep.deleteByEmail(s);
		return "Admin Deleted";
	}

	@RequestMapping(value="super/deleteUser",method=RequestMethod.POST)
	public String deleteUser(@RequestBody String emailId)
	{
		String arr[]=emailId.split(":");
		int i=arr[1].indexOf('"');
		int j=arr[1].lastIndexOf('"');
		String s=arr[1].substring(i+1,j);
		 userRep.deleteByEmail(s);
		 return "User Deleted";
	}
	@RequestMapping(value="super/dashboard",method=RequestMethod.GET)
	public List<AdminModel> dashboard(){
		return adminRep.findAll();
	}

	@RequestMapping(value="super/getBookings",method=RequestMethod.GET)
	public List<BookingModel> getBookings(){
		return bookRep.findAll();
	}

	@RequestMapping(value="admin/getTotalEarnings",method=RequestMethod.GET)
	public int getTotalEarnings(@RequestParam("adminId") String adminId){
		return adminRep.getEarnings(Integer.parseInt(adminId));
	}
}

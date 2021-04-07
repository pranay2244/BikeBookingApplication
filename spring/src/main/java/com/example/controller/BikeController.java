package com.example.controller;

import java.util.List;
import com.example.models.BikeModel;
import com.example.models.CompanyModel;
import com.example.models.BookingModel;
import com.example.models.AdminModel;

import com.example.repository.BikeRepository;
import com.example.repository.CompanyRepository;
import com.example.repository.BookingRepository;
import com.example.repository.AdminRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BikeController {
  
  	@Autowired
	private BikeRepository bikeRep;

	@Autowired
	private CompanyRepository custRep;

	@Autowired
	private BookingRepository bookRep;

	@Autowired
	private AdminRepository adminRep;
	
	@RequestMapping(value = "user/dashboard", method = RequestMethod.GET)
	public List<CompanyModel> getBikes() {
		List<CompanyModel> list = custRep.findAll();
		return list;
	}
 
	@RequestMapping(value = "user/bikes", method = RequestMethod.POST)
	public List<BikeModel> getBikesByCompany(@RequestBody String adminId) {
		//System.out.println(adminId);
		String arr[]=adminId.split(":");
		int i=arr[1].indexOf('"');
		int j=arr[1].lastIndexOf('"');
		String s=arr[1].substring(i+1,j);
		return bikeRep.getBikeByAdminId(Integer.parseInt(s));
	}

	@RequestMapping(value = "admin/bookings", method = RequestMethod.POST)
	public List<BookingModel> getBookings(@RequestBody String adminId) {
		System.out.println(adminId);
		String arr[]=adminId.split(":");
		int i=arr[1].indexOf('"');
		int j=arr[1].lastIndexOf('"');
		String s=arr[1].substring(i+1,j);
		System.out.println(s);
		AdminModel admin = adminRep.findById(Integer.parseInt(s)).orElse(null);
		return bookRep.findAllByCompanyName(admin.getCompanyName());
	}
	@RequestMapping(value = "user/bikeDetails", method = RequestMethod.POST)
	public BikeModel getBikeDetails(@RequestBody String bikeId) {
		//System.out.println(bikeId);
		String arr[]=bikeId.split(":");
		int i=arr[1].indexOf('"');
		int j=arr[1].lastIndexOf('"');
		String s=arr[1].substring(i+1,j);
		return bikeRep.findById(Integer.parseInt(s)).orElse(null);
	}

	@RequestMapping(value = "admin/dashboard", method = RequestMethod.GET)
	public List<BikeModel> getBikes(@RequestParam("adminId") String adminId) {
		return bikeRep.getBikeByAdminId(Integer.parseInt(adminId));
	}
 
	@RequestMapping(value = "admin/addBike", method = RequestMethod.POST)
	public String saveBike(@RequestBody BikeModel bike) {
		bikeRep.save(bike);
		return "Bike Added";
	}
 
	@RequestMapping(value = "admin/editBike", method = RequestMethod.POST)
	public String editBike(@RequestBody BikeModel bike) {
		BikeModel bm=bikeRep.getOne(bike.getBikeID());
		bm.setBikeNo(bike.getBikeNo());
		bm.setStatus(bike.getStatus());
		bm.setPrice(bike.getPrice());
		bm.setType(bike.getType());
		bikeRep.save(bm);
		return "Bike Edited";
	}
	
	@RequestMapping(value = "admin/deleteBike", method = RequestMethod.POST)
	public String deleteBike(@RequestBody String bikeId) {
		//System.out.println(bikeId);
		String arr[]=bikeId.split(":");
		int i=arr[1].indexOf('"');
		int j=arr[1].lastIndexOf('"');
		String s=arr[1].substring(i+1,j);
		bikeRep.deleteById(Integer.parseInt(s));
		return "Bike Deleted";
	}

	@RequestMapping(value = "admin/bikeDetails", method = RequestMethod.GET)
	public BikeModel adminGetBike(@RequestParam("bikeId") String bikeId) {
		//System.out.println(bikeId);
		return bikeRep.findById(Integer.parseInt(bikeId)).orElse(null);
	}

}

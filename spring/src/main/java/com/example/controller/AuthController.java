package com.example.controller;

import com.example.models.AdminModel;
import com.example.models.CompanyModel;
import com.example.models.LoginModel;
import com.example.models.UserModel;
import com.example.repository.AdminRepository;
import com.example.repository.CompanyRepository;
import com.example.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
@ResponseBody
@RestController
public class AuthController {

	@Autowired
	UserRepository userRepository;
	
	@Autowired
	AdminRepository adminRepository;

	@Autowired
	CompanyRepository compRep;

	@PostMapping("user/signup")
	public String saveUser(@RequestBody UserModel user) {
		try
		{
			userRepository.save(user);
			return "User added";
		}
		catch(org.springframework.dao.DataIntegrityViolationException e)
		{
			return "User details already exists";
		}				
	}
	@PostMapping("user/login")
	public int isUserPresent(@RequestBody LoginModel model){
		String password = userRepository.findPassword(model.getEmail());
		try 
		{
			if(password.equals(model.getPassword()))
		{
				return userRepository.findIdByEmail(model.getEmail());
		}
		
		}
		catch (Exception e) {
				return -1;
		}
		return -2;
	}
	@PostMapping("admin/signup")
	public String saveAdmin(@RequestBody AdminModel model)
	{
		try
		{
			adminRepository.save(model);
			CompanyModel c=new CompanyModel();
			c.setCompanyImageURL(model.getCompanyImageURL());
			c.setCompanyName(model.getCompanyName());
			c.setCompanyAddress(model.getCompanyAddress());
			c.setMobileNumber(model.getMobileNumber());
			c.setAdminId(model.getAdminId());
			compRep.save(c);
			return "Admin added";
		}
		catch(Exception e){
			return "Admin details already exists";
		}
	}
	@PostMapping("admin/login")
	public int isAdminPresent(@RequestBody LoginModel model)
	{
		AdminModel admin = adminRepository.findByEmail(model.getEmail());
		try{
			if(admin.getPassword().equals(model.getPassword()))
			return admin.getAdminId();
		}
		catch(NullPointerException n){
			return -1;
		}
		return -2;
	}
	@PostMapping("super/login")
	public boolean isSuperAdmin(@RequestBody LoginModel model)
	{
			if(model.getEmail().equals("team38@gmail.com")&& model.getPassword().equals("fsteam38"))
				return true;
			else
				return false;
	}
	
}

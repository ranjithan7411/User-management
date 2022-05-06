package com.usermanage.UserManage.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.usermanage.UserManage.model.Admin;
import com.usermanage.UserManage.repository.AdminRepo;

@Service
public class AdminService {

	@Autowired
	private AdminRepo  logRepo;
	
	
	public Admin saveUser(Admin user) {
		return logRepo.save(user);
	}
	
	
	public Admin fetchUserByEmailId(String email) {
		return logRepo.findByEmail(email);
	}
	
	
	public Admin fetchUserByEmailIdAndPassword(String email, String password) {
		return logRepo.findByEmailAndPassword(email, password);
	}

}

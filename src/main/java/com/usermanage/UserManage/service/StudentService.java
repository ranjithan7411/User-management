package com.usermanage.UserManage.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.usermanage.UserManage.model.Student;
import com.usermanage.UserManage.repository.StudentRepo;



@Service
public class StudentService {

	@Autowired
	private StudentRepo  logRepo;
	
	
	public Student saveUser(Student user) {
		return logRepo.save(user);
	}
	
	
	public Student fetchUserByEmailId(String email) {
		return logRepo.findByEmail(email);
	}
	
	
	public Student fetchUserByEmailIdAndPassword(String email, String password) {
		return logRepo.findByEmailAndPassword(email, password);
	}

}

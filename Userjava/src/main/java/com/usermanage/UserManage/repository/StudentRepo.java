package com.usermanage.UserManage.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.usermanage.UserManage.model.Admin;
import com.usermanage.UserManage.model.Student;


@Repository
public interface StudentRepo extends JpaRepository<Student, Integer> {
	public Student findByEmail(String email);
    public Student findByEmailAndPassword(String email, String password);
	
}

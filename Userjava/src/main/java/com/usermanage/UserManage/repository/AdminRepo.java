package com.usermanage.UserManage.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.usermanage.UserManage.model.Admin;


@Repository
public interface AdminRepo extends JpaRepository<Admin, Integer> {
	public Admin findByEmail(String email);
    public Admin findByEmailAndPassword(String email, String password);
}
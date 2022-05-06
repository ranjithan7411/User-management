package com.usermanage.UserManage.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="student")
public class Student {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	 @Column(name = "name")
	private String name;
	 
	 @Column(name = "phonenumber")
	private String phonenumber;
	 
	 @Column(name = "email")
	private String email;
	 
	 @Column(name = "password")
	private String password;

	public Student(int id, String name, String phonenumber, String email, String password) {
		super();
		this.id = id;
		this.name = name;
		this.phonenumber = phonenumber;
		this.email = email;
		this.password = password;
	}

	public Student() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPhonenumber() {
		return phonenumber;
	}

	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
}

package com.usermanage.UserManage.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="room")
public class Room {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "roomnumber")
	private int roomnumber;
	
	@Column(name = "no_of_Beds")
	private int no_of_Beds;
	
	@Column(name = "no_of_Students")
	private int no_of_Students;
	public Room(int id, int roomnumber, int no_of_Beds, int no_of_Students) {
		super();
		this.id = id;
		this.roomnumber = roomnumber;
		this.no_of_Beds = no_of_Beds;
		this.no_of_Students = no_of_Students;
	}
	public Room() {
		super();
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getRoomnumber() {
		return roomnumber;
	}
	public void setRoomnumber(int roomnumber) {
		this.roomnumber = roomnumber;
	}
	public int getNo_of_Beds() {
		return no_of_Beds;
	}
	public void setNo_of_Beds(int no_of_Beds) {
		this.no_of_Beds = no_of_Beds;
	}
	public int getNo_of_Students() {
		return no_of_Students;
	}
	public void setNo_of_Students(int no_of_Students) {
		this.no_of_Students = no_of_Students;
	}
	
	
	
	

}

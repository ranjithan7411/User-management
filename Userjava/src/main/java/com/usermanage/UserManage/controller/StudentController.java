package com.usermanage.UserManage.controller;


import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.usermanage.UserManage.exception.ResourceNotFoundException;
import com.usermanage.UserManage.model.Admin;
import com.usermanage.UserManage.model.Food;
import com.usermanage.UserManage.model.Room;
import com.usermanage.UserManage.model.Student;
import com.usermanage.UserManage.repository.AdminRepo;
import com.usermanage.UserManage.repository.FoodRepo;
import com.usermanage.UserManage.repository.RoomRepo;
import com.usermanage.UserManage.repository.StudentRepo;
import com.usermanage.UserManage.service.AdminService;
import com.usermanage.UserManage.service.StudentService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class StudentController {
	
	@Autowired
	private StudentRepo studrepo;
	
	@Autowired
	private RoomRepo roomrepo;
	
	@Autowired
	private AdminRepo adminrepo;
	
	@Autowired
	private FoodRepo foodrepo;
	
	
	//get all student data
	@GetMapping("/studentDetails")
	public List<Student> getAllStudent(){
		return studrepo.findAll();
	}
	
	
	//create student 
	@PostMapping("/addstudent")
	public Student addStudent(@RequestBody Student stud) {
		return studrepo.save(stud);
	}
	
	//get employee by id 
	@GetMapping("/getStudentById/{id}")
	public ResponseEntity<Student> getStudentById(@PathVariable int id){
		Student student= studrepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id : "+id));
		return ResponseEntity.ok(student);
	}
	
	//update Student
	@PutMapping("/editStudent/{id}")
	public ResponseEntity<Student> updateStudent(@PathVariable int id, @RequestBody Student stud) {
		Student student= studrepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id : "+id));
		student.setName(stud.getName());
		student.setPhonenumber(stud.getPhonenumber());
		student.setEmail(stud.getEmail());
		student.setPassword(stud.getPassword());
		
		Student updateStudent= studrepo.save(student);
		return ResponseEntity.ok(updateStudent);
	}
	
	
	//delete student by id
	@DeleteMapping("/deletestudent/{id}")
	public ResponseEntity<Map<String,Boolean>> deleteStudentById(@PathVariable int id) {
		Student student= studrepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Student not exist with id : "+id));
		studrepo.delete(student);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
	//Room
	

	//get all room data
		@GetMapping("/roomDetails")
		
			
				public List<Room> getAllroom(){
				return roomrepo.findAll();
			
		
		}
		
		
		//create room 
		@PostMapping("/addroom")
		public Room addroom(@RequestBody Room room) {
			return roomrepo.save(room);
		}
		
		//get room by id 
		@GetMapping("/getRoomById/{id}")
		public ResponseEntity<Room> getRoomById(@PathVariable int id){
			Room room= roomrepo.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Room not exist with id : "+id));
			return ResponseEntity.ok(room);
		}
		
		//update room
		@PutMapping("/editroom/{id}")
		public ResponseEntity<Room> updateRoom(@PathVariable int id, @RequestBody Room room) {
			Room room1= roomrepo.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Room not exist with id : "+id));
			room1.setRoomnumber(room.getRoomnumber());
			room1.setNo_of_Beds(room.getNo_of_Beds());
			room1.setNo_of_Students(room.getNo_of_Students());
			
			Room updateRoom= roomrepo.save(room1);
			return ResponseEntity.ok(updateRoom);
		}
		
		
		//delete room by id
		@DeleteMapping("/deleteroom/{id}")
		public ResponseEntity<Map<String,Boolean>> deleteRoomById(@PathVariable int id) {
			Room room= roomrepo.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Room not exist with id : "+id));
			roomrepo.delete(room);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
		
	
		//food
		
		//get all student data
		@GetMapping("/foodDetails")
		public List<Food> getAllFood(){
			return foodrepo.findAll();
		}
		
		
		
		
		//get employee by id 
		@GetMapping("/getFoodById/{id}")
		public ResponseEntity<Food> getFoodById(@PathVariable int id){
			Food food= foodrepo.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("food not exist with id : "+id));
			return ResponseEntity.ok(food);
		}
		
		//update Student
		@PutMapping("/editFood/{id}")
		public ResponseEntity<Food> updateFood(@PathVariable int id, @RequestBody Food f) {
			Food food= foodrepo.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("food not exist with id : "+id));
			food.setDays(f.getDays());
			food.setBreakfast(f.getBreakfast());
			food.setLunch(f.getLunch());
			food.setDinner(f.getDinner());
			
			Food updateFood= foodrepo.save(food);
			return ResponseEntity.ok(updateFood);
		}

		
		//Admin
		
		//get all admin data
		@GetMapping("/adminDetails")
		public List<Admin> getAllAdmin(){
			return adminrepo.findAll();
		}
		
		
		//create admin 
		@PostMapping("/addadmin")
		public Admin addAdmint(@RequestBody Admin admin) {
			return adminrepo.save(admin);
		}
		
		//get admin by id 
		@GetMapping("/getAdminById/{id}")
		public ResponseEntity<Admin> getAdminById(@PathVariable int id){
			Admin admin= adminrepo.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Admin not exist with id : "+id));
			return ResponseEntity.ok(admin);
		}
		
		//update admin
		@PutMapping("/editAdmin/{id}")
		public ResponseEntity<Admin> updateAdmin(@PathVariable int id, @RequestBody Admin admin) {
			Admin admin1= adminrepo.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Admin not exist with id : "+id));
			admin1.setName(admin.getName());
			admin1.setPhonenumber(admin.getPhonenumber());
			admin1.setEmail(admin.getEmail());
			admin1.setPassword(admin.getPassword());
			Admin updateAdmin= adminrepo.save(admin1);
			return ResponseEntity.ok(updateAdmin);
		}
		
		
		//delete student by id
		@DeleteMapping("/deleteAdmin/{id}")
		public ResponseEntity<Map<String,Boolean>> deleteAdminById(@PathVariable int id) {
			Admin admin= adminrepo.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Admin not exist with id : "+id));
			adminrepo.delete(admin);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
		
		//For Admin
		//Create account:
		
		@Autowired
		private AdminService adminservice;
		
		  @PostMapping("/registeruser")
		  public Admin registerUser(@RequestBody Admin user) throws Exception {
		    String tempEmailId = user.getEmail();
		    if(tempEmailId != null && !"".equals(tempEmailId)) {
		    	Admin userObj = adminservice.fetchUserByEmailId(tempEmailId);
		      if(userObj != null) {
		        throw new Exception("User with "+tempEmailId+ " is already exists");
		      } 
		    }
		    Admin userObj=null;
		    userObj = adminservice.saveUser(user);
		    return userObj;
		  }
		  
		  
		  //For admin Login User 
		  @PostMapping("/login")
		  public Admin loginUser(@RequestBody Admin user) throws Exception {
		    String tempEmail= user.getEmail();
		    String tempPass= user.getPassword();
		    Admin userObj = null;
		    if(tempEmail != null && tempPass != null) {
		      userObj = adminservice.fetchUserByEmailIdAndPassword(tempEmail, tempPass);
		    }
		    if(userObj == null) {
		      throw new Exception ("User with "+tempEmail+ " does not exists");
		    }
		    return userObj;
		  }
		  
		  
		//For login 
			//Create account:
			
			@Autowired
			private StudentService studentservice;
			
			  @PostMapping("/registerstudent")
			  public Student registerStudent(@RequestBody Student stud) throws Exception {
			    String tempEmailId = stud.getEmail();
			    if(tempEmailId != null && !"".equals(tempEmailId)) {
			    	Student studObj = studentservice.fetchUserByEmailId(tempEmailId);
			      if(studObj != null) {
			        throw new Exception("User with "+tempEmailId+ " is already exists");
			      } 
			    }
			    Student studObj=null;
			    studObj = studentservice.saveUser(stud);
			    return studObj;
			  }
			  
			  
			  //Login User
			  @PostMapping("/loginstud")
			  public Student loginStudent(@RequestBody Student stud) throws Exception {
			    String tempEmail= stud.getEmail();
			    String tempPass= stud.getPassword();
			    Student studObj = null;
			    if(tempEmail != null && tempPass != null) {
			      studObj = studentservice.fetchUserByEmailIdAndPassword(tempEmail, tempPass);
			    }
			    if(studObj == null) {
			      throw new Exception ("User with "+tempEmail+ " does not exists");
			    }
			    return studObj;
			  }
			  

		  
		
		
				
}

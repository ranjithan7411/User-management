package com.usermanage.UserManage.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.usermanage.UserManage.model.Food;

public interface FoodRepo extends JpaRepository<Food,Integer> {

}

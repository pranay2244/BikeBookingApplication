package com.example.repository;

import javax.transaction.Transactional;

import com.example.models.UserModel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

@Transactional
public interface UserRepository extends JpaRepository<UserModel,String> {

  @Query(value="select * from user where email=?1",nativeQuery=true)
  UserModel findByEmail(String email);

  @Modifying
  @Query(value="delete from user where email=?1",nativeQuery = true)
  void deleteByEmail(String emailId);

  @Query(value = "Select u.password from user u where u.email=?1",nativeQuery = true)
  public String findPassword(String email);

  @Query(value = "Select user_id from user where email=?1",nativeQuery = true)
  public int findIdByEmail(String email);

   @Query(value = "Select * from user where user_id=?1",nativeQuery = true)
  public UserModel findByUserId(int id);
    
}

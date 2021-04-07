package com.example.repository;


import javax.transaction.Transactional;

import com.example.models.AdminModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

@Transactional
public interface AdminRepository extends JpaRepository<AdminModel,Integer>{

  @Query(value="select * from admin where email=?1",nativeQuery=true)
  AdminModel findByEmail(String email);

  @Modifying
  @Query(value="delete from admin where email=?1",nativeQuery = true)
  void deleteByEmail(String emailId);

  @Query(value = "select admin_id from admin where email = ?1", nativeQuery = true)
  String findIdByEmail(String emailId);
  @Query(value="select company_name from admin where admin_id=?1",nativeQuery = true)
  String findCompanyNameByAdminId(String id);

  @Query(value="select sum(total_price) from booking where admin_id=?1",nativeQuery=true)
  int getEarnings(int admin_id);
  
}

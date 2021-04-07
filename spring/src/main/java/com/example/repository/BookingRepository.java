package com.example.repository;

import java.util.List;

import com.example.models.BookingModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface BookingRepository extends JpaRepository<BookingModel,String>{

  @Query(value="select * from booking where user_id=?1",nativeQuery = true)
  List<BookingModel> findAllByUserId(Integer userID);
  @Query(value="select * from booking where company_name=?1",nativeQuery = true)
  List<BookingModel> findAllByCompanyName(String companyName);
  
}

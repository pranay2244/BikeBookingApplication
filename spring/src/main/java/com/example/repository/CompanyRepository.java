package com.example.repository;

import com.example.models.CompanyModel;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import javax.transaction.Transactional;
@Transactional
public interface CompanyRepository extends JpaRepository<CompanyModel,Integer>{
    @Modifying
    @Query(value = "delete from company where admin_id = ?1",nativeQuery = true)
    void deleteByAdminId(int adminId);
}

package com.gameduck.snowmanbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gameduck.snowmanbackend.domain.User;

public interface UserRepository extends JpaRepository<User, Long> {

	User findByUserId(Long userId);
}
